import { propertyMap } from "../../utils/functions/propertyMap";
import { CutCompanyModel } from "../data-structures/company-model";
import { CutPhoneModel } from "../data-structures/phone-model";
import { CutCandidateMap } from "./candidate-map";

export class CutCandidateTestapi1Map extends CutCandidateMap {

  public name: string;
  public usedFilters: any[];
  public resultTabs: any[];
  public resultTypeFilter: any[];
  public searchFilters: any[];
  public resultList: any[];

  constructor() {
    super();
  }

}
