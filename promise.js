function promiseForHomeWork(mustDo) {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log('Doing homeWork');
            if (mustDo) {
                resolve({
                    result:'homeWork-result'
            });
            } else{
                reject(new Error('Too lazy!'));
            }; 
        },3000);
    });    
};

const promiseA = promiseForHomeWork(true);
console.log('promiseA created');

const promiseB = promiseForHomeWork();
console.log('promiseB created');

promiseA.then(v=>console.log(v));

promiseB
    .then(v=>console.log(v))
    .catch(e=>console.log(e));