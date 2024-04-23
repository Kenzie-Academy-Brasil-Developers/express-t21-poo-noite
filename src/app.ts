import express, { json } from "express";
import { gameRouter } from "./routes/game.routes";
import { HandleErrors } from "./middleware/handleErrors.middleware";

export const app = express();

app.use(json());

app.use("/games", gameRouter);

app.use(HandleErrors.execute);