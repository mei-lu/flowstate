class Profile {
    constructor() {
        this.authenticated = false;
        this.login = this.login.bind(this);
        this.verify = this.verify.bind(this);
        this.logout = this.logout.bind(this);
        this.signup = this.signup.bind(this);
    }

    login(email, password, callback) {
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
                this.authenticated = true;
            } else {
                this.authenticated = false;
            }
        }).then(() => {
            callback();
        })
    }

    verify(callback) {
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
              this.authenticated = true;
            } else {
              this.authenticated = false;
            }
          }).then(() => {
              callback();
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
            if (response.ok) {
                callback();
            }
        })
    }

    signup(name, email, password, callback) {
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
            if (!response.ok) {
                this.authenticated = false;
            } else {
                this.authenticated = true;
                callback();
            }
        })
    }
}

export default new Profile();