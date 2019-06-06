import { propertyMap } from "../../utils/functions/propertyMap";
import { CutCandidateModel } from "../data-structures/candidate-model";
import { CutCompanyModel } from "../data-structures/company-model";
import { CutPhoneModel } from "../data-structures/phone-model";
export class CutCandidateMap implements CutCandidateModel {

  public id: string;
  public name: string;
  public company: CutCompanyModel[];
  public email: string;
  public phone: CutPhoneModel[];
  public tags: string[];
  public match: number;

  constructor() {
    this.id = null;
    this.name = null;
    this.company = null;
    this.email = null;
    this.phone = null;
    this.tags = [];
    this.match = null;
  }

}
