// import { fetch } from "msw/lib/types/context";
test("allows user to log in", async () => {
    // Render components, perform requests, receive mocked responses.
    const response = await fetch("http://worldtimeapi.org/api/timezone");
    expect(response.json()).toEqual(["timezone_1", "timezone_2"]);
});
