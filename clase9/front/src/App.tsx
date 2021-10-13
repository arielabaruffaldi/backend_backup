import React from 'react';
import Form from './components/Form/Form'
import styles from './App.module.scss';
import Title from './components/Title/Title';

function App() {
  return (
    <div className={styles.App}>
      <Title hasMargin underlined priority={1}>Productos</Title>
      <Form />
    </div>
  );
}

export default App;
