import { dogFactsType } from "./types/dogFacts";

export class dogsFactsLoader {
    static getNextFact() {
        throw new Error('Method not implemented.');
    }
    _urlApi: string = ''

    constructor(_urlApi: string, _urlImg: string) {
        this._urlApi = _urlApi;
    }

    getNextFact = async () => {
        const response = await fetch(this._urlApi)
        if(!response.ok) {
            return Promise.reject('Ошибка');
        }
        const json = await response.json()
        return Promise.resolve(json)
        .then(dogImage => new Promise((resolve, reject) => {
            let img = document.createElement('img');
            img.src = dogFactsType.message;
            img.className = "dogImage";
            document.body.append(img);
            resolve(dogImage)
        }))
        .catch(error => alert('Изображение не загружено'))
    }

}