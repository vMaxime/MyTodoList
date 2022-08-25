const tasks = [];
var currentId = 0;

class Task {

    static STATE = {
        WAITING: 'WAITING',
        DONE: 'DONE'
    };

    constructor(id, content, state) {
        this.id = id;
        this.content = content;
        this.state = state;
    }

    getId() {
        return this.id;
    }

    getContent() {
        return this.content;    
    }
    
    getState() {
        return this.state;    
    }

    setState(state) {
        this.state = state;
    }

    toggleState() {
        this.setState(this.state === Task.STATE.WAITING ? Task.STATE.DONE : Task.STATE.WAITING);
    }

    createElement(parentElement, putAsFirst) {
        let liElement = document.createElement('li');
        liElement.setAttribute('data-id', this.id);
        
        let spanElement = document.createElement('span');
        spanElement.setAttribute('data-id', this.id);
        spanElement.classList.add('checkbox');
        if (this.state === Task.STATE.DONE)
            spanElement.classList.add('checked');

        let inputElement = document.createElement('input');
        inputElement.setAttribute('type', 'text');
        inputElement.setAttribute('data-id', this.id);
        inputElement.setAttribute('disabled', '');
        inputElement.setAttribute('value', this.content);

        liElement.appendChild(spanElement);
        liElement.appendChild(inputElement);

        if (putAsFirst)
            parentElement.insertBefore(liElement, parentElement.firstChild);
        else
            parentElement.appendChild(liElement);
    }

    updateElement() {
        let chekboxElement = document.querySelector('span[data-id="' + this.id + '"]');
        if (this.state === Task.STATE.WAITING)
            chekboxElement.classList.remove('checked');
        else
            chekboxElement.classList.add('checked');
    }

    removeElement() {
        document.querySelector('li[data-id="' + this.id + '"]').remove();
    }
    
}