import {ObjectId}from "mongoose";
import { ViewGroup } from "../enums/view.enum";

export interface View {
    _id : ObjectId;
    viewgroup: ViewGroup;
    memberID: ObjectId;
    viewRefId:ObjectId;
    createdAt: Date;
    updateAt: Date;
}
export interface ViewInput{
    memberId: ObjectId;
    viewRefId: ObjectId;
    viewGroup: ViewGroup;
}
