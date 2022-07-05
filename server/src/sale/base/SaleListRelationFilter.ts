/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { SaleWhereInput } from "./SaleWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class SaleListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => SaleWhereInput,
  })
  @ValidateNested()
  @Type(() => SaleWhereInput)
  @IsOptional()
  @Field(() => SaleWhereInput, {
    nullable: true,
  })
  every?: SaleWhereInput;

  @ApiProperty({
    required: false,
    type: () => SaleWhereInput,
  })
  @ValidateNested()
  @Type(() => SaleWhereInput)
  @IsOptional()
  @Field(() => SaleWhereInput, {
    nullable: true,
  })
  some?: SaleWhereInput;

  @ApiProperty({
    required: false,
    type: () => SaleWhereInput,
  })
  @ValidateNested()
  @Type(() => SaleWhereInput)
  @IsOptional()
  @Field(() => SaleWhereInput, {
    nullable: true,
  })
  none?: SaleWhereInput;
}
export { SaleListRelationFilter };
