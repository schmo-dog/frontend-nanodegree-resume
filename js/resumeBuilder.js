// page variables
var header = "#header";
var main = "#main";
var footerContacts = "#footerContacts";
var contacts = ".contacts";

// bio
var bio = {
    "name": 'Aaron Schmohe',
    "role": 'Web Developer',
    "WelcomeMessage": 'Welcome emet etc etc Bacon ipsum dolor amet rump andouille strip steak pork loin',
    "contacts": {
        "mobile": '720.934.8439',
        "email": 'aaron.schmohe@gmail.com',
        "github": 'schmo-dog',
        "twitter": '@AaronSchmohe',
        "location": 'Denver'
    },
    "skills": ['CSS', 'HTML5', 'Adobe CC', 'Web Design', 'Poker'],
    "bioPic": "images/me.jpg"
};
// display bio
bio.display = function() {
    var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
    $(header).prepend(formattedRole);

    var formattedHeaderName = HTMLheaderName.replace('%data%', bio.name);
    $(header).prepend(formattedHeaderName);

    var formattedBioPic = HTMLbioPic.replace('%data%', bio.bioPic);
    $(header).append(formattedBioPic);

    var formattedWelcome = HTMLwelcomeMsg.replace('%data%', bio.WelcomeMessage);
    $(header).append(formattedWelcome);

    if (bio.skills.length > 0) {
        $(header).append(HTMLskillsStart);

        for (skill in bio.skills) {
            var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
            $("#skills").append(formattedSkills);
        }
    }

    var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
    $(contacts).append(formattedMobile);

    var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
    $(contacts).append(formattedEmail);

    var formattedGit = HTMLgithub.replace('%data%', bio.contacts.github);
    $(contacts).append(formattedGit);

    var formattedTwitter = HTMLtwitter.replace('%data%', bio.contacts.twitter);
    $(contacts).append(formattedTwitter);

    var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);
    $(contacts).append(formattedLocation);

};
bio.display();

// work
var work = {
    "jobs": [{
            "employer": 'Healthgrades',
            "title": 'UI Developer',
            "location": 'Denver',
            "dates": '2014 - 2014',
            "description": 'Bacon ipsum dolor amet rump andouille strip steak pork loin'
        },

        {
            "employer": 'Cahoots',
            "title": 'Web Developer',
            "location": 'Greenwood Village',
            "dates": '2009 - 2014',
            "description": 'Develop Wordpress Themes. Bacon ipsum dolor amet rump'
        }
    ]
};
// display work
work.display = function() {
    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer);

        var formattedWorktitle = HTMLworkTitle.replace('%data%', work.jobs[job].title);

        var formattedEmployerTitle = formattedEmployer + formattedWorktitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formatLocation = HTMLworkLocation.replace('%data%', work.jobs[job].location);
        $(".work-entry:last").append(formatLocation);

        var formatDates = HTMLworkDates.replace('%data%', work.jobs[job].dates);
        $(".work-entry:last").append(formatDates);

        var formatDescription = HTMLworkDescription.replace('%data%', work.jobs[job].description);
        $(".work-entry:last").append(formatDescription);
    }
};
work.display();

// education
var education = {
    "schools": [{
        "name": 'University of Colorado',
        "location": 'Boulder',
        "major": ['Information Systems', 'Management'],
        "degree": 'Bachelor of Science',
        "dates": '2000',
        "url": "http://www.colorado.edu"
    }, {
        "name": 'RMCAD',
        "location": 'Denver',
        "major": ['Web Design'],
        "degree": 'Certificate',
        "dates": '2009',
        "url": "http://www.rmcad.edu"
    }],
    "onlineCourses": [{
        "title": 'Javascript',
        "school": 'Udacity',
        "dates": '2015',
        "url": "http:www.udacity.com"
    }, {
        "title": 'HTML/CSS',
        "school": 'Udacity',
        "dates": '2015',
        "url": "http:www.udacity.com"
    }]
};
// display education
education.display = function() {
    $("#education").append(HTMLschoolStart);
    for (school in education.schools) {
        var formattedSchoolName = HTMLschoolName.replace('%data%', education.schools[school].name);

        var formattedDegree = HTMLschoolDegree.replace('%data%', education.schools[school].degree);
        $(".education-entry").append(formattedSchoolName + formattedDegree);

        var formattedSchoolLocation = HTMLschoolLocation.replace('%data%', education.schools[school].location);
        $(".education-entry:last").append(formattedSchoolLocation);

        var formattedDates = HTMLschoolDates.replace('%data%', education.schools[school].dates);
        $(".education-entry:last").append(formattedDates);

        var formattedMajor = HTMLschoolMajor.replace('%data%', education.schools[school].major);
        $(".education-entry:last").append(formattedMajor);
    }

    $(".education-entry:last").append(HTMLonlineClasses);

    for (onlineCourse in education.onlineCourses) {
        var formattedTitle = HTMLonlineTitle.replace('%data%', education.onlineCourses[onlineCourse].title);

        var formattedOnlineSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses[onlineCourse].school);
        $(".education-entry:last").append(formattedTitle + formattedOnlineSchool);

        var formattedDates = HTMLonlineDates.replace('%data%', education.onlineCourses[onlineCourse].dates);
        $(".education-entry:last").append(formattedDates);

        var formattedURL = HTMLonlineURL.replace('%data%', education.onlineCourses[onlineCourse].url);
        $(".education-entry:last").append(formattedURL);
    }

};
education.display();

// projects
var projects = {
    "projects": [{
        "title": 'About Me',
        "dates": '2015-2015',
        "description": 'Intro project for Udacity degree. Bacon ipsum dolorb amet rump',
        "images": ["images/sample.gif"]
    }, {
        "title": 'Online Resume',
        "dates": '2015-2015',
        "description": 'First project for Udacity degree. Bacon ipsum dolor',
        "images": ["images/sample.gif", "images/sample.gif"]
    }]
};
// display projects
projects.display = function() {
    for (project in projects.projects) {
        $("#projects").append(HTMLprojectStart);

        var formattedProjectTitle = HTMLprojectTitle.replace('%data%', projects.projects[project].title);
        $(".project-entry:last").append(formattedProjectTitle);

        var formattedprojectDates = HTMLprojectDates.replace('%data%', projects.projects[project].dates);
        $(".project-entry:last").append(formattedprojectDates);

        var formattedProjectDescription = HTMLprojectDescription.replace('%data%', projects.projects[project].description);
        $(".project-entry:last").append(formattedProjectDescription);

        if (projects.projects[project].images.length > 0) {
            for (image in projects.projects[project].images) {
                var formattedProjectImage = HTMLprojectImage.replace('%data%', projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedProjectImage);
            }
        }
    }
};
projects.display();

// Code not used to internationalize first and last name
// function inName(name) {
//     name = name.trim().split(" ");
//     console.log(name);
//     name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
//     console.log(name[0]);

//     name[1] = name[1].toUpperCase();
//     console.log(name[1]);

//     return name[0] + " " + name[1];

// };

//inName("AarOn Schmohe");
//$("#main").append(internationalizeButton);

// Attach Google map to places that I have lived and worked
$("#mapDiv").append(googleMap);
