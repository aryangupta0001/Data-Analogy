import React, { useEffect } from 'react'

const images = import.meta.glob('../assets/blogs/*', {
    eager: true,
    as: 'url'
});


import './Blog.css';
import { blogs } from './blogs';

const Blog = () => {
    return (
        <>
            <div className='w100 minmaxhght border-transparent'>
                <h1 className=''>
                    Blogs
                </h1>

                <div className='w90 h80 blog-container m-auto'>
                    {
                        blogs.map((blog, index) => {
                            const imagePath = `../assets/blogs/${blog.id}.png`;
                            console.log(imagePath);

                            const imageUrl = images[imagePath];

                            return (
                                <div id='blog' key={index} className='blog card-background card-text' style={{ backgroundImage: `url(${imageUrl})` }}>
                                    <h2>
                                        {blog.title}
                                    </h2>
                                    <p>
                                        {blog.excerpt}
                                    </p>
                                </div>
                            )
                        }
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default Blog