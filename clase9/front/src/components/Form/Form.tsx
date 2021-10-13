import React, { useState, useEffect } from 'react';
import styles from "./Form.module.scss";
import Input from "../Input/Input"
import Table from '../Table/Table';
import Title from '../Title/Title';
import Button from '../Button/Button';

interface EventInterface {
    target: {
        value: string,
        name: string
    },
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

interface Product {
    name: string,
    price: number,
    id: number
}


const Form = () => {
    const [data, setData] = useState({
        name: "",
        price: ""
    })

    const [products, setProducs] = useState<Product[] | undefined>()

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const response = await fetch(`http://localhost:8080/productos/listar`)
        const data = await response.json()
        setProducs(data)
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const rawResponse = await fetch('http://localhost:8080/productos/guardar', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'http://localhost:3000',
                'Access-Control-Allow-Credentials': 'true'
            },
            body: JSON.stringify(data)
        });
        const content = await rawResponse.json();
        getData()
    };

    return (
        <>
            <Title hasMargin priority={3}>Agregar</Title>
            <form className={styles.Form} onSubmit={handleSubmit}
            >
                <div className={styles.InputContainer}>
                    <Input
                        name="message"
                        placeholder={"Remera"}
                        onChange={(e: EventInterface) => setData(state => ({ ...state, name: e.target.value }))} />
                    <Input
                        name="message"
                        placeholder={"200"}
                        onChange={(e: EventInterface) => setData(state => ({ ...state, price: e.target.value }))} />
                </div>
                <Button size={"10rem"}>
                    Agregar
                </Button>
            </form>

            {products &&
                <Table
                    items={products}
                    totalItems={products.length}
                    fieldAndHeaders={{
                        Nombre: "name",
                        Precio: "price"
                    }}
                />
            }
        </>
    )
}

export default Form;