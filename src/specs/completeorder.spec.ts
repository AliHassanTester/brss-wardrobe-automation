import { test } from '@fixtures/page.fixtures';
import { getData } from '@data/completeorder.data';
import { logTestCaseData } from '@utilities/test.helper.utils';

test.describe('Feature: WardrobeMan - Complete Order Flow', () => {

    const completeOrderScenario = getData('completeForm-Data');

    test(
        `Test case: ${completeOrderScenario.testCaseData.testCase}
        Description: ${completeOrderScenario.testCaseData.testDescription}
        Tags: ${completeOrderScenario.testCaseData.tags} @complete-order`,
        async ({ page, completeOrderPage }) => {
            test.setTimeout(180000);
            logTestCaseData(test.info(),completeOrderScenario.testCaseData);
            const data = completeOrderScenario.completeFormDetails;
            await completeOrderPage.navigateToUrl();
            await completeOrderPage.verifyHomepageLoaded();
            await completeOrderPage.performStaffLogin(data);
            await completeOrderPage.verifySuccessfulLogin();
            await completeOrderPage.completeOrder(data);
            await completeOrderPage.verifyamount();
        }
    );
    test(
        `Test case: ${completeOrderScenario.testCaseData.testCase} - pdf
        Description: ${completeOrderScenario.testCaseData.testDescription}
        Tags: ${completeOrderScenario.testCaseData.tags} @pdf @complete-order`,
        async ({ page, completeOrderPage }) => {
            test.setTimeout(180000);
            logTestCaseData(test.info(), completeOrderScenario.testCaseData);
            const data = completeOrderScenario.completeFormDetails;
            await completeOrderPage.navigateToUrl();
            await completeOrderPage.verifyHomepageLoaded();
            await completeOrderPage.performStaffLogin(data);
            await completeOrderPage.verifySuccessfulLogin();
            await completeOrderPage.completeOrder(data);
            await completeOrderPage.verifyPdfOrderConfirmation();
        }
    );
    test(
    `Test case: ${completeOrderScenario.testCaseData.testCase} - Edit Designs List
    Description: ${completeOrderScenario.testCaseData.testDescription}
    Tags: ${completeOrderScenario.testCaseData.tags} @edit-designs-list @complete-order`,
    async ({ page, completeOrderPage }) => {
        test.setTimeout(180000);
        logTestCaseData(test.info(), completeOrderScenario.testCaseData);
        const data = completeOrderScenario.completeFormDetails;
        await completeOrderPage.navigateToUrl();
        await completeOrderPage.verifyHomepageLoaded();
        await completeOrderPage.performStaffLogin(data);
        await completeOrderPage.verifySuccessfulLogin();
        await completeOrderPage.completeOrder(data);
        await completeOrderPage.EditDesignsList();
    }
);
test.only(
    `Test case: ${completeOrderScenario.testCaseData.testCase} - Edit Order
    Description: ${completeOrderScenario.testCaseData.testDescription}
    Tags: ${completeOrderScenario.testCaseData.tags} @edit-order @complete-order`,
    async ({ page, completeOrderPage }) => {
        test.setTimeout(180000);

        logTestCaseData(test.info(), completeOrderScenario.testCaseData);

        const data = completeOrderScenario.completeFormDetails;

        await completeOrderPage.navigateToUrl();
        await completeOrderPage.verifyHomepageLoaded();
        await completeOrderPage.performStaffLogin(data);
        await completeOrderPage.verifySuccessfulLogin();
        await completeOrderPage.completeOrder(data);
        await completeOrderPage.EditOrder();
    }
);
});