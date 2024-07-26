//your JS code here. If required.
document.getElementById('submit').addEventListener('click', addBook);

function addBook() {
    // Get form values
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;

    // Validate input
    if (title === '' || author === '' || isbn === '') {
        alert('Please fill in all fields');
        return;
    }

    // Create new row
    const row = document.createElement('tr');

    // Create cells
    const titleCell = document.createElement('td');
    titleCell.textContent = title;
    row.appendChild(titleCell);

    const authorCell = document.createElement('td');
    authorCell.textContent = author;
    row.appendChild(authorCell);

    const isbnCell = document.createElement('td');
    isbnCell.textContent = isbn;
    row.appendChild(isbnCell);

    // Create delete button
    const deleteCell = document.createElement('td');
    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete';
    deleteButton.textContent = 'Clear';
    deleteCell.appendChild(deleteButton);
    row.appendChild(deleteCell);

    // Add row to table
    document.getElementById('book-list').appendChild(row);

    // Clear form
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}

// Event delegation for delete buttons
document.getElementById('book-list').addEventListener('click', function(e) {
    if (e.target.classList.contains('delete')) {
        const row = e.target.parentElement.parentElement;
        document.getElementById('book-list').removeChild(row);
    }
});
