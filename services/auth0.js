import auth0 from 'auth0-js';
import Cookies from "js-cookie";

class Auth0 {

    constructor() {
        this.auth0 = new auth0.WebAuth({
            domain: 'sauthrully.auth0.com',
            clientID: 'SxCtvyk0UPTKk7PoyNsPORwvXc5wVQcG',
            redirectUri: 'http://localhost:3000/callback',
            responseType: 'token id_token',
            scope: 'openid profile'
        });

        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.handleAuthentication = this.handleAuthentication.bind(this);
        this.isAuthenticated = this.isAuthenticated.bind(this);
    }

    handleAuthentication() {
        return new Promise((resolve, reject) => {
            this.auth0.parseHash((err, authResult) => {
                if (authResult && authResult.accessToken && authResult.idToken) {
                    this.setSession(authResult);
                    resolve();
                } else if (err) {
                    reject(err);
                    console.log(err);
                }
            });
        })
    }

    setSession(authResult) {
        const expiresAT = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
        //localStorage.setItem('access_token', authResult.accessToken);
        
        Cookies.set('user', authResult.idTokenPayload);
        Cookies.set('jwt', authResult.idToken);
        Cookies.set('expiresAT', expiresAT);


    }

    logout() {
        Cookies.remove('user');
        Cookies.remove('jwt');
        Cookies.remove('expiresAT');

        this.auth0.logout({
            returnTo: '',
            clientID: 'SxCtvyk0UPTKk7PoyNsPORwvXc5wVQcG',
        });
    }


    login() {
        this.auth0.authorize();
    }

    isAuthenticated(){
        const expiresAT = Cookies.getJSON('expiresAT');
        return new Date().getTime() < expiresAT;
    }
}

const auth0Client = new Auth0();

export default auth0Client;