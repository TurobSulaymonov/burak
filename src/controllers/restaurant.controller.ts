import {Request, Response} from "express";
import {T} from "../libs/types/common";
import MemberService from "../models/Member.service";
import { AdminRequest, LoginInput, MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";
import { Message } from "../libs/Error";
const memberService = new MemberService;
const restaurantController: T = {};

restaurantController.goHome = (req: Request, res: Response) => {
 try{
    res.render("home");
 } catch (err){
    console.log("Error, goHome", err);
    res.redirect("/admin");
 }
};
restaurantController.getSignup = (req: Request, res: Response) => {
   try{
      res.render("signup");
   } catch (err){
      console.log("Error, getSignup", err);
      res.redirect("/admin");

   }
  };
restaurantController.getLogin = (req: Request, res: Response) => {
    try{
       res.render("login");
    } catch (err){
       console.log("Error, getLogin", err);
       res.redirect("/admin");
    }
   };
 
   restaurantController.procesSignup = async (req: AdminRequest, res: Response) => {
      
      try {
         console.log("proccesSignup");
    
        const newMember: MemberInput = req.body;
        newMember.memberType = MemberType.RESTAURANT;
        const result = await memberService.procesSignup(newMember);
         
      // TODO SESSIONS

      req.session.member = result
      req.session.save(function() {
         res.send(result)
      })

      
      } catch (err) {
        console.log("Error, proccesSignup", err);
        const message = 
         err instanceof Error ? err.message  : Message.SOMETHING_WENT_WRONG;
         res.send(`<script>alert("${message}"): window.location.replace("admin/signup")</script>`);
      }
   
    };
   restaurantController.procesLogin = async (req: AdminRequest, res: Response) => {
      try{
         console.log("processLogin");
           const input: LoginInput = req.body,
              result = await memberService.procesLogin(input);
         
         // TODO SESSIONS

         req.session.member = result
      req.session.save(function() {
         res.send(result)
      })

             
      } catch (err){
         console.log("Error, procesLogin", err);
         const message = 
         err instanceof Error ? err.message  : Message.SOMETHING_WENT_WRONG;
         res.send(`<script>alert("${message}"): window.location.replace("admin/login")</script>`);
      }
     };

     restaurantController.logout = async (req: AdminRequest, res: Response) => {
      try{
         console.log("logout");
         req.session.destroy( function () {
            res.redirect("/admin");
         });
      

             
      } catch (err){
         console.log("Error, procesLogin", err);
         res.redirect("/admin")
      }
     };
     
     restaurantController.checkAuthSession = async (req: AdminRequest, res: Response) => {
      try{
         /* console.log("processLogin");
           const input: LoginInput = req.body,
              result = await memberService.checkAuthSession(input);
         
         // TODO SESSIONS

         req.session.member = result
      req.session.save(function() {
         res.send(result )
      })*/
     
      console.log("checkAuthSession");
      if(req.session?.member) 
      //res.send(`hi, ${req.session.member.memberNick}`);
      res.send(`<script>alert("${req.session.member.memberNick}")</script>`);
      // else res.send(Message.NOT_AUTHENTICATED);
       else res.send(`<script>alert("${Message.NOT_AUTHENTICATED}")</script>`);      
      } catch (err){
         console.log("Error, procesLogin", err);
         res.send(err);
      }
     };

   export default restaurantController ;