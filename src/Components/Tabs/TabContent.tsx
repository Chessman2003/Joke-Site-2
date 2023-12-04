import React from "react";

const TabContent = ({content}) => {
    return(
        <div>
            {content.map((joke, index) => <p>
                key={index} value={joke}
            </p>)}
        </div>
    )
};

export default TabContent