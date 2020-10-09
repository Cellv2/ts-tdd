it("should be tested", () => {
    const mockFunction = jest.fn();
    mockFunction();
    mockFunction();
    expect(mockFunction).toBeCalledTimes(2);
});

it("should be tested again", () => {
    let mockFunction: jest.Mock<boolean, [string]>;
    mockFunction = jest.fn((myString: string) => {
        return true;
    });
    mockFunction("test");
    expect(mockFunction).toBeCalledTimes(1);
});
