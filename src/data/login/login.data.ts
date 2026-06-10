import { TestCaseData } from "../../interfaces/testcase.data.interface";
import { getEnvVariable } from "../../utilities/env.utils";
import { LoginDetails } from "../../interfaces/login.interface";


interface LoginTestCaseData {
    testCaseData: TestCaseData;
    loginDetails: LoginDetails;
}

const loginTestData: { [key: string]: LoginTestCaseData } = {
    "login-Data": {
        loginDetails: {
            username: "sales@wardrobeman.com",
            password: "123",
            verifySignUpPage: "Almost there, get your RedPocket login.",
            totpSecret: getEnvVariable("TOTP_SECRET"),
        },
        testCaseData: {
            tags: "@regression @smoke @login",
            testCase: "login-Data",
            testDescription: "Validate that user can login into the application",
            testSummary: "User Login Test",
        },
    },
};

export function getData(testCase: string): LoginTestCaseData {
    const data = loginTestData[testCase]      ;

    if (!data) {
        throw new Error(`Test case data not found for: ${testCase}`);
    }

    return data;
}