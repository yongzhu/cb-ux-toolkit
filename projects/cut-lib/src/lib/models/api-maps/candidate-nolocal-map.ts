import { propertyMap } from "../../utils/functions/propertyMap";
import { CutCompanyModel } from "../data-structures/company-model";
import { CutCandidateMap } from "./candidate-map";

export class CutCandidateNoLocalMap extends CutCandidateMap {

    public id: string;
    public name: string;
    public email: string;

    @propertyMap("company")
      public company: CutCompanyModel[];

    @propertyMap("phone")
      public phone: string;

    public tags: string[];

  constructor() {
    super();
  }

}
