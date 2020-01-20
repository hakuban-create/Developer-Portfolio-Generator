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
              height: 340px;
              padding-top: 50px
  
          }
  
          #row3{
              background-color: ${colors[data].wrapperBackground};
              height: 130px;
              padding-top: 50px
  
          }
  
          #row2{
          background-color: #eae8e8;
          height: 310px;
          padding-top: 50px;
          }
          #hobby{
            text-shadow: 2px 2px white;
            font-weight: bold;
            margin-left: 140px !important;
            
          }
  
          #row1_inner{
            width: 90%;
            height: 275px;
            position: absolute;
              background-color: ${colors[data].headerBackground};
              color: ${colors[data].headerColor};
              margin-top: 40px;
              margin-left: 4%;
              text-align: center;
              line-height: 2;
          }
          img{
              margin-top: -50px;
              height: 150px;
              border: 7px solid ${colors[data].photoBorderColor};
              margin-bottom: 20px;
          }
  
          #row1_inner > *{
              margin-bottom: 9px;
          }
  
          .col-md-3{
            margin-left: 30px !important;
            float:left;
            width: 250px;
            padding-top: 15px;
              background-color: ${colors[data].headerBackground};
              color: ${colors[data].headerColor};
              margin: 15px 0px;
              height: 70px;
              font-size: 15px;
              text-align: center;
          }
  
          #tab_container{
            margin-top: 10px;
            margin-left: 18px;
            width: 60%;
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
                  <h5>Hi!</h5>
                  <h5>My name is ${userInfo.name}!</h5>
                  <div>Currently @ ${userInfo.company}</div>
                  <i class="fas fa-map-marker-alt"></i>
                  <a id="location" href="${userInfo.locationUrl}">${userInfo.location}</a>
                  <i class="fab fa-github-square"></i>
                  <a id="githubUrl" href="${userInfo.githubUrl}">Github</a> 
                  <i class="fas fa-blog"></i>
                  <a id="blog" href="${userInfo.blog}">Blog</a>
              </div>
          </div>
  
          <div id="row2">
              <h5 id="hobby">${userInfo.bio}</h5>
              <div id="tab_container">
               <div class="row">
                      <div class="col-md-3 rounded shadow-md">
                      <div>Public Repositories</div>
                      <div>${userInfo.repoCount}</div>
                      </div>
                      <div class="col-md-3 rounded shadow-md">
                      <div>Followers</div>
                      <div>${userInfo.followers}</div>
                      </div>
               </div>  
               <div class="row">
                      <span class="col-md-3 rounded shadow-md">
                      <div>Github Stars</div>
                      <div>${userInfo.stars}</div>
                      </span>
                      <span class="col-md-3 rounded shadow-md">
                      <div>Following</div>
                      <div>${userInfo.following}</div>
                      </span>
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