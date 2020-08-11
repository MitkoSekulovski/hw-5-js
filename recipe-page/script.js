let arr = [];
let nameOfRecipe = prompt('What is the name of the recipe?');
let recipe = document.getElementById('myDiv');

recipe.innerHTML += `<h1 id="name">Name of the recipe: ${nameOfRecipe}</h1>`;

let numOfIngredients = parseInt(prompt('How many ingredients does the recipe need?'));

let temp=1;

while(temp){
    if(isNaN(numOfIngredients)){
    numOfIngredients = parseInt(prompt('Invalid Input! How many ingredients does the recipe need?'));
    }else{
        break;
    }
}
recipe.innerHTML += `<h2 id="num">The number of ingeridents: ${numOfIngredients}</p>`;

let arrIngredients = [];
let ing = '';
for(let i=0; i<numOfIngredients; i++){
    ing = prompt(`Enter the name of the ${i+1} ingredient: `);
    arrIngredients[i]=ing;
    recipe.innerHTML += `<li id="ingredients">${i+1}. ${ing}</li>`;
}
console.log(arrIngredients);

let table = document.getElementById('myTable');
// table = document.createElement('table');

// for(let i=0; i<numOfIngredients+2; i++){
//     let tr = document.createElement('tr');
//     let td1 = document.createElement('td');
//     let td2 = document.createElement('td');
//     if(i==0){
//         let text1 = document.createTextNode('Name: ');
//         let text2 = document.createTextNode(recipe);
        
//         td1.appendChild(text1);
//         td2.appendChild(text2);
//     }
//     else if(i==1){
//         let text1 = document.createTextNode('No. Ingredients: ');
//         let text2 = document.createTextNode(numOfIngredients);
        
//         td1.appendChild(text1);
//         td2.appendChild(text2);
//     }
//     else{
//         let text1 = document.createTextNode(`${i+1}. `);
//         let text2 = document.createTextNode(`${arrIngredients[i]}`);
    
//         td1.appendChild(text1);
//         td2.appendChild(text2);
//     }
//     tr.appendChild(td1);
//     tr.appendChild(td2);
// }
// document.body.appendChild(table);
let counter = 1;
for(let i=0,j=0; i<numOfIngredients+2; i++){
    if(i==0){
    table.innerHTML +=`<tr>
        <td class="right"; id="name2">${'Name: '}</td>
        <td class="left"; id= "nameRecipe">${nameOfRecipe}</td>
    </tr>`
    }else if(i==1){
        table.innerHTML +=`<tr>
        <td class="right";>${'No. Ingredients: '}</td>
        <td class="left";>${numOfIngredients}</td>
    </tr>`
    }else{
        table.innerHTML +=`<tr>
        <td class="right";>${counter}. </td>
        <td class="left";>${arrIngredients[j]}</td>
    </tr>`
    counter++;
    j++;
    }
}