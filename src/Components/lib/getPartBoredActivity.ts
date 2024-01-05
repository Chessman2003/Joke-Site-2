import {BoredActivityType, PartBoredActivityType} from './types/boredActivityType'

export const getPartBoredActivity = async (url: string) : Promise<PartBoredActivityType> => {
    const response = await fetch(url);
    const data: BoredActivityType = await response.json();

    const halfData = Object.fromEntries(
        Object.entries(data).slice(0, Math.ceil(Object.keys(data).length / 2))
    );
    // ToDo: переделать
    return {
        activity: '',
        key: ''
    }
}