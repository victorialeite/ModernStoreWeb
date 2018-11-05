import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';



@Injectable()
export class DataService {

    constructor(private http : Http){

    }

    createUser(data: any){
        console.log(data);
    }

    getProducts() {
        this.http.get('https://modernstore-api.azurewebsites.net/v1/products');
    }
}