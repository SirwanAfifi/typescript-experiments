import axios, { AxiosResponse } from "axios";

interface HasId {
  id?: number;
}

export class Sync<T extends HasId> {
  constructor(public rootUrl: string) {}

  fetch(id: number): void {
    axios.get(`${this.rootUrl}/${id}`);
  }

  save(data: T): void {
    const { id } = data;
    if (id) {
      axios.put(`${this.rootUrl}/${id}`, data);
    } else {
      axios.post(this.rootUrl, data);
    }
  }
}
