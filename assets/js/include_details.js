function show_fermentation_log_details() {
    var ferment_details = document.getElementsByClassName("ferment_details");
    for (var i = 0; i < ferment_details.length; i++) {
        if (ferment_details[i].style.display === "none") {
            ferment_details[i].style.display = "block";
        } else {
            ferment_details[i].style.display = "none";
        }
    }

    var btn = document.getElementById("include_details");
    if (btn.textContent === "Show Fermentation Log Details") {
        btn.textContent = "Hide Fermentation Log Details";
    } else {
        btn.textContent = "Show Fermentation Log Details";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("include_details").addEventListener("click", show_fermentation_log_details);
});
