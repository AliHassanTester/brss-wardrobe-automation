import { logTestCaseData } from "@utilities/test.helper.utils";
import { getData } from "@data/login/login.data";
import { test } from "@fixtures/page.fixtures";
import { getDimensionData } from "@data/dimensionfull.data";

test.describe("Feature: Dimension Flow", () => {
    test.setTimeout(600000);

    const loginScenario = getData("login-Data");
    const dimensionScenario = getDimensionData("dimension-Data");
    const invalidDimensionScenario = getDimensionData("invalid-dimension-popup");
    const disabledButtonScenario = getDimensionData("door-add-button-disabled");

    test(
        `Test case: ${loginScenario.testCaseData.testCase}
        Description: ${loginScenario.testCaseData.testDescription} - Dimension Flow
        Tags: ${loginScenario.testCaseData.tags} @dimension`,

        async ({ loginPage, dimensionfullPage }) => {
            logTestCaseData(test.info(), loginScenario.testCaseData);

            await loginPage.navigateToLoginPage();
            await loginPage.loginPage(loginScenario);

            logTestCaseData(test.info(), dimensionScenario.testCaseData);

            await dimensionfullPage.dimensionFlow(
                dimensionScenario.dimensionData!.widthInput,
                dimensionScenario.dimensionData!.heightInput
            );

            await dimensionfullPage.doorcount();
        }
    );

    test(
        `Test case: ${invalidDimensionScenario.testCaseData.testCase}
        Description: ${invalidDimensionScenario.testCaseData.testDescription}
        Tags: ${invalidDimensionScenario.testCaseData.tags} @invalid-dimension-popup @dimension`,

        async ({ loginPage, dimensionfullPage }) => {
            logTestCaseData(test.info(), loginScenario.testCaseData);

            await loginPage.navigateToLoginPage();
            await loginPage.loginPage(loginScenario);

            logTestCaseData(test.info(), invalidDimensionScenario.testCaseData);

            await dimensionfullPage.invalidDimensionPopup(
                invalidDimensionScenario.dimensionData!.widthInput,
                invalidDimensionScenario.dimensionData!.heightInput
            );
        }
    );

    test(
        `Test case: ${disabledButtonScenario.testCaseData.testCase}
        Description: ${disabledButtonScenario.testCaseData.testDescription}
        Tags: ${disabledButtonScenario.testCaseData.tags} @door-add-button-disabled @dimension`,

        async ({ loginPage, dimensionfullPage }) => {
            logTestCaseData(test.info(), loginScenario.testCaseData);

            await loginPage.navigateToLoginPage();
            await loginPage.loginPage(loginScenario);

            logTestCaseData(test.info(), disabledButtonScenario.testCaseData);
            await dimensionfullPage.verifyDoorAddButtonDisabled(
                disabledButtonScenario.disabledButtonData!.widthInput,
                disabledButtonScenario.disabledButtonData!.heightInput,
                disabledButtonScenario.disabledButtonData!.updatedWidth1,
                disabledButtonScenario.disabledButtonData!.updatedWidth2,
                disabledButtonScenario.disabledButtonData!.updatedWidth3,
                disabledButtonScenario.disabledButtonData!.updatedWidth4,
                disabledButtonScenario.disabledButtonData!.updatedWidth5
            );
        }
    );
});