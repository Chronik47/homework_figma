

function readMore(clicked_button_id) {
    var clicked_id = clicked_button_id.slice(-1);
    var dots = document.getElementById("dots" + clicked_id);
    var more = document.getElementById("more" + clicked_id);
    var btn = document.getElementById(clicked_button_id);

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btn.innerHTML = "Read More";
        more.style.display = "none";
    }
    else {
        dots.style.display = "none";
        btn.innerHTML = "Hide Text";
        more.style.display = "inline";
    }
}