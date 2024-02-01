import './App.css'
import logoImage from './assets/ironhack-logo-xs.png';
import menuImage from './assets/menu-top-xs.png';
import imageOne from './assets/icon1.png';
import imageTwo from './assets/icon2.png';
import imageThree from './assets/icon3.png';
import imageFour from './assets/icon4.png';

function App() {
  return (
    <>
      <div className='page-container'>
        <div className='background-square'>
              
          <div className='body-square'>
            <nav className='nav-bar'>
              <img src={logoImage} alt='ironhack-logo' />
              <img className='burger-menu' src={menuImage} alt='menu' />
            </nav>

            <div className='title'>
              <h1>Say hello to ReactJS</h1>
              <p>You will learn how to use the most popular frontend library, and become a super Ninja developer.</p>
            </div>

            <div>
              <button className='btn-awesome'>Awesome!</button>
            </div>
          </div>

          <div className='footer'>
            <div className='gallery-container'>
              <ul>
                <li className='li-image'><img src={imageOne} alt='icon-1'/></li>
                <li className='li-title'>Declarative</li>
                <li className='li-text'>React makes it painless to create interactive UIs.</li>
              </ul>
            </div>

            <div className='gallery-container'>
                <ul>
                  <li className='li-image'><img src={imageTwo} alt='icon-2'/></li>
                  <li className='li-title'>Components</li>
                  <li className='li-text'>Build encapsulated components that manage their state.</li>
                </ul>
            </div>

            <div className='gallery-container'>
                <ul>
                  <li className='li-image'><img src={imageThree} alt='icon-2'/></li>
                  <li className='li-title'>Single-Way</li>
                  <li className='li-text'>A set of immutable values are passed to the components.</li>
                </ul>
            </div>

            <div className='gallery-container'>
                <ul>
                  <li className='li-image'><img src={imageFour} alt='icon-4'/></li>
                  <li className='li-title'>JSX</li>
                  <li className='li-text'>Statically-typed, designed to run on modern browsers.</li>
                </ul>
            </div>

          </div>

        </div>

      </div>
    </>
  );
}

export default App;
