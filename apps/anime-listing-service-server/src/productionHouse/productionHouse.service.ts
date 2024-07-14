import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProductionHouseServiceBase } from "./base/productionHouse.service.base";

@Injectable()
export class ProductionHouseService extends ProductionHouseServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
