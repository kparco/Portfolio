const backtotopBtn = document.querySelector("#js-top-btn");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
    if (window.pageYOffset > 300) {
        //show back to top button
        backtotopBtn.style.display = "block";
    } else {
        //hides back to top button
        backtotopBtn.style.display = "none";
    }
}

backtotopBtn.addEventListener("click", backtoTop);

function backtoTop() {
    window.scrollTo(0, 0);
}