import { request } from "..";

export const refreshToken = async (refresh_token) => {
  const result = await request(REFRESH_TOKEN, { refresh_token: refresh_token });
  return result?.refresh_token?.token;
};

export const REFRESH_TOKEN = `query refresh_token(
  $refresh_token: String!
   ) {
    refresh_token(refresh_token_input: { refresh_token: $refresh_token}) {
      token
      refresh_token
    }
  }`;
