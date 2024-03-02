import {Request, Response} from "express";
import {T} from "../libs/types/common";
import MemberService from "../models/Member.service";
import { MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";

const restaurantController: T = {};

restaurantController.goHome = (req: Request, res: Response) => {
 try{
    res.send("Home Page");
 } catch (err){
    console.log("Error, goHome", err);
 }
};
restaurantController.getLogin = (req: Request, res: Response) => {
    try{
       res.send("Login Page");
    } catch (err){
       console.log("Error, getLogin", err);
    }
   };
  restaurantController.getSignup = (req: Request, res: Response) => {
    try{
       res.send("Signup Page");
    } catch (err){
       console.log("Error, getSign up", err);
    }
   };
   restaurantController.processLogin = (req: Request, res: Response) => {
      try{
         console.log("processLogin")
         res.send("processLogin");
      } catch (err){
         console.log("Error, processLogin", err);
      }
     };
     restaurantController.processSignup = async (req: Request, res: Response) => {
       try {
          console.log("proccessSignup");
     
         const newMember: MemberInput = req.body;
         newMember.memberType = MemberType.RESTAURANT;
     
         const memberService = new MemberService();
         const result = await memberService.processSignup(newMember);
     
         res.send(result);  
       } catch (error) {
         console.log("Error, proccessSignup", error);
         res.send(error);
       }
     };

   export default restaurantController ;