function debounce(func, delay) {
    let in_debounce;
    return (...args) => {
        if(in_debounce) clearTimeout(in_debounce)
        in_debounce = setTimeout(() => func(...args), delay)
    }
}

// const run = debounce((...args) => console.log(...args), 300)
//
// run(1)

// const a = debounce( (...args) => {
//     request_server(...args)
//         .then(data => {
//             b(data)
//             document.getElementById('loading_spinner').classList.add('hidden')
//         })
//         .catch(error => {
//             console.log(error)
//             document.getElementById('loading_spinner').classList.add('hidden')
//         })
// }, 300)
//
// document.getElementById('loading_spinner').classList.remove('hidden')
// a('','','','')