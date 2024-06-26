import {NextFunction, Request, Response} from "express";
import {T} from "../libs/types/common";
import MemberService from "../models/Member.service";
import { AdminRequest, LoginInput, MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";
import Errors, { HttpCode, Message } from "../libs/Errors";
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
         console.log(req.body);
         const file = req.file;
         if(!file) 
         throw new Errors (HttpCode.BAD_REQUEST, Message.SOMETHING_WENT_WRONG )
;    
        const newMember: MemberInput = req.body;
        newMember.memberImage = file?.path.replace(/\\/g, "/");  
        newMember.memberType = MemberType.RESTAURANT;
        const result = await memberService.procesSignup(newMember);
         
    

      req.session.member = result
      req.session.save(function() {
         res.redirect("/admin/product/all");
      });

      
      } catch (err) {
        console.log("Error, proccesSignup", err);
        const message = 
         err instanceof Error ? err.message  : Message.SOMETHING_WENT_WRONG;
         res.send(`<script>alert("${message}"); window.location.replace("/admin/signup")</script>`);
      }
   
    };
   restaurantController.procesLogin = async (req: AdminRequest, res: Response) => {
      try{
         console.log("processLogin");
        // console.log("req.body", req.body);
         //  throw new Error("Forced Stop");
           const input: LoginInput = req.body,
                 result = await memberService.procesLogin(input);
         
         // TODO SESSIONS

         req.session.member = result
      req.session.save(function() {
         res.redirect("/admin/product/all");
      })

             
      } catch (err){
         console.log("Error, procesLogin", err);
         const message = 
         err instanceof Error ? err.message  : Message.SOMETHING_WENT_WRONG;
         res.send(`<script>alert("${message}"); window.location.replace("/admin/login")</script>`);
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

     restaurantController.getUsers = async (req: Request, res: Response) => {
      try{
         console.log("getUsers");
          const result = await memberService.getUsers();

          //console.log("result", result); 

         res.render("users", {users: result});
      } catch (err){
         console.log("Error, getUsers", err);
         res.redirect("/admin/login");
      }
     };
     restaurantController.updateChosenUsers = async (req: Request, res: Response) => {
      try{
         const result = await memberService.updateChosenUsers(req.body);

         res.status(HttpCode.OK).json({ data: result});
      } catch (err){
         console.log("Error, updateChosenUsers", err);
         if(err instanceof Errors) res.status(err.code).json(err);
         else res.status(Errors.standard.code).json(Errors.standard);
      }
     };
     
     restaurantController.checkAuthSession = async (req: AdminRequest, res: Response) => {
      try{
       
     
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

      restaurantController.verifyRestaurant = (
      req: AdminRequest,
      res: Response,
      next: NextFunction

     ) => {
     
      if(req.session?.member?.memberType === MemberType.RESTAURANT) {
         req.member = req.session.member;
         next();
      }
     
   else{
      const message = Message.NOT_AUTHENTICATED;
      res.send(
         `<script> alert("${message}"); window.location.replace('/admin/login'); </script>`
      );
   }

     }; 


   export default restaurantController ;