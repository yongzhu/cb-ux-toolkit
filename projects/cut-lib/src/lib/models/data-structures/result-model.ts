import { CutFiltersModel } from "./filters-model";
import { CutUsedFilterModel } from "./used-filter-model";
import { CutNameIdModel } from "./name-id-model";
import { CutResultListModel } from "./result-list-model";

export interface CutResultModel {
  usedFilters?: CutUsedFilterModel[];
  resultTabs?: CutNameIdModel[];
  resultTypeFilter?: CutNameIdModel[];
  searchFilters?: CutFiltersModel[];
  resultList?: CutResultListModel[];
}
