const { statusCode } = require("./status.code");

describe("StatusCode", () => {
    it("should create the status code", () => {
        expect(statusCode).toBeDefined();
    });
    it("should create the status code 200", () => {
        expect(statusCode.OK).toEqual(200);
    });
    it("should create the status code 201", () => {
        expect(statusCode.CREATED).toEqual(201);
    });
    it("should create the status code 204", () => {
        expect(statusCode.NO_CONTENT).toEqual(204);
    });
    it("should create the status code 400", () => {
        expect(statusCode.BAD_REQUEST).toEqual(400);
    });
    it("should create the status code 401", () => {
        expect(statusCode.UNAUTHORIZED).toEqual(401);
    });
    it("should create the status code 403", () => {
        expect(statusCode.FORBIDDEN).toEqual(403);
    });
    it("should create the status code 404", () => {
        expect(statusCode.NOT_FOUND).toEqual(404);
    });
    it("should create the status code 500", () => {
        expect(statusCode.INTERNAL_SERVER_ERROR).toEqual(500);
    });
    it("should create the status code 501", () => {
        expect(statusCode.NOT_IMPLEMENTED).toEqual(501);
    });
    it("should create the status code 502", () => {
        expect(statusCode.BAD_GATEWAY).toEqual(502);
    });
    it("should create the status code 503", () => {
        expect(statusCode.SERVICE_UNAVAILABLE).toEqual(503);
    });
    it("should create the status code 504", () => {
        expect(statusCode.GATEWAY_TIMEOUT).toEqual(504);
    });
});