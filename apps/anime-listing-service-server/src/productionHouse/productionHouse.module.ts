import { Module } from "@nestjs/common";
import { ProductionHouseModuleBase } from "./base/productionHouse.module.base";
import { ProductionHouseService } from "./productionHouse.service";
import { ProductionHouseController } from "./productionHouse.controller";
import { ProductionHouseResolver } from "./productionHouse.resolver";

@Module({
  imports: [ProductionHouseModuleBase],
  controllers: [ProductionHouseController],
  providers: [ProductionHouseService, ProductionHouseResolver],
  exports: [ProductionHouseService],
})
export class ProductionHouseModule {}
