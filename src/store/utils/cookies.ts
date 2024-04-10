import { User } from "@/types/user.ts";
import { jwtDecode, JwtPayload } from "jwt-decode";

export const checkTokenExpired = (token: string | undefined): User | null => {
  if (!token) {
    return null;
  }
  try {
    const decodedToken = jwtDecode<JwtPayload & User>(token);
    const expireTime = decodedToken.exp;
    if (expireTime) {
      const currentTime = Date.now() / 1000;
      if (expireTime < currentTime) {
        return null;
      } else {
        const { iat, exp, ...userData } = decodedToken;
        return userData;
      }
    }
    return null;
  } catch (error) {
    console.error("Error decoding token: ", error);
    return null;
  }
};
