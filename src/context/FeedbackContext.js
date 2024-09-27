import { createContext, useState } from 'react';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      rating: 10,
      text: 'Great job!',
    },
    {
      id: 2,
      rating: 3,
      text: 'Could be better',
    },
    {
      id: 3,
      rating: 10,
      text: 'Awesome!',
    },
  ]);

  const [feedbackEdit, setFeedbackEdit] = useState({
    edit: false,
    item: {},
  });

  //update feedback
  const updateFeedback = (id, updItem) => {
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item))
    );
  };

  // Set item to edit
  const editFeedback = (item) => {
    setFeedbackEdit({
      edit: true,
      item: item,
    });
  };

  // set up the addFeedback function
  const addFeedback = (newFeedback) => {
    setFeedback([newFeedback, ...feedback]);
  };

  // set up the deleteFeedback function
  const deleteFeedback = (id) => {
    setFeedback(feedback.filter((item) => item.id !== id));
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        addFeedback,
        editFeedback,
        deleteFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
