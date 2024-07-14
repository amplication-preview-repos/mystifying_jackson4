/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { ProductionHouse } from "./ProductionHouse";
import { ProductionHouseCountArgs } from "./ProductionHouseCountArgs";
import { ProductionHouseFindManyArgs } from "./ProductionHouseFindManyArgs";
import { ProductionHouseFindUniqueArgs } from "./ProductionHouseFindUniqueArgs";
import { DeleteProductionHouseArgs } from "./DeleteProductionHouseArgs";
import { ProductionHouseService } from "../productionHouse.service";
@graphql.Resolver(() => ProductionHouse)
export class ProductionHouseResolverBase {
  constructor(protected readonly service: ProductionHouseService) {}

  async _productionHousesMeta(
    @graphql.Args() args: ProductionHouseCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [ProductionHouse])
  async productionHouses(
    @graphql.Args() args: ProductionHouseFindManyArgs
  ): Promise<ProductionHouse[]> {
    return this.service.productionHouses(args);
  }

  @graphql.Query(() => ProductionHouse, { nullable: true })
  async productionHouse(
    @graphql.Args() args: ProductionHouseFindUniqueArgs
  ): Promise<ProductionHouse | null> {
    const result = await this.service.productionHouse(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => ProductionHouse)
  async deleteProductionHouse(
    @graphql.Args() args: DeleteProductionHouseArgs
  ): Promise<ProductionHouse | null> {
    try {
      return await this.service.deleteProductionHouse(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
