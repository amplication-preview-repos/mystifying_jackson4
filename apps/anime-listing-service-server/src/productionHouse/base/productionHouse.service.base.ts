/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  ProductionHouse as PrismaProductionHouse,
} from "@prisma/client";

export class ProductionHouseServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ProductionHouseCountArgs, "select">
  ): Promise<number> {
    return this.prisma.productionHouse.count(args);
  }

  async productionHouses(
    args: Prisma.ProductionHouseFindManyArgs
  ): Promise<PrismaProductionHouse[]> {
    return this.prisma.productionHouse.findMany(args);
  }
  async productionHouse(
    args: Prisma.ProductionHouseFindUniqueArgs
  ): Promise<PrismaProductionHouse | null> {
    return this.prisma.productionHouse.findUnique(args);
  }
  async createProductionHouse(
    args: Prisma.ProductionHouseCreateArgs
  ): Promise<PrismaProductionHouse> {
    return this.prisma.productionHouse.create(args);
  }
  async updateProductionHouse(
    args: Prisma.ProductionHouseUpdateArgs
  ): Promise<PrismaProductionHouse> {
    return this.prisma.productionHouse.update(args);
  }
  async deleteProductionHouse(
    args: Prisma.ProductionHouseDeleteArgs
  ): Promise<PrismaProductionHouse> {
    return this.prisma.productionHouse.delete(args);
  }
}
