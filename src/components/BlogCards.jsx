import React from 'react'
import './Styles/blogcard.css'
import { blogcard } from '../constants'
import { SlCalender } from 'react-icons/sl';
import { FaUserAlt } from 'react-icons/fa';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function BlogCards() {
    return (
        <div className='blog_Card_page'>
            <p>Latest Blog Posts</p>
            <h1>This is all About <span id='span'>Food</span></h1>
            <div className='blog_cards_container'>
                {blogcard.map((card,index)=>(
                    <div className='blog_card' key={card.id}>
                        <img src={card.pic} alt="" className='blog-img' />
                        <div className='blog_card_details'>
                            <div className='blog-icons'>
                                <SlCalender />
                                <p>{card.date}</p>
                                <FaUserAlt />
                                <p>{card.author}</p>
                            </div>
                            <h3 className='blog_title'>{card.title}</h3>
                            <p className='blog_desc'>{card.desc}</p>
                            <Link to='/blogs'>
                                <button className='blog_button'>Read More <BsArrowRight /></button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BlogCards