import React from 'react'
import orderBy from 'lodash/orderBy'

import {DialogItem} from "../index";
import './Dialogs.scss'

const Dialogs = ({items, userId}) => {
    return (
        <div className="dialogs">
            {orderBy(items, ["create_at"], ["desc"]).map(item => (
                <DialogItem
                    key={item._id}
                    isMe={item.user._id === userId}
                    {...item}
                />)
            )}
        </div>
    )
};

export default Dialogs