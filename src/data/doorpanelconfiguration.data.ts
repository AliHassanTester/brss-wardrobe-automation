import { TestCaseData } from "./../interfaces/testcase.data.interface";
import { DoorPanelConfiguration } from "./../interfaces/doorpanelconfiguration.interface";


interface DoorPanelConfiguration {
    testCaseData: TestCaseData;
    doorPanelConfiguration: DoorPanelConfiguration;
}

const doorPanelConfiguration: { [key: string]: DoorPanelConfiguration } = {
    "Panel-Configuration": {
        doorPanelConfiguration: {
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

export function getDimensionData(testCase: string): DoorPanelConfiguration {
    const data = doorPanelConfiguration[testCase];
    if (!data) {
        throw new Error(`Dimension test case data not found for: ${testCase}`);
    }
    return data;
}