function paragraph_color() {
    var b_R = document.getElementById("b_R").value;
    var b_G = document.getElementById("b_G").value;
    var b_B = document.getElementById("b_B").value;
    var b_width = document.getElementById("b_width").value;
    var bg_R = document.getElementById("bg_R").value;
    var bg_G = document.getElementById("bg_G").value;
    var bg_B = document.getElementById("bg_B").value;

    var tag = document.getElementById("paragraph");
    tag.style.borderColor = "rgb(" + b_R + "," + b_G + "," + b_B + ")";
    tag.style.borderWidth = b_width + "px";
    tag.style.backgroundColor = "rgb(" + bg_R + "," + bg_G + "," + bg_B + ")";
}
