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
import { SortOrder } from "../../util/SortOrder";

@InputType({
  isAbstract: true,
  description: undefined,
})
class DroppedUserOrderByInput {
  @ApiProperty({
    required: false,
    enum: ["asc", "desc"],
  })
  @Field(() => SortOrder, {
    nullable: true,
  })
  bucket?: SortOrder;

  @ApiProperty({
    required: false,
    enum: ["asc", "desc"],
  })
  @Field(() => SortOrder, {
    nullable: true,
  })
  contactFileId?: SortOrder;

  @ApiProperty({
    required: false,
    enum: ["asc", "desc"],
  })
  @Field(() => SortOrder, {
    nullable: true,
  })
  createdAt?: SortOrder;

  @ApiProperty({
    required: false,
    enum: ["asc", "desc"],
  })
  @Field(() => SortOrder, {
    nullable: true,
  })
  createdBy?: SortOrder;

  @ApiProperty({
    required: false,
    enum: ["asc", "desc"],
  })
  @Field(() => SortOrder, {
    nullable: true,
  })
  dropId?: SortOrder;

  @ApiProperty({
    required: false,
    enum: ["asc", "desc"],
  })
  @Field(() => SortOrder, {
    nullable: true,
  })
  droppedDate?: SortOrder;

  @ApiProperty({
    required: false,
    enum: ["asc", "desc"],
  })
  @Field(() => SortOrder, {
    nullable: true,
  })
  filePath?: SortOrder;

  @ApiProperty({
    required: false,
    enum: ["asc", "desc"],
  })
  @Field(() => SortOrder, {
    nullable: true,
  })
  firstName?: SortOrder;

  @ApiProperty({
    required: false,
    enum: ["asc", "desc"],
  })
  @Field(() => SortOrder, {
    nullable: true,
  })
  id?: SortOrder;

  @ApiProperty({
    required: false,
    enum: ["asc", "desc"],
  })
  @Field(() => SortOrder, {
    nullable: true,
  })
  lastName?: SortOrder;

  @ApiProperty({
    required: false,
    enum: ["asc", "desc"],
  })
  @Field(() => SortOrder, {
    nullable: true,
  })
  mobile?: SortOrder;

  @ApiProperty({
    required: false,
    enum: ["asc", "desc"],
  })
  @Field(() => SortOrder, {
    nullable: true,
  })
  sequence?: SortOrder;

  @ApiProperty({
    required: false,
    enum: ["asc", "desc"],
  })
  @Field(() => SortOrder, {
    nullable: true,
  })
  updatedAt?: SortOrder;

  @ApiProperty({
    required: false,
    enum: ["asc", "desc"],
  })
  @Field(() => SortOrder, {
    nullable: true,
  })
  updatedBy?: SortOrder;

  @ApiProperty({
    required: false,
    enum: ["asc", "desc"],
  })
  @Field(() => SortOrder, {
    nullable: true,
  })
  vcfString?: SortOrder;
}

export { DroppedUserOrderByInput };
