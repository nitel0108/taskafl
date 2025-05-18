function addTask() {
    const description = prompt('Enter task description:');
    const priority = prompt('Enter priority (Low/Medium/High):');
    const dueDate = prompt('Enter due date (YYYY-MM-DD):');
    const assignedBy = 'John Doe';
    const status = 'Pending';

    const table = document.querySelector('tbody');
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${description}</td>
        <td>${priority}</td>
        <td>${dueDate}</td>
        <td>${assignedBy}</td>
        <td>${status}</td>
        <td><button>Edit</button> <button>Delete</button></td>
    `;
    table.appendChild(row);
}

document.querySelector('.task-controls button').onclick = addTask;