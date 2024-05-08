import { Express, Request, Response, NextFunction } from 'express'

export default async (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  console.error(err)
  return res.status((err as any).status || 500).json({
    error: err.message || 'Internal Server Error',
  })
}
