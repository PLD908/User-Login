const BASE_URL = "https://dummyjson.com";

async function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    try{
        const response = await fetch(`${BASE_URL}/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({username, password})
        });
        localStorage.setItem("inputPassword", password);

        if(response.ok){
            const data = await response.json();
            const token = data.token;
            const inputUsername = data.username;
            localStorage.setItem("token", token);
            window.location.replace("home.html");
            localStorage.setItem("inputUsername", inputUsername);
            console.log(inputUsername);
        }else {
            alert("Login failed, please check your credentials")
        }
    }catch(error) {
        console.error("Error during login", error);
        alert("An error occured. Please try again."); 
    }
};

const inputUsername = document.getElementById('username');
const inputPassword = document.getElementById('password');

inputUsername.addEventListener('click', () => {
    const username = localStorage.getItem('inputUsername');
    inputUsername.value = username;
});

inputPassword.addEventListener('click', () => {
    const password = localStorage.getItem('inputPassword');
    const cleanedPassword = password.replace(/["\\]/g, '')
    inputPassword.value = cleanedPassword;
    console.log(inputPassword.value);
});