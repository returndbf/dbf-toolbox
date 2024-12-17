import React, {CSSProperties, ReactNode} from 'react';
import back from "@/assets/back.svg"
import "./accordion.css"

interface Props {
    title: string,
    children: string | ReactNode,
}

const Accordion = ({title = '', children}: Props) => {
    const [isActive, setActive] = useState(true);
    return (
        <div style={{cursor:"pointer"}} >
            <div className={'accordion-head'} onClick={() => setActive(!isActive)}>
                <div className={[isActive ? 'activate-panel' : 'deactivate-panel'].join(' ')}>
                    <img className={'panel-arrow-img'} src={back}/>
                </div>
                <div className={'head-title'}>{title}</div>
            </div>

            {<div className={[isActive ? 'content' : 'empty'].join(' ')}>
                {children}
            </div>}
        </div>
    );
};

export default Accordion;