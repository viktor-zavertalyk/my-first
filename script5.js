unction onPageLoaded() {
   

    function listenDeleteTodo(element) {
       
    }

    function loadTodos() {
        const data = localStorage.getItem("todos");
        if (data) {
            ul.innerHTML = data;
        }
        const deleteButtons = document.querySelectorAll("span.todo-trash");
        for (const button of deleteButtons) {
            listenDeleteTodo(button);
        }
    }

    

    loadTodos();
}

document.addEventListener("DOMContentLoaded", onPageLoaded);
