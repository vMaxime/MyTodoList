for (let checkboxElement of document.querySelectorAll(".checkbox"))
    listenCheckbox(checkboxElement);

for (let inputElement of document.querySelectorAll("input.control-value-size")) {
    inputElement.addEventListener('keypress', (event) => {
        if (inputElement.value.length >= 28)
            event.preventDefault();
    });
}

for (let element of document.querySelectorAll('.add-task-btn')) {
    element.addEventListener('click', () => {
        let inputElement = document.getElementById('task-creation-input');
        if (inputElement.value.length <= 2) {
            alert('Votre tâche doit contenir au moins 3 caractères.')
            return;
        } else if (inputElement.value.length > 28) {
            alert('Votre tâche ne doit pas contenir plus de 28 caractères.')
            return;
        }

        let task = new Task(currentId++, inputElement.value, Task.STATE.WAITING);
        tasks.push(task);
        task.createElement(document.getElementById('tasks'), true);
        inputElement.value = '';
    });
}

const listenCheckbox = (checkboxElement) => {
    checkboxElement.addEventListener('click', () => {
        for (let task of tasks)
            if (task.getId() == checkboxElement.getAttribute('data-id')) {
                task.toggleState();
                task.updateElement();
            }
    });
}