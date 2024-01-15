let n = +prompt("Nhập số nguyên dương:");
if(isNaN(n) || n<0){
    console.log("Số không hợp lệ");
} else {
    let a = 0, b = 1;
    if(n===0){
        console.log(`Số Fibonacci thứ ${n} là: ${a}`);
    } else if(n===1){
        console.log(`Số Fibonacci thứ ${n} là: ${b}`);
    } else {
        for(let i=2;i<=n;i++){
            let temp = a + b;
            a = b;
            b = temp;
        }
        console.log(`Số Fibonacci thứ ${n} là: ${b}`);
    }
}