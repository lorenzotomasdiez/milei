import HttpProvider from "../HttpProvider";

export class QuoteRestApiClient{
  constructor(private http:HttpProvider){}
  async getQuod(){
    const { data, status } = await this.http.get('/qod');
    return { data, status };
  }
}