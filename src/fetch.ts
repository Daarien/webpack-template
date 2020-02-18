export class Taker {
  // GET
  async get<T = any>(url: string): Promise<T> {
    const resp = await fetch(url);
    const data = await resp.json();
    return data;
  }
  // POST
  async post(url: string, body: any) {
    const resp = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(body),
    });
    const data = await resp.json();
    return data;
  }
}

type JSONPlaceHolderResponse = {
  [k: string]: string | number;
};

new Taker()
  .get<JSONPlaceHolderResponse>('https://jsonplaceholder.typicode.com/todos/1')
  .then(data => console.log('getReq', data));
