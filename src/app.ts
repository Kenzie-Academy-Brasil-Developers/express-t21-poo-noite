import express, { json } from "express";
import { gameRouter } from "./routes/game.routes";

export const app = express();

app.use(json());

app.use("/games", gameRouter);