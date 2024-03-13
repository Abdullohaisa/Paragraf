import React from 'react'
import './style.css'
import karta2 from '../../../assets/karta2.svg'
import karta1 from '../../../assets/karta1.svg'
import tarmoq1 from '../../../assets/tarmoq1.svg'
import tarmoq2 from '../../../assets/tarmoq2.svg'
import tarmoq3 from '../../../assets/tarmoq3.svg'
import tarmoq4 from '../../../assets/tarmoq4.svg'
import tarmoq5 from '../../../assets/tarmoq5.svg'
import { useSelector } from 'react-redux'

const Footer = () => {
  const mode = useSelector((state) => state.darkMode.mode);
  return (
    <footer id={mode === false ? "dark":"light"}>
      <div className="container">
        <div  className="footer">
            <ul>
                <li className='footer-p'>Ma`lumot</li>
                <li className='footer-title'>Biz haqimizda</li>
                <li className='footer-title'>Blog</li>
                <li className='footer-title'>Kontakt</li>
                <li className='footer-title'>Ommaviy taklif</li>
            </ul>
            <ul>
                <li className='footer-p'>Takliflar uchun kontaktlar</li>
                <li className='footer-title'>Support@paragraf.uz</li>
                <li className='footer-title'>Fikr-mulohaza</li>
            </ul>
            <ul>
                <li className='footer-p'>Telefon</li>
                <li className='footer-title'>+998 90 123 45 67</li>
                <li className='footer-p-text'>Manzil</li>
                <li className='footer-title'>Olmazor tumani, st. Jomiy, 12.</li>
            </ul>
            <ul>
                <li className='footer-p'>To'lov tizimi</li>
                <li className='footer-icon'>
                  <img src={karta2} alt="" />
                  <img src={karta1} alt="" />
                </li>
                <li className='footer-p-text'>Ijtimoiy tarmoqlar</li>
                <li className='footer-icon'>
                  <img src={tarmoq1} alt="" />
                  <img src={tarmoq2} alt="" />
                  <img src={tarmoq3} alt="" />
                  <img src={tarmoq4} alt="" />
                  <img src={tarmoq5} alt="" />
                </li>
            </ul>
        </div>
        <div className="bottom-footer">
          <ul>
            <li>Paragraf.uz - Barcha huquqlar himoyalangan.</li>
            <li>Maxfiylik siyosati || Foydalanish shartlari</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
