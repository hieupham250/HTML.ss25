let n = +prompt("Nhập số nguyên dương:");
let S=0, currentTotal=0;

if(isNaN(n) || n<0){
    console.log("Số không hợp lệ");
} else {
    for(let i=1;i<=n;i++){
        currentTotal = currentTotal*10+i;
        S += currentTotal;
    }
    console.log(`Giá trị biểu thức: ${S}`);
}