import speakeasy from 'speakeasy';

/**
 * Generate TOTP code for 2FA
 * @param secret - The shared secret from authenticator app
 * @returns 6-digit verification code
 */
export const generateTOTPCode = (secret: string): string => {
  const code = speakeasy.totp({
    secret: secret,
    encoding: 'base32',
  });
  return code;
};

/**
 * Verify TOTP code
 * @param secret - The shared secret
 * @param code - The code to verify
 * @returns true if code is valid, false otherwise
 */
export const verifyTOTPCode = (secret: string, code: string): boolean => {
  const isValid = speakeasy.totp.verify({
    secret: secret,
    encoding: 'base32',
    token: code,
    window: 2,
  });
  return isValid;
};
