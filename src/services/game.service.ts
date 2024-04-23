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

   /*
   Posso ou não receber um termo de busca

   Se eu receber o termo de busca eu vou retornar os resultados que:
   Conterem o termo de busca no nome 
   OU
   Conterem o termo de busca na descrição

   Do contrário eu vou retornar todos os resultados
   */

   /*
      Uma páginação de 5 resultados por página
      1,5
      6,10
      11,15
      16,20
      ...
   */

   /*

      ASC = DESC

      */

   getMany(search?: string, page = 1, orderBy: "ASC" | "DESC" = "DESC") {
      const firstIndex = page * 5 - 5;
      const lastIndex = page * 5;

      const pageCount = gameDatabase.length > 0 ? Math.ceil(gameDatabase.length / 5) : 1;

      /*
      if (search) {
         const gameList = gameDatabase.filter(
            (game) =>
               game.name.toLowerCase().includes(search.toLowerCase()) ||
               game.description.toLowerCase().includes(search.toLowerCase())
         );

         return gameList.slice(firstIndex, lastIndex);
      } else {
         return gameDatabase.slice(firstIndex, lastIndex);
      }
      */

      const gameList = gameDatabase
         .filter((game) => {
            if (search) {
               return (
                  game.name.toLowerCase().includes(search.toLowerCase()) ||
                  game.description.toLowerCase().includes(search.toLowerCase())
               );
            }
            return true;
         })
         .sort((a, b) =>
            orderBy === "ASC"
               ? Number(a.createdAt) - Number(b.createdAt)
               : Number(b.createdAt) - Number(a.createdAt)
         )
         .slice(firstIndex, lastIndex);

      return { pageCount, gameList: gameList };

      /*
      const gameList = gameDatabase.filter((game) =>
         search ? game.name.toLowerCase().includes(search.toLowerCase()) : true
      );
      */
   }

   getOne(game: IGame) {
      return game;
   }

   update(currentGame: IGame, data: TUpdateGameData) {
      const now = new Date();

      const updateGame: IGame = {
         ...currentGame,
         ...data,
         updatedAt: now,
      };

      const index = gameDatabase.findIndex((game) => game.id === currentGame.id);

      gameDatabase.splice(index, 1, updateGame);

      return updateGame;
   }

   remove(id: number) {
      const index = gameDatabase.findIndex((game) => game.id === id);

      gameDatabase.splice(index, 1);

      return { message: "Game successfully deleted." };
   }
}
