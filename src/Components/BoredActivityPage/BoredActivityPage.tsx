import React, { useState, useEffect } from 'react';
import { PartBoredActivityType } from '../lib/types/boredActivityType';
import { getPartBoredActivity } from '../lib/getPartBoredActivity';
import Button from '../Button/Button';
import { DataDisplay } from '../DataDisplay/DataDisplay';
import Loader from '../Loader/Loader';


type Props = {
    url: string
};

// ToDo: Именновать в соответствии с решаемыми задачами !!!!!!!!!!!!!!!!!!!!!!
export const BoredActivityPage = ({ url }: Props) => {
    const [activityItem, setActivityItem] = useState<PartBoredActivityType>({ // ToDo: получение в объект части данных поля (activity и key)
        activity: "",
        key: ""
    })

    const [loading, setLoading] = useState<Boolean>(true)
    const loadNextObject = async () => {
        const item = await getPartBoredActivity(url);

        setActivityItem(item);
        setLoading(false);
    };

    useEffect(() => {
        loadNextObject()
    }, [url])

    // ToDo: Переделать через несколько компонентов, панель управления + компонент отображения данных
    return (
        <div className="NewApiWrapper">
            <Button onClick={loadNextObject} text={'Следующая активность'} />
            {loading ?
                (<Loader text={'Загрузка...'} />) :
                (<DataDisplay first={activityItem.activity} second={activityItem.key} />)
            }
        </div>
    );
}
