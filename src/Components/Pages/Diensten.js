import React from 'react';
import '../../App.css';
import dienstenFoto from './../rapportage.png';

export default function Diensten() {
  return <><h1 className='diensten'>Diensten</h1><div className='diensten-content'>
    <img src={dienstenFoto} alt="diensten" className='diensten-foto' />
    <div className='diensten-text'>
      <ul className='diensten-ul'>
        <li className='diensten-list'>Boekhouding &#13;
          <p className='diensten-text-b'>Wij werken met AFAS Profit, maar ondersteunen ook andere boekhoudpakketten.</p>
        </li>
        <li className='diensten-list'>Aangifte omzetbelasting &#13;
          <p className='diensten-text-b'>Tijdig indienen van de BTW aangifte per maand of kwartaal.</p>
        </li>
        <li className='diensten-list'>Jaarrekening &#13;
          <p className='diensten-text-b'>Opmaken van de jaarlijkse balans en resultatenrekening voor eenmanszaak, VOF of BV.</p>
        </li>
        <li className='diensten-list'>Aangifte inkomstenbelasting &#13;
          <p className='diensten-text-b'>Invullen van belastingaangifte voor ondernemers en particulieren.</p>
        </li>
        <li className='diensten-list'>Aangifte vennootschapsbelasting / deponering KvK &#13;
          <p className='diensten-text-b'>Invullen van belastingaangifte voor BV en de daarbij horende formaliteiten.</p>
        </li>
        <li className='diensten-list-2'>Loonadministratie
        </li>
        <li className='diensten-list-2'>Begeleiding bij opstarten van onderneming
        </li>
      </ul>
    </div>
  </div></>;
}