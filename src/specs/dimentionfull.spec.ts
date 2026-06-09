// import { logTestCaseData } from '@utilities/test.helper.utils';
// import { getData } from '@data/login/login.data';
// import { test } from '@fixtures/page.fixtures';

// test.describe('Feature: Dimension Flow', () => {

//     test.setTimeout(600000);

//     const loginScenario = getData('login-Data');

//     test(
//         `Test case: ${loginScenario.testCaseData.testCase}
//         Description: ${loginScenario.testCaseData.testDescription} - Dimension Flow
//         Tags: ${loginScenario.testCaseData.tags} @dimension`,

//         async ({ loginPage, dimensionfullPage }) => {

            
//             logTestCaseData(test.info(), loginScenario.testCaseData);

            
//             await loginPage.navigateToLoginPage();
//             await loginPage.loginPage(loginScenario);

           
//             await dimensionfullPage.dimensionFlow("6000", "3000");

            
//             await dimensionfullPage.doorcount();
//         }
//     );

// });