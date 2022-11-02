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
import {
  IsString,
  IsOptional,
  ValidateNested,
  IsDate,
  IsBoolean,
  IsInt,
  IsEnum,
} from "class-validator";
import { ContactFileWhereUniqueInput } from "../../contactFile/base/ContactFileWhereUniqueInput";
import { Type } from "class-transformer";
import { SaleWhereUniqueInput } from "../../sale/base/SaleWhereUniqueInput";
import { EnumDroppedUserSex } from "./EnumDroppedUserSex";
import { EnumDroppedUserStatus } from "./EnumDroppedUserStatus";
@InputType()
class DroppedUserUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  bucket?: string | null;

  @ApiProperty({
    required: false,
    type: () => ContactFileWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ContactFileWhereUniqueInput)
  @IsOptional()
  @Field(() => ContactFileWhereUniqueInput, {
    nullable: true,
  })
  contactFile?: ContactFileWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  createdBy?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  dropId?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  droppedDate?: Date | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  filePath?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  firstName?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  lastName?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  mobile?: string | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  needGuidance?: boolean | null;

  @ApiProperty({
    required: false,
    type: () => SaleWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SaleWhereUniqueInput)
  @IsOptional()
  @Field(() => SaleWhereUniqueInput, {
    nullable: true,
  })
  sale?: SaleWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  sequence?: number | null;

  @ApiProperty({
    required: false,
    enum: EnumDroppedUserSex,
  })
  @IsEnum(EnumDroppedUserSex)
  @IsOptional()
  @Field(() => EnumDroppedUserSex, {
    nullable: true,
  })
  sex?: "F" | "M" | null;

  @ApiProperty({
    required: false,
    enum: EnumDroppedUserStatus,
  })
  @IsEnum(EnumDroppedUserStatus)
  @IsOptional()
  @Field(() => EnumDroppedUserStatus, {
    nullable: true,
  })
  status?: "INIT" | "SENT_NEED_GUIDANCE_SMS" | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  updatedBy?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  utmCampaign?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  vcfString?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  weight?: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  weightDifference?: number | null;
}
export { DroppedUserUpdateInput };
