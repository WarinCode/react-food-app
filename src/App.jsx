import React , { useState, useEffect } from 'react'

// import libs
import axios from 'axios';

// import style
import './style/css/style.css';

// import components
import Navbar from './components/Navbar';
import Content from './components/Content'
import Footer from './components/Footer';
import Button from './components/layout/Button';
import Header from './components/Header';

export default function App() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
      ( async () => {
        try {
          const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
          setCategories(await response.data.categories);
          console.log(response);
        } catch (msg) {
          console.error(new Error(msg));
        }
      })();
  }, []);

  return (
    <React.Fragment>
      <Navbar />
        <Header />
          <Content Prop={categories} />
        <Button />
      <Footer />
    </React.Fragment>
  )
}