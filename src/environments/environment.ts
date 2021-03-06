// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
  matGaId: "", // No development id for Material
  ngGaId: "UA-8594346-26", // Development id
  production: false,
  search_api: {
    test_nolocal: "https://jsonplaceholder.typicode.com/users",
    test_api1: "http://localhost:3333/list?q=",
    test_api2: "http://localhost:3333/search?q="
  }
};
