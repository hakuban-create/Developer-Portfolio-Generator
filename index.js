
const fs=require("fs");
const axios=require("axios");
const inquirer=require("inquirer");
const page=require("./generateHTML");


const questions = [
    {
    message: "Enter your GitHub username",
    name: "username"},
    {
    message: "What color would you like for your portfolio background? Choices: green, blue, pink, red",
    name: "backgroundColor"}
];


function writeToFile(fileName, data) {
 fs.writeFile(fileName, data, function(err){
    if(err){
        console.log(err);
    }else{
        console.log(`File has been successfully created.`)
    }
 })
}

function init() {
    inquirer
    .prompt(questions)
    .then(function(answers) {
      const queryUrl = `https://api.github.com/users/${answers.username}`;
      axios.get(queryUrl).then(function(response) {
         console.log(response);

         var location=response.data.location;
         var locationUrl="#";
        if(location!=null){
            var city=location.substring(0,location.indexOf(","));
            var state=location.substring(location.indexOf(" ")+1);
            locationUrl=`https://www.google.com/maps/place/${city},%20${state}`;
            console.log("url: "+locationUrl);
        }

         const userInfo={
            avatarUrl: response.data.avatar_url,
            name: response.data.name,
            company: response.data.company,
            location: response.data.location,
            locationUrl: locationUrl,
            githubUrl: response.data.html_url,
            blog: response.data.blog,
            bio: response.data.bio,
            repoCount: response.data.public_repos,
            followers: response.data.followers,
            githubStars: "",
            following: response.data.following,
        }
        let html=page.generateHTML(userInfo,answers.backgroundColor);
        writeToFile("profile.html", html);
        });
  
    
       
    });
  
}

init();


