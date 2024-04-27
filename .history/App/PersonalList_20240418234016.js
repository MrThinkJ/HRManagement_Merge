const socket = new WebSocket("ws://localhost:8080/data-stream");
socket.onmessage = function (event) {
  const data = JSON.parse(event.data);
  console.log("Received data:", data);
};

function checkNull(data, type, row){
  if (data == null){
    return ""
  } else return data

}
// window.addEventListener('DOMContentLoaded', populateTable);
// axios.get('http://localhost:8080/api/merge/employee')
//   .then(function (response) {
//     const data = response.data
//     let counter = 0
//             $('.table-1').DataTable({
//                 data: data,
//                 columns: [
//                   { data: null, render: function (data, type, row) {
//                     return counter+=0.5;
//                   }, },
//                   { data: 'firstName' },
//                   { data: 'lastName' },
//                   {data: 'middleInitial', render: checkNull},
//                   {data: 'address1', render: checkNull},
//                   {data: 'address2', render: checkNull},
//                   {data: 'city', render: checkNull},
//                   {data: 'state', render: checkNull},
//                   {data: 'zip', render: checkNull},
//                   {data: 'email', render: checkNull},
//                   {data: 'phoneNumber', render: checkNull},
//                   {data: 'socialSecurityNumber', render: checkNull},
//                   {data: 'driversLicense', render: checkNull},
//                   {data: 'maritalStatus', render: checkNull},
//                   {data: 'gender', render: checkNull},
//                   {data: 'shareholderStatus', render: checkNull},
//                   {data: 'benefitPlans', render: checkNull},
//                   {data: 'ethnicity', render: checkNull},
//                   { data: 'vacationDays' , render: checkNull},
//                   { data: 'paidToDate', render: checkNull},
//                   { data: 'paidLastYear', render: checkNull},
//                   { data: 'payRate', render: checkNull},
//                   {data: 'payRateId', render: checkNull},
//                   {data: 'createdAt', render: checkNull},
//                   {data: 'updatedAt', render: checkNull}
//                 ],
//                 searching: true
//               });
//   })
//   .catch(function (error) {
//     console.log(error);
//   });


function fetchData(){
    fetch('http://localhost:8080/api/merge/employee')
        .then(response => response.json())
        .then(result => {
            const data = result.data;
            console.log(data)
            
        })
        .catch(error => console.error('Đã có lỗi:', error));
      }