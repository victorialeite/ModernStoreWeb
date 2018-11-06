import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';



@Injectable()
export class DataService {
    private serviceUrl: string = 'https://modernstore-api.azurewebsites.net/';

    constructor(private http : Http){

    }

    createUser(data: any){
        return this.http
            .post(this.serviceUrl + 'v1/customers', data)
            .map((res: Response) => res.json());
    }

    // getProducts() {
    //     return this.http
    //         .get('https://modernstore-api.azurewebsites.net/v1/products')
    //         .map((res: Response) => res.json()); // mapeia o response para um objeto do tipo json
    // }
}