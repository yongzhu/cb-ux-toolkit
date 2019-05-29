import { propertyMap } from "../../utils/functions/propertyMap";
import { CutCompanyModel } from "../data-structures/company-model";
import { CutPhoneModel } from "../data-structures/phone-model";
import { CutCandidateMap } from "./candidate-map";

export class CutCandidateTestapi2Map extends CutCandidateMap {

    public id: string;
    public name: string;

    @propertyMap('employment[0].label')
      public company: CutCompanyModel[];

    @propertyMap('emails[0].email')
      public email: string;

    @propertyMap('phone_numbers[0].number')
      public phone: CutPhoneModel[];

    public tags: string[];
    public match: number;

  constructor() {
    super();
  }

}
