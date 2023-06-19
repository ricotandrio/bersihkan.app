// default value buat local storage
var forum_data = [{"name": "User001", "date": "6/14/2023 11:16:34 AM", "desc": "Hey, this is first forum message"}];

// buat ngecek 'forum_data' udh ada di localstorage ato kagak
function initializeLocalStorageVariable(variableName, defaultValue) {
    if (!localStorage.getItem(variableName)) {
      localStorage.setItem(variableName, JSON.stringify(defaultValue));
    }
}

initializeLocalStorageVariable('forum_data', forum_data); // panggil function()

const forum_data_storage = localStorage.getItem('forum_data');
const container = document.getElementById("comment_section");
function showComment(){
    var temp = "";
    var temp_forum_data = JSON.parse(forum_data_storage);
    for(let i = 0; i < temp_forum_data.length; i++){
        temp += `<div class="comment_bubble">
                    <h3>${temp_forum_data[i].name}</h3>
                    <h4>${temp_forum_data[i].date}</h4>
                    <p>${temp_forum_data[i].desc}</p>
                </div>`
    }
    container.innerHTML = temp;
}

showComment();

function getname(){
    var userLogged = localStorage.getItem("userLogin");
    var loggedIn = JSON.parse(userLogged);
    return loggedIn.name;
}

function refresh(scrollX, scrollY){
    // Refresh the page
    location.reload();

    // Restore the scroll position after the page is reloaded
    window.scrollTo(scrollX, scrollY);
}

const formSend = document.getElementById("message_form");
const formButton = document.getElementById("submit_button");

formButton.addEventListener("click", function(event){
    event.preventDefault();
    if(!localStorage.getItem("userLogin")){
        window.alert("Please login first");
        window.location.href = "./login.html";
        return;
    }
    var name = getname();
    var msg = document.getElementById("message_text");
    var currentDate = new Date();
    var timeEdit = (currentDate.toLocaleDateString() + " " + currentDate.toLocaleTimeString());

    var forumDataArray = JSON.parse(forum_data_storage); // ubah forum data array jdi array

    forumDataArray.push({"name": name, "date": timeEdit, "desc": msg.value}); // push ke array

    localStorage.setItem('forum_data', JSON.stringify(forumDataArray)); // masukin balik ke local storage
    refresh(window.scrollX, window.scrollY);
    showComment();
    formSend.reset();
});

