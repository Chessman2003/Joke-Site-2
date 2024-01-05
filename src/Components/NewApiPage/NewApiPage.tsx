import react, [useState] from 'react';
import { NewApiType } from '../lib/types/NewApiType';
import { NewApi } from '../lib/NewApiHendler';


type Props = {
    url: string
};

export NewApiPage = ({ url }: Props) => {

    const [nextFact, setNextFact] = useState<NewApiType>({
        activity: "",
        type: "",
        participants: "",
        price: "",
        link: "",
        key: "",
        accessibility: ""
    })
    async function loadNextObject() {
        const nextFact = await NewApi(url).catch(error => console.error(error));
        setNextFact(nextFact)
    };

    if (error != '') {
        return (<div>
            {error}
        </div>)
    }

    return (
        <div className="NewApiWrapper">
            <div className="buttonNext">
                <button onClick={() => { loadNextObject() }}>Next Fact</button>
            </div>
            <div>nextFact.activity</div>
            <div>nextFact.type</div>
            <div>nextFact.participants</div>
            <div>nextFact.price</div>
            <div>nextFact.link</div>
            <div>nextFact.key</div>
            <div>nextFact.accessibility</div>
        </div>
    )
}
