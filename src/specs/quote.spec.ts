import { test } from '@fixtures/page.fixtures'; // Ab base test ki jagah custom fixture import
import { getData } from '@data/quote.data';
import { logTestCaseData } from '@utilities/test.helper.utils';

test.describe('Feature: WardrobeMan - System Flows (Quote & Archive)', () => {

    const quoteScenario = getData('quote-Data');

    test(
        `Test case: ${quoteScenario.testCaseData.testCase} - Sequence 1
        Description: ${quoteScenario.testCaseData.testDescription} - Staff login aur Quote form submission
        Tags: ${quoteScenario.testCaseData.tags} @sequence`,

        async ({ page, quotePage }) => { 
            test.setTimeout(60000); 
            logTestCaseData(test.info(), quoteScenario.testCaseData);
            
            const data = quoteScenario.quoteDetails;

            await quotePage.navigateToUrl();
            await quotePage.verifyHomepageLoaded();
            await quotePage.performStaffLogin(data);
            await quotePage.verifySuccessfulLogin();
            await quotePage.fillAndSubmitQuoteForm(data);
            await quotePage.verifyQuoteSubmissionSuccess();
        }
    );

    test(
        `Test case: ${quoteScenario.testCaseData.testCase} - Sequence 2
        Description: ${quoteScenario.testCaseData.testDescription} - Archive aur Unarchive flow
        Tags: ${quoteScenario.testCaseData.tags} @archive`,

        async ({ page, quotePage }) => { 
            test.setTimeout(120000);
            logTestCaseData(test.info(), quoteScenario.testCaseData);

            const data = quoteScenario.quoteDetails;

            await quotePage.navigateToUrl();
            await quotePage.verifyHomepageLoaded();
            await quotePage.performStaffLogin(data);
            await quotePage.verifySuccessfulLogin();
            await quotePage.fillAndSubmitQuoteForm(data);
            await quotePage.verifyQuoteSubmissionSuccess();
            await quotePage.navigateToDesignLibraryAndReload();
            await quotePage.archiveFromCompleteOrdersAndVerify();
            await quotePage.unarchiveFromArchivedAndVerify();
            await quotePage.verifyDesignBackInActive();
        }
    );

    test('Test Case 3: Submit quote, add door on canvas 4 times and compare screenshots', async ({ page, quotePage }) => {
        test.setTimeout(180000); 
        logTestCaseData(test.info(), quoteScenario.testCaseData);

        const data = quoteScenario.quoteDetails;
        await quotePage.navigateToUrl();
        await quotePage.verifyHomepageLoaded();
        await quotePage.performStaffLogin(data);
        await quotePage.verifySuccessfulLogin();
        await quotePage.fillAndSubmitQuoteForm(data);
        await quotePage.verifyQuoteSubmissionSuccess();
        await quotePage.navigateToDesignLibraryAndReload();
        await quotePage.editAndVerifyCanvasDoorAddition();
    });

    test('Test Case 4: Execute Test Case 3 flow, update design and verify revision', async ({ page, quotePage }) => {
        test.setTimeout(240000); 
        logTestCaseData(test.info(), quoteScenario.testCaseData);

        const data = quoteScenario.quoteDetails;
        await quotePage.navigateToUrl();
        await quotePage.verifyHomepageLoaded();
        await quotePage.performStaffLogin(data);
        await quotePage.verifySuccessfulLogin();
        await quotePage.fillAndSubmitQuoteForm(data);
        await quotePage.verifyQuoteSubmissionSuccess();
        await quotePage.navigateToDesignLibraryAndReload();
        await quotePage.editAndVerifyCanvasDoorAddition();
        await quotePage.updateDesignAndVerifyRevision();
    });

    test(`Test case: ${quoteScenario.testCaseData.testCase} - Sequence 5
        Description: ${quoteScenario.testCaseData.testDescription} - Dimension updates and eleven doors configuration flow
        Tags: ${quoteScenario.testCaseData.tags} @dimension-add`,

        async ({ page, quotePage }) => {
            test.setTimeout(300000); 
            logTestCaseData(test.info(), quoteScenario.testCaseData);
            const data = quoteScenario.quoteDetails;

            await quotePage.navigateToUrl();
            await quotePage.verifyHomepageLoaded();
            await quotePage.performStaffLogin(data);
            await quotePage.verifySuccessfulLogin();
            await quotePage.fillAndSubmitQuoteForm(data);
            await quotePage.verifyQuoteSubmissionSuccess();
            await quotePage.navigateToDesignLibraryAndReload();
            await quotePage.configureDimensionsAndAddElevenDoors(data);
            await quotePage.updateDesignAndVerifyRevision2();
        }
    );
    
}); 
