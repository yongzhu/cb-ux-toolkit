import { Subject } from "rxjs";
import { CityFilterModel } from "../models/data-structures/city-filter-model";
import { CutResultModel } from "../models/data-structures/result-model";

export class SearchFilterService {

  private resultData: CutResultModel;

  cityFilterValueHandler = new Subject<CityFilterModel>();

  setServiceData = (data: CutResultModel) => {
    this.resultData = data;
  }

}
