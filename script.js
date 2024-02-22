//Objective

//For a given array with prices of 5 items -> [250, 645, 300, 900, 50].
//All items have an offer of 10% OFF on them. \n Change the array to store final price after applying offer.


//With for of
// const items = [250, 645, 300, 900, 50];
// let i = 0;
// for(let val of items){
//     console.log(`Value of index ${i}= ${val}`);
//     let offer = val/10;
//     items[i]= items[i]- offer;
//     console.log(`Value after offer ${items[i]}`);
//     i++;
// }

//With for loop

const items = [250, 645, 300, 900, 50];

for(let i=0; i<items.length;i++){
    let offer = items[i]/10;
    items[i] = items[i]-offer;
    console.log(`value after offer ${items[i]}`); 
}
