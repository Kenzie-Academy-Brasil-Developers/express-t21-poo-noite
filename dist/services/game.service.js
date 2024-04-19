"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameService = void 0;
const database_1 = require("../database/database");
class GameService {
    create(data) {
        const now = new Date();
        const newGame = Object.assign(Object.assign({ id: (0, database_1.generateId)() }, data), { createdAt: now });
        database_1.gameDatabase.push(newGame);
        return newGame;
    }
    getMany(search) {
        const gameList = database_1.gameDatabase.filter((game) => search ? game.name.toLowerCase().includes(search.toLowerCase()) : true);
        return gameList;
    }
    getOne(id) {
        const game = database_1.gameDatabase.find((game) => game.id === id);
        if (!game) {
            throw new Error("Game not found.");
        }
        return game;
    }
    update(id, data) {
        const currentGame = database_1.gameDatabase.find((game) => game.id === id);
        if (!currentGame) {
            throw new Error("Game not found.");
        }
        const now = new Date();
        const updateGame = Object.assign(Object.assign(Object.assign({}, currentGame), data), { updatedAt: now });
        const index = database_1.gameDatabase.findIndex((game) => game.id === id);
        database_1.gameDatabase.splice(index, 1, updateGame);
        return updateGame;
    }
    remove(id) {
        const index = database_1.gameDatabase.findIndex((game) => game.id === id);
        if (index === -1) {
            throw new Error("Game not found.");
        }
        database_1.gameDatabase.splice(index, 1);
        return { message: "Game successfully deleted." };
    }
}
exports.GameService = GameService;
