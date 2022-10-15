const time = () => {
    let t0 = performance.now();
    // setTimeout(() => {
    //     console.log("World!");
    // }, 2500);
    let t1 = performance.now();
    console.log(t0 - t1);
};

time();
