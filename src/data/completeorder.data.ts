import { TestCaseData } from "./../interfaces/testcase.data.interface";
import { CompleteFormData } from "./../interfaces/completeorder.interface";

interface CompleteFormTestCaseData {
    testCaseData: TestCaseData;
    completeFormDetails: CompleteFormData;
}

const completeFormTestData: { [key: string]: CompleteFormTestCaseData } = {
    "completeForm-Data": {
        completeFormDetails: {
            username: "sales@wardrobeman.com",
            password: "123",
            firstName: "Automate",
            lastName: "Test",
            suburb: "Melbourne",
            email: "sales@wardrobeman.com",
            phone: "123456789",
            addressLine1: "123 Test Street",
            addressLine2: "Unit 10",
            state: "Victoria",
            country: "Australia",
            postcode: "3000",
            test: "Automation Test",
            supplyprice: "10",
        },
        testCaseData: {
            tags: "@regression @smoke @completeForm",
            testCase: "completeForm-Data",
            testDescription: "Validate Complete Form submission flow",
            testSummary: "Complete Form Automation Suite"
        }
    }
};

export function getData(testCase: string): CompleteFormTestCaseData {
    const data = completeFormTestData[testCase];

    if (!data) {
        throw new Error(`Test case data not found for: ${testCase}`);
    }

    return data;
}