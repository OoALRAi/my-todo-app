export default class TodoItem {
    constructor(title, isDone = false) {
        this.title = title
        this.isDone = isDone
    }

    toggle() {
        this.isDone = !this.isDone
    }

}