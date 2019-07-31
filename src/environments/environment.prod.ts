export const environment = {
  matGaId: "UA-8594346-24", // Production id
  ngGaId: "UA-8594346-15", // Production id
  production: true,
  search_api: {
    test_nolocal: "https://jsonplaceholder.typicode.com/users",
    test_api1: "http://localhost:3333/list?q=",
    test_api2: "http://localhost:3333/search?q="
  },
  map: 'CutCandidateTestapi2Map',
  searchApiData: {
    config: {
      "Content-Type": "application/json",
      "Authorization": 'Basic Y2ItdGstc2VhcmNoOkErc0FkY2V6b0l0cHlLRHNQRHkrT09ybE1XRS8='
    },
    params: {
      offset: 0,
      customer_system: 'cbinternalbeta',
    },
    //search_api_endpint: 'https://ats-tk-search-produs.cb1cl.com/api/candidatesearch'
  },
  search_api_endpint: 'mysearchapi/test/'
};
