import { CutCandidateModel } from "./candidate-model";
import { CutFilterModel } from "./filter-model";
import { CutFiltersModel } from "./filters-model";
import { CutLinkModel } from "./link-model";
import { CutUsedFilterModel } from "./used-filter-model";

export interface CutResultModel {
  usedFilters?: CutUsedFilterModel[];
  resultTabs?: CutLinkModel[];
  resultTypeFilter?: CutFilterModel[];
  searchFilters?: CutFiltersModel[];
  resultList?: CutCandidateModel[];
}
