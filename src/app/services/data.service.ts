import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';



@Injectable()
export class DataService {
    private serviceUrl: string = 'https://localhost:44329/';

    constructor(private http: Http) {

    }

    createUser(data: any) {
        return this.http
            .post(this.serviceUrl + 'v1/customers', data)
            .map((res: Response) => res.json());
    }

    authenticate(data: any) {
        var dt = "grant_type=password&username=" + data.username + "&password=" + data.password;
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let options = new RequestOptions({ headers: headers });

        return this.http
            .post(this.serviceUrl + 'v1/authenticate', dt, options)
            .map((res: Response) => res.json());
    }

    validateToken(token: string) {
        if(!token || token == ''){
            return false;
        }
        return true;
    }

    // getProducts() {
    //     return this.http
    //         .get('https://modernstore-api.azurewebsites.net/v1/products')
    //         .map((res: Response) => res.json()); // mapeia o response para um objeto do tipo json
    // }
}