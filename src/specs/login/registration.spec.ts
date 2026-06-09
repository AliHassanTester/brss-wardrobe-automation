// import { logTestCaseData } from '@utilities/test.helper.utils';
// import { getRegistrationTestCaseData } from '@data/login/registration.data';
// import {test} from '@fixtures/page.fixtures'


// test.describe('Feature: Login', () => {
//     test.setTimeout(30000)
//     const scenario1 = getRegistrationTestCaseData('admin-registration');


//     test(`
//         Test case: '${scenario1.testCaseData.testCase}'	
//         Description: '${scenario1.testCaseData.testDescription}'
//         Tags: '${scenario1.testCaseData.tags}'
//       `, async ({ registrationPage,loginPage }) => {
//         logTestCaseData(test.info(), scenario1.testCaseData);
    
//         await test.step('Admin user logs in', async () => {
//           await registrationPage.navigateToLoginPage();
//         });
//         await test.step(`Enter Username into Field`, async () => {
//          await registrationPage.SignUp(scenario1);
//           });
//       });
// });