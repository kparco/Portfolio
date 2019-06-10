var github = document.getElementById('github');
var behance = document.getElementById('behance');

var githubBlue = "./images/github-blue.png";
var githubDefault = "./images/github-logo.png";

var behanceBlue = "./images/behance-blue.png";
var behanceDefault = "./images/behance.png";

//github icon
github.addEventListener("mouseover", function() {
    github.setAttribute("src", githubBlue);
});

github.addEventListener("mouseout", function () {
    github.setAttribute("src", githubDefault);
});

//behance icon
behance.addEventListener("mouseover", function() {
    behance.setAttribute("src", behanceBlue);
});

behance.addEventListener("mouseout", function() {
    behance.setAttribute("src", behanceDefault);
});