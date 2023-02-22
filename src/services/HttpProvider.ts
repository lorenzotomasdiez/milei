import axios from 'axios';

export interface HttpResponse{
  data        :any;
  status      :number;
}

export default abstract class HttpProvider{
  abstract get(url: string)                        :Promise<HttpResponse>
  abstract post(url:string, body:any)              :Promise<HttpResponse>
  abstract put(url:string, body:any)               :Promise<HttpResponse>
  abstract delete(url:string)                      :Promise<HttpResponse>
}

export class Provider implements HttpProvider{
  async delete(url: string): Promise<HttpResponse> {
    const {data, status} = await axios.delete(url);
    return {data, status}
  }
  async get(url: string): Promise<HttpResponse> {
    const {data, status} = await axios.get(url);
    return {data, status};
  }
  async post(url: string, body: any): Promise<HttpResponse> {
    const {data, status} = await axios.post(url, body);
    return {data, status};
  }
  async put(url: string, body: any): Promise<HttpResponse> {
    const {data, status} = await axios.put(url, body);
    return {data, status};
  }
}

const quoteAxiosProvider = axios.create({
  baseURL: 'https://zenquotes.io/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export class ZenAPIProvider implements HttpProvider{
  async get(url: string): Promise<HttpResponse> {
    const {data, status} = await quoteAxiosProvider.get(url);
    return {data, status};
  }
  async post(url: string, body: any): Promise<HttpResponse> {
    const {data, status} = await quoteAxiosProvider.post(url, body);
    return {data, status};
  }
  async put(url: string, body: any): Promise<HttpResponse> {
    const {data, status} = await quoteAxiosProvider.put(url, body);
    return {data, status};
  }
  async delete(url: string): Promise<HttpResponse> {
    const {data, status} = await quoteAxiosProvider.delete(url);
    return {data, status}
  }
}