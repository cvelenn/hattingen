import React, { useState } from 'react';

function FAQElement({ question, answer }) {
  const [plus, setPlus] = useState(true);
  return (
    <div className='faq'>
      <div>
        {question}
        {plus && (
          <img
            className='faq-icon'
            src='./images/plus.png'
            alt=''
            onClick={() => setPlus(false)}
          />
        )}
        {!plus && (
          <img
            className='faq-icon'
            src='./images/minus.png'
            alt=''
            onClick={() => setPlus(true)}
          />
        )}
      </div>
      {!plus && <div className='answer'>{answer}</div>}
    </div>
  );
}

export default FAQElement;
