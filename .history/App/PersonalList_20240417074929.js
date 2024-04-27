function populateTable() {
    fetch('http://localhost:4000/api/employee')
        .then(response => response.json())
        .then(result => {
            const data = result.data;
            let d = 0;
            const tableBody = document.querySelector('.module-body table tbody');
            data.forEach(personal => {
                const row = document.createElement('tr');
                d++;
                row.innerHTML = `
                    <td>${d}</td>
                    <td>${personal.firstName}</td>
                    <td>${personal.lastName}</td>
    <td>${personal.vacationDays}</td>
    <td>${personal.paidToDate}</td>
    <td>${personal.paidLastYear}</td>
    <td>${personal.payRate}</td>
    <td>${personal.payRateId}</td>
    <td>${personal.createdAt}</td>
    <td>${personal.updatedAt}</td>
                    <td><a href="Edit/${personal._id}">Edit</a></td>
                `;
                tableBody.appendChild(row);
            });
        })
        .catch(error => console.error('Đã có lỗi:', error));
}

window.addEventListener('DOMContentLoaded', populateTable);
