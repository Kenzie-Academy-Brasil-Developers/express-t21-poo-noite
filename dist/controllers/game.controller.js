"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameController = void 0;
const game_service_1 = require("../services/game.service");
class GameController {
    create(request, response) {
        const gameService = new game_service_1.GameService();
        const game = gameService.create(request.body);
        return response.status(201).json(game);
    }
    getMany(request, response) {
        const gameService = new game_service_1.GameService();
        const games = gameService.getMany(request.query.search);
        return response.status(200).json(games);
    }
    getOne(request, response) {
        const gameService = new game_service_1.GameService();
        const game = gameService.getOne(Number(request.params.id));
        return response.status(200).json(game);
    }
    update(request, response) {
        const gameService = new game_service_1.GameService();
        const game = gameService.update(Number(request.params.id), request.body);
        return response.status(200).json(game);
    }
    remove(request, response) {
        const gameService = new game_service_1.GameService();
        const message = gameService.remove(Number(request.params.id));
        return response.status(200).json(message);
    }
}
exports.GameController = GameController;
