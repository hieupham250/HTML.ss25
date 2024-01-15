function UCLNN(x, y){
    while(x*y != 0){
        if(x > y){
            x %= y;
        } else {
            y %= x;
        }
    }
    return x+y;
}

function BCNN(x, y){
    let accumulation = x*y;
    let ucln = UCLNN(x, y);
    return accumulation/ucln;
}

let a = +prompt("Nhập a:");
let b = +prompt("Nhập b:");
let c = +prompt("Nhập c:");
let d = +prompt("Nhập d:");
if(isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d) || (a,b,c)<0){
    console.log("Số không hợp lệ");
} else {
    let result = BCNN(a, b);
    result = BCNN(result, c);
    result = BCNN(result, d);
    console.log(`BCNN của ${a}, ${b}, ${c}, ${d} là: ${result}`);
}