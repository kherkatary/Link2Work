// components/HeroSection.tsx

import React from 'react';
import styles from './Hero.module.scss';

const HeroSection: React.FC = () => {
    return (
        <header className={styles.hero}>
            <div className={styles.heroContent}>
                <h1 className={styles.heroTitle}>Welcome to LowJOB</h1>
                <p className={styles.heroSubtitle}>Find the Best Job Openings Across Leading Companies</p>
                <a href="#" className={styles.heroButton}>Explore</a>
            </div>
        </header>
    );
};

export default HeroSection;
