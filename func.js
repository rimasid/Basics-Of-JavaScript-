function square (x){
    return x*x;
}

console.log(square(2));

const a = [1,2,3,4];
const sqaur_a = a.map((e)=>square(e)); //gives squares of each elementin always
const odd_a = a.filter((e)=>e%2);//gives odd nos.