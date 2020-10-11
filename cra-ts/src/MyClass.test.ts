import MyClass, { Data } from "./MyClass";

describe("should test MyClass", () => {
    const mockMyClass = new MyClass();

    // prevent books from accumulating between tests (the data isn't class bound, it's localStorage bound, so jest.clearAllMocks() won't help)
    beforeEach(() => localStorage.clear());

    it("test should add a book and return correctly", () => {
        mockMyClass.add("First Book");
        expect(mockMyClass.getBooks()).toMatchObject<Data[]>([
            {
                name: "First Book",
                read: false,
            },
        ]);
    });

    it("should modify a book which has been added and return correctly", () => {
        mockMyClass.add("Modify Me Book");

        const changeBookSpy = jest.spyOn(mockMyClass, "changeBook"); // this must come BEFORE the call to changeBook, else the spy hasn't been attached yet
        mockMyClass.changeBook("read", true, 0);
        expect(changeBookSpy).toHaveBeenCalled();
        expect(changeBookSpy).toHaveBeenCalledTimes(1);

        expect(mockMyClass.getBooks()).toMatchObject<Data[]>([
            { name: "Modify Me Book", read: true },
        ]);
    });
});
