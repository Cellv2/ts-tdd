import pizzas from "../data.json";

/**
 * Data testing
 */
test("the pizza data is correct", () => {
    expect(pizzas).toMatchSnapshot();
    expect(pizzas).toHaveLength(4);
    expect(pizzas.map((pizza) => pizza.name)).toEqual([
        "Chicago Pizza",
        "Neapolitan Pizza",
        "New York Pizza",
        "Sicilian Pizza",
    ]);
});

for (let i = 0; i < pizzas.length; i++) {
    test(`pizza[${i}] should have properties id, name, image, desc, price`, () => {
        expect(pizzas[i]).toHaveProperty("id");
        expect(pizzas[i]).toHaveProperty("name");
        expect(pizzas[i]).toHaveProperty("image");
        expect(pizzas[i]).toHaveProperty("desc");
        expect(pizzas[i]).toHaveProperty("price");
    });
}

/**
 * Function mocking
 */
test("should mock implementation of a basic function", () => {
    const mock = jest.fn(() => "I am a mock function");
    expect(mock("calling my mock function")).toBe("I am a mock function");
    expect(mock).toHaveBeenCalledWith("calling my mock function");
});

// this seems to be just for brute forcing the return, not sure why we wouldn't just use mockImplementation()?
test("should mock return value of a function one time", () => {
    const mock = jest.fn();
    mock.mockReturnValueOnce("hello").mockReturnValueOnce("there");

    // console.log(mock(), mock());
    mock(); // "hello"
    mock(); // "there"

    expect(mock).toHaveBeenCalledTimes(2);

    mock("hello", "there", "brian");
    expect(mock).toHaveBeenCalledWith("hello", "there", "brian");

    mock("brian");
    expect(mock).toHaveBeenLastCalledWith("brian");
});

test("should mock implementation of a function", () => {
    const mock = jest.fn().mockImplementation(() => "United Kingdom");

    expect(mock("Location")).toBe("United Kingdom");
    expect(mock).toHaveBeenLastCalledWith("Location");
});

/**
 * Spying
 * This can be used for classes, modules etc.
 */
test("should spy using original implementation", () => {
    const pizza = {
        name: (n) => `Pizza name: ${n}`,
    };

    const spy = jest.spyOn(pizza, "name");
    expect(pizza.name("Cheese")).toBe("Pizza name: Cheese");
    expect(spy).toHaveBeenCalledWith("Cheese");
});

test("should spy using mockImplementation", () => {
    const pizza = {
        name: (n) => `Pizza name: ${n}`,
    };

    const spy = jest.spyOn(pizza, "name");
    spy.mockImplementation((n) => `Crazy pizza!`);
    expect(pizza.name("Cheese")).toBe("Crazy pizza!");

    // we reset the mockImplementation we do above, but keeps the original implementation
    spy.mockRestore();
    expect(pizza.name("Cheese")).not.toBe("Crazy pizza"); // this shouldn't be the case any more, as the mock was reset
    expect(pizza.name("Cheese")).toBe("Pizza name: Cheese");
});
