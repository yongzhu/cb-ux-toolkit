import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { map, catchError, tap  } from "rxjs/operators";
import { ModelMapper } from "./functions/ModelMapper";
import { ObserversModule } from "@angular/cdk/observers";
import { CutResultModel } from "../models/data-structures/result-model";

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
      tap(data => console.log('api', data))
    )
  }

  public staticTest<T>(): Observable<CutResultModel> {
    const result: CutResultModel = {
      usedFilters: [
        {
          filterName: "Full Text",
          config: {
            visible: true,
            selectable: false,
            removable: true,
            addOnBlur: true
          },
          data: [{ name: "sale", id: 1 }, { name: "auto", id: 2 }]
        },
        {
          filterName: "Partial",
          config: {
            visible: true,
            selectable: false,
            removable: true,
            addOnBlur: true
          },
          data: [{ name: "sale", id: 1 }, { name: "fresh", id: 2 }]
        }
  
      ],
      resultTabs: [
        { name: 'Candidates', id: 1 },
        { name: 'Requistions', id: 2 },
        { name: 'Reports', id: 3 }
      ],
      resultTypeFilter: [
        { name: 'All', id: 1 },
        { name: 'In Progress', id: 2 },
        { name: 'My Candidates', id: 3 },
        { name: 'Resume Database', id: 4 }
      ],
      searchFilters: [
        {
          defaultTitle: 'Actions',
          isPrefixedUsed: false,
          prefixVale: '',
          options: [
            'Action',
            'Action1',
            'Action2',
            'Action3',
            'Action4'
          ],
          prefixType: ':'
        },
        {
          defaultTitle: '',
          isPrefixedUsed: true,
          prefixVale: 'Sort By',
          options: [
            'Option1',
            'Option2',
            'Option3',
            'Option4'
          ],
          prefixType: 'colon'
        },
        {
          defaultTitle: '',
          isPrefixedUsed: true,
          prefixVale: 'Freshness',
          options: [
            'Last Year',
            'Option2',
            'Option3',
            'Option4'
          ],
          prefixType: ''
        }
      ],
      resultList: [
        {
          id: "Q5ANR-lTP11sxF8",
          name: 'John Thomas',
          designation: 'Senior Sales Associate',
          orgnaisation: 'Apple Inc',
          experience: {
            year: 3,
            month: 8,
          },
          location: 'Cupertino',
          stateCode: 'CA',
          phone: '408-903-1029',
          email: 'john.thomas@apple.com',
          matchtype: 'Great Match',
          skills: [
            'sales experience',
            '10 year of experience',
            'presentation skill',
            'quick search',
            'devlopment head'
          ],
          verticalOptions: [
            {
              name: 'Option1',
              icon: 'arrow_right_alt'
            },
            {
              name: 'Option2',
              icon: 'arrow_right_alt'
            },
            {
              name: 'Option3',
              icon: 'arrow_right_alt'
            },
            {
              name: 'Option4',
              icon: 'arrow_right_alt'
            }
          ]
        }
      ]
    };

    return new Observable((observer) => {
      observer.next(result);
      observer.complete();
    });
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
