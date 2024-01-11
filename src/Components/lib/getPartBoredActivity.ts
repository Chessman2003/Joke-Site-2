import { PartBoredActivityType } from './types/boredActivityType'

export const getPartBoredActivity = async (url: string): Promise<PartBoredActivityType> => {
    const promis = await fetch(url)
        .then((response) => response.json())
        .catch((e) => console.log('ERROR!', e));
    // ToDo: переделать
    return {
        activity: '',
        key: ''
    }
}