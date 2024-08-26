import React, { useState } from 'react';

interface AccordionItemProps {
  index: number;
  title: string;
  content: React.ReactNode;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ index, title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="border border-white shadow-lg rounded-lg mb-2">
      <h2 id={`accordion-collapse-heading-${index}`}>
        <button
          type="button"
          className="flex items-center justify-between w-full p-5 font-medium text-gray-500 rounded-t-lg bg-white hover:bg-gray-100"
          onClick={toggleOpen}
          aria-expanded={isOpen}
          aria-controls={`accordion-collapse-body-${index}`}
        >
          <span
            className={`text-darkgrey font-bold text-[1.5rem] transition-colors ${isOpen ? 'text-green' : ''}`}
          >
            {title}
          </span>
          <svg
            className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div
        id={`accordion-collapse-body-${index}`}
        className={`transition-max-height duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-screen' : 'max-h-0'}`}
        aria-labelledby={`accordion-collapse-heading-${index}`}
      >
        <div className="p-5">{content}</div>
      </div>
    </div>
  );
};

const QnA: React.FC = () => {
  return (
    <div className="max-w-screen-lg mx-auto my-[5rem] px-4">
      <div className='text-green font-bold font-serif text-[2rem] flex items-center justify-center my-10'>
        Frequently Asked Questions
      </div>
      <AccordionItem
        index={1}
        title="How does the free trial work?"
        content={
          <p className="mb-2 text-gray-500">
            When you start your trial with Bonsai, you'll receive full, unlimited access to all of Bonsai's Workflow or Workflow Plus Features! You will need to enter your credit card information to begin your trial, but don't worry - we won't charge you anything until the subscription ends! If you wish to cancel at any time during the trial period, you can do so through your Subscriptions Settings Page.
          </p>
        }
      />
      <AccordionItem
        index={2}
        title="Can I change plans anytime?"
        content={
          <p className="mb-2 text-gray-500">
            Yes, you can from within your account. If you have already subscribed to a plan, or want to downgrade or upgrade your current one, you can do this by going to your "Settings" and "Subscription".
          </p>
        }
      />
      <AccordionItem
        index={3}
        title="How do I pause my Bonsai subscription?"
        content={
          <p className="mb-2 text-gray-500">
            We totally understand that with the nature of freelancing, work ebbs and flows so you might not always need your Bonsai subscription to remain active! The good news is that you can cancel or pause your monthly subscription at any time without penalty. Once cancelled, you'll be able to continue logging in to access all your documents and even continue to use our free features, like Time Tracking! In order to cancel your subscription, log in to your Bonsai account.
          </p>
        }
      />
      <AccordionItem
        index={4}
        title="What is your refund policy?"
        content={
          <p className="mb-2 text-gray-500">
            If you contact us within 2 weeks of being charged for your subscription, we will be happy to issue a refund for you! Beyond those 2 weeks, you will need to cancel or modify the subscription from the Subscriptions Tab in Settings to avoid future charges, but refunds will not be issued. This applies to both monthly and annual plans.
          </p>
        }
      />
    </div>
  );
};

export default QnA;
