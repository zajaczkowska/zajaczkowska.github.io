let number = 0;
let inputNumber = 0;
let inputedNumber = 0;

let valLogin = false;
let valPassword = false;
let valCode = false;

// Generate a code confirming that the user is not a bot

function randomXToY(minVal, maxVal) {
	var randVal = minVal + (Math.random() * (maxVal - minVal));
	return Math.round(randVal);
}

function generateCode() {
	number = randomXToY(101, 999);
	document.getElementById("codeField").text = number;
}

document.onload = generateCode();

// Validating form data

function validate() {

	inputedLogin = document.forms["logon-form"]["login-input"].value;
	inputedPassword = document.forms["logon-form"]["password-input"].value;
	inputedNumber = document.forms["logon-form"]["code-input"].value;

	if (inputedLogin == "admin") {
		valLogin = true;
	}

	if (inputedPassword == "admin") {
		valPassword = true;
	}

	if (number == inputedNumber) {
		valCode = true;
	}

	if (valCode == true && valLogin == true && valPassword == true) {
		location.href = "menu.html";
	}

	// Case: empty element or elements of form

	if (inputedLogin === "" || inputedPassword === "" || inputedNumber === "") {
		let efModal = document.getElementById("empty-form-modal-box");
		let efSpan = document.getElementsByClassName("close")[2];

		efModal.style.display = "block";

		efSpan.onclick = function () {
			efModal.style.display = "none";
			location.href = "index.html";
		}
		
		window.onclick = function (event) {
			if (event.target == efModal) {
				efModal.style.display = "none";
				location.href = "index.html";
			}
		}
	}

	// Case: incorrect value or values entered

	if (inputedLogin != "admin" || inputedPassword != "admin" || number != inputedNumber) {
		let icdModal = document.getElementById("incorrect-data-modal-box");
		let icdSpan = document.getElementsByClassName("close")[1];

		icdModal.style.display = "block";

		icdSpan.onclick = function () {
			icdModal.style.display = "none";
			location.href = "index.html";
		}
		
		window.onclick = function (event) {
			if (event.target == icdModal) {
				icdModal.style.display = "none";
				location.href = "index.html";
			}
		}	
	}

}

// Password reminder

let prModal = document.getElementById("password-reminder-modal-box");
let prBtn = document.getElementById("forgot-pass-button");
let prSpan = document.getElementsByClassName("close")[0];

prBtn.onclick = function () {
	prModal.style.display = "block";
}

prSpan.onclick = function () {
	prModal.style.display = "none";
}

window.onclick = function (event) {
	if (event.target == prModal) {
		prModal.style.display = "none";
	}
}