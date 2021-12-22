// 정방향 무한 스크롤링 => 추가적인 물품 리스트 보여줄 때
function throttle (fn, delay) {
    let last = 0;
    return (...args) => {
        const now = new Date().getTime();
        if (now - last < delay) {
            return;
        }
        last = now;
        return fn(...args);
    };
};
const a =  throttle((...args) => {console.log(...args)}, 2000)
document.addEventListener("click",function () {
    a('1')
});

let count = 2
window.addEventListener('click',function () {
    
})
if ((window.innerHeight + window.scrollY) >= document.documentElement.offsetHeight) {
    const content_array = document.getElementById('content_array')
    if (content_array) {
        const addElement = document.createElement('div')
        addElement.setAttribute('class','div_black')
        count++;
        addElement.innerHTML = `
        No.`+count+`<br>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Ratione odit mollitia corrupti quam quia, 
        ex culpa tenetur autem vel doloribus quidem rem eum vitae 
        debitis impedit minus sed unde laudantium.`
        content_array.appendChild(addElement)
    }
}


// 역방향 무한 스크롤링 => 과거의 채팅 말풍선을 보여줄 때
// let count = 2
// const start_scroll = function(){
//     document.documentElement.scrollTop = document.documentElement.scrollHeight
// }
// window.addEventListener('scroll',function() {
//     if (document.documentElement.scrollTop == 0) {
//         const content_array = document.getElementById('content_array')
//         if (content_array) {
//             const temp_scrollHeight = document.documentElement.scrollHeight
//             const addElement = document.createElement('div')
//             addElement.setAttribute('class','div_black')
//             count++;
//             addElement.innerHTML = `
//                 No.`+count+`<br>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. 
//                 Ratione odit mollitia corrupti quam quia, 
//                 ex culpa tenetur autem vel doloribus quidem rem eum vitae 
//                 debitis impedit minus sed unde laudantium.`
//             content_array.insertBefore(addElement,content_array.firstChild)
//             document.documentElement.scrollTop = document.documentElement.scrollHeight - temp_scrollHeight  
//         }
//     }
// })    


// window.innerHeight은 뷰포트의 안쪽 높이를 의미한다.
// window.scrollY 브라우저의 스크롤의 위치를 위미한다.
// document.body.offsetHeight는 body의 높이를 의미한다.

// document.body~는 html에 선언된 DOCTYPE의 DTD에 의해서 자바스크립트가 재기능을 못하는 이슈로 인해 
// body 대신 documentElement로 바꿔서 사용하는 것을 권장한다고 한다.