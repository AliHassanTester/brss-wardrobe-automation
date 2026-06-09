// import { logTestCaseData } from '@utilities/test.helper.utils';
// import { getData } from '@data/login/login.data';
// import { test } from '@fixtures/page.fixtures';


// test.describe('Feature: Profile Selection colour Flow', () => {

    
//     // test.use({ viewport: { width: 1200, height: 600 } });

//     test.setTimeout(90000);

//     const loginScenario = getData('login-Data');

//     test(
//         `Test case: Profile Selection colour Update
//         Description: Validate that changing stile options updates the canvas UI
//         Tags: @regression @smoke @profile-selection`,

//         async ({ profileselectioncolourPage }, testInfo) => { 
            
//             logTestCaseData(testInfo, loginScenario.testCaseData);

            
//             // const profilePage = new profileselectioncolourPage(page, testInfo);

            
//             await profileselectioncolourPage.navigateToLoginPage();


//             await profileselectioncolourPage.profileselectioncolourPage();
//         }
//     );
// });