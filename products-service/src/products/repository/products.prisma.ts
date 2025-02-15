import { Injectable } from "@nestjs/common";
import { DbService } from "src/db/db.service";

@Injectable()
export class ProductRepository{

    constructor(private readonly db:DbService ){}

    create(){}
    getAll(){}
    getOne(){}
    updateOne(){}
    deleteOne(){}
}