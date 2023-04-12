
window.onscroll = function () { scrollfunc() };
function scrollfunc() {
    if (document.documentElement.scrollTop > 120 || document.body.scrollTop > 120) {
        toparrow.style.display = "block";
        Home.style.backgroundColor = "   rgb(14, 14, 14)"
    }

    else {
        toparrow.style.display = "none";
        Home.style.backgroundColor = "transparent"
    }

}

let toparrow = document.getElementById("toparrow");
function topbtn() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

}