// components/JobSection.tsx

import React from 'react';
import styles from './JobSection.module.scss';
import CardComp from '../CardComp/CardComp';
import cardData from './jobData.json'; // Adjust path as needed

const JobSection: React.FC = () => {
    return (
        <div className={styles.container}>
            {cardData.map((card, index) => (
                <div key={index} className={styles.cardHolder}>
                    <CardComp
                        title={card.title}
                        description={card.description}
                        imageUrl={card.imageUrl}
                    />
                </div>
            ))}
        </div>
    );
};

export default JobSection;
