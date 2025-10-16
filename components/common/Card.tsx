
import React from 'react';

interface CardProps {
    children: React.ReactNode;
    className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '' }) => {
    return (
        <section className={`bg-background-card p-6 rounded-xl shadow-md ${className}`}>
            {children}
        </section>
    );
};

export default Card;
