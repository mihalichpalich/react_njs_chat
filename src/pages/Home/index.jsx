import React from 'react'

import Message from "../../components/Message";

import './Home.scss';

const Home = () => {
    return (
        <section className="home">
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
        </section>
    )
}

export default Home