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
