import { Injectable } from '@angular/core';

import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from "rxjs/Rx";

//const URL_COSTUMER = 'http://jsonplaceholder.typicode.com/posts';
//const URL_COSTUMER = 'http://localhost:3000/cat/576abd71f3e675f016b20156/';

const URL_COSTUMER = 'http://localhost:3003/driver  ';
//const URL_COSTUMER = 'http://localhost:3000/cat  ';

@Injectable()
export class DriverService {

    constructor(private _http : Http) { }

    getCostumers_RXObsverable() {
      return this._http.get(URL_COSTUMER)
        .map((response: Response) => response.json())

        .catch(this._handlerError);
    }

    addCostumer_RXObsverable(nameInput) {
      //test
      let jsonTest= {name: nameInput};

      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({headers : headers});
      let body = JSON.stringify(jsonTest);
      return this._http.post(URL_COSTUMER, body, options)
        .map((response: Response) => response.json())

        .catch(this._handlerError);
    }

    deleteUser_RXObservable(userID){
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({headers : headers});

      return this._http.delete('http://localhost:3003/driver/' + userID, options)
        .map((response: Response) => response.json())

        .catch(this._handlerError);
    }



    getCostumers() {
    return this._http.get(URL_COSTUMER)
      .map((response: Response) => response.json())
      .catch(this._handlerError);
    }

    _handlerError(err: any){
      console.log(err);

      return Observable.throw(err);
    }
}
