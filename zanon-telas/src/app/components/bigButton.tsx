'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import styles from './bigButton.module.css';

interface BigButtonProps {
    color?: string;
    name: string;
    route?: string;
}

const BigButton: React.FC<BigButtonProps> = ({ color = 'blue', name = 'Button', route = '/' }) => {
    const router = useRouter();

    const handleClick = () => {
        router.push(route);
    };

    return (
        <button className={`${styles.bigButton} ${styles[color]}`} onClick={handleClick}>
            {name}
        </button>
    );
};

export default BigButton;
