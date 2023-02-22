import { ZenAPIProvider } from "../HttpProvider";
import { ZenAPIClient } from "./service";

export class ZenService{
  async get(){
    const http = new ZenAPIProvider();
    const service = new ZenAPIClient(http);
    const { data } = await service.get();
    return data;
  }
}