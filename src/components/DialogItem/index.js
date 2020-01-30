import React from 'react'
import classNames from 'classnames'
import format from 'date-fns/format'
import isToday from 'date-fns/isToday'

import {Avatar, IconReaded} from '../index'
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
            'dd.MM.yyyy'
        )
    }
};

const DialogItem = ({user, unread, isMe, created_at, text, onSelect, _id}) => {
    return (<div
                className={classNames('dialogs__item', {'dialogs__item--online': user.isOnline})}
                onClick={onSelect.bind(this, _id)}>
                <div className="dialogs__item-avatar"><Avatar user={user}/></div>
                <div className="dialogs__item-info">
                    <div className="dialogs__item-info-top">
                        <b>{user.fullname}</b>
                        <span>
                            {getMessageTime(created_at)}
                        </span>
                    </div>
                    <div className="dialogs__item-info-bottom">
                        <p>{text}</p>
                        {isMe && <IconReaded isMe={true} isReaded={false}/>}
                        {unread > 0 && <div className="dialogs__item-info-bottom-count">{unread > 9 ? '+9' : unread}</div>}
                    </div>
                </div>
            </div>)
};

export default DialogItem