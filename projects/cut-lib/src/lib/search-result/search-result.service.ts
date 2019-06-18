import { CutResultModel } from "../models/data-structures/result-model";

export class SearchResultService {

  private resultData: CutResultModel;

  getFilter = (name: string) => {
    return this.resultData[name];
  }

  setServiveData = (data: CutResultModel) => {
    this.resultData = data;
  }

  getServiceData = () => {
    return this.resultData;
  }

}
