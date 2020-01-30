import React, {useState, useEffect} from 'react';
import {connect} from "react-redux";

import {messagesActions} from "../redux/actions";
import {Messages as BaseMessages} from "../components";

const Dialogs = ({fetchDialogs, setCurrentDialog, items, userId}) => {
    const [filtered, setFilteredItems] = useState(Array.from(items));

    useEffect(() => {
        if (!items.length) {
            fetchDialogs();
        } else {
            setFilteredItems(items);
        }
    }, [items]);

    return (
        <BaseMessages
        />
    );
};

export default connect(
    ({dialogs}) => dialogs,
    dialogsActions
)(Dialogs)