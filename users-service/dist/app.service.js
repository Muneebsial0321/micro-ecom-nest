"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
let AppService = class AppService {
    constructor() {
        this.Patterns = {
            "test": "test"
        };
        this.RabbitMq = microservices_1.ClientProxyFactory.create({
            transport: microservices_1.Transport.RMQ,
            options: {
                queue: 'mail_queue',
                urls: [`${process.env.RABBITMQ_URL}`],
                queueOptions: { durable: true }
            }
        });
    }
    Dev_Send_Message() {
        const data = { message: "hello world" };
        this.RabbitMq.emit(this.Patterns.test, data);
        return { message: "has been sent to pattern " + this.Patterns.test };
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], AppService);
//# sourceMappingURL=app.service.js.map