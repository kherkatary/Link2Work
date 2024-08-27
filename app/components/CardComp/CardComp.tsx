// components/Card.tsx

import React from 'react';
import styles from './CardComp.module.scss';
import Link from 'next/link';

interface CardProps{
    title:string,
    description:string,
    imageUrl:string
}

const CardComp: React.FC<CardProps> = ({ title, description, imageUrl }) => {
    return (
        <div className={styles.card}>
            <div className={styles.cardImage} style={{ backgroundImage: `url(${imageUrl})` }}></div>
            <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{title}</h3>
                <p className={styles.cardDescription}>{description}</p>
                <p className={styles.cardDescription}>
                    <Link href={'/jdesc/122455'}>Apply</Link>
                </p>
                <p className={styles.active}>active</p>
            </div>
        </div>
    );
};

export default CardComp;
