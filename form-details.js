document.getElementById("displayName").innerText =
    localStorage.getItem("name") || "Not provided";

document.getElementById("displayEmail").innerText =
    localStorage.getItem("email") || "Not provided";

document.getElementById("displayMessage").innerText =
    localStorage.getItem("message") || "Not provided";
