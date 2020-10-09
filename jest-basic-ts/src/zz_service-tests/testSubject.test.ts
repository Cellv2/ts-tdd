import testSubject from "./testSubject";

jest.mock("./testSubject.ts", () => () => ({
    strings: {
        polish: {
            agree: "tak",
            disagree: "nie",
        },
        malaysian: {
            agree: "ya",
            disagree: "tidak",
        },
    },
}));

describe("testSubject tests", () => {
    it("returns the correct string using default boolean", () => {
        const moduleUnderTest = testSubject("malasian");
        expect(moduleUnderTest).toEqual("They say: ya");
    });

    it("returns the correct string on false", () => {
        const moduleUnderTest = testSubject("polish", false);
        expect(moduleUnderTest).toEqual("They say: nie");
    });
});
