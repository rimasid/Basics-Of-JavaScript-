const a = 1;
const b = 10;
//const is constant and safe 
if (a<b){
    let c = 14;//scope of c is just inside this if body
    console.log('b is greater',c);
}
else{
    console.log('a is greater');
}
