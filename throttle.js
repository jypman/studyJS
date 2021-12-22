const throttle = (fn, delay) => {
    let last = 0;
    return () => {
        const now = new Date().getTime();
        if (now - last < delay) {
            return;
        }
        last = now;
        return fn();
    };
};
document.addEventListener(
    "click",
    throttle((e) => {
        console.log("clicked!");
    }, 2000)
);