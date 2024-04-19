import { Router } from "express";
import { GameController } from "../controllers/game.controller";

export const gameRouter =  Router();

const gameController = new GameController();

gameRouter.post("/", gameController.create);
gameRouter.get("/", gameController.getMany);
gameRouter.get("/:id", gameController.getOne);
gameRouter.patch("/:id", gameController.update);
gameRouter.delete("/:id", gameController.remove);