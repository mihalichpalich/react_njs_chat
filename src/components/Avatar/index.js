import React from 'react'
import PropTypes from 'prop-types'
import generateAvatarFromHash from '../../utils/helpers/index'

import './Avatar.scss'

const Avatar = ({user}) => {
    if (user.avatar) {
        return <img class="avatar" src={user.avatar} alt={`Avatar ${user.fullname}`}/>
    } else {
        const {color, colorLighten} = generateAvatarFromHash(user._id);
        const firstChar = user.fullname.charCodeAt(0);
        return (<div style={{backgroundColor: `linear-gradient(135deg, ${color} 0%, ${colorLighten} 96.52%)`}} className="avatar avatar--symbol">{firstChar}</div>)
    }
};

Avatar.propTypes = {
    className: PropTypes.string
};

export default Avatar