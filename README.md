# Automation Practice

## Example end-to-end test suite for an example e-commerce website

## System Under Test

http://www.automationpractice.com

## Pre-requisite software for executing the project
- [NPM](https://www.npmjs.com/)
- [Cypress](https://www.cypress.io/)

More info on how to install Cypress can be found on its [official guide](https://docs.cypress.io/guides/getting-started/installing-cypress)

## Executing the UI front-end acceptance test suite using Cypress test framework

### Using the cypress GUI
``` sh
$ git clone git@github.com:fartec0/my_store_e2e_tests.git
$ cd my_store_e2e_tests
# Install cypress - if not previously installed
$ npm install cypress --save-dev
# Launch the cypress UI application
$ npx cypress open
```

### Test Suite Execution via Command Line
Please follow the instructions below on how to execute the test suite via CLI.

1. Clone this repository, via command line:
   ```
   git clone git@github.com:fartec0/my_store_e2e_tests.git
   ````
2. Switch to the repository main folder:
    ```
    cd my_store_e2e_tests
    ```
3. Install Cypress
    ```
    npm install cypress
    ```
4. Execute the test suite
    ```
    npm cypress run
    ```

## Test Coverage

### Sign Up functionality
The authorization page contains a signup form with multiple user-input fields, including validations for missing required or invalid text field.

#### Positive tests
- Covers the happy user flow, where all the input fields are correctly entered. The expect result is a confirmation page, without error messages.

#### Negative tests
The Signup process:
1. Should not be initiated for an already existing e-mail account.
2. Should not be completed with an invalid Post Code.
3. Should not be completed to sign-up without entering an address.
4. Should not be completed without entering an address and with an invalid post code.

### Search functionality

#### Positive tests
The Sign-up feature:
1. Should display the search suggestions.
2. Should return the search results for a valid query.

#### Negative tests
There are currently no negative test for the Search functionality.

### Shopping cart

#### Positive tests
The shopping cart:
- Should correctly add a product

---

## Best practices applied
- [Selecting Elements](https://docs.cypress.io/guides/references/best-practices#Selecting-Elements): Provided by the application under test (AUT)
- [Assigning return values](https://docs.cypress.io/guides/references/best-practices#Assigning-Return-Values)
- [Having tests rely on the state of previous tests](https://docs.cypress.io/guides/references/best-practices#Having-tests-rely-on-the-state-of-previous-tests)
- [Creating "tiny" tests with a single assertion](https://docs.cypress.io/guides/references/best-practices#Creating-tiny-tests-with-a-single-assertion)
- [Unnecessary Waiting](https://docs.cypress.io/guides/references/best-practices#Unnecessary-Waiting)

---
## Cypress Dashboard
The test suite execution metrics are available at https://dashboard.cypress.io/projects/6h9nug 