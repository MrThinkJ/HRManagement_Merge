  document.addEventListener("DOMContentLoaded", function() {
    var form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
      event.preventDefault(); 
      var url = form.getAttribute('action');

      var formData = new FormData(form);

      fetch(url, {
          method: 'POST',
          body: formData
        })
        .then(function(response) {
          if (response.ok) {
            console.log(response);
            alert('Form submitted successfully!');
          } else {
            console.error('Form submission failed!');
            alert('Form submission failed! Please try again later.');
          }
        })
        .catch(function(error) {
          console.error('Error:', error);
          alert('An error occurred while submitting the form. Please try again later.');
        });
    });
  });

  

  // Thêm
  document.addEventListener('DOMContentLoaded', function() {
    const createButton = document.querySelector('.btn.btn-default[value="Create"]');
    
    createButton.addEventListener('click', function(event) {
        event.preventDefault();
        
        const firstName = document.querySelector('#First_Name').value;
        const lastName = document.querySelector('#Last_Name').value;
        const middleInitial = document.querySelector('#Middle_Initial').value;
        const address1 = document.querySelector('#Address1').value;
        const address2 = document.querySelector('#Address2').value;
        const city = document.querySelector('#City').value;
        const state = document.querySelector('#State').value;
        const zip = document.querySelector('#Zip').value;
        const email = document.querySelector('#Email').value;
        const phoneNumber = document.querySelector('#Phone_Number').value;
        const socialSecurityNumber = document.querySelector('#Social_Security_Number').value;
        const driversLicense = document.querySelector('#Drivers_License').value;
        const maritalStatus = document.querySelector('#Marital_Status').value;
        const gender = document.querySelector('#Gender').value;
        const shareholderStatus = document.querySelector('#Shareholder_Status').value;
        const benefitPlans = document.querySelector('#Benefit_Plans').value;
        const ethnicity = document.querySelector('#Ethnicity').value;
        const vacationDays = document.querySelector('#VacationDays').value;
        const paidToDate = document.querySelector('#PaidToDate').value;
        const paidLastYear = document.querySelector('#PaidLastYear').value;
        const payRate = document.querySelector('#PayRate').value;
        const payRateId = document.querySelector('#PayRateID').value;
        const createdAt = document.querySelector('#CreatedAt').value;
        const updatedAt = document.querySelector('#UpdatedAt').value;

        const dataToCreate = {
            firstName: firstName,
            lastName: lastName,
            middleInitial: middleInitial,
            address1: address1,
            address2: address2,
            city: city,
            state: state,
            zip: zip,
            email: email,
            phoneNumber: phoneNumber,
            socialSecurityNumber: socialSecurityNumber,
            driversLicense: driversLicense,
            maritalStatus: maritalStatus,
            gender: gender,
            shareholderStatus: shareholderStatus,
            benefitPlans: benefitPlans,
            ethnicity: ethnicity,
            vacationDays: vacationDays,
            paidToDate: paidToDate,
            paidLastYear: paidLastYear,
            payRate: payRate,
            payRateId: payRateId,
            createdAt: createdAt,
            updatedAt: updatedAt
        };
        
        fetch('http://localhost:8080/api', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataToCreate)
        })
        .then(response => response.json())
        .then(result => {
            console.log('Kết quả tạo mới:', result);
            window.location.href = './index.html';
        })
        .catch(error => console.error('Đã có lỗi khi tạo mới:', error));
    });
});


