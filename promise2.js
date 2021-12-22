function doJob(name, person) {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if (person.stamina > 50) {
                resolve({
                    result: `${name} success`,
                    loss: 30
                });
            }else{
                reject(
                    new Error(`${name} failed`)
                );
            }
        }, 1000);
    });
};

const park = {stamina: 100};
doJob('work',park)
// 여기서 v는 함수 doJob을 가리킨다.
.then(v=>{
    console.log(v.result);
    park.stamina -= v.loss;
    return doJob('study',park);
})
.then(v=>{
    console.log(v.result);
    park.stamina -= v.loss;
    return doJob('work',park);
})
.then(v=>{
    console(v.result);
    park.stamina -= v.loss;
    return doJob('study',park);
})
// 여기서 e는 함수 doJob을 가리킨다.
.catch(e=>{
    console.error(e);
});
