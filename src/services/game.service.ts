import { gameDatabase, generateId } from "../database/database";
import { IGame, TCreateGameData, TUpdateGameData } from "../interfaces/game.interface";

export class GameService {
   create(data: TCreateGameData) {
      const now = new Date();

      const newGame: IGame = {
         id: generateId(),
         ...data,
         createdAt: now,
      };

      gameDatabase.push(newGame);

      return newGame;
   }

   getMany(search?: string) {
      const gameList = gameDatabase.filter((game) =>
         search ? game.name.toLowerCase().includes(search.toLowerCase()) : true
      );

      return gameList;
   }

   getOne(id: number) {
      const game = gameDatabase.find((game) => game.id === id);

      if (!game) {
         throw new Error("Game not found.");
      }

      return game;
   }

   update(id: number, data: TUpdateGameData) {
      const currentGame = gameDatabase.find((game) => game.id === id);

      if (!currentGame) {
         throw new Error("Game not found.");
      }

      const now = new Date();

      const updateGame: IGame = {
         ...currentGame,
         ...data,
         updatedAt: now,
      };

      const index = gameDatabase.findIndex((game) => game.id === id);

      gameDatabase.splice(index, 1, updateGame);

      return updateGame;
   }

   remove(id: number) {
      const index = gameDatabase.findIndex((game) => game.id === id);

      if (index === -1) {
         throw new Error("Game not found.");
      }

      gameDatabase.splice(index, 1);

      return { message: "Game successfully deleted." };
   }
}
