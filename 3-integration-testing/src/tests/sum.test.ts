import { describe, expect, it } from "vitest";
import { app } from "..";
import request from "supertest";


// now by adding integeration testing means start database locally with help of docker we do not need to add mocking . 


describe("POST /sum", () => {
    it("should sum add 2 numbers", async () => {
        const { status, body } = await request(app).post('/sum').send({
            a: 1,
            b: 2
        })
        expect(status).toBe(200);
        expect(body).toEqual({ answer: 3, id: expect.any(Number) });
    });
})