// Functions related to authentication
class Auth {
    constructor() {
        this.login.bind(this);
    }

    login = (email, password, callback) => {
        fetch(`${process.env.REACT_APP_API_BASE}/api/login`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',            
            },
            body: JSON.stringify({
                email: email,
                password: password
            }),
        })
        .then(response => {
            if (response.ok) {
                callback();
            }
        })
    }

    verify = (handleFailure, callback) => {
        fetch(`${process.env.REACT_APP_API_BASE}/api/verifyuser`, {
            method: 'GET',
            credentials: 'include',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
            }
          })
          .then(async response => {
            if (response.ok) {
                callback();
            } else {
                handleFailure();
            }
          })
          
    }

    logout(callback) {
        fetch(`${process.env.REACT_APP_API_BASE}/api/logout`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
        })
        .then(response => {
            callback();
        })
    }

    signUp = (name, email, password, callback) => {
        fetch(`${process.env.REACT_APP_API_BASE}/api/signup`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password
            }),
        })
        .then(response => {
            if (response.ok) {
                callback();
            }
        });
    }
}

export default new Auth();