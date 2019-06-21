import { CutCompanyModel } from "./company-model";

export interface CutCandidateModel {
  id: string;
  name: string;
  company: CutCompanyModel[];
  email: string;
  phone: string;
  tags: string[];
  match?: number;
}
