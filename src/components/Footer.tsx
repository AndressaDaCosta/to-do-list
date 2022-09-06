import styles from './components/Footer.module.css';

import github from '../assets/github.svg';
import linkedin from '../assets/linkedin.svg';
import instagram from '../assets/instagram.svg';
import gmail from '../assets/gmail.svg';

export function Footer(){
  return (
   
    <footer>
        {/* <ul className='social-media'>
          <li>
            <a href="https://github.com/AndressaDaCosta" target="_blank">
              <img src={github} alt="Ícone do github" title='Github'/>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/andressa-da-costa" target="_blank">
              <img src={linkedin} alt="Ícone do linkedin" title='Linkedin'/>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/andressacostaaaaaa/" target="_blank">
              <img src={instagram} alt="Ícone do instagram" title='Instagram'/>
            </a>
          </li>
          <li>
            <a href="mailto:andressadacosta@gmail.com?" target="_blank">
              <img src={gmail} alt="Ícone do gmail" title='Gmail'/>
            </a>
          </li>
        </ul> */}
      <span>Copyright &copy; 2022 @AndressaDaCosta - Todos os direitos reservados</span>
    </footer>
    
  )
}