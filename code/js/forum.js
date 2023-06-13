var forum_data = [
    {"name": "Hello", "date": "1 January 2023", "time": "09:00 AM", "desc": "sdkfjhs"},
    {"name": "World", "date": "2 February 2023", "time": "10:00 AM", "desc": "Lorem ipsum"},
    {"name": "OpenAI", "date": "3 March 2023", "time": "11:00 AM", "desc": "Dolor sit amet"},
    {"name": "ChatGPT", "date": "4 April 2023", "time": "12:00 PM", "desc": "Consectetur adipiscing elit"},
    {"name": "AI", "date": "5 May 2023", "time": "01:00 PM", "desc": "Sed do eiusmod tempor"},
    {"name": "Language", "date": "6 June 2023", "time": "02:00 PM", "desc": "Incididunt ut labore"},
    {"name": "Model", "date": "7 July 2023", "time": "03:00 PM", "desc": "Et dolore magna aliqua"},
    {"name": "Programming", "date": "8 August 2023", "time": "04:00 PM", "desc": "Ut enim ad minim veniam"},
    {"name": "Code", "date": "9 September 2023", "time": "05:00 PM", "desc": "Quis nostrud exercitation"},
    {"name": "Development", "date": "10 October 2023", "time": "06:00 PM", "desc": "Ullamco laboris nisi"}
  ];


const container = document.getElementById("comment_section");
function showComment(){
    var temp = "";

    for(let i = 0; i < forum_data.length; i++){
        temp += `<div class="comment_bubble">
                    <h3>${forum_data[i].name}</h3>
                    <h4>${forum_data[i].date}, ${forum_data[i].time}</h4>
                    <p>${forum_data[i].desc}</p>
                </div>`
    }

    container.innerHTML = temp;
}

showComment();
