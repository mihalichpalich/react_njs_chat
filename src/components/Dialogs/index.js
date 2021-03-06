import React from 'react'
import orderBy from 'lodash/orderBy'

import {DialogItem} from "../index";
import './Dialogs.scss'
import {Input, Empty} from "antd";

const Dialogs = ({items, userId, onSearch, inputValue, currentDialogId, onSelectDialog}) => {
    return (
        <div className="dialogs">
            <div className="dialogs__search">
                <Input.Search
                  placeholder="Поиск среди контактов"
                  value={inputValue}
                  onChange={e => onSearch(e.target.value)}
                />
            </div>

            {items.length ? (
                orderBy(items, ["create_at"], ["desc"]).map(item => (
                    <DialogItem
                        onSelect={onSelectDialog}
                        key={item._id}
                        isMe={item.user._id === userId}
                        currentDialogId={currentDialogId}
                        {...item}
                    />))
            ) : (
                <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="Ничего не найдено"/>
            )}
        </div>
    )
};

export default Dialogs