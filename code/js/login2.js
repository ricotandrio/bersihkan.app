var fileRead = new FileReader();

class Person {
    constructor(name, pass, point) {
        this.name = name;
        this.password = pass;
        this.poin = point;
    }
}

var userData = [];

// Event listener to handle when the file has been loaded
reader.onload = function(e) {
  var contents = e.target.result; // Get the file contents

  // Split the contents into an array of lines
  var lines = contents.split('\n');

    // Initialize an empty array to store the objects
    var userData = [];

  // Process each line and create an object
    lines.forEach(function(line) {
        var values = line.split(','); // Split the line by comma

        // Create an object with properties username, password, and age
        var user = new Person();
        user.name = values[0].trim();
        user.password = values[1].trim();
        user.poin = values[2].trim();

        // Add the object to the array
        userData.push(user);
    });

  // Do something with the array of objects
  console.log(userData);
};

document.getElementById('contact-us').addEventListener('submit', (event) => {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const pass = document.getElementById('pass').value;
    
    var start = 0;
    var last = userData.length;
    var user = null;
    while(start <= last){
        mid = start + (last - start) / 2;
        if(userData[mid].name == email){
            if(userData[mid].password == pass) user = userData[mid];
            else alert("Incorrect Password");
            break;
        } else if(userData[mid].name < email) last = mid - 1;
        else start = mid + 1;
    }
    
    if(user != null){
        window.location.href = "home.html";
    }
});