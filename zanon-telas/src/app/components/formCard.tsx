"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './formCard.module.css';

interface FormCardProps {
    name: string;
    numInputs: number;
    inputNames: string[];
    inputTypes: string[];
    route: string;
    btName: string;
}

const FormCard: React.FC<FormCardProps> = ({ name, numInputs, inputNames, inputTypes, route, btName }) => {
    const [formValues, setFormValues] = useState<{ [key: string]: string }>({});
    const router = useRouter();

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = event.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [id]: value,
        }));
    };

    const renderInputs = () => {
        const inputs = [];
        for (let i = 0; i < numInputs; i++) {
            inputs.push(
                <div key={i}>
                    <input
                        className={styles.input}
                        type={inputTypes[i]}
                        id={inputNames[i]}
                        placeholder={inputNames[i]}
                        value={formValues[inputNames[i]] || ''}
                        onChange={handleInputChange}
                    />
                </div>
            );
        }
        return inputs;
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const isFormValid = Object.values(formValues).every((value) => value.trim() !== '');
        if (isFormValid) {
            router.push(route);
        } else {
            alert('Por favor complete todos os campos');
        }
    };

    return (
        <div className={styles.card}>
            <form className={styles.centralizar} onSubmit={handleSubmit}>
                <h2>{name}</h2>
                {renderInputs()}
                <button className={styles.sendButton} type="submit">{btName}</button>
            </form>
        </div>
    );
};

export default FormCard;
