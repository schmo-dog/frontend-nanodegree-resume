/*
This is empty on purpose! Your code to build the resume will go here.
 */

	var name = "Aaron Schmohe";
	var role = "Web Developer";

	var formattedName = HTMLheaderName.replace("%data%", name);


	var formattedRole = HTMLheaderRole.replace("%data%", role);

	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
  
 
 var bio = {
 	"name" : "Aaron Schmohe",
 	"role" : "Web Developer",
 	"contacts" : {
 		"phone" : "720.934.8439",
 		"eamil" : "aaron.schmohe@gmail.com"
 	},
	"WelcomeMessage" : "lorem ipsum emet etc etc.",
 	skills : ["CSS", "HTML5", "Adobe CC", "JS", "Jquery"],
 	"bioPic" : "images/aaron.jpg"
 };

 	var formattedMobile = HTMLmobile .replace("%data%", bio.role);

//$("#main").append(bio.name);

$("#header").prepend(formattedMobile);