
//the password home page functions.  If they do not enter enything for username, function returns
//if they do not put "yellow" as the password a hint box pops up
var firstClick = true


function password () {
	var username = document.getElementById('username').value; 
	var password = document.getElementById('password').value; 
	if (!username) {
		alert("You gotta have a name! \nA rose by no name at all would not smell as sweet!");
		return;
	}
	if (password !== "yellow" & firstClick === true) {
		alert("Hint: it's NOT blue. \nAlso, don't capitalize.");
		firstClick = false;
		return;
	}
	else if (password !== "yellow" & firstClick === false) {
		alert("The password is yellow.  Type \"yellow.\"");
		return;
	}
	
	else if (password === "yellow") {
		$('#password-div').addClass("password-blank");
		$('#mad-libs-page').removeClass("mad-libs-blank");
	}
};

$('#submit-btn').click(function() {
	password();
});









//my original arrays
var nouns = [
	"muffin",
	"donkey",
	"flagpole",
	"gun",
	"follicle",
	"politician",
	"shoe",
	"pufferfish",
	"bowtie"
]

var verbs = [
	"yell",
	"smell",
	"kick",
	"interrogate",
	"cuddle",
	"vomit",
	"paint"
]

var adjectives = [
	"purple",
	"soft",
	"loveable",
	"silly",
	"infuriating",
	"fortuitous",
	"indefatigible"
]

var adverbs = [
	"slowly",
	"perfectly",
	"clumsily",
	"vertically",
	"posthumously",
	"calmly"
]

//function so radio buttons select which story to go with

//function to randomize userArray
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

//pull random strings from my established arrays
function randomString (word) {
	shuffleArray(word);
	var randomThing =  Math.floor(Math.random() * word.length);
		return word[randomThing];
}



//function to amend my arrays by adding user inputs to my arrays, adding one to the front for each user input.
// make one array of what the user gave me, if it is less than 4 add the deficit from my other array up to 4

function addDefaultNouns() {
	var textBox = $('#noun-input');
	var userInput = textBox.val();
	var userArray = userInput.split(",");
	if (userInput === ""){
		userArray = [];
	}
	while (userArray.length <= 4) {
		userArray.push(randomString(nouns));
//Math.floor(Math.random()*items.length)
	};
	shuffleArray(userArray);
//function that randomly puts my four words into the four spots
	for (i = 0; i < userArray.length; i++) {
		$('.noun' + i).text(userArray[i]);
	}
};

function addDefaultVerbs() {
	var textBox = $('#verb-input');
	var userInput = textBox.val();
	var userArray = userInput.split(",");
	if (userInput === ""){
		userArray = [];
	}
	while (userArray.length <= 4) {
		userArray.push(randomString(verbs));
	};
	shuffleArray(userArray);
//function that randomly puts my four words into the four spots
	for (i = 0; i < userArray.length; i++) {
		$('.verb' + i).text(userArray[i]);
	}
};

function addDefaultAdjectives() {
	var textBox = $('#adjective-input');
	var userInput = textBox.val();
	var userArray = userInput.split(",");
	if (userInput === ""){
		userArray = [];
	}
	while (userArray.length <= 4) {
		userArray.push(randomString(adjectives));
	};
	shuffleArray(userArray);
//function that randomly puts my four words into the four spots
	for (i = 0; i < userArray.length; i++) {
		$('.adj' + i).text(userArray[i]);
	}
};

function addDefaultAdverbs() {
	var textBox = $('#adverb-input');
	var userInput = textBox.val();
	var userArray = userInput.split(",");
	if (userInput === ""){
		userArray = [];
	}
	while (userArray.length <= 4) {
		userArray.push(randomString(adverbs));
	};
	shuffleArray(userArray);
//function that randomly puts my four words into the four spots
	for (i = 0; i < userArray.length; i++) {
		$('.adv' + i).text(userArray[i]);
	}
};

//submit button click to generate story, making the story corresponding with which radio button is pressed
$('#submit2').click(function() {
	if (document.getElementById("school").checked == true) {
		$('#mall-story').addClass('mall-story');
		$('#halloween-story').addClass('halloween-story');
		addDefaultAdverbs();
		addDefaultAdjectives();
		addDefaultVerbs();
		addDefaultNouns();
		$('#school-story').removeClass('school-story');
	}
	else if (document.getElementById("mall").checked == true) {
		$('#school-story').addClass('school-story');
		$('#halloween-story').addClass('halloween-story');
		addDefaultAdverbs();
		addDefaultAdjectives();
		addDefaultVerbs();
		addDefaultNouns();
		$('#mall-story').removeClass('mall-story');
	}
	else if (document.getElementById("halloween").checked == true) {
		$('#mall-story').addClass('mall-story');
		$('#school-story').addClass('school-story');
		addDefaultAdverbs();
		addDefaultAdjectives();
		addDefaultVerbs();
		addDefaultNouns();
		$('#halloween-story').removeClass('halloween-story');
	}

});


//For loop that goes up to 4, so it'll only use the user inputs if they enter 4.  each story has a variable for each word that needs to go into it
//said variable will equal a random value from each array









