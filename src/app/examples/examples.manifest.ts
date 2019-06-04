import {
  HeaderComponentExample, 
  LoadingIndicatorComponentExample,
  ResultTabComponentExample,
  SearchbarComponentExample,
  SearchResultComponentExample,
  UsedFilterComponentExample
} from "./components";

export const examplesManifest: any = {
  components: {
    "loading-indicator": {
      component: LoadingIndicatorComponentExample
    },
    "header": {
      component: HeaderComponentExample
    },
    "searchbar": {
      component: SearchbarComponentExample
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
    /* 'buttons': {
      component:
    } */
  }
};
