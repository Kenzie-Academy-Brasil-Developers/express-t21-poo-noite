import { IGame } from "../interfaces/game.interface";

export const gameDatabase: IGame[] = [];

let id = 0;

export function generateId(){
    id++;

    return id;
}