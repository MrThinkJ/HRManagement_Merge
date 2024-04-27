// function populateTable() {
//     fetch('http://localhost:4000/api/employee')
//         .then(response => response.json())
//         .then(result => {
//             const data = result.data;
//             let d = 0;
//             const tableBody = document.querySelector('.module-body table tbody');
//             data.forEach(personal => {
//                 const row = document.createElement('tr');
//                 d++;
//                 row.innerHTML = `
//                     <td>${d}</td>
//                     <td>${personal.firstName}</td>
//                     <td>${personal.lastName}</td>
//                     <td>${personal.vacationDays}</td>
//                     <td>${personal.paidToDate}</td>
//                     <td>${personal.paidLastYear}</td>
//                     <td>${personal.payRate}</td>
//                     <td>${personal.payRateId}</td>
//                     <td>${personal.createdAt}</td>
//                     <td>${personal.updatedAt}</td>
//                     <td><a href="Edit/${personal._id}">Edit</a></td>
//                 `;
//                 tableBody.appendChild(row);
//             });
//         })
//         .catch(error => console.error('Đã có lỗi:', error));
// }

// window.addEventListener('DOMContentLoaded', populateTable);

fetch('http://localhost:4000/api/employee')
  .then(response => response.json())
  .then(result => {
    const employeeData = result.data; // Store data in an array
    initializeDataTable(employeeData); // Call function to initialize table
  })
  .catch(error => console.error('Đã có lỗi:', error));

  function initializeDataTable(data) {
    $(document).ready(function() {
      $('#your-table-id').DataTable({
        data: data, // Pass the fetched data to the data option
        columns: [
          { data: null }, // Use data: null for row numbering (explained later)
          { data: 'firstName' },
          { data: 'lastName' },
          { data: 'vacationDays' },
          { data: 'paidToDate'},
          { data: 'paidLastYear'},
          { data: 'payRate'},
          {data: 'payRateId'},
          {data: 'createdAt'},
          {data: 'updatedAt'}
        ],
        // Add other options for search, sorting, etc.
      });
    });
  }

{/* <td>${personal.middleInitial}</td>
    <td>${personal.address1}</td>
    <td>${personal.address2}</td>
    <td>${personal.city}</td>
    <td>${personal.state}</td>
    <td>${personal.zip}</td>
    <td>${personal.email}</td>
    <td>${personal.phoneNumber}</td>
    <td>${personal.socialSecurityNumber}</td>
    <td>${personal.driversLicense}</td>
    <td>${personal.maritalStatus}</td>
    <td>${personal.gender}</td>
    <td>${personal.shareholderStatus}</td>
    <td>${personal.benefitPlans}</td>
    <td>${personal.ethnicity}</td> */}