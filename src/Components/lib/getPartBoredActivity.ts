import { BoredActivityType, PartBoredActivityType } from './types/boredActivityType'

const sleep = async (ms: number) => {
    return new Promise(resolve => setTimeout(resolve, ms))
}

export const getPartBoredActivity = async (url: string): Promise<PartBoredActivityType> => {
    try {
        const req = await fetch(url);
        const boredActivity: BoredActivityType = await req.json();

        await sleep(2000);
        return {
            activity: boredActivity.activity,
            key: boredActivity.key
        }
    } catch(err) {
        console.error(err);  
    }
    return {
        activity: '',
        key: ''
    }
}