describe("Authentication", () => {
  let baseURL = "https://sqlverifier-live-6e21ca0ed768.herokuapp.com";
  let token =
    "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTcwNTY5NTk3NywiYXV0aCI6IlJPTEVfQURNSU4iLCJpYXQiOjE3MDMxMDM5Nzd9.jC57mTzYPeRuwLdlQy8FmUXqff4C9uvvsHQNhZHdWl_EVuhT-eklb6Oy-j_-IW37vgmRjx6HNoarX1a5D_SI2w";

  it("should authenticate successfully", () => {
    cy.request({
      method: "POST",
      url: baseURL + "/api/authenticate",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: {
        username: "admin",
        password: "admin",
        rememberMe: true,
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});

describe("User Management", () => {
  it("should get users successfully", () => {
    cy.request({
      method: "GET",
      url:
        "https://sqlverifier-live-6e21ca0ed768.herokuapp.com" +
        "/api/admin/users",
      headers: {
        Authorization:
          "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTcwMzk0NjI4NiwiYXV0aCI6IlJPTEVfQURNSU4iLCJpYXQiOjE3MDEzNTQyODZ9.4-B1Q-bifwK6T-Ur7_BTuI45E9Y5kxZXds2K6n7LkrjDwC_jLkLwz2TBu9LgJjIeiAf2p_c2Qi56XliBeHdRkQ",
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it("should register a new user successfully", () => {
    cy.request({
      method: "POST",
      url:
        "https://sqlverifier-live-6e21ca0ed768.herokuapp.com" + "/api/register",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTcwMzk0NjI4NiwiYXV0aCI6IlJPTEVfQURNSU4iLCJpYXQiOjE3MDEzNTQyODZ9.4-B1Q-bifwK6T-Ur7_BTuI45E9Y5kxZXds2K6n7LkrjDwC_jLkLwz2TBu9LgJjIeiAf2p_c2Qi56XliBeHdRkQ",
      },
      body: {
        id: 0,
        login: "new_user",
        firstName: "New",
        lastName: "User",
        email: "new_user@example.com",
        imageUrl: "",
        activated: true,
        langKey: "en",
        createdBy: "admin",
        createdDate: "2023-11-17T15:28:20.041Z",
        lastModifiedBy: "admin",
        lastModifiedDate: "2023-11-17T15:28:20.041Z",
        authorities: ["ROLE_USER"],
        password: "new_user_password",
      },
    }).then((response) => {
      expect(response.status).to.be.oneOf([201, 202]);
    });
  });

  it("should change user's settings successfully", () => {
    cy.request({
      method: "PUT",
      url:
        "https://sqlverifier-live-6e21ca0ed768.herokuapp.com" +
        "/api/admin/users",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTcwMzk0NjI4NiwiYXV0aCI6IlJPTEVfQURNSU4iLCJpYXQiOjE3MDEzNTQyODZ9.4-B1Q-bifwK6T-Ur7_BTuI45E9Y5kxZXds2K6n7LkrjDwC_jLkLwz2TBu9LgJjIeiAf2p_c2Qi56XliBeHdRkQ",
      },
      body: {
        id: 1101,
        login: "second_student",
        firstName: "Lin",
        lastName: "Lenn",
        email: "moriarty@gmail.com",
        activated: true,
        langKey: "en",
        createdBy: "admin",
        createdDate: "2023-11-20T09:56:20.600878Z",
        lastModifiedBy: "admin",
        lastModifiedDate: "2023-11-20T09:56:42.815121Z",
        authorities: ["ROLE_USER_STUDENT"],
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it("should delete users successfully", () => {
    cy.request({
      method: "DELETE",
      url:
        "https://sqlverifier-live-6e21ca0ed768.herokuapp.com" +
        "/api/admin/users/second_student",
      headers: {
        Authorization:
          "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTcwMzk0NjI4NiwiYXV0aCI6IlJPTEVfQURNSU4iLCJpYXQiOjE3MDEzNTQyODZ9.4-B1Q-bifwK6T-Ur7_BTuI45E9Y5kxZXds2K6n7LkrjDwC_jLkLwz2TBu9LgJjIeiAf2p_c2Qi56XliBeHdRkQ",
      },
      body: {
        Login: "second_student",
      },
    }).then((response) => {
      expect(response.status).to.eq(204);
    });
  });
});
