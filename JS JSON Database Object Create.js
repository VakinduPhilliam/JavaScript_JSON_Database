		
/*JavaScript Object to store employee Data*/
/*JSON Database creation and manipulation*/
/*The script below creates a new Personality in the database named 'Adomati Martin'*/
/*The script then dislays all the results stored in the database, including the new personality*/
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
"firstname": "Luzinda",
"lastname": "Sam",
"age" : "49",
"Occupation" : "iOS Engineer",
"sex": "male"
},
{
"firstname": "Alioni",
"lastname": "Samson",
"age" : "50",
"Occupation" : "Accountant",
"sex": "male"
},
{
"firstname": "Nakku",
"lastname": "Annet",
"age" : "55",
"Occupation" : "iOS Engineer",
"sex": "female"
},
{
"firstname": "Ruyonga",
"lastname": "Immaculate",
"age" : "47",
"Occupation" : "iOS Engineer",
"sex": "female"
},
{
"firstname": "Najjuma",
"lastname": "Anne",
"age" : "32",
"Occupation" : "Android Engineer",
"sex": "female"
}];

//Create new Object property

var newPerson = Object.create(persons);

newPerson.firstname = "Adomati";
newPerson.lastname = "Martin";
newPerson.sex = "Male";
newPerson.age = "24";
newPerson.Occupation = "Android Engineer";

//Iterate through object data, including new Object.

$.each(persons,function(){

console.log("Full Name: " +this.firstname+ " "+ this.lastname+"</p>");
console.log("Gender: "+this.sex+"</p>");
console.log("Age: " +this.age+"</p>");
console.log("Job: " +this.Occupation+"</p>");

});
		
		
		