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
// function checkNull(data, type, row){
//   if (data == null){
//     return "null"
//   } else return data

// }
// window.addEventListener('DOMContentLoaded', populateTable);
axios.get('http://localhost:8080/api/merge/employee')
  .then(function (response) {
    const data = response.data
    let counter = 0
            $('.table-1').DataTable({
                data: data,
                columns: [
                  { data: null, render: function (data, type, row) {
                    return counter+=0.5;
                  }, },
                  { data: 'firstName' },
                  { data: 'lastName' },
                  {data: 'middleInitial', render: checkNull},
                  {data: 'address1', render: checkNull},
                  {data: 'address2', render: checkNull},
                  {data: 'city', render: checkNull},
                  {data: 'state', render: checkNull},
                  {data: 'zip', render: checkNull},
                  {data: 'email', render: checkNull},
                  {data: 'phoneNumber', render: checkNull},
                  {data: 'socialSecurityNumber', render: checkNull},
                  {data: 'driversLicense', render: checkNull},
                  {data: 'maritalStatus', render: checkNull},
                  {data: 'gender', render: checkNull},
                  {data: 'shareholderStatus', render: checkNull},
                  {data: 'benefitPlans', render: checkNull},
                  {data: 'ethnicity', render: checkNull},
                  { data: 'vacationDays' , render: checkNull},
                  { data: 'paidToDate', render: checkNull},
                  { data: 'paidLastYear', render: checkNull},
                  { data: 'payRate', render: checkNull},
                  {data: 'payRateId', render: checkNull},
                  {data: 'createdAt', render: checkNull},
                  {data: 'updatedAt', render: checkNull}
                ],
                searching: true
              });
  })
  .catch(function (error) {
    console.log(error);
  });

// function checkNull(data, type, row){
//   if (data == null) { return "null" }
//   else return data
// }

function fetchData(){
    fetch('http://localhost:8080/api/merge/employee')
        .then(response => response.json())
        .then(result => {
            const data = result.data;
            console.log(data)
            
        })
        .catch(error => console.error('Đã có lỗi:', error));
}

// window.addEventListener('DOMContentLoaded', fetchData);

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