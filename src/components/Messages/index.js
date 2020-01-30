import React from 'react'
import PropTypes from "prop-types";
import {Empty, Spin} from "antd";
import classNames from 'classnames';

import {Message} from "../index";
import "./Messages.scss";

const Messages = ({isLoading, items, blockRef}) => {
    return (<div ref={blockRef} className={classNames("messages", {'messages--loading': isLoading})}>
                {
                    isLoading ? (
                        <Spin size="large" tip="Загрузка сообщений..."></Spin>
                    ) : items && !isLoading ? (
                        items.length > 0 ? (
                            items.map(item => <Message key={item._id} {...item}/>)) : (<Empty description="Диалог пуст"/>)
                        ) : (<Empty description="Откройте диалог"/>)
                }
            </div>)
};

Messages.propTypes = {
  items: PropTypes.array
};

export default Messages;