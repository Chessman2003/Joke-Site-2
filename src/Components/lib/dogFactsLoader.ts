import { DogFactsType } from "./types/dogFacts";

export class DogsFactsLoader {
    _urlApi: string = ''

    constructor(_urlApi: string) {
        this._urlApi = _urlApi;
    }
    
    getNextFact = async () : Promise<DogFactsType> => {
        const response = await fetch(this._urlApi)
        if(!response.ok) {
            return Promise.reject('Ошибка');
        }
        const json = await response.json()
        return Promise.resolve(json)
    }

}