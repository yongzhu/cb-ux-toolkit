import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { CutCandidateMap } from "../models/api-maps/candidate-map";
import { CutCandidateTestapi1Map } from "../models/api-maps/candidate-testapi1-map";
import { CutCandidateTestapi2Map } from "../models/api-maps/candidate-testapi2-map";
import { CutApiService } from "../utils/cut-api.service";

@Component({
  selector: "cut-searchbar",
  templateUrl: "./searchbar.component.html",
  styleUrls: ["./searchbar.component.scss"]
})
export class SearchbarComponent implements OnInit, OnDestroy {
  @Input("searchapi") searchapi: string;
  @Input("map") map: string;

  destroy$: Subject<boolean> = new Subject<boolean>();
  searchForm: FormGroup;
  formSubmitted = false;
  faSearch = faSearch;

  mapIndex = {
    "CutCandidateTestapi1Map" : CutCandidateTestapi1Map,
    "CutCandidateTestapi2Map" : CutCandidateTestapi2Map
  };

  constructor(
    public formBuilder: FormBuilder,
    public api: CutApiService
  ) { }

  ngOnInit() {
    this.createSearchForm();
  }

  createSearchForm() {
    this.searchForm = this.formBuilder.group({
      searchText: ["", Validators.required ]
   });
  }

  onFormSubmit() {
    this.formSubmitted = true;
    this.api.searchText<CutCandidateMap[]>(this.searchapi, this.searchForm.value, this.mapIndex[this.map])
      .pipe(takeUntil(this.destroy$)).subscribe(searchResponse => {
        console.log("Search Response", searchResponse);
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
