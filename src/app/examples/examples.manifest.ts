import {
  LoadingIndicatorComponentExample,
  HeaderComponentExample,
  SearchResultComponentExample,
  UsedFilterComponentExample,
  ResultTabComponentExample,
  SRFilterTypeComponentExample,
  SRResultListComponentExample,
  SearchbarComponentExample,
  ResultFilterComponentExample,
  KpiTileComponentExample
} from './components';
import { SearchFilterComponentExample } from './search-filter/search-filter.component';

export const examplesManifest: any = {
  components: {
    "loading-indicator": {
      component: LoadingIndicatorComponentExample
    },
    "header": {
      component: HeaderComponentExample
    },
    "searchbar": {
      component: SearchbarComponentExample,
      title: "Search Bar"
    },
    "search-result": {
      component: SearchResultComponentExample,
      title: "Search Result"
    },
    "used-filter": {
      component: UsedFilterComponentExample,
      title: "Used Filters"
    },
    "result-tabs": {
      component: ResultTabComponentExample,
      title: "Result Tabs"
    },
    'sr-filter-type': {
      component: SRFilterTypeComponentExample,
      title: 'Filter Type Buttons'
    },
    'sr-result-list': {
      component: SRResultListComponentExample,
      title: 'Result List'
    },
    'sr-result-filter': {
      component: ResultFilterComponentExample,
      title: 'Result Filters'
    },
    'search-filter': {
      component: SearchFilterComponentExample,
      title: 'Search Filters'
    },
    "kpi-tile": {
			component: KpiTileComponentExample
		}
  }
};
