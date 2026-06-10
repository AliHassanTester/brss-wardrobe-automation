import { TestCaseData } from "./../interfaces/testcase.data.interface";
import { DimensionData } from "./../interfaces/dimension.interface";

interface DimensionfullTestCaseData {
    testCaseData: TestCaseData;
    dimensionData: DimensionData;
}

const dimensionfullTestData: { [key: string]: DimensionfullTestCaseData } = {
    "dimension-Data": {
        dimensionData: {
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

export function getDimensionData(testCase: string): DimensionfullTestCaseData {
    const data = dimensionfullTestData[testCase];
    if (!data) {
        throw new Error(`Dimension test case data not found for: ${testCase}`);
    }
    return data;
}