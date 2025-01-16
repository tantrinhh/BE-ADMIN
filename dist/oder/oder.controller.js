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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OderController = void 0;
const common_1 = require("@nestjs/common");
const oder_service_1 = require("./oder.service");
const create_oder_dto_1 = require("./dto/create-oder.dto");
const update_oder_dto_1 = require("./dto/update-oder.dto");
let OderController = class OderController {
    constructor(oderService) {
        this.oderService = oderService;
    }
    async createOder(createOrderDto) {
        return this.oderService.createOrder(createOrderDto);
    }
    async findAll() {
        return this.oderService.findAll();
    }
    async getBestSellingProducts() {
        return this.oderService.getBestSellingProducts();
    }
    update(id, updateOderDto) {
        return this.oderService.update(+id, updateOderDto);
    }
    remove(id) {
        return this.oderService.remove(+id);
    }
};
exports.OderController = OderController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_oder_dto_1.CreateOderDto]),
    __metadata("design:returntype", Promise)
], OderController.prototype, "createOder", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], OderController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('best-selling'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], OderController.prototype, "getBestSellingProducts", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_oder_dto_1.UpdateOderDto]),
    __metadata("design:returntype", void 0)
], OderController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], OderController.prototype, "remove", null);
exports.OderController = OderController = __decorate([
    (0, common_1.Controller)('oder'),
    __metadata("design:paramtypes", [oder_service_1.OderService])
], OderController);
//# sourceMappingURL=oder.controller.js.map