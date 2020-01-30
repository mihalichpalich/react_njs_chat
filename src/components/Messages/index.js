import React from 'react'
import PropTypes from "prop-types";
import {Empty} from "antd";

import {Message} from "../index";

const Messages = ({items}) => {
    return (
        items ? (
                <div>
                    {items.map(item => <Message avatar="https://sun9-28.userapi.com/c824203/v824203506/33e8c/kxUu_RDip1A.jpg?ava=1"
                                 date={new Date()}
                                 audio="https://notificationsounds.com/soundfiles/069059b7ef840f0c74a814ec9237b6ec/file-de_vuvuzela-power-down.mp3"
                    />)}
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