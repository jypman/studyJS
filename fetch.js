export async function request_server(url, method, headers, body) {
    const req_promise = await fetch(url, {
        method,
        headers,
        body
    })
    const req_json = await req_promise.json();
    if (req_promise.status === 200){
        return req_json;
    }else{
        console.log('요청 실패')
        return Promise.reject(new Error(req_promise.status))
    }
}