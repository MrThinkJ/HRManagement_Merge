function getEmployee() {
    fetch('localhost:8080/api/merge/employee')
      .then(response => response.json())
      .then(result => {
        const data = result.data; 
        console.log(data); 
        const totalUsers = data.length; 
        updateTotalUsers(totalUsers);
      })
      .catch(error => console.error('Đã có lỗi:', error));
}

  
  function updateTotalUsers(totalUsers) {
    const totalUsersElement = document.getElementById('totalUsers');
    totalUsersElement.innerText = totalUsers;

  }
  getEmployee()