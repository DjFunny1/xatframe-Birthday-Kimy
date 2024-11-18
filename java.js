const toggleButton = document.getElementById("button");
const mainDiv = document.getElementById("maindiv");

toggleButton.addEventListener("click", () => {
    if (mainDiv.style.display === "none") {
        mainDiv.style.display = "block";
        toggleButton.textContent = "Apagar"; // Update button text
    } else {
        mainDiv.style.display = "none";
        toggleButton.textContent = "Encender"; // Update button text
    }
});