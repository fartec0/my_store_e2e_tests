# Automation Practice

## Example end-to-end test suite for an example e-commerce website
------
## System Under Test

http://www.automationpractice.com

## Test Suite Execution
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
