# Developer-Portfolio-Generator
This is a command-line application that dynamically generates a PDF profile from a GitHub username. 

The PDF will be populated with the following:
* Profile image
* User name
* Links to the following:
* User location via Google Maps
* User GitHub profile
* User blog
* User bio
* Number of public repositories
* Number of followers
* Number of GitHub stars
* Number of users following

The user will be prompted for a favorite color, which will be used as the background color for the profile page.

 The application will be invoked with the following command:
 ```
 node index.js
 ```
It prompts the user to enter the github username 
Then asks the user to choose the background color from red, blue, pink or green
And then the application will generate Profile.pdf file in the same code directory. 

