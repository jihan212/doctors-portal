import React from 'react';
import ema from '../../../images/ema.png';
import harry from '../../../images/harry.png';
import BlogPost from '../BlogPost/BlogPost';
import './Blogs.css';

const blogData = [
    {
        title : 'Check at least a doctor in a year for your teeth',
        description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author:'Dr. Cudi',
        authorImg : harry,
        date : '23 April 2019'
    },
    {
        title : 'Two time brush in a day can keep you healthy',
        description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author:'Dr. Sinthia',
        authorImg : ema,
        date : '23 April 2019'
    },
    {
        title : 'The tooth cancer is taking a challenge',
        description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author:'Dr. Cudi',
        authorImg : harry,
        date : '23 April 2019'
    },
]

const Blogs = () => {
    return (
        <section className="blogs my-5">
            <div className="container">
                <div className="section-header text-center">
                    <h5 className="text-uppercase text-brand">Our Blog</h5>
                    <h1 className="text-uppercase">From Our Blog</h1>
                </div>
                <div className="card-deck mt-5">
                {
                        blogData.map(blog => <BlogPost blog={blog} key={blog.title}/>)
                }
                </div>
            </div>
        </section>
    );
};

export default Blogs;