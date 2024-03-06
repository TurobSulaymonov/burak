import {Request, Response} from "express";
import {T} from "../libs/types/common";
import MemberService from "../models/Member.service";
import { LoginInput, MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";
const memberService = new MemberService;
const restaurantController: T = {};

restaurantController.goHome = (req: Request, res: Response) => {
 try{
    res.send("Home Page");
 } catch (err){
    console.log("Error, goHome", err);
 }
};
restaurantController.getSignup = (req: Request, res: Response) => {
   try{
      res.send("Signup Page");
   } catch (err){
      console.log("Error, getSign up", err);
   }
  };
restaurantController.getLogin = (req: Request, res: Response) => {
    try{
       res.send("Login Page");
    } catch (err){
       console.log("Error, getLogin", err);
    }
   };
 
   restaurantController.procesSignup = async (req: Request, res: Response) => {
      try {
         console.log("proccesSignup");
    
        const newMember: MemberInput = req.body;
        newMember.memberType = MemberType.RESTAURANT;
        const result = await memberService.procesSignup(newMember);
         
      // TODO SESSIONS

        res.send(result);  
      } catch (error) {
        console.log("Error, proccesSignup", error);
        res.send(error);
      }
    };
   restaurantController.procesLogin = async (req: Request, res: Response) => {
      try{
         console.log("processLogin");
           const input: LoginInput = req.body,
              result = await memberService.procesLogin(input);
         
         // TODO SESSIONS

              res.send(result);
      } catch (err){
         console.log("Error, procesLogin", err);
         res.send(err);
      }
     };
     

   export default restaurantController ;