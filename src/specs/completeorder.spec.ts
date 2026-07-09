import { test } from '@fixtures/page.fixtures';
import { getData } from '@data/completeorder.data';
import { logTestCaseData } from '@utilities/test.helper.utils';

test.describe('Feature: WardrobeMan - Complete Order Flow', () => {

    const completeOrderScenario = getData('completeForm-Data');

    test.only(
        `Test case: ${completeOrderScenario.testCaseData.testCase}
        Description: ${completeOrderScenario.testCaseData.testDescription}
        Tags: ${completeOrderScenario.testCaseData.tags} @complete-order`,

        async ({ page, completeOrderPage }) => {

            test.setTimeout(180000);

            logTestCaseData(
                test.info(),
                completeOrderScenario.testCaseData
            );

            const data = completeOrderScenario.completeFormDetails;

            await completeOrderPage.navigateToUrl();
            await completeOrderPage.verifyHomepageLoaded();

            await completeOrderPage.performStaffLogin(data);
            await completeOrderPage.verifySuccessfulLogin();

            await completeOrderPage.completeOrder(data);
        }
    );

});