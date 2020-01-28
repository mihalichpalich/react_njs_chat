import React from 'react'
import classNames from 'classnames'
import format from 'date-fns/format'
import isToday from 'date-fns/isToday'
import orderBy from 'lodash/orderBy'

import {IconReaded} from '../index'
import './DialogItem.scss'

const getMessageTime = created_at => {
    if (isToday(created_at)) {
        return format(
            new Date(created_at),
            'HH:mm'
        )
    } else {
        return format(
            new Date(created_at),
            'dd.MM.YYYY'
        )
    }
};

const getAvatar = avatar => {
    if (avatar) {
        return <img src="https://sun9-18.userapi.com/c851336/v851336258/16747e/7HsUkZOrEfo.jpg?ava=1" alt=""/>
    } else {

    }
};

const DialogItem = ({user, message, unreaded, isMe}) => {
    return (<div className={classNames('dialogs__item', {'dialogs__item--online': user.isOnline})}>
                <div className="dialogs__item-avatar">
                    {/*<img src={user.avatar} alt={`${user.fullname} avatar`}/>*/}
                    {getAvatar(user.avatar)}
                </div>
                <div className="dialogs__item-info">
                    <div className="dialogs__item-info-top">
                        <b>{message.user.fullname}</b>
                        <span>
                            {getMessageTime(message.created_at)}
                        </span>
                    </div>
                    <div className="dialogs__item-info-bottom">
                        <p>{message.text}</p>
                        {isMe && <IconReaded isMe={true} isReaded={false}/>}
                        {unreaded > 0 && <div className="dialogs__item-info-bottom-count">{unreaded > 9 ? '+9' : unreaded}</div>}
                    </div>
                </div>
            </div>)
};

export default DialogItem