var userdata = [
    {"username": "Bersihkan", "poin": "32674", "status": "active", "account": "admin"},
    {"username": "Jane Smith", "poin": "500", "status": "inactive", "account": "admin"},
    {"username": "Michael Johnson", "poin": "10000", "status": "inactive", "account": "admin"},
    {"username": "Emily Brown", "poin": "2500", "status": "active", "account": "user"},
    {"username": "David Wilson", "poin": "750", "status": "active", "account": "user"},
];

const user = document.getElementById("user_info");
user.innerHTML = `<h1>Welcome, ${userdata[0].username} (${userdata[0].account})</h1>`

var request = [
    {"name": "John Doe", "date": "30 March 2023", "time": "11:20", "type": "process"},
    {"name": "Jane Smith", "date": "30 March 2023", "time": "11:20", "type": "confirmation"},
    {"name": "Michael Johnson", "date": "30 March 2023", "time": "11:20", "type": "done"},
    {"name": "Emily Brown", "date": "30 March 2023", "time": "11:20", "type": "cancel"},
    {"name": "David Wilson", "date": "15 April 2023", "time": "09:45", "type": "process"},
    {"name": "Olivia Davis", "date": "15 April 2023", "time": "09:45", "type": "confirmation"},
    {"name": "Sophia Martinez", "date": "15 April 2023", "time": "09:45", "type": "done"},
    {"name": "Daniel Anderson", "date": "15 April 2023", "time": "09:45", "type": "cancel"},
    {"name": "Ava Taylor", "date": "5 May 2023", "time": "14:30", "type": "process"},
    {"name": "Mia Clark", "date": "5 May 2023", "time": "14:30", "type": "confirmation"},
    {"name": "William White", "date": "5 May 2023", "time": "14:30", "type": "done"},
    {"name": "Sophia Turner", "date": "5 May 2023", "time": "14:30", "type": "cancel"},
    {"name": "James Moore", "date": "20 June 2023", "time": "16:15", "type": "process"},
    {"name": "Emma Brooks", "date": "20 June 2023", "time": "16:15", "type": "confirmation"},
    {"name": "Benjamin Reed", "date": "20 June 2023", "time": "16:15", "type": "done"},
    {"name": "Isabella Turner", "date": "20 June 2023", "time": "16:15", "type": "cancel"},
    {"name": "Alexander Cooper", "date": "10 July 2023", "time": "08:00", "type": "process"},
    {"name": "Charlotte Young", "date": "10 July 2023", "time": "08:00", "type": "confirmation"},
    {"name": "Daniel Scott", "date": "10 July 2023", "time": "08:00", "type": "done"},
    {"name": "Ella Adams", "date": "10 July 2023", "time": "08:00", "type": "cancel"}
]

const container = document.getElementById("user_request");
function showRequests(){
    var temp = "";
    var processType = 0; var doneType = 0; var needConfirmType = 0;

    for(let i = 0; i < request.length; i++){
        temp += `<div class="request ${request[i].type}">
                    <div class="left">
                        <img src="../asset/${request[i].type}.png" alt="">
                        <div class="data_user">
                            <h1>${request[i].name}</h1>
                            <h2>${request[i].date}, ${request[i].time}</h2>
                        </div>
                    </div>
                    <div class="right">
                        <h1 id="requestType">${request[i].type}</h1>
                    </div>
                </div>`;
        if(request[i].type == "process"){
            processType += 1;
        } else if(request[i].type == "confirmation"){
            needConfirmType += 1;
        } else if(request[i].type == "done"){
            doneType += 1;
        }
    }
    container.innerHTML = temp;
    document.getElementById("process_num").innerHTML = processType;
    document.getElementById("confirm_num").innerHTML = needConfirmType;
    document.getElementById("done_num").innerHTML = doneType;
}

showRequests();

document.getElementById("confirmation_btn").addEventListener("click", function(){
    window.location.href = "template.html";
})

document.getElementById("process_btn").addEventListener("click", function(){
    window.location.href = "template.html";
})

document.getElementById("done_btn").addEventListener("click", function(){
    window.location.href = "template.html";
})
