"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ProductService = /** @class */ (function () {
    function ProductService() {
        this.products = [
            {
                Id: 1,
                ProductName: "Product 1",
                ProductPrice: "1.00"
            },
            {
                Id: 2,
                ProductName: "Product 2",
                ProductPrice: "2.00"
            },
            {
                Id: 3,
                ProductName: "Product 3",
                ProductPrice: "3.00"
            }
        ];
    }
    ProductService.prototype.getproducts = function () {
        return this.products;
    };
    ProductService = __decorate([
        core_1.Injectable()
    ], ProductService);
    return ProductService;
}());
exports.ProductService = ProductService;
//# sourceMappingURL=products.service.js.map