const BASE_URL = "https://dummyjson.com";

async function login() {
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    try{
        const response = await fetch(`${BASE_URL}/auth/login`, {
            method: "POST",
            header: {
                "content-Type": "application/json"
            },
            body: JSON.stringify({username, password})
        })
    }catch(e) {

    }
}