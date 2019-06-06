import { CutAddressModel } from './address-model';

export interface CutCompanyModel {
  name: string;
  title: string;
  address: CutAddressModel[];
  start_date: Date;
  end_date: Date;
}
