import React from 'react'
import PropTypes from "prop-types";
import {Empty} from "antd";

import {Message} from "../index";

const Messages = ({items}) => {
    return (
        items ? (
                <div>
                    <Message avatar="https://sun9-28.userapi.com/c824203/v824203506/33e8c/kxUu_RDip1A.jpg?ava=1"
                                 date={new Date()}
                                 audio="https://notificationsounds.com/soundfiles/069059b7ef840f0c74a814ec9237b6ec/file-de_vuvuzela-power-down.mp3"
                    />
                    <Message avatar="https://sun9-18.userapi.com/c851336/v851336258/16747e/7HsUkZOrEfo.jpg?ava=1"
                             text="Салам братка!"
                             date={new Date()}
                             isMe={false}
                             attachments={[
                                 {
                                     filename: 'image.jpg',
                                     url: 'https://i.picsum.photos/id/570/100/100.jpg'
                                 },
                                 {
                                     filename: 'image.jpg',
                                     url: 'https://i.picsum.photos/id/67/100/100.jpg'
                                 },
                                 {
                                     filename: 'image.jpg',
                                     url: 'https://i.picsum.photos/id/551/100/100.jpg'
                                 }
                             ]}
                    />
                    <Message avatar="https://sun9-28.userapi.com/c824203/v824203506/33e8c/kxUu_RDip1A.jpg?ava=1"
                             text="Приветик тебе букетик"
                             date={new Date()}
                             isMe={true}
                             isReaded={false}
                    />
                    <Message avatar="https://sun9-18.userapi.com/c851336/v851336258/16747e/7HsUkZOrEfo.jpg?ava=1"
                             attachments={[
                                 {
                                     filename: 'image.jpg',
                                     url: 'https://i.picsum.photos/id/570/100/100.jpg'
                                 }
                             ]}
                    />
                </div>
            ) : (
                <Empty description="Откройте диалог"/>
        )
    )
};

Messages.propTypes = {
  items: PropTypes.array
};

export default Messages;