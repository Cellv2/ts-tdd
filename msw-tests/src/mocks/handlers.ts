import { rest } from "msw";

export const handlers = [
    rest.post("/login", (req, res, ctx) => {
        sessionStorage.setItem("is-authenticated", "true");

        return res(ctx.status(200));
    }),
    rest.get("/user", (req, res, ctx) => {
        const isAuthenticated = sessionStorage.getItem("is-authenticated");

        if (!isAuthenticated) {
            return res(
                ctx.status(403),
                ctx.json({ errorMessage: "Not authorised" })
            );
        }

        return res(
            ctx.status(200),
            ctx.json({
                username: "ra",
            })
        );
    }),
    rest.get("http://worldtimeapi.org/api/timezone", (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(["timezone_1", "timezone_2"]));
    }),
];
