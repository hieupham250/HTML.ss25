let n = +prompt("Nhập số nguyên dương:");
let count=0,temp;
if(isNaN(n) || n<0){
    console.log("Số không hợp lệ");
} else {
    let check = n;
    while (check>0){
        temp = check % 10;
        if(temp%2===0){
            count++;
        }
        check = Math.floor(check / 10); // Math.floor để làm tròn số nguyên gần nhất
    }
    console.log(`Trong ${n} có ${count} số chẵn`);
}