import Card from '../components/shared/Card';
import { Link } from 'react-router-dom';

function AboutPage() {
  return (
    <Card>
      <div className='about'>
        <h1>AboutPage</h1>
      </div>
      <p>
        <Link to='/'>Back to Home</Link>
      </p>
    </Card>
  );
}

export default AboutPage;
