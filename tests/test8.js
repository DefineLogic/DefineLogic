function sum(x, y, ...aa) {
    var total = x + y;
    if (aa.length > 0) {
        for (let i = 0; i < aa.length; i++) {
            total += aa[i];
        }
    }
    console.log(total);
}
sum(1, 2, 3);