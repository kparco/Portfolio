const backtotopBtn = document.querySelector("#js-top-btn");

backtotopBtn.style.display = "none";
window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
    if (window.pageYOffset > 300) {
        //show back to top button
        if (!backtotopBtn.classList.contains("btnShow")) {
            backtotopBtn.classList.remove("btnHide");
            backtotopBtn.classList.add("btnShow");
            backtotopBtn.style.display = "block";
        }
    } else {
        //hides back to top button
        if (backtotopBtn.classList.contains("btnShow")) {
            backtotopBtn.classList.remove("btnShow");
            backtotopBtn.classList.add("btnHide");
            setTimeout(function() {
                backtotopBtn.style.display = "none";
            }, 250);
        }
    }
}

backtotopBtn.addEventListener("click", backtoTop);

function backtoTop() {
    window.scrollTo(0, 0);
}