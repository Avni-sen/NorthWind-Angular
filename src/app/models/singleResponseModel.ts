import { ResponseModel } from "./responseModels";

export interface SingleResponseModel<T> extends ResponseModel {
  data: T;
}
