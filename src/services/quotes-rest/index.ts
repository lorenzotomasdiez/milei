import { QuoteRestProvider } from "../HttpProvider";
import { QuoteRestApiClient } from "./service";

export class QuotesRestService{
  async getQuod(){
    const http = new QuoteRestProvider();
    const service = new QuoteRestApiClient(http);
    const { data } = await service.getQuod();
    return data;
  }
}