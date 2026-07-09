import { TestCaseData } from "./../interfaces/testcase.data.interface";
import { QuoteFormData } from "./../interfaces/quote.interface";

interface QuoteTestCaseData {
    testCaseData: TestCaseData;
    quoteDetails: QuoteFormData;
}

const quoteTestData: { [key: string]: QuoteTestCaseData } = {
    "quote-Data": {
        quoteDetails: {
            loginDetails: {
                username: "sales@wardrobeman.com",
                password: "123"
            },
            firstName: "Automate Test",
            lastName: "Automate Test",
            suburb: "Automate Test",
            email: "sales@wardrobeman.com",
            phone: "1234567890",
            dimensionData: {
                height: "3000",
                width: "6000"
            }
        },
        testCaseData: {
            tags: "@regression @smoke @quote",
            testCase: "quote-Data",
            testDescription: "Validate wardrobe configuration and canvas rendering flows",
            testSummary: "Comprehensive Wardrobe Automation Suite"
        }
    }
};

export function getData(testCase: string): QuoteTestCaseData {
    const data = quoteTestData[testCase];
    if (!data) {
        throw new Error(`Test case data not found for: ${testCase}`);
    }
    return data;
}