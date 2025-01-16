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
exports.OderService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const oder_entity_1 = require("./entities/oder.entity");
const typeorm_2 = require("typeorm");
let OderService = class OderService {
    constructor(orderRepository) {
        this.orderRepository = orderRepository;
    }
    async createOrder(createOderDto) {
        const newOrder = this.orderRepository.create(createOderDto);
        return this.orderRepository.save(newOrder);
    }
    async findAll() {
        return this.orderRepository.find();
    }
    async remove(id) {
        const order = await this.orderRepository.findOneBy({ id });
        if (!order) {
            throw new common_1.NotFoundException(`Order with id ${id} not found`);
        }
        await this.orderRepository.remove(order);
    }
    async getBestSellingProducts() {
        const result = await this.orderRepository
            .createQueryBuilder('order')
            .leftJoinAndSelect('order.products', 'product')
            .select('product.productName', 'productName')
            .addSelect('SUM(order.quantity)', 'totalItem')
            .groupBy('product.productName')
            .orderBy('totalItem', 'DESC')
            .getRawMany();
        return result;
    }
    update(id, updateOderDto) {
        return `This action updates a #${id} oder`;
    }
};
exports.OderService = OderService;
exports.OderService = OderService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(oder_entity_1.Oder)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], OderService);
//# sourceMappingURL=oder.service.js.map