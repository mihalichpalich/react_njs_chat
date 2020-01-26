import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import ruLocale from 'date-fns/locale/ru'

import './Message.scss'
import readedSvg from '../../assets/img/readed.svg'
import notReadedSvg from '../../assets/img/not_readed.svg'

const Message = ({avatar, user, text, date, isMe, isReaded, attachments}) => {
    return (
        <div className={classNames('message', {'message--isme' : isMe})}>
            <div className="message__content">
                {isMe && isReaded ? (
                    <img className="message__icon-readed" src={readedSvg} alt="Readed icon"/>
                ) : (
                    <img className="message__icon-readed message__icon-readed--no" src={notReadedSvg} alt="Not readed icon"/>
                )}
                <div className="message__avatar">
                    <img src={avatar} alt={`Avatar ${user.fullname}`}/>
                </div>
                <div className="message__info">
                    <div>
                        <div className="message__bubble">
                            <p className="message__text">{text}</p>
                        </div>
                        <div className="message__attachments">
                            {attachments &&
                                attachments.map(item => (
                                    <div className="message__attachments-item">
                                        <img src={item.url} alt={item.filename}/>
                                    </div>
                                ))
                            }
                        </div>
                        <span className="message__date">{formatDistanceToNow(date, {addSuffix: true, locale: ruLocale})}</span>
                    </div>
                </div>
            </div>
        </div>
    )
};

Message.defaultProps = {
    user: {}
}

Message.propTypes = {
    avatar: PropTypes.string,
    text: PropTypes.string,
    date: PropTypes.string,
    user: PropTypes.object,
    attachments: PropTypes.array
};

export default Message