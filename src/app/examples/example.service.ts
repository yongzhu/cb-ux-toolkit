import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()

export class ExampleService {

  serviceDataHandler = new Subject<any>();

  constructor() { }

  searchDataHandler = (data: any) => {
    this.serviceDataHandler.next(data);
    //console.log(data);
  }




}
