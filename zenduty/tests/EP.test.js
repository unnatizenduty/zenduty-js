const { ApiClient, EscalationPoliciesApi } = require("../../zenduty-js");
const axios = require("axios");

const api = new ApiClient("9060913a6adfd511dbb310aaba36d11c1e6c0073");
var payload = {
  name: "NewEscalationPolicy",
  summary: "Thisisthesummaryforthenewescalationpolicy",
  description: "ThisisthedescriptionfortheNewEscalationPolicy",
  rules: [
    {
      delay: 0,
      targets: [{ target_type: 2, target_id: "50012040-37db-4594-a268-a" }],
      position: 1,
      unique_id: "",
    },
  ],
};
console.log(api);
// c08f15da7d3c875b651ed0b2dae4ee088bcbedb1
// const request = require('supertest')
//const app = require('../server')
///api/account/teams/927736e5-e3a0-4c35-9ddc-3318029bd00e/escalation_policies/
describe("Get Endpoints", () => {
  it("should get a new post", () => {
    api.call_api(
      "/api/account/teams/bfb87a90-47b7-4f5b-9b93-a427e3b8a27e/escalation_policies/",
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

var payload = {
  name: "NewEscalationPolicy",
  summary: "Thisisthesummaryforthenewescalationpolicy",
  description: "ThisisthedescriptionfortheNewEscalationPolicy",
  rules: [
    {
      delay: 0,
      targets: [{ target_type: 2, target_id: "50012040-37db-4594-a268-a" }],
      position: 1,
      unique_id: "",
    },
  ],
};
console.log(api);
// c08f15da7d3c875b651ed0b2dae4ee088bcbedb1
// const request = require('supertest')
//const app = require('../server')
///api/account/teams/927736e5-e3a0-4c35-9ddc-3318029bd00e/escalation_policies/
describe("Post Endpoints", () => {
  it("should create a new post", () => {
    api.call_api(
      "/api/account/teams/bfb87a90-47b7-4f5b-9b93-a427e3b8a27e/escalation_policies/",
      "post",
      (body = payload)
    );
  });
});

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
var payload = {
  name: "NewEscalationPolicy",
  //summary: "Thisisthesummaryforthenewescalationpolicy",
  //description: "ThisisthedescriptionfortheNewEscalationPolicy",
  rules: [
    {
      delay: 0,
      targets: [{ target_type: 2, target_id: "85e1569d-79a4-4205-850f-a" }],
      position: 1,
      unique_id: "",
    },
  ],
};
console.log(api);
// c08f15da7d3c875b651ed0b2dae4ee088bcbedb1
// const request = require('supertest')
//const app = require('../server')
///api/account/teams/927736e5-e3a0-4c35-9ddc-3318029bd00e/escalation_policies/
describe("Put Endpoints", () => {
  it("should update a post", () => {
    api.call_api(
      "/api/account/teams/bfb87a90-47b7-4f5b-9b93-a427e3b8a27e/escalation_policies/",
      "put",
      (body = payload)
    );
  });
});

