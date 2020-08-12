// @param {event} e - Event from the form submit button
// @param {string} email - Email entered in login form
// @param {string} password - Password enter in login form

export const handleLogin = async (email, password) => {
    await fetch(`${process.env.REACT_APP_API_BASE}/api/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            password: password
        }),
    })
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(error => console.error(error));
}