import { Router } from "express";
import { GameController } from "../controllers/game.controller";
import { IsGameIdValid } from "../middleware/isGameIdValid.middleware";

export const gameRouter =  Router();

const gameController = new GameController();

gameRouter.post("/", gameController.create);
gameRouter.get("/", gameController.getMany);
gameRouter.get("/:id", IsGameIdValid.execute, gameController.getOne);
gameRouter.patch("/:id", IsGameIdValid.execute, gameController.update);
gameRouter.delete("/:id", IsGameIdValid.execute, gameController.remove);