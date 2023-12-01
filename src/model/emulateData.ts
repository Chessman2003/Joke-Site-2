import {EmulateProps, Genre} from './emulateTypes';

class EmulateData {
    #categories: EmulateProps

    constructor() {
        this.#categories = {
            genres: []
        };
    }

    addGenre(id: string, jokes: string[] = []) {
        this.#categories.genres.push({
            id: id,
            jokes: jokes
        })
    }

    init() {
        this.addGenre('all', [
            "К Штирлицу летел свинец. Штирлиц свернул за угол. Свинец с хрюканьем промчался мимо.",
            "До Штирлица не дошло письмо из Центра. Он перечитал ещё раз, но все равно не дошло.",
            "— Холмс! Почему эти люди бегут перед нашей машиной? — Это же элементарно, Ватсон! Вы уже полчаса едете по тротуару.",
            "— Зачем мы так быстро едем, Холмс? — Элементарно, Ватсон. Я плохой шофёр, тороплюсь домой, пока никого не сбил.",
            "Заходит программист в лифт, а ему надо на 12—й этаж. Нажимает 1, потом 2 и начинает лихорадочно искать кнопку Enter.",
            "Программисты на работе общаются двумя фразами: «непонятно» и «вроде работает»."
        ])
        
        this.#jokes.stirlits = [
            "К Штирлицу летел свинец. Штирлиц свернул за угол. Свинец с хрюканьем промчался мимо.", 
            "До Штирлица не дошло письмо из Центра. Он перечитал ещё раз, но все равно не дошло."
        ]
    }

    getJokesByGenre(genre: string) : string[] {
        if (Object.keys(this.#jokes).indexOf(genre) == -1) {
            console.warn(`genre with name ${genre} not exists`);
            return []
        }

        const jokes = this.#jokes
        return 
    }
};

export default JokesData