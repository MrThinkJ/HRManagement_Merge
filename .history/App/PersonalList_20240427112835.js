function checkNull(data, type, row){
  if (data == null){
    return ""
  } else return data

}

  axios.get('http://localhost:8080/api/merge/employee')
    .then(function (response) {
      const data = response.data
      let counter = 0
      new DataTable(".table-1",{
        scrollXInner:true,
        retrieve: true,
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
            {data: 'updatedAt', render: checkNull},
            { 'data': null, "render": function (data) {
              const firstName = data.firstName
              const lastName = data.lastName
              return `<div class='btn-group'> <button type='button' onclick=location.href='./Edit.html' class='btn btn-success'>Edit</button><button type='button' onclick=deleteEmployee("${firstName.replace('"','')}","${lastName}") class='btn btn-danger btn-delete'>Delete</button></div>` }},
          ],
        searching: true,
        "bDestroy": true,
      });
    })
    .catch(function (error) {
      console.log(error);
    });

function deleteEmployee(firstName, lastName){
  axios.delete(`http://localhost:8080/api/delete`,
    {data:{"firstName": firstName,
    "lastname": lastName}})
      .then(response =>{
        console.log(response);
        alert(`Delete employee ${firstName}${lastName} successfully`);
      })
      .catch(error=>{
        console.log(error);
        alert(`Delete employee ${firstName}${lastName} error`);
      })
}

function connect(event) {
  var socket = new SockJS('http://127.0.0.1:8080/ws');
  stompClient = Stomp.over(socket);
  stompClient.connect({}, onConnected, onError);
}

function onConnected() {
  stompClient.subscribe('/topic/public', onMessageReceived);
}

function onError(error) {
  connectingElement.textContent = 'Could not connect to WebSocket server. Please refresh this page to try again!';
  connectingElement.style.color = 'red';
}

function onMessageReceived(payload) {
  let data = JSON.parse(payload.body);
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
        {data: 'updatedAt', render: checkNull},
        { 'data': null, title: 'Action', wrap: true, "render": function (item) { return '<div class="btn-group"> <button type="button" onclick="set_value(' + item.ID + ')" value="0" class="btn btn-warning" data-toggle="modal" data-target="#myModal">View</button></div>' } },
      ],
      searching: true,
      "bDestroy": true
  });
}

connect()
