import React from 'react';
import { Helmet } from 'react-helmet';
import Slide from './Slide';
import Circles from './Circles';

function Transplantation() {
  return (
    <div>
      <Helmet>
        <title>Home</title>
        <meta
          name='description'
          content='This is what you want to show as the page content in the Google SERP Listing'
        />
      </Helmet>
      <div className='wide'>
        <img
          className='wide-img'
          src='./images/shutterstock_568819498.png'
          alt=''
        />
      </div>
      <div className='wide relative'>
        <div className='text'>
          Haare gehören zu dem, was uns mit als erstes auffällt, wenn wir
          jemanden kennen lernen. Sie sind ein essentieller Teil unseres
          Erscheinungsbildes und das Sinnbild von Jugend, Gesundheit und
        </div>
      </div>
      <div className='wide'>
        <img
          className='folicule'
          src='./images/shutterstock_386769496_folicule.png'
          alt=''
        />
        <img className='wide' src='./images/shutterstock_-21.png' alt='' />
      </div>

      <div className='wide rocks'>
        <div>
          Haare gehören zu dem, was uns mit als erstes auffällt, wenn wir
        </div>
        <div className='relative middle box-shadow'>
          <table>
            <tr>
              <td>
                Haare gehören zu dem, was uns mit als erstes auffällt, wenn wir
              </td>
              <td>
                Haare gehören zu dem, was uns mit als erstes auffällt, wenn wir
              </td>
            </tr>
          </table>
        </div>

        <div id='preis' className='wide center-table-container'>
          <table>
            <thead>
              <th>fus</th>
              <th>hare</th>
              <th>chf</th>
              <th>eur</th>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
              </tr>
              <tr>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
              </tr>
              <tr>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
              </tr>
              <tr>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
              </tr>
              <tr>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
              </tr>
              <tr>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
              </tr>
              <tr>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
              </tr>
              <tr>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
              </tr>
              <tr>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
              </tr>
              <tr>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
              </tr>
            </tbody>
          </table>
        </div>

        <Slide />

        <Circles />
      </div>
    </div>
  );
}

export default Transplantation;
