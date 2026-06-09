import { TestCaseData } from "../../interfaces/testcase.data.interface";
import { DimensionData } from "@interfaces/Dimension.interface";

// 1. Ek combined interface banaya jo data aur test info dono ko hold karega
export interface DoorDesignFullTestData {
    testCaseData: TestCaseData;
    dimensionData: DimensionData; 
}


const doordesignfullTestData: { [key: string]: DoorDesignFullTestData } = {
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

export function getdoordesignfull(testCase: string): DoorDesignFullTestData {
    const data = doordesignfullTestData[testCase];

    if (!data) {
        throw new Error(`Dimension test case data not found for: ${testCase}`);
    }

    return data;
}