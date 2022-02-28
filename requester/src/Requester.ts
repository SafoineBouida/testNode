import axios from 'axios';

class Requester {
  path: string

  constructor(path: string) {
    this.path = path
  }

  async post(data: Record<string,string>): Promise<any> {
    return axios
      .post(this.path, data)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.error('There was an error!', error)
      })
  }

  async get(id?: string): Promise<any> {

    if (id) {
      this.path = `${this.path}/${id}`;
    }

    return axios
      .get(this.path)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.error('There was an error!', error)
      })
  }
}

export { Requester }