let userData = [];

// Event listener for the form submission
document.getElementById('registration-form').addEventListener('submit', function (e) {
    e.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let age = document.getElementById('age').value;
    let gender = document.getElementById('gender').value;

    // Add data to the userData array
    userData.push({ name, email, age, gender });

    // Clear the form
    document.getElementById('registration-form').reset();

    // Re-render the table
    renderTable();
});

// Function to render the table
function renderTable() {
    let tableBody = document.querySelector('#data-table tbody');
    tableBody.innerHTML = ''; // Clear the existing rows

    userData.forEach((user, index) => {
        let row = tableBody.insertRow();
        row.innerHTML = `
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.age}</td>
            <td>${user.gender}</td>
        `;
    });
}

// Sorting function
function sortTable() {
    let sortBy = document.getElementById('sort-select').value;

    userData.sort((a, b) => {
        if (a[sortBy] < b[sortBy]) return -1;
        if (a[sortBy] > b[sortBy]) return 1;
        return 0;
    });

    renderTable();
}

// Filtering function
function filterTable() {
    let filterValue = document.getElementById('filter-input').value.toLowerCase();
    let filteredData = userData.filter(user => {
        return user.name.toLowerCase().includes(filterValue) || user.email.toLowerCase().includes(filterValue);
    });

    let tableBody = document.querySelector('#data-table tbody');
    tableBody.innerHTML = ''; // Clear the existing rows

    filteredData.forEach((user, index) => {
        let row = tableBody.insertRow();
        row.innerHTML = `
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.age}</td>
            <td>${user.gender}</td>
        `;
    });
}