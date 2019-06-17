import { CutFilterModel } from "./filter-model";


export interface CutUsedFilterModel {
  filterName: string;
  config: {
    visible?: boolean;
    selectable: boolean;
    removable: boolean;
    addOnBlur?: boolean;
  };
  data: CutFilterModel[];
}