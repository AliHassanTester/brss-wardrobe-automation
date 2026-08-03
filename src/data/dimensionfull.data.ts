import { TestCaseData } from "./../interfaces/testcase.data.interface";
import { DimensionData ,DisabledButtonData} from "./../interfaces/dimension.interface";

interface DimensionfullTestCaseData {
    testCaseData: TestCaseData;
    dimensionData?: DimensionData;
    disabledButtonData?: DisabledButtonData;
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
     "invalid-dimension-popup": {
        dimensionData: {
            widthInput: "700",
            heightInput: "700",
        },
        testCaseData: {
            tags: "@regression @negative @dimension",
            testCase: "invalid-dimension-popup",
            testDescription: "Validate that a validation popup is displayed when invalid dimensions are entered.",
            testSummary: "Invalid Dimension Validation Popup Test",
        },
    },

    "door-add-button-disabled": {
        disabledButtonData: {
            widthInput: "1000",
            heightInput: "1000",
            updatedWidth1: "2000",
            updatedWidth2: "3000",
            updatedWidth3: "4000",
            updatedWidth4: "5000",
            updatedWidth5: "6000",    
        },
        testCaseData: {
            tags: "@regression @negative @dimension",
            testCase: "door-add-button-disabled",
            testDescription: "Validate that the Door Add button is disabled when the maximum allowed number of doors is reached.",
            testSummary: "Door Add Button Disabled Test",
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