import { LoadingIndicatorComponentExample, HeaderComponentExample, SearchResultComponentExample, UsedFilterComponentExample, ResultTabComponentExample } from './components';

export const examplesManifest: any = {
  components: {
    "loading-indicator": {
      component: LoadingIndicatorComponentExample
    },
    "header": {
      component: HeaderComponentExample
    },
    "search-result": {
      component: SearchResultComponentExample,
      title: 'Search Result'
    },
    "used-filter": {
      component: UsedFilterComponentExample,
      title: 'Used Filters'
    },
    'result-tabs': {
      component: ResultTabComponentExample,
      title: 'Result Tabs'
    },
    /* 'buttons': {
      component:
    } */
  }
};
