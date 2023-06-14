var forum_data = [
    {"name": "User001", "date": "Wed Jun 14 2023 10:55:42 GMT+0700 (Western Indonesia Time)", "desc": "Hey, this is first forum message"},
];

function initializeLocalStorageVariable(variableName, defaultValue) {
    if (!localStorage.getItem(variableName)) {
      localStorage.setItem(variableName, JSON.stringify(defaultValue));
    }
}
initializeLocalStorageVariable('forum_data', forum_data);
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
    return "name";
}

const formSend = document.getElementById("message_form");
const formButton = document.getElementById("submit_button");

formButton.addEventListener("click", function(event){
    event.preventDefault();
    var name = getname();
    var msg = document.getElementById("message_text");
    var currentDate = new Date();
    var timeEdit = (currentDate.toLocaleDateString() + " " + currentDate.toLocaleTimeString());
    var forumDataArray = JSON.parse(forum_data_storage) || [];
    
    forumDataArray.push({"name": name, "date": timeEdit, "desc": msg.value});

    localStorage.setItem('forum_data', JSON.stringify(forumDataArray));
    showComment();
    formSend.reset();
});
