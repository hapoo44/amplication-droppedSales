/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { DroppedUserWhereUniqueInput } from "../../droppedUser/base/DroppedUserWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";
@InputType()
class DroppedUserUpdateManyWithoutContactFilesInput {
  @Field(() => [DroppedUserWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [DroppedUserWhereUniqueInput],
  })
  connect?: Array<DroppedUserWhereUniqueInput>;

  @Field(() => [DroppedUserWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [DroppedUserWhereUniqueInput],
  })
  disconnect?: Array<DroppedUserWhereUniqueInput>;

  @Field(() => [DroppedUserWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [DroppedUserWhereUniqueInput],
  })
  set?: Array<DroppedUserWhereUniqueInput>;
}
export { DroppedUserUpdateManyWithoutContactFilesInput };
