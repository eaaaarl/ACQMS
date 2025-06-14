"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueueController = void 0;
class QueueController {
    constructor(queueService) {
        this.queueService = queueService;
        this.createQueue = this.createQueue.bind(this);
        this.createQueueDetail = this.createQueueDetail.bind(this);
        this.countQueue = this.countQueue.bind(this);
    }
    createQueue(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const payload = req.body;
                const newQueue = yield this.queueService.createQueue(payload);
                res.status(200).json({
                    success: true,
                    data: newQueue,
                });
            }
            catch (error) {
                next(error);
            }
        });
    }
    createQueueDetail(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const payload = req.body;
                const newQueueDetail = yield this.queueService.createQueueDetail(payload);
                res.status(200).json({
                    success: true,
                    data: newQueueDetail,
                });
            }
            catch (error) {
                next(error);
            }
        });
    }
    countQueue(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const countQueue = yield this.queueService.countQueue();
                res.status(200).json({ count: countQueue });
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.QueueController = QueueController;
