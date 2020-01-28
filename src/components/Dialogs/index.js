import React from 'react'
import classNames from 'classnames'
import orderBy from 'lodash/orderBy'

import {DialogItem} from "../index";
import './Dialogs.scss'

const Dialogs = ({items, userId}) => {
    return (
        <div className="dialogs">
            {orderBy(items, ["create_at"], ["desc"]).map(item => (
                <DialogItem
                    key={item._id}
                    user={item.user}
                    message={item}
                    unreaded={0}
                    isMe={item.user._id === userId}
                />)
            )}
        </div>
    )
};

export default Dialogs