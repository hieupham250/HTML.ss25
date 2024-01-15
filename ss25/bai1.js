let n = +prompt("Nhập số nguyên dương bất kỳ:");
let sum = 0;

if(isNaN(n) || n<0){
    console.log("Số không hợp lệ.");
} else {
    console.log(`các số từ 1 đến ${n}:` )
    for(let i=1;i<=n;i++){
            sum += i;
            console.log(i);
    }
    if(sum % 2 != 0){
        console.log(`Tổng các số là số lẻ: ${sum}`);
    } else {
        console.log("Tổng các số không là số lẻ");
    }
}