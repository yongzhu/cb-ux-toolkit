import { HttpRequest, HttpClient, HttpEventType } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subscription } from "rxjs";

@Injectable()

export class ExampleService {

  // constructor(private http: HttpClient) { }
  constructor(private http: HttpClient) { }

  getSearchData() {

    return this.http.post('/api/test',
      {
        customHeader: {
          "Content-Type": "application/json; charset=utf-8",
          "Authorization": 'Basic Y2ItdGstc2VhcmNoOkErc0FkY2V6b0l0cHlLRHNQRHkrT09ybE1XRS8='
        },
        customBody: {
          host: 'ats-tk-search-produs.cb1cl.com',
          path: '/api/candidatesearch?query=sql&offset=0&customer_system=cbinternalbeta',
        }
      })
  }

}
