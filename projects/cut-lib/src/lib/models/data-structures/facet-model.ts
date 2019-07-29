import { DropDownModel } from "./drop-down-model";
import { CheckListModel } from "./check-list-model";

export interface InputDropDownModal {
  showFacet: boolean;
  autoCompeleteList: string[];
  facetTitle: string;
  inputTitle: string;
  dropDownOptions: DropDownModel[];
  defaultMustHave: number;
  type: string;
  fieldToWorkWith: string;
}

export interface InputModal {
  showFacet: boolean;
  autoCompeleteList: string[];
  facetTitle: string;
  defaultMustHave: number;
  type: string;
  fieldToWorkWith: string;
}

export interface CheckListDataModal {
  optionsList: CheckListModel[];
  showFacet: boolean;
  facetTitle: string;
  defaultMustHave: number;
  type: string;
  fieldToWorkWith: string;
}
