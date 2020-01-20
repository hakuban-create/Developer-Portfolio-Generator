
const fs=require("fs");
const axios=require("axios");
const inquirer=require("inquirer");
const page=require("./generateHTML");
const pdfConvert=require("./HTMLtoPDF");


const questions = [
    {
    message: "Enter your GitHub username",
    name: "username"},
    {
    message: "Type your choice of profile background color: green, blue, pink, red",
    name: "backgroundColor"}
];


function init() {
    inquirer
    .prompt(questions)
    .then(function(answers) {

      var queryUrl = `https://api.github.com/users/${answers.username}`;
      var queryUrlForStarCount=`https://api.github.com/users/${answers.username}/starred?per_page=100`;

      axios.get(queryUrlForStarCount).then(function(res){
      var starCount=res.data.length;
      axios.get(queryUrl).then(function(response) {

         var location=response.data.location;
         var locationUrl="#";
        if(location!=null){
            var city=location.substring(0,location.indexOf(","));
            var state=location.substring(location.indexOf(" ")+1);
            locationUrl=`https://www.google.com/maps/place/${city},%20${state}`;
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
            stars: starCount
        }
        let html=page.generateHTML(userInfo,answers.backgroundColor);


        /* Creating HTML file: htmlProfile.html */
        writeToFile("htmlProfile.html", html);


        /* Creating PDF file: Profile.pdf */
         setTimeout(function(){
             console.log("Converting html to pdf...");
            pdfConvert.convertToPDF();
         },1000);


        });
    });   
    });
  
}

    /* HTMl file writer function */
    function writeToFile(fileName, data) {
        fs.writeFile(fileName, data, function(err){
           if(err){
               console.log(err);
           }else{
               console.log(`HTML file has been successfully created.`)
           }
        })
       }   
       

       init();