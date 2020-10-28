function onPageLoaded() {
   
    function createTodo() {
        
        listenDeleteTodo(deleteBtn);
    }

    function listenDeleteTodo(element) {
        element.addEventListener("click", (event) => {
            element.parentElement.remove();
            event.stopPropagation();
        });
    }

    
}

document.addEventListener("DOMContentLoaded", onPageLoaded);
