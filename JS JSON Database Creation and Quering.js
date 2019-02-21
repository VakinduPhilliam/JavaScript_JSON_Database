/*JSON Database creation, Manipulation and Querying */
/*JSON stands for JavaScript Object Notation*/
/*JavaScript Object to store employee Data*/
/*The script below displays all information about employees stored in the database.*/
/*JavaScript JSON Employee Database*/
/*How to store and retrieve Data from a JSON Database*/
/*Written by Vakindu Philliam*/

//Declare the Employee Object Database

var persons =[{
"firstname": "Atiku",
"lastname": "John",
"age" : "30",
"Occupation" : "Software Developer",
"sex": "male"
},
{
"firstname": "Mukasa",
"lastname": "Mark",
"age" : "31",
"Occupation" : "Human Resource",
"sex": "male"
},
{
"firstname": "Nambi",
"lastname": "Lydia",
"age" : "23",
"Occupation" : "Senior Software Developer",
"sex": "female"
},
{
"firstname": "Karungi",
"lastname": "Grace",
"age" : "28",
"Occupation" : "Managing Director",
"sex": "female"
},
{
"firstname": "Mugabe",
"lastname": "Peter",
"age" : "27",
"Occupation" : "UI Designer",
"sex": "male"
},
{
"firstname": "Kigozi",
"lastname": "Caleb",
"age" : "37",
"Occupation" : "Frontend Develoer",
"sex": "male"
},
{
"firstname": "Ewama",
"lastname": "Joseph",
"age" : "31",
"Occupation" : "Chief Accountant",
"sex": "male"
},
{
"firstname": "Okello",
"lastname": "James",
"age" : "45",
"Occupation" : "iOS Engineer",
"sex": "male"
},
{
"firstname": "Najjuma",
"lastname": "Anne",
"age" : "32",
"Occupation" : "Android Engineer",
"sex": "female"
}];

//Iterate through object data

$.each(persons,function(){

console.log("First Name: " +this.firstname+ " "+ this.lastname+"</p>");
console.log("Gender: "+this.sex+"</p>");
console.log("Age: " +this.age+"</p>");
console.log("Job: " +this.Occupation+"</p>");

});
