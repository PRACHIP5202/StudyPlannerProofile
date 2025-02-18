function navigateToExplore() {
    window.location.href = "explore.html"; // Update this as per your project structure
}


document.addEventListener("DOMContentLoaded", function () {
    const table = document.getElementById("timetable");

    // Load saved data from local storage
    if (localStorage.getItem("timetableData")) {
        table.innerHTML = localStorage.getItem("timetableData");
    }

    // Save changes on input
    table.addEventListener("input", function () {
        localStorage.setItem("timetableData", table.innerHTML);
    });
});
