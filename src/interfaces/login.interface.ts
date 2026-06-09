export interface LoginDetails {
    previewPassword:string;
    password: string;
    username: string;
    verifySignUpPage:string;
    totpSecret?: string; // TOTP secret for 2FA
  }
  export interface LogoutPage {
   verifyLogoutPage:string,
  }