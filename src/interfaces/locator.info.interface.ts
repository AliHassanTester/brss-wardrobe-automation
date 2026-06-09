import { Locator } from "@playwright/test";

export interface LocatorInfo {
  locator: Locator;
  description: string;
}
export interface LoginCredentials {
  email: string;
  password: string;
}

