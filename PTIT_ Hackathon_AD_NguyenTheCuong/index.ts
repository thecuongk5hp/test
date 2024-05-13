
interface ITodoItem {
    id: number;
    name: string;
    completed: boolean;
}
class TodoList implements ITodoItem {
    id: number = 0;
    name: string = '';
    completed: boolean = false;
    constructor(public todoList: ITodoItem[]) {}
    renderJob(): void {
        const todoListElement = document.getElementById('todoList');
        if (todoListElement) {
            todoListElement.innerHTML = '';
            this.todoList.forEach(todo => {
                const listItem = document.createElement('li');
                listItem.textContent = todo.name;
                listItem.classList.add('list-group-item');
                if (todo.completed) {
                    listItem.classList.add('completed');
                }
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.checked = todo.completed;
                checkbox.dataset.id = todo.id.toString();
                listItem.prepend(checkbox);

                const deleteBtn = document.createElement('button');
                deleteBtn.textContent = 'Xóa';
                deleteBtn.classList.add('btn', 'btn-danger', 'delete-btn');
                deleteBtn.dataset.id = todo.id.toString();
                listItem.appendChild(deleteBtn);

                todoListElement.appendChild(listItem);
            });
        }
        const completedCountElement = document.getElementById('completedCount');
        const totalCountElement = document.getElementById('totalCount');
        if (completedCountElement && totalCountElement) {
            const completedCount = this.todoList.filter(todo => todo.completed).length;
            completedCountElement.textContent = completedCount.toString();
            totalCountElement.textContent = this.todoList.length.toString();
        }

        const allCompleted = this.todoList.every(todo => todo.completed);
        if (allCompleted) {
            alert('Hoàn thành tất cả công việc!');
        }
    }
    createJob(name: string): void {
        if (!name.trim()) {
            alert('Tên công việc không được để trống!');
            return;
        }
        if (this.todoList.some(todo => todo.name === name)) {
            alert('Công việc đã tồn tại!');
            return;
        }
        const newTodo: ITodoItem = {
            id: this.id++,
            name,
            completed: false
        };
        this.todoList.push(newTodo);
        this.saveToLocalStorage();
        this.renderJob();
    }
    updateJob(id: number): void {
        const checkbox = document.querySelector(`input[type="checkbox"][data-id="${id}"]`) as HTMLInputElement;
        if (checkbox) {
            const todoIndex = this.todoList.findIndex(todo => todo.id === id);
            if (todoIndex !== -1) {
                this.todoList[todoIndex].completed = checkbox.checked;
                this.saveToLocalStorage();
                this.renderJob();
            }
        }
    }

    deleteJob(id: number): void {
        const todoIndex = this.todoList.findIndex(todo => todo.id === id);
        if (todoIndex !== -1) {
            const confirmDelete = confirm('Bạn có chắc chắn muốn xóa công việc này không?');
            if (confirmDelete) {
                this.todoList.splice(todoIndex, 1);
                this.saveToLocalStorage();
                this.renderJob();
            }
        }
    }

    saveToLocalStorage(): void {
        localStorage.setItem('todoList', JSON.stringify(this.todoList));
    }

    loadFromLocalStorage(): void {
        const savedTodoList = localStorage.getItem('todoList');
        if (savedTodoList) {
            this.todoList = JSON.parse(savedTodoList);
            this.renderJob();
        }
    }
}

function initializeApp(): void {
    const todoList = new TodoList([]);
    todoList.loadFromLocalStorage();

    const addTodoBtn = document.getElementById('addTodoBtn');
    if (addTodoBtn) {
        addTodoBtn.addEventListener('click', () => {
            const newTodoInput = document.getElementById('newTodoInput') as HTMLInputElement;
            todoList.createJob(newTodoInput.value);
            newTodoInput.value = ''; 
        });
    }

    const todoListElement = document.getElementById('todoList');
    if (todoListElement) {
        todoListElement.addEventListener('change', (event) => {
            const target = event.target as HTMLInputElement;
            if (target.tagName === 'INPUT' && target.type === 'checkbox') {
                const todoId = parseInt(target.dataset.id!);
                todoList.updateJob(todoId);
            }
        });

        todoListElement.addEventListener('click', (event) => {
            const target = event.target as HTMLElement;
            if (target.classList.contains('delete-btn')) {
                const todoId = parseInt(target.dataset.id!);
                todoList.deleteJob(todoId);
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', initializeApp);


