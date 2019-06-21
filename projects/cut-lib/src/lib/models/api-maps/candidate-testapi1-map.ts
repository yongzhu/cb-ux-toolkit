import { propertyMap } from "../../utils/functions/propertyMap";
import { buildModel } from "../../utils/functions/buildModel";
import { CutCompanyModel } from "../data-structures/company-model";
import { CutPhoneModel } from "../data-structures/phone-model";
import { CutCandidateMap } from "./candidate-map";

export class CutCandidateTestapi1Map extends CutCandidateMap {

  public id: string;

  @propertyMap(["first_name", "last_name"])
    public name: string;

  @buildModel( { employment: { [0] } } )
    public company: CutCompanyModel[];

  @buildModel( { emails: { [0] : { email } } } )
    public email: string;

  @propertyMap( { phone_number: [0] } )
    public phone: CutPhoneModel[];

    public tags: string[];

  constructor() {
    super();
  }

}
