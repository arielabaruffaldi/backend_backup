
import React from 'react';
import styles from "./Input.module.scss";

const FormItem = ({ label, registrar, placeholder, children, ...props }: any) => {
    return (
        <div className={styles.Input}>
            <input placeholder={placeholder} type="text" {...props} />
        </div>
    )
}

export default FormItem;