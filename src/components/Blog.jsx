import React from 'react'
import './Styles/Blogs.css'
import { blogcard } from '../constants'

function Blog() {
    return (
        <div>
            <div className='blog_page_container'>
                <h1 className='blog_page_heading'>Explore Our Latest Blog</h1>
                {blogcard.map((card,index)=>(
                    <div className='blog_page_Card_container'>
                        <div className='blog_page_Card' key={card.id}>
                            <div className='blog_page_card_details'>
                                <div className='blog-icons'>
                                    <p>{card.date}</p>
                                    <p>{card.author}</p>
                                </div>
                                <h3 className='blog_title'>{card.title}</h3>
                                <p className='blog_desc'>{card.desc}</p>
                                <button className='blog_button'>Read More</button>
                            <div className='read_Time'>{card.time}</div>
                            </div>
                            <img src={card.pic} alt="" className='blog_page_img' />
                        </div>
                        <div className='line'></div>
                    </div>
                ))    
                }
            </div>
        </div>
    )
}

export default Blog