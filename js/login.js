//Call this function when the page loads (the "ready event")

$(document).ready(function() {
	initializePage();
})

function initializePage() {
	$("#loginBtn").click(loginCheck);
}

function loginCheck(e) {
	var username = $('#username').val();
	var password = $('#password').val();
	if (username.length == 0 || password.length == 0) {
		$("#loginInstructions").text("Please enter a username and password.");
	} else {
		window.location.href = ("index.html");
	}
}