export interface IGame{
    id: number;
    name: string;
    description: string;
    price: number;
    console: string;
    createdAt: Date;
    updatedAt?: Date;
}

export type TCreateGameData = Pick<IGame, "name" | "description" | "price" | "console">;

export type TUpdateGameData = Partial<TCreateGameData>;