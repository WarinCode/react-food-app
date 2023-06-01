// import react
import { useState, useEffect, useRef } from 'react';

// import lib
import axios from 'axios';
import Swal from 'sweetalert2';
import { FcSearch } from 'react-icons/fc';
import { AiFillYoutube, AiFillTags, AiOutlineLink } from 'react-icons/ai';
import { Accordion, AccordionItem } from '@szhsin/react-accordion';
import { MagicSpinner } from "react-spinners-kit";

// import style
import '../style/css/content.css';

function Header() {
    const [input, setInput] = useState('');
    const [render, setRender] = useState([]);
    const [loading , setLoading] = useState(false);
    const Name = useRef();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.request(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`);
                if (response.data.meals === null) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        html: `Something went wrong, can't find the food named <p style="color:red;">${input}</p>`,
                    })
                } else {
                    const data = await response.data.meals;
                    setRender(data);
                }
            } catch (err) {
                console.error(err);
            } finally{
                setLoading(false)
            }
        }
        fetchData();
    }, [input , loading])

    const handleSearchData = () => {
        const validate = (Name.current.value.toString() === '') || (Name.current.value === undefined);
        if (validate) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            })
        } else {
            setLoading(true)
            setInput(Name.current.value);
        }
    }

    return (
        <header className='flex-container'>
            <div className='box-title'>
                <h1>Search for the name of the food you want.</h1>
                <p>We have information on recipes and ingredients for cooking.</p>
            </div>
            <div className='box-input'>
                <input type="text" ref={Name} placeholder='Enter food name' />
                <br />
                <button onClick={handleSearchData}><FcSearch style={{transform: 'translateY(2px)'}} />&nbsp;search</button>
            </div>
            <section className='card-container'>
                {
                    loading ? 
                    <div className='load'>
                        <MagicSpinner 
                            size={250}
                            color = '#149eca'
                        />
                    </div>
                    :
                    render.map((item, idx) => {
                        return (
                            <div key={idx} className='card-meals'>
                                <img src={item.strMealThumb} alt={item.strTags} className='card-meals-img' />
                                <div className='card-body'>
                                    <div className='card-title'>
                                        <h1 >{item.strMeal}</h1>
                                    </div>
                                    <span className='card-mealstype'>
                                        <p><strong>Category:</strong> {item.strCategory}</p>
                                        <p><strong>Nationality:</strong> {item.strArea}</p>
                                    </span>
                                    <br />
                                    <span className='card-link'>
                                        <a href={item.strYoutube}  target="_blank" rel="noopener noreferrer" >
                                            <AiFillYoutube style={{ color: '#f11212' }} />
                                        </a>
                                        <a href={item.strSource}  target="_blank" rel="noopener noreferrer">
                                            <AiOutlineLink style={{ color: '#399ff1' }} />
                                        </a>
                                        {item.strTags === null ? '' : <span><AiFillTags style={{ color: '#33333a', transform: 'translateY(2px)', fontSize: '21px' }} /> &nbsp;<p>{item.strTags}</p></span>}
                                    </span>
                                    <Accordion className='accordion'>
                                        <AccordionItem className='accordion-item'
                                            header={<div><h2>Cooking Tips</h2></div>}
                                        >
                                            <p>{item.strInstructions}</p>
                                        </AccordionItem>
                                        <AccordionItem className='accordion-item'
                                            header={<div><h2>Ingredients</h2></div>}>
                                            <ul>
                                                <li>{item.strIngredient1} {item.strMeasure1}</li>
                                                <li>{item.strIngredient2} {item.strMeasure2}</li>
                                                <li>{item.strIngredient3} {item.strMeasure3}</li>
                                                <li>{item.strIngredient4} {item.strMeasure4}</li>
                                                <li>{item.strIngredient5} {item.strMeasure5}</li>
                                                <li>{item.strIngredient6} {item.strMeasure6}</li>
                                                <li>{item.strIngredient7} {item.strMeasure7}</li>
                                                <li>{item.strIngredient8} {item.strMeasure8}</li>
                                                <li>{item.strIngredient9} {item.strMeasure9}</li>
                                                <li>{item.strIngredient10} {item.strMeasure10}</li>
                                                <li>{item.strIngredient11} {item.strMeasure11}</li>
                                                <li>{item.strIngredient12} {item.strMeasure12}</li>
                                                <li>{item.strIngredient13} {item.strMeasure13}</li>
                                                <li>{item.strIngredient14} {item.strMeasure14}</li>
                                                <li>{item.strIngredient15} {item.strMeasure15}</li>
                                                <li>{item.strIngredient16} {item.strMeasure16}</li>
                                                <li>{item.strIngredient17} {item.strMeasure17}</li>
                                                <li>{item.strIngredient18} {item.strMeasure18}</li>
                                                <li>{item.strIngredient19} {item.strMeasure19}</li>
                                            </ul>
                                        </AccordionItem>
                                    </Accordion>
                                </div>
                            </div>
                        )
                    })
                }
            </section>
        </header>
    )
}

export default Header;