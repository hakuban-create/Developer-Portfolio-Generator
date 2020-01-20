const colors = {
    green: {
      wrapperBackground: "#E6E1C3",
      headerBackground: "#C1C72C",
      headerColor: "black",
      photoBorderColor: "black"
    },
    blue: {
      wrapperBackground: "#5F64D3",
      headerBackground: "#26175A",
      headerColor: "white",
      photoBorderColor: "#73448C"
    },
    pink: {
      wrapperBackground: "#879CDF",
      headerBackground: "#FF8374",
      headerColor: "white",
      photoBorderColor: "#FEE24C"
    },
    red: {
      wrapperBackground: "#DE9967",
      headerBackground: "#870603",
      headerColor: "white",
      photoBorderColor: "white"
    }
  };
  
  function generateHTML(userInfo,data) {
      return `
      <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Developer Portfolio</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
      <link href="https://fonts.googleapis.com/css?family=Abhaya+Libre|Alike|Limelight|Spicy+Rice&display=swap" rel="stylesheet">
      <style>
          body{
              font-family: 'Alike', serif;
              font-weight: 100px;
          }
          #row1{
              background-color: ${colors[data].wrapperBackground};
              height: 500px;
              padding-top: 50px
  
          }
  
          #row3{
              background-color: ${colors[data].wrapperBackground};
              height: 400px;
              padding-top: 50px
  
          }
  
          #row2{
          background-color: #eae8e8;
          height: 650px;
          padding-top: 150px;
          text-align: center;
          }
          #hobby{
              margin: 30px 0px;
              text-shadow: 2px 2px white;
          font-weight: bold;
          }
  
          #row1_inner{
              width: 60%;
              height: 470px;
              position: absolute;
              background-color: ${colors[data].headerBackground};
              color: ${colors[data].headerColor};
              margin-top: 100px;
              margin-left: 5%;
              text-align: center;
          }
          img{
              margin-top: -50px;
              height: 250px;
              border: 7px solid ${colors[data].photoBorderColor};
              margin-bottom: 20px;
          }
  
          #row1_inner > *{
              margin-bottom: 20px;
          }
  
          .col-md-5{
              padding-top: 20px;
              background-color: ${colors[data].headerBackground};
              color: ${colors[data].headerColor};
              margin: 25px 20px;
              height: 120px;
              font-size: 30px;
          }
  
          #tab_container{
              margin-left: 11%;
          }

          a{
            margin-right: 30px;
        }
      </style>
  </head>
  <body>
      <div class="container">
          <div id="row1" class="rounded">
              <div id="row1_inner" class="rounded shadow-lg">
                  <img class="rounded-circle shadow-lg" id="profile_pic" src="${userInfo.avatarUrl}">
                  <h1>Hi!</h1>
                  <h1>My name is ${userInfo.name}!</h1>
                  <h4>Currently @ ${userInfo.company}</h4>
                  <i class="fas fa-map-marker-alt"></i>
                  <a id="location" href="${userInfo.locationUrl}">${userInfo.location}</a>
                  <i class="fab fa-github-square"></i>
                  <a id="githubUrl" href="${userInfo.githubUrl}">Github</a> 
                  <i class="fas fa-blog"></i>
                  <a id="blog" href="${userInfo.blog}">Blog</a>
              </div>
          </div>
  
          <div id="row2">
              <h2 id="hobby">${userInfo.bio}</h2>
              <div id="tab_container">
               <div class="row">
                      <div class="col-md-5 rounded shadow-md">
                      <div>Public Repositories</div>
                      <div>${userInfo.repoCount}</div>
                      </div>
                      <div class="col-md-5 rounded shadow-md">
                      <div>Followers</div>
                      <div>${userInfo.followers}</div>
                      </div>
               </div>  
               <div class="row">
                      <div class="col-md-5 rounded shadow-md">
                      <div>Github Stars</div>
                      <div>${userInfo.stars}</div>
                      </div>
                      <div class="col-md-5 rounded shadow-md">
                      <div>Following</div>
                      <div>${userInfo.following}</div>
                      </div>
               </div>  
              </div>
          </div>
  
            <div id="row3">
              
           </div>
  
  
      </div>
      
     <script src="https://kit.fontawesome.com/8d8f988f30.js" crossorigin="anonymous"></script>
  </body>
  </html>
      `;
  }
  
  module.exports.generateHTML=generateHTML;