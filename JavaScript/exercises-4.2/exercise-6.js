
let primo = true;
num = 2;
console.log(num);
for (i=2; i<num; i+=1){
    
    if (num%i===0) {
        primo = false
    }
}
console.log(primo);
