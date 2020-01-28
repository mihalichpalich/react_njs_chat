import React from 'react'
import classNames from 'classnames'

import {Time, IconReaded} from '../index'
import './DialogItem.scss'

const getAvatar = avatar => {
    if (avatar) {
        return <img src="https://sun9-18.userapi.com/c851336/v851336258/16747e/7HsUkZOrEfo.jpg?ava=1" alt=""/>
    } else {

    }
};

const DialogItem = ({user, message, unreaded}) => {
    return (<div className={classNames('dialogs__item', {'dialogs__item--online': user.isOnline})}>
                <div className="dialogs__item-avatar">
                    {/*<img src={user.avatar} alt={`${user.fullname} avatar`}/>*/}
                    {getAvatar("https://sun9-18.userapi.com/c851336/v851336258/16747e/7HsUkZOrEfo.jpg?ava=1")}
                </div>
                <div className="dialogs__item-info">
                    <div className="dialogs__item-info-top">
                        <b>Вован Зеленый</b>
                        <span>
                            {/*<Time date={new Date()}/>*/}
                            13:03
                        </span>
                    </div>
                    <div className="dialogs__item-info-bottom">
                        <p>Если хочешь опровергнуть какую-нибудь глупость, не надо ее отрицать. Не надо. Доведи ее до абсурда. И тогда, знаете, все получится.</p>
                        <IconReaded isMe={true} isReaded={false}/>
                        {unreaded > 0 && <div className="dialogs__item-info-bottom-count">{unreaded > 9 ? '+9' : unreaded}</div>}
                    </div>
                </div>
            </div>)
};

export default DialogItem