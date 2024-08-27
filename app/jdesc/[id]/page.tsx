'use client'
import React from 'react';
import styles from './styles.module.scss';
import { useParams } from 'next/navigation';


const BlogPage: React.FC = () => {
    const logo="https://cdn.cookielaw.org/logos/11b3f084-5233-4fd6-8e5b-b89bec8652a8/85dce925-5fd4-4d84-b3ed-5fc710429e86/e8f07cea-30ef-4ac5-8851-0654e13850b6/thumbnail_VS&Co_Logo_Primary_Pink.png"
    const params=useParams()
    console.log(params?.id)
    return (
        <div className={styles.blogPage}>
            <header className={styles.header}>
                <img src={logo} alt="Blog Logo" className={styles.logo} />
                <h1 className={styles.title}>My Awesome Blog</h1>
                <h2 className={styles.subTitle}>JD: {params?.id}</h2>
            </header>
            <article className={styles.content}>
                <h2>Welcome to My Blog</h2>
                <p>
                    This is where I share my thoughts, experiences, and everything in between. Whether it's about tech, travel, or life in general, you'll find it all here.
                </p>
                <p>
                    I believe in continuous learning and growth. In this blog, I aim to provide insights and share my journey in various aspects of life.
                </p>
                <h2>My Latest Adventures</h2>
                <p>
                    Recently, I've been exploring new technologies and working on exciting projects. From front-end development to back-end systems, the world of programming continues to fascinate me.
                </p>
                <p>
                    Stay tuned for more updates and feel free to <a href="mailto:kherkatary873@gmail.com">contact me</a> if you have any questions or just want to say hi!
                </p>
            </article>
        </div>
    );
};

export default BlogPage;
