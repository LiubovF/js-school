/*This example demonstrates usage of .map() for "yearsOfLife" and dealing without .map() for the same 
purpose in "shortNames" */

let poets = [
	{
	  id: 1,
	  firstName: "Александр",
	  patronymic: "Сергеевич",
	  lastName: "Пушкин",
	  yearOfBirth: "1799",
	  yearOfDeath: "1837"
	},
	{
	  id: 2,
	  firstName: "Михаил",
	  patronymic: "Юрьевич",
	  lastName: "Лермонтов",
	  yearOfBirth: "1814",
	  yearOfDeath: "1841"
	},
	{
	  id: 3,
	  firstName: "Дмитрий",
	  patronymic: "Львович",
	  lastName: "Быков",
	  yearOfBirth: "1967",
	  yearOfDeath: ""
	}
];

let yearsOfLife = poets.map(poet => poet.yearOfDeath? poet.yearOfBirth + " - " + poet.yearOfDeath : poet.yearOfBirth + " -  н.в.");

let shortNames = [];

poets.forEach( function (poet) {
	let shortName = poet.lastName + " " + poet.firstName[0] + "." + poet.patronymic[0] + ".";
	shortNames.push(shortName);	
});