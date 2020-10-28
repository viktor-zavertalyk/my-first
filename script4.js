function onPageLoaded() {
    const saveButton = document.querySelector("button.save");
    const clearButton = document.querySelector("button.clear");
    const showTipsButton = document.querySelector("button.showTips");
    const closeTipsButton = document.querySelector("a.closeTips");
    const overlay = document.querySelector("#overlay");

    

    saveButton.addEventListener("click", () => {
        localStorage.setItem("todos", ul.innerHTML);
    });
    clearButton.addEventListener("click", () => {
        ul.innerHTML = "";
        localStorage.removeItem('todos', ul.innerHTML);
    });
    showTipsButton.addEventListener("click", () => {
        overlay.style.height = "100%";
    });
    closeTipsButton.addEventListener("click", () => {
        overlay.style.height = "0";
    });
}

document.addEventListener("DOMContentLoaded", onPageLoaded);
