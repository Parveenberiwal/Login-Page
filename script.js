function loginPage(){
let username = document.getElementById('username').value;
let password = document.getElementById('password').value;

//Loginpage logic by if else condition
if(username === 'admin' && password === 'password'){
    alert('Login Successful');
    }
    else{
        alert('Invalid Username & Password. Please try again.');
    }
}