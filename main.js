/*var loginInfo = {
	kobe: {
		username: "kobe",
		password: "password",
	}
}*/
var file = require("file");
var unparsedLoginInfo = file.readFileSync("./database.txt");
var loginInfo = unparsedLoginInfo.split("\n");
function auth0() {
	var username = document.getElementById("username").value
	var password = document.getElementById("password").value
	console.log(username + " and " + password);
}
function auth1() {

	var username = document.getElementById("username").value
	var password = document.getElementById("password").value
	if (username === loginInfo.kobe.username && password === loginInfo.kobe.password) {
		function reveal() {
			var x = document.getElementById('hidden-content');
			x.style.display = 'block';
		}
		reveal();
	}
	else {
		console.log('test');
	}
}
function giveAuth() {

}