import { Injectable } from '@angular/core';

import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from "rxjs/Rx";

const URL_COSTUMER = 'http://localhost:3004/passenger  ';

@Injectable()
export class PassengerService {

  constructor(private _http : Http) { }

  getPassengers_RXObsverable() {
    return this._http.get(URL_COSTUMER)
      .map((response: Response) => response.json())

      .catch(this._handlerError);
  }

  addPassenger_RXObsverable(nameInput) {
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

    return this._http.delete('http://localhost:3004/passenger/' + userID, options)
      .map((response: Response) => response.json())

      .catch(this._handlerError);
  }



  getPassengers() {
    return this._http.get(URL_COSTUMER)
      .map((response: Response) => response.json())
      .catch(this._handlerError);
  }

  _handlerError(err: any){
    console.log(err);

    return Observable.throw(err);
  }
}
/**
 * Created by Shai on 8/18/2016.
 */
