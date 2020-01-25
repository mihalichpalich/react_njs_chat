import React from 'react'

import './Home.scss';
import Message from "../../components/Message";

const Home = () => {
    return (
        <section className="home">
            <Message avatar="https://sun9-18.userapi.com/c851336/v851336258/16747e/7HsUkZOrEfo.jpg?ava=1"
                     text="Салам братка!"
                     date="Sat Jan 25 2020 18:00:00"/>
        </section>
    )
}

export default Home