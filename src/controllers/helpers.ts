import { HttpStatusCode } from "./protocols";

export const ok = (body: any) => {
  return {
    statusCode: HttpStatusCode.OK,
    body,
  };
};

export const created = (body: any) => {
  return {
    statusCode: HttpStatusCode.CREATED,
    body,
  };
};

export const badRequest = (message: string) => {
  return {
    statusCode: HttpStatusCode.BAD_REQUEST,
    body: message,
  };
};

export const serverError = () => {
  return {
    statusCode: HttpStatusCode.SERVER_ERROR,
    body: "Something went wrong.",
  };
};
