import pizzas from "../data.json";

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

test("should mock implementation of a basic function", () => {
    const mock = jest.fn(() => "I am a mock function");
    expect(mock("calling my mock function")).toBe("I am a mock function");
    expect(mock).toHaveBeenCalledWith("calling my mock function");
});

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
    expect(mock).toHaveBeenLastCalledWith("brian")
});
