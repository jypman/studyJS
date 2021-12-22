const arrowFunc = () => {
    console.log(this)
}

const nowArrowFunc = arrowFunc.bind({b : 2})
nowArrowFunc()

const a = function () {
    console.log(this)
}

a()