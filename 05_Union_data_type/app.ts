let value : number | string;
value = 20;
value = "Hello";

function display(id:number | string) {
    console.log(`your id is ${id}`);
}

display(202);
display("A201");

let mixedArray : (string | number) [] = [1, 2, 3 ,4, "a", "b"];
console.log(mixedArray)
