let a = +prompt("Nhập số nguyên dương a:");
let b = +prompt("Nhập số nguyên dương b:");
let oddTotal=0,evenTotal=0;
if(isNaN(a) || isNaN(b) || a<0 || b<0){
    console.log("số không hợp lệ");
} else {
    for(let i=a;i<=b;i++){
        if(i%2===0){
            oddTotal += i;
        } else {
            evenTotal += i;
        }
    }
    console.log(`Tổng các số lẻ từ ${a} -> ${b} là: ${oddTotal}`);
    console.log(`Tổng các số chẵn từ ${a} -> ${b} là: ${evenTotal}`);
}