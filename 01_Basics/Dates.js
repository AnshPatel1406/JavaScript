/* JavaScript Date objects represent a single moment in time in a platform-independent format. 
Date objects encapsulate an integral number that represents milliseconds
 since the midnight at the beginning of January 1, 1970, UTC (the epoch).*/

 let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toJSON());
console.log(myDate.toISOString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toTimeString());
 
console.log(typeof myDate)


let myCreatedDate = new Date(2026,0,14) // in JS 0 means January
console.log(myCreatedDate.toDateString());

let Date_with_Time = new Date(2026,0,14,11,5)
console.log(Date_with_Time.toLocaleString());

let myCreatedDateString = new Date("2026-01-14") // When we Give in String Format , 01 means January 
// in String "DD_MM_YY" is also valid
console.log(myCreatedDateString.toLocaleString());

// ************************************************************************************

let myTimeStamp = Date.now()
console.log(myTimeStamp); // gives Value in MilliSeconds Since Epoch // see MDN JS date site

console.log(myCreatedDate.getTime()); // getTime Method used to Get Value in Milliseconds since epoch

// To Compare we need to use this in Hotel bookings and all


// To get in Seconds console.log(Math.floor(Date.now()/1000))

let newDate = new Date()

console.log(newDate.getMonth()); // 0 means January and 11 Means December // Just do getMonth() +1 to avoid confusions
console.log(newDate.getDay()) // 1 means monday and 7 means sunday

console.log(`The day is  ${newDate.getDay()} and the month is ${newDate.getMonth()}`)

console.log(newDate.toLocaleString()) // Display Day with Time
// Object Inside toLocaleString Function

console.log(newDate.toLocaleString('default',{hour: "2-digit"}))
console.log(newDate.toLocaleString('default',{weekday: "long"}));



 