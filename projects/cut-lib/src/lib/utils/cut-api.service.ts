import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { map, catchError, tap } from "rxjs/operators";
import { ModelMapper } from "./functions/ModelMapper";
import { ObserversModule } from "@angular/cdk/observers";

@Injectable({
  providedIn: "root"
})
export class CutApiService {

  constructor(
    private http: HttpClient
  ) { }

  public searchText<T>(searchURL: string, searchText: string, itemType: any): Observable<T> {
    const options = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };
    const queryString = searchURL + "" + searchText;

    if (itemType) {
      return this.http.get<any>(queryString, options).pipe(
        map(data => data.map((item: any) => {
          return new ModelMapper(itemType).map(item);
        })),
        catchError((e) => this.handleError(e))
      );
    } else {
      return this.http.get<any>(queryString, options).pipe(
        map(data => {
          return data;
        })
      );
    }
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
