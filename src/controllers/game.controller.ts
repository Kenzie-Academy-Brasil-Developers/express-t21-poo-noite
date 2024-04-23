import { Request, Response } from "express";
import { GameService } from "../services/game.service";

export class GameController {
   //Etapa do processo (final)
   create(request: Request, response: Response) {
      const gameService = new GameService();

      const game = gameService.create(request.body);

      return response.status(201).json(game);
   }

   getMany(request: Request, response: Response) {
      const gameService = new GameService();

      const games = gameService.getMany(
         request.query.search as string,
         request.query.page ? Number(request.query.page) : undefined,
         request.query.order as "ASC" | "DESC"
      );

      return response.status(200).json(games);
   }

   getOne(request: Request, response: Response) {
      const gameService = new GameService();

      const game = gameService.getOne(response.locals.existingGame);

      return response.status(200).json(game);
   }

   update(request: Request, response: Response) {
      const gameService = new GameService();

      const game = gameService.update(response.locals.existingGame, request.body);

      return response.status(200).json(game);
   }

   remove(request: Request, response: Response) {
      const gameService = new GameService();

      const message = gameService.remove(Number(request.params.id));

      return response.status(200).json(message);
   }
}
