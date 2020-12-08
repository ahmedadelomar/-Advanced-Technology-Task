var name
var email
var phone
var message

function onSubmitForm() {
    name = document.getElementById("Name").value
    email = document.getElementById("Email").value
    phone = document.getElementById("Phone").value
    message = document.getElementById("Message").value
    if (validationForm()) {
        alert("The Informations Send Successfully");
    }
}

function validationForm() {
    if (!name) {
        alert("Please Enter your Name");
        return false
    } else if (!email) {
        alert("Please Enter your email");
        return false
    } else if (email && !email.match('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')) {
        alert("Please Enter a valid email");
        return false
    } else if (!phone) {
        alert("Please Enter your phone");
        return false
    } else if (!message) {
        alert("Please Enter your message");
        return false
    } else {
        return true
    }
}


fetch("https://jsonplaceholder.typicode.com/users").then(response => response.json())
    .then(response => {
        console.log(response)
        let table = `
        <tr>
        <th>Name</th>
        <th>User Name</th>
        <th>Email</th>
        <th>Phone</th>
        </tr>`;

        response.forEach(user => {
            table += `<tr> 
                <td>${user.name} </td> 
                <td>${user.username}</td>          
                <td>${user.email}</td>          
                <td>${user.phone}</td>          
            </tr>`;
        });

        document.getElementById("users").innerHTML = table;
    });