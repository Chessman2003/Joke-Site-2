import react, {useState} from 'react';
import { BoredActivityType } from '../lib/types/boredActivityType';
import { getPartBoredActivity } from '../lib/getPartBoredActivity';


type Props = {
    url: string
};

// ToDo: Именновать в соответствии с решаемыми задачами !!!!!!!!!!!!!!!!!!!!!!
export const BoredActivityPage = ({ url }: Props) => {
    const [error, setError] = useState<string>('')
    const [activityItem, setActivityItem] = useState<BoredActivityType>({ // ToDo: получение в объект части данных поля (activity и key)
        activity: "",
        type: "",
        participants: "",
        price: "",
        link: "",
        key: "",
        accessibility: ""
    })
    async function loadNextObject() {
        const boredActivityItem = await getPartBoredActivity(url).catch(error => console.error(error));
        setActivityItem(boredActivityItem)
    };

    if (error != '') { // ToDo: Отдельный компонент ошибки + страница лоадинга (Loading)
        return (
            <div>
                {error}
            </div>
        )
    }

    // ToDo: Переделать через несколько компонентов, панель управления + компонент отображения данных
    return (
        <div className="NewApiWrapper">
            <div className="buttonNext">
                <button onClick={() => { loadNextObject() }}>Next Fact</button>
            </div>
            {
                Object.entries(nextFact).map(pair => {
                    return <div>{pair[1]}</div>
                })
            }
        </div>
    )
}
