// components/Footer/Footer.tsx

import React from 'react';
import styles from './Footer.module.scss';

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.socialMedia}>
                    <h4>Follow Me</h4>
                    <a href="https://github.com/sandeepkherkatary" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                        GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/sandeepkherkatary/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                        LinkedIn
                    </a>
                </div>
                <div className={styles.copyRight}>
                    <p>&copy; {new Date().getFullYear()} Sandeep Kherkatary. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
