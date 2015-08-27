/*
This is empty on purpose! Your code to build the resume will go here.
 */

// page variables
var header = "#header";
var main = "#main";
var footerContacts = "#footerContacts";

// bio section
var bio = {
    "name": "Aaron Schmohe",
    "role": "Web Developer",
    "contacts": {
        "mobile": "720.934.8439",
        "email": "aaron.schmohe@gmail.com",
        "github": "schmo-dog",
        "twitter": "@AaronSchmohe",
        "location": "Denver"
    },
    "WelcomeMessage": "lorem ipsum emet etc etc.",
    skills: ["CSS", "HTML5", "Adobe CC", "JS", "Jquery"],
    "bioPic": "images/aaron.jpg"
};

// work section
var work = {};
work.position = "UI Web Developer";
work.employer = "Healthgrades";
work.years = 1;
work.city = "Denver";

var formattedPostion = HTMLworkTitle.replace("%data%", work["position"]);

$(main).append(formattedPostion);


// education section
var education = {
    "schools": [{
        "name": "University of Colorado",
        "city": "Boulder",
        "major": ["Information Systems", "Management"],
        "dates": "2000"
    }, {
        "name": "RMCAD",
        "city": "Denver",
        "major": ["Web Design"],
        "dates": "2000"
    }],
    "onlineCourses" : {
            "title": "Javascript",
            "school": "Udacity",
            "dates": "2014",
            "url": "http:www.udacity.com"
        }
}

var formatEducationName = HTMLschoolName.replace("%data%", education.name);

$(main).append(formatEducationName);

// contact section
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGit = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

$(header).prepend(formattedRole);
$(header).prepend(formattedName);
$(footerContacts).prepend(formattedMobile);
$(footerContacts).prepend(formattedEmail);
$(footerContacts).prepend(formattedGit);
$(footerContacts).prepend(formattedTwitter);
$(footerContacts).prepend(formattedLocation);
