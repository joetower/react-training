import { useContext } from 'react';
import FeedbackItem from './FeedbackItem';
import FeedbackContext from '../context/FeedbackContext';

import { motion, AnimatePresence } from 'framer-motion';

function FeedbackList() {
  const { feedback } = useContext(FeedbackContext);

  if (!feedback || !feedback.length || feedback.length === 0) {
    return <p>No feedback yet!</p>;
  }
  return (
    <div className='feedback-list'>
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem
              key={item.id}
              rating={item.rating}
              text={item.text}
              item={item}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

// no animation
// return (
//   <div className="feedback-list">
//     {feedback.map((item) => (
//       <FeedbackItem key={item.id} rating={item.rating} text={item.text} item={item} handleDelete={handleDelete}/>
//     ))}
//   </div>
// )

export default FeedbackList;
