import { ProductionHouseWhereInput } from "./ProductionHouseWhereInput";
import { ProductionHouseOrderByInput } from "./ProductionHouseOrderByInput";

export type ProductionHouseFindManyArgs = {
  where?: ProductionHouseWhereInput;
  orderBy?: Array<ProductionHouseOrderByInput>;
  skip?: number;
  take?: number;
};
