import { test } from '@fixtures/page.fixtures';
import { logTestCaseData } from '@utilities/test.helper.utils';
import { getdoordesignfull } from '../../data/doordesignfull/doordesignfull.data';

test.describe('Feature: Door Design Independent Tests', () => {

    test.setTimeout(120000); 
    const dimensionScenario = getdoordesignfull('doorDesign-Data');

    test('Test 1: Basic Layouts Flow', async ({ DoorDesignFullPage }, testInfo) => { 
        logTestCaseData(testInfo, dimensionScenario.testCaseData);
        
        await DoorDesignFullPage.navigateToLoginPage();
        await DoorDesignFullPage.dimensionFlow(dimensionScenario.doorDesignData.widthInput, dimensionScenario.doorDesignData.heightInput);
        await DoorDesignFullPage.clickDoorDesignAndWait();
        await DoorDesignFullPage.verifyBasicLayouts();
    });

    test('Test 2: Designer Selections Flow', async ({ DoorDesignFullPage }, testInfo) => { 
        logTestCaseData(testInfo, dimensionScenario.testCaseData);
        
        await DoorDesignFullPage.navigateToLoginPage();
        await DoorDesignFullPage.dimensionFlow(dimensionScenario.doorDesignData.widthInput, dimensionScenario.doorDesignData.heightInput);
        await DoorDesignFullPage.clickDoorDesignAndWait();
        await DoorDesignFullPage.verifyDesignerSelections();
    });

    test('Test 3: Custom Layout Flow (Delete, Add, Align)', async ({ DoorDesignFullPage }, testInfo) => { 
        logTestCaseData(testInfo, dimensionScenario.testCaseData);
        
        await DoorDesignFullPage.navigateToLoginPage();
        await DoorDesignFullPage.dimensionFlow(dimensionScenario.doorDesignData.widthInput, dimensionScenario.doorDesignData.heightInput);
        await DoorDesignFullPage.clickDoorDesignAndWait();
        await DoorDesignFullPage.verifyCustomLayoutFlow();
    });

});