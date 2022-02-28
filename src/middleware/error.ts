import { Request, Response } from 'express';

export function restJson(
  err: { code: number; message: string },
  req: Request,
  res: Response
): void {
  res.status(err.code);
  res.json(err);
}
