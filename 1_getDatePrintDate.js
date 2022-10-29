var today = new Date();
var day = today.getDay();
console.log(day);
var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
console.log(`Today day is ${week[day]}`);

var sec = today.getSeconds();
var min = today.getMinutes();
var hr = today.getHours();


console.log(`Current time is ${hr > 12 ? hr - 12 : hr} ${(hr > 12 ? "PM" : "AM")} : ${min} : ${sec}`);
