// import { test } from '@fixtures/page.fixtures';
// import { logTestCaseData } from '@utilities/test.helper.utils';
// import { getdoordesignfull } from '../../data/doordesignfull/doordesignfull.data'; // Path theek kar lena

// test.describe('Feature: Door Design Independent Tests', () => {

//     test.setTimeout(120000); 
//     const dimensionScenario = getdoordesignfull('dimension-Data');

//     test('Test 1: Basic Layouts Flow', async ({ doorDesignFullPage }, testInfo) => { 
//         logTestCaseData(testInfo, dimensionScenario.testCaseData);
        
//         await doorDesignFullPage.navigateToLoginPage();
//         await doorDesignFullPage.dimensionFlow(dimensionScenario.dimensionData.widthInput, dimensionScenario.dimensionData.heightInput);
//         await doorDesignFullPage.clickDoorDesignAndWait();
//         await doorDesignFullPage.verifyBasicLayouts();
//     });

//     test('Test 2: Designer Selections Flow', async ({ doorDesignFullPage }, testInfo) => { 
//         logTestCaseData(testInfo, dimensionScenario.testCaseData);
        
//         await doorDesignFullPage.navigateToLoginPage();
//         await doorDesignFullPage.dimensionFlow(dimensionScenario.dimensionData.widthInput, dimensionScenario.dimensionData.heightInput);
//         await doorDesignFullPage.clickDoorDesignAndWait();
//         await doorDesignFullPage.verifyDesignerSelections();
//     });

//     test('Test 3: Custom Layout Flow (Delete, Add, Align)', async ({ doorDesignFullPage }, testInfo) => { 
//         logTestCaseData(testInfo, dimensionScenario.testCaseData);
        
//         await doorDesignFullPage.navigateToLoginPage();
//         await doorDesignFullPage.dimensionFlow(dimensionScenario.dimensionData.widthInput, dimensionScenario.dimensionData.heightInput);
//         await doorDesignFullPage.clickDoorDesignAndWait();
//         await doorDesignFullPage.verifyCustomLayoutFlow();
//     });

// });