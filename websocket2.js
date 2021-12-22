// 채팅 테스트
let stompClient = null;
let subscription = null;

function connect() {
    let socket = new SockJS('/gs-guide-websocket');
    stompClient = Stomp.over(socket);
    stompClient.connect({"token":getCookie("accessToken")}, function (frame) {
        console.log('Connected: ' + frame);
        subscription = stompClient.subscribe('/topic/greetings', function (greeting) {
            console.log(greeting)
            chat(JSON.parse(greeting.body).content);
        })
    }, function (error) {
        // 서버에서 어떤 예외 또는 에러가 발생했는 지 에러메시지 확인 할 수 있다.
        console.log("[Connected Error] : " + error);
        console.log(error)
    });
}

function unsubscribe() {
    if (stompClient !== null) {
        subscription.unsubscribe();
    }
    console.log("Unsubscribe");
}

function disconnect() {
    if (stompClient !== null) {
        stompClient.disconnect();
    }
    console.log("Disconnected");
}

function sendName() {
    stompClient.send("/app/hello", {}, JSON.stringify({'name': $("#chat_input").val()}));
}

$(function () {
    $("form").on('submit', function (e) {
        e.preventDefault();
    });
    $(document).ready(function() { connect(); });
    $("#chat_room_out").click(function() { unsubscribe() });
    $( "#close_btn" ).click(function() { disconnect(); });
    $( "#chat_submit_btn" ).click(function() { sendName(); });
})

// $(function () {
//     window.addEventListener('beforeunload',function (event) {
//         return sendName();
//     })
// })

// 클라이언트에서 JS를 통해서 쿠키에 접근 (cf - httpOnly 옵션이 있는 경우 JS로 쿠키에 접근할 수 없다)
// 서버에서 JWT 토큰 발행 시 쿠키 옵션에서 httpOnly 옵션 false 처리
function getCookie(cookie_name) {
    let x, y;
    let val = document.cookie.split(';');

    for (let i = 0; i < val.length; i++) {
        x = val[i].substr(0, val[i].indexOf('='));
        y = val[i].substr(val[i].indexOf('=') + 1);
        x = x.replace(/^\s+|\s+$/g, ''); // 앞과 뒤의 공백 제거하기
        if (x == cookie_name) {
            return unescape(y); // unescape로 디코딩 후 값 리턴
        }
    }
}