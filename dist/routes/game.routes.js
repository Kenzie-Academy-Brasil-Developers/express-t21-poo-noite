"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gameRouter = void 0;
const express_1 = require("express");
const game_controller_1 = require("../controllers/game.controller");
exports.gameRouter = (0, express_1.Router)();
const gameController = new game_controller_1.GameController();
exports.gameRouter.post("/", gameController.create);
exports.gameRouter.get("/", gameController.getMany);
exports.gameRouter.get("/:id", gameController.getOne);
exports.gameRouter.patch("/:id", gameController.update);
exports.gameRouter.delete("/:id", gameController.remove);
