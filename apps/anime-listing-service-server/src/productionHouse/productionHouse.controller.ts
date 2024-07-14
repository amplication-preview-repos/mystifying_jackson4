import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ProductionHouseService } from "./productionHouse.service";
import { ProductionHouseControllerBase } from "./base/productionHouse.controller.base";

@swagger.ApiTags("productionHouses")
@common.Controller("productionHouses")
export class ProductionHouseController extends ProductionHouseControllerBase {
  constructor(protected readonly service: ProductionHouseService) {
    super(service);
  }
}
