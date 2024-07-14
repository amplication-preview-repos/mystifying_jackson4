/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { ProductionHouseService } from "../productionHouse.service";
import { ProductionHouseCreateInput } from "./ProductionHouseCreateInput";
import { ProductionHouse } from "./ProductionHouse";
import { ProductionHouseFindManyArgs } from "./ProductionHouseFindManyArgs";
import { ProductionHouseWhereUniqueInput } from "./ProductionHouseWhereUniqueInput";
import { ProductionHouseUpdateInput } from "./ProductionHouseUpdateInput";

export class ProductionHouseControllerBase {
  constructor(protected readonly service: ProductionHouseService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ProductionHouse })
  async createProductionHouse(
    @common.Body() data: ProductionHouseCreateInput
  ): Promise<ProductionHouse> {
    return await this.service.createProductionHouse({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [ProductionHouse] })
  @ApiNestedQuery(ProductionHouseFindManyArgs)
  async productionHouses(
    @common.Req() request: Request
  ): Promise<ProductionHouse[]> {
    const args = plainToClass(ProductionHouseFindManyArgs, request.query);
    return this.service.productionHouses({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: ProductionHouse })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async productionHouse(
    @common.Param() params: ProductionHouseWhereUniqueInput
  ): Promise<ProductionHouse | null> {
    const result = await this.service.productionHouse({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: ProductionHouse })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateProductionHouse(
    @common.Param() params: ProductionHouseWhereUniqueInput,
    @common.Body() data: ProductionHouseUpdateInput
  ): Promise<ProductionHouse | null> {
    try {
      return await this.service.updateProductionHouse({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: ProductionHouse })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteProductionHouse(
    @common.Param() params: ProductionHouseWhereUniqueInput
  ): Promise<ProductionHouse | null> {
    try {
      return await this.service.deleteProductionHouse({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}