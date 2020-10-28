function onPageLoaded() {
   
    function createTodo() {
       
    }

    function onClickTodo(event) {
        if (event.target.tagName === "LI") {
            event.target.classList.toggle("checked");
        }
    }

    
    ul.addEventListener("click", onClickTodo);
   
}

document.addEventListener("DOMContentLoaded", onPageLoaded);
