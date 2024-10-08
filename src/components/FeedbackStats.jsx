import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext);

  // Calculate the average rating
  let average =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedback.length;
  average = average.toFixed(1).replace(/\.0$/, '');

  return (
    <div className='feedback-stats'>
      <h2>{feedback.length} Reviews</h2>
      <h3>Average Rating: {isNaN(average) ? 0 : average}</h3>
    </div>
  );
}

export default FeedbackStats;
