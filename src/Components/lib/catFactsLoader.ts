export class CatFactsLoader {
    _urlApi: string = ''

    constructor(urlApi: string) {
        this._urlApi = urlApi;
    }

    getNextFact = async () => {
        const response = await fetch(this._urlApi);
        if (!response.ok) {
            //throw new Error('Service not avaible');
            return Promise.reject('Service not avaible');
        }
        const json = await response.json();
        console.log(json);
        return Promise.resolve(json);
    }
}