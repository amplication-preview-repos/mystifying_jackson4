/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ProductionHouseWhereInput } from "./ProductionHouseWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ProductionHouseListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ProductionHouseWhereInput,
  })
  @ValidateNested()
  @Type(() => ProductionHouseWhereInput)
  @IsOptional()
  @Field(() => ProductionHouseWhereInput, {
    nullable: true,
  })
  every?: ProductionHouseWhereInput;

  @ApiProperty({
    required: false,
    type: () => ProductionHouseWhereInput,
  })
  @ValidateNested()
  @Type(() => ProductionHouseWhereInput)
  @IsOptional()
  @Field(() => ProductionHouseWhereInput, {
    nullable: true,
  })
  some?: ProductionHouseWhereInput;

  @ApiProperty({
    required: false,
    type: () => ProductionHouseWhereInput,
  })
  @ValidateNested()
  @Type(() => ProductionHouseWhereInput)
  @IsOptional()
  @Field(() => ProductionHouseWhereInput, {
    nullable: true,
  })
  none?: ProductionHouseWhereInput;
}
export { ProductionHouseListRelationFilter as ProductionHouseListRelationFilter };