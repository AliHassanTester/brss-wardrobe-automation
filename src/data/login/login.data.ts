import { TestCaseData } from "../../interfaces/testcase.data.interface";
import { getEnvVariable } from "../../utilities/env.utils";

/**
 * LOGIN DATA TYPES
 */
export interface LoginDetails {
    username: string;
    password: string;
    previewPassword?: string;
    verifySignUpPage?: string;
    totpSecret?: string;
}

/**
 * LOGOUT DATA TYPES
 */
export interface LogoutPage {
    verifyLogoutPage: string;
}

/**
 * WRAPPER TYPES
 */
interface LoginTestCaseData {
    testCaseData: TestCaseData;
    loginDetails: LoginDetails;
}

interface LogoutPageTestCaseData {
    testCaseData: TestCaseData;
    logoutPage: LogoutPage;
}

const loginTestData: { [key: string]: LoginTestCaseData } = {
    "login-Data": {
        loginDetails: {
            username: "ali.qa.twm@gmail.com",
            password: "$nuDA92f",
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
const logoutPageTestCaseData: { [key: string]: LogoutPageTestCaseData } = {
    "logout-Page": {
        logoutPage: {
            verifyLogoutPage: "Sign in",
        },
        testCaseData: {
            tags: "@regression @smoke @logout",
            testCase: "logout-Page",
            testDescription: "Validate that user can logout from the application",
            testSummary: "User Logout Test",
        },
    },
};
export function getData(testCase: string): LoginTestCaseData {
    const data = loginTestData[testCase];

    if (!data) {
        throw new Error(`Login test case data not found for: ${testCase}`);
    }

    return data;
}
export function getLogoutData(testCase: string): LogoutPageTestCaseData {
    const data = logoutPageTestCaseData[testCase];

    if (!data) {
        throw new Error(`Logout test case data not found for: ${testCase}`);
    }

    return data;
}