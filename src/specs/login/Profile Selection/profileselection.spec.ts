// import { logTestCaseData } from '@utilities/test.helper.utils';
// import { getData } from '@data/login/login.data';
// import { test } from '@fixtures/page.fixtures';


// test.describe.serial('Feature: Master Profile Selection Flow', () => {

//     test.setTimeout(90000);
//     const loginScenario = getData('login-Data');

    
//     test(
//         `Test case 1: Verify All Systems Switching
//         Description: Validate that changing all 4 stile options updates the canvas UI
//         Tags: @regression @smoke @profile-selection`,
//         async ({ ProfileSelectionPage }, testInfo) => { 
            
//             logTestCaseData(testInfo, loginScenario.testCaseData);
            
//             await ProfileSelectionPage.navigateToLoginPage();
//             await ProfileSelectionPage.verifyAllSystemsSwitching();
//         }
//     );

//     test(
//         `Test case 2: Profile Selection - Indeco Quebec Aluminium Stile
//         Description: Validate changing colours and gaskets for Quebec Aluminium Stile
//         Tags: @regression @profile-selection`,
//         async ({ ProfileSelectionPage }, testInfo) => { 
            
//             logTestCaseData(testInfo, loginScenario.testCaseData);
            
//             await ProfileSelectionPage.navigateToLoginPage();
//             await ProfileSelectionPage.verifyQuebecAluminiumStile();
//         }
//     );

//     test(
//         `Test case 3: Profile Selection - Indeco Wellington Stile
//         Description: Validate changing colours and gaskets for Wellington Stile
//         Tags: @regression @profile-selection`,
//         async ({ ProfileSelectionPage }, testInfo) => { 
            
//             logTestCaseData(testInfo, loginScenario.testCaseData);
            
//             await ProfileSelectionPage.navigateToLoginPage();
//             await ProfileSelectionPage.verifyWellingtonStile();
//         }
//     );

//     test(
//         `Test case 4: Profile Selection - DIAS Softline Grip Stile
//         Description: Validate changing colours and hardware for DIAS Softline Grip Stile
//         Tags: @regression @profile-selection`,
//         async ({ ProfileSelectionPage }, testInfo) => { 
            
//             logTestCaseData(testInfo, loginScenario.testCaseData);
            
//             await ProfileSelectionPage.navigateToLoginPage();
//             await ProfileSelectionPage.verifyDiasSoftlineGripStile();
//         }
//     );
//     test(
//         `Test case 5: Profile Selection - Indeco Sydney Stile
//         Description: Validate changing colours and gaskets for Sydney Stile
//         Tags: @regression @profile-selection`,
//         async ({ ProfileSelectionPage }, testInfo) => { 
            
//             logTestCaseData(testInfo, loginScenario.testCaseData);
            
//             await ProfileSelectionPage.navigateToLoginPage();
//             await ProfileSelectionPage.verifySydneyStile();
//         }
//     );
// });