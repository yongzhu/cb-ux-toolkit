import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { CutCandidateMap } from "../models/api-maps/candidate-map";
import { CutCandidateTestapi1Map } from "../models/api-maps/candidate-testapi1-map";
import { CutCandidateTestapi2Map } from "../models/api-maps/candidate-testapi2-map";
import { CutCandidateNoLocalMap } from "../models/api-maps/candidate-nolocal-map";
import { CutApiService } from "../utils/cut-api.service";

@Component({
  selector: "cut-searchbar",
  templateUrl: "./searchbar.component.html",
  styleUrls: ["./searchbar.component.scss"]
})
export class CutSearchbarComponent implements OnInit, OnDestroy {
  @Input() searchapi: string;
  @Input() map: string;
  @Output() resultDispatch = new EventEmitter();

  destroy$: Subject<boolean> = new Subject<boolean>();
  searchForm: FormGroup;
  formSubmitted = false;

  mapIndex = {
    "CutCandidateTestapi1Map" : CutCandidateTestapi1Map,
    "CutCandidateTestapi2Map" : CutCandidateTestapi2Map,
    "CutCandidateNoLocalMap" : CutCandidateNoLocalMap
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
    this.api.searchText<CutCandidateMap[]>(this.searchapi, this.searchForm.value.searchText, this.mapIndex[this.map])
      .pipe(takeUntil(this.destroy$)).subscribe(
        searchResponse => {
          this.resultDispatch.emit(searchResponse);
        },
        err => {
          this.resultDispatch.emit(new Error(err));
        }
      );
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
