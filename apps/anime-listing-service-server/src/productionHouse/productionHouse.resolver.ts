import * as graphql from "@nestjs/graphql";
import { ProductionHouseResolverBase } from "./base/productionHouse.resolver.base";
import { ProductionHouse } from "./base/ProductionHouse";
import { ProductionHouseService } from "./productionHouse.service";

@graphql.Resolver(() => ProductionHouse)
export class ProductionHouseResolver extends ProductionHouseResolverBase {
  constructor(protected readonly service: ProductionHouseService) {
    super(service);
  }
}
