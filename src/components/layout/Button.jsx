// import react
import { useRef } from 'react';

// import style
import '/src/style/css/layout.css';

// import lib
import { BsFillArrowUpSquareFill } from 'react-icons/bs';

function Button() {
    const btn = useRef();
    const handleClickIcon = () => {
        scrollY > 700 ? btn.current.style.display = "block" :  btn.current.style.display = "none";
    }
  
    window.onscroll = handleClickIcon;

  return (
    <div ref={btn} className='btn-group' >
        <a href="#top" >
            <BsFillArrowUpSquareFill className='btn-top'/>
        </a>
    </div>
  )
}

export default Button;