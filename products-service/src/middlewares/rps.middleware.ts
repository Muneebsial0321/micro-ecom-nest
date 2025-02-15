import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

@Injectable()
export class ReqPerSec implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        const startTime = new Date().getTime()
        next()

        req.on('end', () => {
            const { method, originalUrl } = req
            const endTime = new Date().getTime()
            console.log(
                `${method} : ${originalUrl} ${endTime - startTime}ms`
            )
            }
        )
    }
}