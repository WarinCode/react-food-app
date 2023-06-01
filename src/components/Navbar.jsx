// import style
import ReactLogo from '../assets/react.svg';
import '../style/css/navbar.css';

// import lib
import Swal from 'sweetalert2';

function Navbar() {
  const showAlert = () => {
    Swal.fire({
      imageUrl: ReactLogo,
      imageHeight: 120,
      imageWidth: 120,
      imageAlt: 'logo',
      showConfirmButton: false,
      title: '<h3 style="font-weight:bold;">React-project</h3>',
      text:'โปรเจคนี้ทำเกี่ยวกับค้นหารายชื่ออาหารและบอกรายละเอียดต่างๆ',
      footer:'ติดตามผลงานต่างๆของเราได้ที่ &nbsp; <a href="https://github.com/VarinCode" target="_blank" rel="noopener noreferrer" style="text-decoration: none; color:#6ccae9;" ><h4>github.com</h4></a> '
    })
  }

  return (
    <>
      <nav className='navbar' id='top' onClick={showAlert}>
        <div className='nav-logo'>
          <img src={ReactLogo} alt="logo" />
        </div>
        <div className='nav-title'>
          <h1>React-project</h1>
        </div>
      </nav>
    </>
  )
}

export default Navbar;