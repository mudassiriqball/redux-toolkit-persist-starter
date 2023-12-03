import { AxiosError } from "axios";

export interface GetDeleteRequestPayloadI {
  url: string;
  thunkApi: any;
  params?: any;
};

export interface PostPutPatchRequestPayloadI {
  url: string;
  thunkApi: any;
  data?: any;
  params?: any;
};

export type ApiErrorResT = AxiosError<{}> | undefined;
