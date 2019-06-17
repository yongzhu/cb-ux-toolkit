import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { map, catchError, tap  } from "rxjs/operators";
import { ModelMapper } from "./functions/ModelMapper";

@Injectable({
  providedIn: "root"
})
export class CutApiService {

  constructor(
    private http: HttpClient
  ) { }

  public searchText<T>(searchURL: string, searchText: string, itemType: any): Observable<T> {
    const options = {
      headers:  new HttpHeaders({
        "Content-Type": "application/json"
      })
    };

    /* This is going to need to be abstracted since with first layer
    of the API may not be an array */
    return this.http.get<any>(searchURL + "" + searchText, options).pipe(
      map(data => data.map((item: any) => {
        return new ModelMapper(itemType).map(item);
      })),
      catchError( (e) => this.handleError(e) ),
    );
  }

  /*
  public handleError (error: Error) {
    this._error$.next( error.message );
    return of([]);
  }
  */
 private handleError(error: HttpErrorResponse) {
  if (error.error) {
    // A client-side or network error occurred. Handle it accordingly.
    console.error("An error occurred:", error.error.message);
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong,
    console.error(
      `Backend returned code ${error.status}, ` +
      `body was: ${error.error}`);
  }
  // return an observable with a user-facing error message
  return throwError(
    "Something bad happened; please try again later.");
}

}
