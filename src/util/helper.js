const nameofbatch = "Lithium"
let today = new Date();

function printDate(){
    console.log("date is " +today.getDate() + " and month is " + today.getMonth() + " and my batch is lithium and today week 3 day 5 anf our topic is NODEJS module sysstem");

}

module.exports.date = printDate;