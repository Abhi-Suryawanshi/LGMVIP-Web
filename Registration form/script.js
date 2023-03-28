function displayInput() {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('mail').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;

    const studentData = document.createElement('div');
    studentData.classList.add('student-data');

    const nameElement = document.createElement('p');
    nameElement.innerHTML = '<b>Name:</b> ' + name;
    studentData.appendChild(nameElement);
    
    const phoneElement = document.createElement('p');
    phoneElement.innerHTML = '<b>Contact Number:</b> ' + phone;
    studentData.appendChild(phoneElement);
    
    const emailAddress = document.createElement('p');
    emailAddress.innerHTML = '<b>Email ID</b>:' + email;
    studentData.appendChild(emailAddress);
 
    const genderElement = document.createElement('p');
    genderElement.innerHTML = '<b>Gender:<b> ' + (male.checked ? 'Male' : 'Female');
    studentData.appendChild(genderElement);
    
    const studentInfo = document.getElementById('student-info');
    studentInfo.appendChild(studentData);

    document.getElementById('name').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('mail').value = '';
    document.getElementById('male').checked = false;
    document.getElementById('female').checked = false;

    return false;
}