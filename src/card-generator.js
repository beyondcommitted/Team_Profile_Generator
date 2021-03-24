let profileGenerator = data => {

   // Card
    let generateCard = ""

    //loops through the data object

    for(let i = 0; i < data.length; i++){
        let finalization = data[i].officeNumber || data[i].github || data[i].school;
        let info = Object.keys(data[i]);
        let obj = info[4];
        let position = obj + ":" + finalization

        // If input response for role matches then display value of postion on card
        if (obj === "school"){
            position = `School: ${data[i].school}`;

        } else if (obj === "github"){
            position = (`GitHub: <a href = 'https://www.github.com/${data[i].github}'> ${data[i].github}</a>`)
        }
        else if (obj === "officeNumber") {
           position = `Office Number: ${data[i].officeNumber}`
        } else {
    
        }

        // Card template desined to output the input data 
        let {name, role, email, id} = data[i]
        generateCard+= `
         <div class="card col" style="width: 18rem;">
         <div class="card-body card-header">
             <h5 class="card-title"> ${name}</h5>
             <h6 class="card-subtitle mb-2 text-muted"> ${role}</h6>
         </div>
         <ul class="list-group list-group-flush">
             <li class="list-group-item">Email: <a href=mailto:${email}> ${email}</a></li>
             <li class="list-group-item">Employee ID: ${id}</li>
             <li class="list-group-item"> ${position}</li>
             
             
         </ul>
         </div>`
         
     }

    //  HTML to receive the cards and inout information
     return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Employee Info</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <nav class="navbar">
            <div class="navbar-header">
                <span class="navbar-brand mb-0 h1">Product Design Team</span>
            </div>
        </nav>
    
        <section class="container">

            <div class="row">
             ${generateCard}   
            </div>
    
        </section>
    </body>
    </html>` 

      
    

}


module.exports = profileGenerator;

