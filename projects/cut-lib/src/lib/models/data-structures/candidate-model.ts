import { CutCompanyModel } from './company-model';
import { CutPhoneModel } from './phone-model';

export interface CutCandidateModel {
  id: string;
  name: string;
  company: CutCompanyModel[];
  email: string;
  phone: CutPhoneModel[];
  tags: string[];
  match?: number;
}
