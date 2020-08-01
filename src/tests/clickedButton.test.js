import { clickedButton } from '../client/js/formHandler'

describe("Testing the submit functionality", () => {
    test("Testing the clickedButton() function", () => {
        expect(clickedButton).toBeDefined();
    });
});