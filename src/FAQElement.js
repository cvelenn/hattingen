import React from 'react';

function FAQElement({ id, question, answer }) {
  const toggleElement = (className, show) => {
    const display = show ? '' : 'none';
    document.body.getElementsByClassName(className)[0].style.display = display;
  };
  return (
    <div className='faq'>
      <div>
        {question}
        <img
          className={'plus-' + id + ' faq-icon'}
          src='images/plus.png'
          alt=''
          onClick={() => {
            toggleElement('answer-' + id, true);
            toggleElement('minus-' + id, true);
            toggleElement('plus-' + id, false);
          }}
        />
        <img
          className={'minus-' + id + ' faq-icon'}
          src='images/minus.png'
          style={{ display: 'none' }}
          alt=''
          onClick={() => {
            toggleElement('answer-' + id, false);
            toggleElement('minus-' + id, false);
            toggleElement('plus-' + id, true);
          }}
        />
      </div>
      <div className={'answer-' + id} style={{ display: 'none' }}>
        {answer}
      </div>
    </div>
  );
}

export default FAQElement;
