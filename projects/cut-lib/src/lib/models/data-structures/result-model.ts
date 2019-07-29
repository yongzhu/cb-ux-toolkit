import { CutFiltersModel } from "./filters-model";
import { CutUsedFilterModel } from "./used-filter-model";
import { CutNameIdModel } from "./name-id-model";
import { CutResultListModel } from "./result-list-model";

export interface CutResultModel {
  filters?: {
    data: CutUsedFilterModel[];
    showComponent: boolean;
  };
  tabs?:
  {
    data: CutNameIdModel[];
    showComponent: boolean;
  }
  filtersType?:
  {
    data: CutNameIdModel[];
    showComponent: boolean;
  }
  actionFilters?:
  {
    data: CutFiltersModel[];
    showComponent: boolean;
  }
  resultList?:
  {
    data: CutResultListModel[];
    showComponent: boolean;
  }
}
