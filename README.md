# OrangeHRM Cypress Automation

End-to-end automation of the **Admin > User Management** flow on the
[OrangeHRM demo site](https://opensource-demo.orangehrmlive.com/) using Cypress.

## Scenario covered

1. Open the OrangeHRM demo site and log in as Admin
2. Open the Admin module
3. Add a new user (User Role, Employee Name, Status, Username, Password)
4. Search the created user by username
5. Open the user record and verify that all saved fields match the entered data

## Tech stack

- Cypress **16.3.0**
- JavaScript (Node.js LTS)
- Page Object Model

## Prerequisites

- Node.js (LTS) and npm
- Git
- Google Chrome (optional, for `cy:run:chrome`)

## Setup

```bash
git clone https://github.com/Pial-crypto/Test-Automation-Cypress.git
cd Test-Automation-Cypress
npm install
```

Create the environment file from the example (it is gitignored, so credentials never get committed):

```bash
cp cypress.env.example.json cypress.env.json
```

On Windows PowerShell use `copy cypress.env.example.json cypress.env.json`.
The demo credentials are shown on the login page itself and are already filled in the example file.

## Run the tests

| Purpose | Command |
|---|---|
| Interactive mode | `npm run cy:open` |
| Headless (default browser) | `npm run cy:run` |
| Headless in Chrome | `npm run cy:run:chrome` |

Screenshots of failures and videos are saved under `cypress/screenshots` and `cypress/videos`.

## Project structure

```
cypress/
  e2e/            Test specs (userManagement.cy.js)
  pages/          Page objects (BasePage, LoginPage, AdminPage, AddUserPage, EditUserPage)
  fixtures/       Static test data (userData.json)
  utils/          Helpers (unique user data factory)
  support/        Custom commands (cy.login) and global setup
cypress.config.js
cypress.env.example.json
```

## Design notes

- **No hardcoded waits.** Only Cypress built-in retry-ability and assertions are used.
- **Unique data.** The username is generated per run (`qa_user_<timestamp>`), so runs never collide.
- **No credentials in specs.** Admin credentials come from `cypress.env.json` via `Cypress.env()`.
- **Reusable pieces.** `BasePage` holds label-based helpers shared by all page objects; `cy.login()` is a custom command.

## Notes

The demo site is public and is reset periodically, so occasional slowness is expected.
If the employee autocomplete returns no result, change `employeeSearchHint` in
`cypress/fixtures/userData.json`.