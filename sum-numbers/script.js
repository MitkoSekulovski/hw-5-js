let arr = [1,2,3,4,5,6,0,-10];
let sum = 0;
let numLi = document.getElementById('myDiv');


for(let i=0; i<arr.length; i++){
    sum+=arr[i];
    numLi.innerHTML += `<li>${arr[i]}</li>`;
}

let sumP = document.getElementById('myDiv');
sumP.innerHTML += `The sum of the numbers is: `;

for(let i=0; i<arr.length; i++){
    if(arr[i]<0){
        sumP.innerHTML+=`(${arr[i]})`;
    }else{
        sumP.innerHTML+=`${arr[i]}`;
    }
    if(i==arr.length-1){
        sumP.innerHTML+=`=`;
        sumP.innerHTML+=`${sum}`;     
    }else{
        sumP.innerHTML+=`+`;
    }
}