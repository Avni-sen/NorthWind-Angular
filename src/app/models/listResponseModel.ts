import { ResponseModel } from "./responseModels";

export interface listResonseModel<T> extends ResponseModel {
  data: T[];
}
