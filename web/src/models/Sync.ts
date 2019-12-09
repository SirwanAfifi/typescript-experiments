import axios, { AxiosResponse } from "axios";

interface HasId {
  id?: number;
}

export class Sync<T extends HasId> {
  constructor(public rootUrl: string) {}

  fetch(id: number): Promise<AxiosResponse<any>> {
    return axios.get(`${this.rootUrl}/${id}`);
  }

  save(data: T): Promise<AxiosResponse<any>> {
    const { id } = data;
    if (id) {
      return axios.put(`${this.rootUrl}/${id}`, data);
    } else {
      return axios.post(this.rootUrl, data);
    }
  }
}
