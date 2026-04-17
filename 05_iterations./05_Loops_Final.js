//  const coding = ["JS","Python","Ruby","CPP","Java"]


// const values = coding.forEach((item) => { console.log(item);
//     return item
//  })

// console.log(values); // undefined // forEach Dosent Return any Value like This




const myNums = [1,2,3,4,5,6,7,8,9,10]

// // const bigNums = myNums.filter( (num) => num>4 )
// const bigNums = myNums.filter ( (num) => { return num>4 } )
// console.log(bigNums);


// using forEach 

const bigNums = []

myNums.forEach((num) => {if (num>4) { bigNums.push(num)}}  )

console.log(bigNums);



// Real World Usage

// const filteredBooks = books.filter ( (bk) => bk.genere==="History"  )
// console.log(filteredBooks);

// This will Return all the Objects that will contain books with genere History 



const myNum = [1,2,3,4,5,6,7,8,9,10]

// const newNumss = myNum.map( (num) => {return num+10} ) // if {} is given return is compilsory / if no {} then we do not need return 

// console.log(newNumss);



// CHAINING 
const nums = myNum.map((num) => num*10).map((nim) => nim+7).filter((num)=> num >100)

console.log(nums);


// MAPS are for Operations and Filter is for Filtering 

 
