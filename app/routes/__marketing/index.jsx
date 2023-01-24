import { Link } from '@remix-run/react';
import { FaArrowRight, FaDollarSign, FaChartBar } from 'react-icons/fa';

export default function Index() {
  return (
    <main>
      <section className='marketing-section'>
        <header>
          <FaDollarSign />
          <h2>See your spending</h2>
        </header>
        <div className='marketing-content'>
          <div className='marketing-image'>
            <img
              src='images/expenses-management.jpg'
              alt='A list of expenses.'
            />
          </div>
          <div className='marketing-explanation'>
            <p>Expensify your life.</p>
            <p>
              <Link className='cta' to='/expenses'>
                <span>Get Started</span>
                <FaArrowRight />
              </Link>
            </p>
          </div>
        </div>
      </section>
      <section className='marketing-section'>
        <header>
          <FaChartBar />
          <h2>Detailed Analytics</h2>
        </header>
        <div className='marketing-content'>
          <p className='marketing-explanation'>
            Simplify your finances, streamline your expenses, and achieve your
            financial goals with ease.
          </p>
          <div className='marketing-image'>
            <img src='images/expenses-chart.jpg' alt='A demo bar chart.' />
          </div>
        </div>
      </section>
    </main>
  );
}

export function meta() {
  return {
    title: 'Expensify',
    description: 'Track expenses, set budgets, and stay on top of financial goals',
  };
}

export function headers({ actionHeaders, loaderHeaders, parentHeaders }) {
  return {
    'Cache-Control': parentHeaders.get('Catch-Control'), // 60 mins
  };
}

export const handle = { disableJS: true };
