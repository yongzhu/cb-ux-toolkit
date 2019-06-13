export interface Filters {
  defaultTitle: String,
  isPrefixedUsed: boolean,
  prefixVale?: string,
  options: string[],
  prefixType?: string
}

export interface Filter {
  name: string;
  id: number;
}

export interface Link {
  name: string;
  id: number;
}

export interface VerticalOptionData {
  name: string,
  icon: string
}

export interface ResultListModal {
  name: string,
  designation: string,
  orgnaisation: string,
  experience: {
    year: number
    month: number,
  },
  location: string,
  stateCode: string,
  phone: string
  email: string
  matchtype: string
  skills: string[],
  verticalOptions: VerticalOptionData[]
}

export interface UsedFilterData {
  filterName: string,
  config: {
    visible?: boolean,
    selectable: boolean,
    removable: boolean,
    addOnBlur?: boolean
  },
  data: Filter[]
}

export interface ResultDataModal {
  usedFilters?: UsedFilterData[],
  resultTabs?: Link[],
  resultTypeFilter?: Filter[],
  searchFilters?: Filters[],
  resultList?: ResultListModal[]
}

