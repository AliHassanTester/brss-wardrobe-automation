import { TestCaseData } from "./../interfaces/testcase.data.interface";
import { DimensionfullData } from "./../interfaces/Dimension.interface";


interface DimensionfullTestCaseData {
    testCaseData: TestCaseData;
    dimensionfullData: DimensionfullData;
}


const dimensionfullTestData: { [key: string]: DimensionfullTestCaseData } = {
    "dimension-Data": {
        dimensionfullData: {
            widthInput: "6000",
            heightInput: "3000",
        },

        testCaseData: {
            tags: "@regression @smoke @dimension",
            testCase: "dimension-Data",
            testDescription: "Validate that user can enter dimensions successfully",
            testSummary: "Dimension Input Test",
        },
    },
};

/**
 * GET DATA FUNCTION
 */
export function getDimensionData(testCase: string): DimensionfullTestCaseData {
    const data = dimensionfullTestData[testCase];

    if (!data) {
        throw new Error(`Dimension test case data not found for: ${testCase}`);
    }

    return data;
}