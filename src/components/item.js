import React from 'react'
import Button from './Button';

import './item.css';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const Item = ({title,desc,backgroundImg,leftBtnText,leftBtnLink,rightBtnText,rightBtnLink,twoButtons,first}) => {
    return (
        <div className='item' style={{
            backgroundImage: `url(${backgroundImg})`
        }}>
            <div className="item__container">
                <div className="item__text">
                    <p>{title}</p>
                    <div className="item__textDesc">
                        <p>{desc}</p>
                    </div>
                </div>
                <div className="item_lowerThird">
                    <div className="item__buttons">
                        <Button imp="primary" text={leftBtnText} link={leftBtnLink} />

                        {twoButtons && (
                            <Button imp='secondary' text={rightBtnText} link={rightBtnLink} />
                        )}

                    </div>
                    {first && (
                        <div className="item__expand">
                            <ExpandMoreIcon/>
                        </div>
                    )
                    }
                </div>
            </div>

        </div>
    )
}

export default Item
