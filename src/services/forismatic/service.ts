import HttpProvider from "../HttpProvider";

export class ZenAPIClient{
  constructor(private http:HttpProvider){}
  async get(){
    const { data, status } = await this.http.get('/quotes');
    return { data, status };
  }
}