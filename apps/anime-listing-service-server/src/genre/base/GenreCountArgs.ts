/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { GenreWhereInput } from "./GenreWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class GenreCountArgs {
  @ApiProperty({
    required: false,
    type: () => GenreWhereInput,
  })
  @Field(() => GenreWhereInput, { nullable: true })
  @Type(() => GenreWhereInput)
  where?: GenreWhereInput;
}

export { GenreCountArgs as GenreCountArgs };
