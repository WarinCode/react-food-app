import '../style/css/footer.css';
import Social from './layout/Social';

function Footer() {
    let year = new Date().getFullYear();
    let compose = `${year} Copyright: React-project`;

  return (
    <>
    <Social />
      <footer className='footer'>
        <div className='footer-box'>
          <h1 className='footer-copyright'>&copy; {compose} </h1>
        </div>
      </footer>
    </>
  )
}

export default Footer;