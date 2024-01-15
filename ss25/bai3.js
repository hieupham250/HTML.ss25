let n = +prompt("Nhập số nguyên dương:");
let tong=0,m;

if(isNaN(n) || n<0){
    console.log("Số không hợp lệ");
} else {
    for(m=1;tong+m<=n;m++){
        tong += m;
    }
    console.log(`m: ${m-1}`); // sử dụng m-1 để in ra giá trị đúng của m
}