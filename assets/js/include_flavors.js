function show_hide_flavors() {
    var flavors = document.getElementsByClassName("flavors");
    for (var i = 0; i < flavors.length; i++) {
        if (flavors[i].style.display === "none") {
            flavors[i].style.display = "block";
        } else {
            flavors[i].style.display = "none";
        }
    }

    var btn = document.getElementById("include_flavors");
    if (btn.textContent === "Show Flavors/Tasting Notes") {
        btn.textContent = "Hide Flavors/Tasting Notes";
    } else {
        btn.textContent = "Show Flavors/Tasting Notes";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("include_flavors").addEventListener("click", show_hide_flavors);
});
