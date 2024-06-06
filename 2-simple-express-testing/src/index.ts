import express from "express";
import { prismaClient } from "./db";

export const app = express();
app.use(express.json());

app.post("/sum", async (req, res) => {
    const a = req.body.a;
    const b = req.body.b;
    const answer = a + b;

    // When we run the unit test case for this route . we mock the database call or redis call .
    // Mock simply means we are not calling the actual database or redis server. we call an empty function or define it empty .
    await prismaClient.sum.create({
        data: {
            a: a,
            b: b,
            result: answer
        }
    })
   
    console.log(Object.keys(prismaClient));
    res.json({
        answer
    })
});
