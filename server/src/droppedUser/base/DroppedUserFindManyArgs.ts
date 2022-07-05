/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { DroppedUserWhereInput } from "./DroppedUserWhereInput";
import { Type } from "class-transformer";
import { DroppedUserOrderByInput } from "./DroppedUserOrderByInput";

@ArgsType()
class DroppedUserFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => DroppedUserWhereInput,
  })
  @Field(() => DroppedUserWhereInput, { nullable: true })
  @Type(() => DroppedUserWhereInput)
  where?: DroppedUserWhereInput;

  @ApiProperty({
    required: false,
    type: [DroppedUserOrderByInput],
  })
  @Field(() => [DroppedUserOrderByInput], { nullable: true })
  @Type(() => DroppedUserOrderByInput)
  orderBy?: Array<DroppedUserOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { DroppedUserFindManyArgs };
