class Person {
    constructor(name, pass, point) {
        this.name = name;
        this.password = pass;
        this.poin = point;
    }
}

var userData = [];

const fs = require('fs');
var data = fs.readFileSync("Data.txt", {encoding: "utf-8"});
var row = data.split('\n');
var userData = [];
var hasil;
var personX;

for(let i = 0; i < row.length; i++){
    hasil = row[i].split(/[,\r]/);
    personX = new Person(hasil[0], hasil[1], hasil[2]);
    userData.push(personX);
}

mergeSort(0, userData.length, userData);

document.getElementById('contact-us').addEventListener('submit', (event) =>{
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
    console.log("sjdk")
    if(user != null){
        window.location.href = "../html/home-logged-in.html";
    }
});

// var fileWrite = fs.appendFileSync("Data.txt", "\nMichael, Stefano, 0");

function mergeSort(start, last, array){
    if(start == last) return;

    var mid = start + (last - start) / 2;
    mergeSort(start, mid, array);
    mergeSort(mid + 1, last, array);

    var tempArray = [];
	var tempIndeks = 0;
	var indeksKiri = start;
	var indeksKanan = mid + 1;
	var kiriMaks = mid;
	var kananMaks = last;

	while(indeksKiri <= kiriMaks && indeksKanan <= kananMaks){
		if(array[indeksKiri] > array[indeksKanan]){
			tempArray[tempIndeks] = array[indeksKiri];
			indeksKiri++;
		} else {
			tempArray[tempIndeks] = array[indeksKanan];
			indeksKanan++;
		}
		tempIndeks++;
	}

	while(indeksKiri <= kiriMaks){
		tempArray[tempIndeks] = array[indeksKiri];
		indeksKiri++;
		tempIndeks++;
	}

	while(indeksKanan <= kananMaks){
		tempArray[tempIndeks] = array[indeksKanan];
		indeksKanan++;
		tempIndeks++;
	}

	tempIndeks = 0;
	for(let i = awal; i <= akhir; i++){
		array[i] = tempArray[tempIndeks];
		tempIndeks++;
	}
    return;
}
