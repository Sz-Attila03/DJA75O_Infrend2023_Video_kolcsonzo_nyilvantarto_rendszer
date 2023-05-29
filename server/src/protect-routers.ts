import { expressjwt } from "express-jwt"

export const checkUser = expressjwt({
    secret: "mySecret",
    algorithms: ["HS256"]
});

export const handleAuthorizationError = (err, req, res, next) => {
    if (err.name === "UnauthorizedError")
    {
        res.status(401).send({ error: 'Ehez a művelethez hitelesítés szükséges'});
    }
    else
    {
        next(err);
    }
};
