//Call this function when the page loads (the "ready event")
$(document).ready(function() {
	initializePage();
})

function initializePage() {
	$("#createBtn").click(createAccountCheck);
}

function createAccountCheck(e) {
	var username = $('#username').val();
	var password = $('#password').val();
	if (username.length == 0 || password.length == 0) {
		$("#createInstructions").text("You must a username and password.");
	} else {
		window.location.href = ("index.html");
	}
}