
// import { logTestCaseData } from '@utilities/test.helper.utils';
// import { getData } from '@data/login/login.data';
// import { test } from '@fixtures/page.fixtures';

// test.describe('Feature: Login & Logout Flow', () => {

//     test.setTimeout(600000);

//     const loginScenario = getData('login-Data');

//     // Test Case 1 - Login Only
//     test(
//         `Test case: ${loginScenario.testCaseData.testCase}
//         Description: ${loginScenario.testCaseData.testDescription} - Login Flow
//         Tags: ${loginScenario.testCaseData.tags} @login`,

//         async ({ loginPage }) => {

//             logTestCaseData(test.info(), loginScenario.testCaseData);

//             await loginPage.navigateToLoginPage();

//             await loginPage.loginPage(loginScenario);
//         }
//     );

   
//     test(
//         `Test case: ${loginScenario.testCaseData.testCase}
//         Description: ${loginScenario.testCaseData.testDescription} - Logout Flow
//         Tags: ${loginScenario.testCaseData.tags} @logout`,

//         async ({ loginPage, logoutPage }) => {

//             logTestCaseData(test.info(), loginScenario.testCaseData);

//             await loginPage.navigateToLoginPage();

//             await loginPage.loginPage(loginScenario);

//             await logoutPage.logoutPage();
//         }
//     );
// });