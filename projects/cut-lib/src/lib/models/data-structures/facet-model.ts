import { DropDownModel } from "./drop-down-model";
import { CheckListModel } from "./check-list-model";
import { InputDropDownFacetModal } from "./Input-dropdown-facet-model";
import { SingleValueModel } from "./single-value-model";
import { ArrayValueModel } from "./array-value-model";

export interface FacetModal {
  inputDropDownValues: InputDropDownModal;
  inputValues: InputModal;
  checkListValues: CheckListDataModal
}

export interface InputDropDownModal {
  showFacet: boolean;
  autoCompeleteList: string[];
  facetTitle: string;
  inputTitle: string;
  dropDownOptions: DropDownModel;
  defaultMustHave: number;
}

export interface InputModal {
  showFacet: boolean;
  autoCompeleteList: string[];
  facetTitle: string;
  defaultMustHave: number;
}

export interface CheckListDataModal {
  optionsList: CheckListModel;
  showFacet: boolean;
  facetTitle: string;
  defaultMustHave: number;
}

export interface FacetEventDataModal {
  inputDropDownData?: InputDropDownFacetModal;
  inputdata?: SingleValueModel;
  checkListData?: ArrayValueModel;
}
