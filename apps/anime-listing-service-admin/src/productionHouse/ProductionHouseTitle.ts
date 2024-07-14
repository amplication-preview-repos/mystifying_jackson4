import { ProductionHouse as TProductionHouse } from "../api/productionHouse/ProductionHouse";

export const PRODUCTIONHOUSE_TITLE_FIELD = "id";

export const ProductionHouseTitle = (record: TProductionHouse): string => {
  return record.id?.toString() || String(record.id);
};
