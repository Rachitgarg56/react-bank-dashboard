
import './Body.css';
import Data from './Data.js';
import { Chart } from 'chart.js';

const Body = () => {

    const ctx = document.getElementById('myChart');

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    return (
        <section className='body'>
            <div className='container-left'>
                <Data dataName="Home Value" minVal="1000" maxVal="10000" />
                <Data dataName="Down Payment" minVal="0" maxVal="6700" />
                <Data dataName="Loan Amount" minVal="0" maxVal="6700" />
                <Data dataName="Interest rate" minVal="2" maxVal="18" />
                <fieldset>
                    <legend>Tenure</legend>
                    <select>
                        <option>5 years</option>
                        <option>10 years</option>
                        <option>15 years</option>
                        <option>20 years</option>
                        <option>25 years</option>
                    </select>
                </fieldset>
            </div>
            {/* <div className='container-right'>right</div> */}
            <div className='container-right'><canvas id="myChart"></canvas></div>
        </section>
    )
}

export default Body;
