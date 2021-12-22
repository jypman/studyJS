function doJob(name, person) {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if (person.stamina > 50) {
                person.stamina -= 30;
                resolve({
                    result: `${name} success`
                });
            } else {
                reject(new Error(`${name} failed`));
            }
        },1000);
    });    
};

const park = {stamina: 100};

const execute = async function() {
    // try: 에러가 났을 때 원상복구를 시도할 코드. 에러 발생시 코드의 실행 흐름이 catch 블록으로 옮겨간다.
    try{
        let v = await doJob('work', park);
        console.log(v.result);
        v = await doJob('study', park);
        console.log(v.result);
        v = await doJob('work', park);
        console.log(v.result);
        v = await doJob('study', park);
        console.log(v.result);
      // catch: 에러에 대한 정보를 담고 있는 객체(e)를 사용할 수 있다.
    } catch (e){
        console.log(e);
    }
}

execute();