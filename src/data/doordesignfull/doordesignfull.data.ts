import { TestCaseData } from "../../interfaces/testcase.data.interface";
import { DoorDesignData  } from "../../interfaces/doordesignfull.interface";

export interface DoorDesignFullTestData {
    testCaseData: TestCaseData;
    doorDesignData : DoorDesignData; 
}

const doordesignfullTestData: { [key: string]: DoorDesignFullTestData } = {
    "doorDesign-Data": {
        doorDesignData : { 
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
        throw new Error(`Door Design test case data not found for: ${testCase}`);
    }

    return data;
}