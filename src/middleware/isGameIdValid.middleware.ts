// middle - meio 
// ware - processo

import { NextFunction, Request, Response } from "express";
import { gameDatabase } from "../database/database";
import { AppError } from "../error/AppError";

// Centralizando lógicas que se repetem nos processos de rota

export class IsGameIdValid{
    static execute(request: Request, response: Response, next: NextFunction){
        //Executar uma lógica
        const existingGame = gameDatabase.find(game => game.id === Number(request.params.id));

        if(!existingGame){
            throw new AppError("Game not found.", 404);
        }

        response.locals.existingGame = existingGame;
        
        next(); //Avança para a próxima etapa do processo
    }
}