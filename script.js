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
        if(response.ok){
            const data = await response.json();
            const token = data.token;
            localStorage.setItem("token", token);
            window.location.replace("home.html");
        }else {
            alert("Login failed, please check your credentials")
        }
    }catch(error) {
        console.error("Error during login", error);
        alert("An error occured. Please try again."); 
    }
}