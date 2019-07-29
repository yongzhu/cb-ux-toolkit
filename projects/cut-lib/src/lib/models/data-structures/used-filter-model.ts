import { CutNameIdModel } from "./name-id-model";

export interface CutUsedFilterConfigModel {
  visible?: boolean;
  selectable: boolean;
  removable: boolean;
  addOnBlur?: boolean;
}

export interface CutUsedFilterModel {
  filterName: string;
  config: CutUsedFilterConfigModel;
  data: CutNameIdModel[]
}