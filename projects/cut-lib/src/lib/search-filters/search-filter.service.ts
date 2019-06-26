import { Subject } from "rxjs";
import { CityFacetModel } from "../models/data-structures/city-facet-model";
import { CutResultModel } from "../models/data-structures/result-model";

export class SearchFilterService {

  private resultData: CutResultModel;

  cityFilterValueHandler = new Subject<CityFacetModel>();

  setServiceData = (data: CutResultModel) => {
    this.resultData = data;
  }

}
