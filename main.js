//Define Variables:

var reply = "";
var random = 0;

//Initial Function

function init() {
	tell("Welcome back.");
	//Sets the focus of the website to the input field, so you can start typing right away.
	document.getElementById("input").focus();
	document.getElementById("input").select();
}

//Tools

function tell(text) {
	reply = text;
	document.getElementById("reply").innerHTML = reply; //This sets the reply field to a text value.
}

function enter(e) {
	if (window.event) {
		if (e.keyCode == 13) { //Internet Explorer
			eval();
		}
	} else if (e.which) {
		if (e.keyCode == 13) { //Pretty much every other browser
			eval();
		}
	}
}

function textSize(num) {
	document.getElementById("reply").style.fontSize = num + "px"; //This sets the size of the reply field to a different size when needed to make it more aesthetic.
}

function eval() {
	textSize(36);
	switch (document.getElementById("input").value) {
		//The test function, first function and easter egg.
		case "test":
			tell("The test has worked!");
			break;
		//Help 1
		case "help":
			textSize(20);
			tell("Help Pg. 1/2<br>calculator - Launches the Google calculator.<br>email - Loads your email.<br>help [1-2] - Shows list of possible commands.");
			break;
		//Help 2
		case "help 2":
			textSize(24);
			tell("Help Pg. 1/2<br>launch [url] - Quickly launches a .com website when you type in the name of the website i.e launch google. More sophisticated urls can be typed directly into the text field.<br>tell a joke - Tells a funny joke!");
			break;
		//Launches the calculator
		case "calculator":
			tell("The calculator has launched.");
			window.open("https://www.google.com/webhp?sourceid=chrome-instant&rlz=1C1NDCM_enUS717US717&ion=1&espv=2&ie=UTF-8#q=calculator");
			break;
		//Launches Gmail. If someone is not signed in google will redirect to the sign-in page, so no worries here.
		case "email":
			tell("Email successfully launched.");
			window.open("http://www.gmail.com/");
			break;
		//Tells a random joke. There are 10 jokes total.
		case "tell a joke":
			random = Math.random();
			textSize(24);
			if (random < 0.1) {
				tell("Can a kangaroo jump higher than a house? Of course, a house doesn't jump at all!");
			} else if (random < 0.2) {
				tell("Mother: John, do you think I'm a bad mother?<br>Child: My name is Paul...");
			} else if (random < 0.3) {
				tell("I haven't spoken a word to my wife in years. She hates to be interrupted.");
			} else if (random < 0.4) {
				tell("When my wife starts to sing I always go out and do some garden work so our neighbors can see there's no domestic violence going on.");
			} else if (random < 0.5) {
				tell("God: I shall create a great plague and every living thing on Earth shall die!<br>Fish: *Winks at God and slips him a $20 note*<br>God: Correction, I shall create a great flood!");
			} else if (random < 0.6) {
				tell("I can't believe I forgot to go to the gym today. That's 7 years in a row now.");
			} else if (random < 0.7) {
				tell("A naked woman robbed a bank. Nobody could remember her face.");
			} else if (random < 0.8) {
				tell("Q: What do politicians and diapers have in common?<br>A: Both should be changed regularly, and both for the same reasons.");
			} else if (random < 0.9) {
				tell("Dentist: You need a crown<br>Patient: Finally, someone who understands me!");	
			}else {
				tell("A wife is like a hand grenade. Take off the ring and say goodbye to your house.");
			}
			break;
		default:
			if (document.getElementById("input").value.substring(0,6) === "launch") {
				//This will launch a website by detecting if the first 6 letters are launch, then it deletes those letters and uploads the rest in a new tab as a url.
				document.getElementById("input").value = document.getElementById("input").value.substring(7);
				window.open("http://www." + document.getElementById("input").value + ".com");
				textSize(20);
				tell("The website has been launched. If it did not load successfully, try not typing http://, www., or .com, as the name of the website and anything after that (i.e. .com) is all that is required.");
			} else if (document.getElementById("input").value.substring(0,4) === "http") {
				//This will launch any url that is put into the system.
				window.open(document.getElementById("input").value);
				textSize(24);
				tell("The website url has been launched. If it did not load successfully, double check that the url is correctly typed in.");
			} else {
				//If a command is unidentified, this script will run.
				textSize(24);
				document.getElementById("input").value = document.getElementById("input").value.replace(" ", "+");
				window.open("https://www.google.com/#q=" + document.getElementById("input").value)
				tell("You have entered an unknown command. Type help to see a list of commands, or try re-typing your command in lowercase. Your input has been Googled if that was your intent.");
			}
	}
	//Clears the input field.
	document.getElementById("input").value = "";
}
