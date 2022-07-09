import { Request, Response } from "express";

export const categories = async (req: Request, res: Response) => {
    res.send(JSON.stringify({ test: 123 }));
};
