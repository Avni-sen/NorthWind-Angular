import { ResponseModel } from "./responseModels";

export interface listResponseModel<T> extends ResponseModel {
  data: T[];
}
