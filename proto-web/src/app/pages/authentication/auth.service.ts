import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

export interface RegisterModel {
    email: string;
    password: string;
    conirmPassword: string;
}

export interface LoginModel {
    email: string;
    password: string;
}

export interface EmailModel {
    email: string;
}

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    apiUrl: string;

    constructor(private http: HttpClient) {
        this.apiUrl = environment.apiUrl + '/api/auth';
    }

    signIn(model: LoginModel) {
        return this.http.post(this.apiUrl + '/login', model);
    }

    signUp(model: RegisterModel) {
        return this.http.post(this.apiUrl + '/register', model);
    }

    forgotPassword(model: EmailModel) {
        return this.http.post(this.apiUrl + '/forgot-password', model);
    }

    saveToken(response: any) {
        localStorage.setItem('userToken', response.token);
    }

    getToken(): string {
        return localStorage.getItem('userToken');
    }

    isLoggedin(): boolean {
        if  (localStorage.getItem('userToken')) {
            return true;
        }
        return false;
    }

    logOut() {
        localStorage.clear();
    }
}