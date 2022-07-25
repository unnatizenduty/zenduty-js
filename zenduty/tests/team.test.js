const { ApiClient, TeamsApi } = require("../../zenduty-js");
const axios = require("axios");

const api = new ApiClient("9060913a6adfd511dbb310aaba36d11c1e6c0073");
var payload = {
name: "Operation Team"

};
console.log(api);
// c08f15da7d3c875b651ed0b2dae4ee088bcbedb1
// const request = require('supertest')
//const app = require('../server')
///api/account/teams/927736e5-e3a0-4c35-9ddc-3318029bd00e/escalation_policies/
describe("Get Endpoints", () => {
  it("should get a new post", () => {
    api.call_api(
      "/api/account/teams/8ecc797e-8b4b-46bb-908c-058a328ff9fd",
      "get",
      (body = payload)
    );

    // axios
    //   .post(
    //     "api/account/teams/927736e5-e3a0-4c35-9ddc-3318029bd00e/escalation_policies/",
    //     {
    //       name: "New Escalation Policy",
    //     }
    //   )
    //   .then((res) => {
    //     console.log(`statusCode: ${res.status}`);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  });
});
//const { ApiClient, EventsApi } = require("../../zenduty-js");
//const axios = require("axios");

//const api = new ApiClient("9060913a6adfd511dbb310aaba36d11c1e6c0073");

//const { ApiClient, EventsApi } = require("../../zenduty-js");
//const axios = require("axios");

//const api = new ApiClient("9060913a6adfd511dbb310aaba36d11c1e6c0073");
var payload = {
name: "Operation Team"

};
console.log(api);
// c08f15da7d3c875b651ed0b2dae4ee088bcbedb1
// const request = require('supertest')
//const app = require('../server')
///api/account/teams/927736e5-e3a0-4c35-9ddc-3318029bd00e/escalation_policies/
describe("Post Endpoints", () => {
  it("should create a new post", () => {
    api.call_api(
      "/api/account/teams/8ecc797e-8b4b-46bb-908c-058a328ff9fd",
      "post",
      (body = payload)
    );

    // axios
    //   .post(
    //     "api/account/teams/927736e5-e3a0-4c35-9ddc-3318029bd00e/escalation_policies/",
    //     {
    //       name: "New Escalation Policy",
    //     }
    //   )
    //   .then((res) => {
    //     console.log(`statusCode: ${res.status}`);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  });
});
//const { ApiClient, EventsApi } = require("../../zenduty-js");
//const axios = require("axios");

//const api = new ApiClient("9060913a6adfd511dbb310aaba36d11c1e6c0073");
//const { ApiClient, EventsApi } = require("../../zenduty-js");
//const axios = require("axios");

//const api = new ApiClient("9060913a6adfd511dbb310aaba36d11c1e6c0073");
var payload = {
name: "Modified Team"

};
console.log(api);
// c08f15da7d3c875b651ed0b2dae4ee088bcbedb1
// const request = require('supertest')
//const app = require('../server')
///api/account/teams/927736e5-e3a0-4c35-9ddc-3318029bd00e/escalation_policies/
describe("Put Endpoints", () => {
  it("should update a new post", () => {
    api.call_api(
      "/api/account/teams/8ecc797e-8b4b-46bb-908c-058a328ff9fd",
      "get",
      (body = payload)
    );

    // axios
    //   .post(
    //     "api/account/teams/927736e5-e3a0-4c35-9ddc-3318029bd00e/escalation_policies/",
    //     {
    //       name: "New Escalation Policy",
    //     }
    //   )
    //   .then((res) => {
    //     console.log(`statusCode: ${res.status}`);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  });
});
//const { ApiClient, EventsApi } = require("../../zenduty-js");
//const axios = require("axios");

//const api = new ApiClient("9060913a6adfd511dbb310aaba36d11c1e6c0073");

