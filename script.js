const userInput = document.getElementById("number");
const convert = document.getElementById("convert-btn");
const output = document.getElementById("output");

const conversion = () => {

let roman = 
{
M: 1000,
CM: 900,
D: 500,
CD: 400,
C: 100,
XC: 90,
L: 50,
XL: 40,
X:10,
IX: 9,
V: 5,
IV: 4,
I:1
};

let str="";

for(let i of Object.keys(roman)){
        let q = Math.floor(userInput.value/roman[i]);
        userInput.value -= q * roman[i];
        str += i.repeat(q);
}
return output.textContent = str;
} 


const validInput = () =>{

    const strInput = userInput.value;

    if(!strInput){
        return output.textContent = "Please enter a valid number";
    } else if(strInput < "1"){
        return output.textContent = "Please enter a number greater than or equal to 1";
    } else if(strInput >= 4000){
        return output.textContent = "Please enter a number less than or equal to 3999";
    } 

    conversion();
}


convert.addEventListener("click", validInput);