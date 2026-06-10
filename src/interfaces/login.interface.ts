export interface LoginDetails {
    password: string;
    username: string;
    verifySignUpPage:string;
    totpSecret?: string; 
  }