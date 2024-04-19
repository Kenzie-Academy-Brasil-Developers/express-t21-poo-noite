import { Request, Response } from "express";
import { GameService } from "../services/game.service";

export class GameController {
   create(request: Request, response: Response) {
      const gameService = new GameService();

      const game = gameService.create(request.body);

      return response.status(201).json(game);
   }

   getMany(request: Request, response: Response) {
      const gameService = new GameService();

      const games = gameService.getMany(request.query.search as string);

      return response.status(200).json(games);
   }

   getOne(request: Request, response: Response) {
      const gameService = new GameService();

      const game = gameService.getOne(Number(request.params.id));

      return response.status(200).json(game);
   }

   update(request: Request, response: Response) {
      const gameService = new GameService();

      const game = gameService.update(Number(request.params.id), request.body);

      return response.status(200).json(game);
   }

   remove(request: Request, response: Response) {
      const gameService = new GameService();

      const message = gameService.remove(Number(request.params.id));

      return response.status(200).json(message);
   }
}
