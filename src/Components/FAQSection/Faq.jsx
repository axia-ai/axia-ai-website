import React, { useState } from 'react';
import { MdOutlineKeyboardArrowUp, MdOutlineKeyboardArrowDown } from "react-icons/md";

const faqs = [
    {
        question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim lorem hac a ultricies. Id ornare turpis vulputate enim sed magna sit. A id cursus dolor urna. Aliquam diam integer vitae eget.'
    },
    {
        question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim lorem hac a ultricies. Id ornare turpis vulputate enim sed magna sit. A id cursus dolor urna. Aliquam diam integer vitae eget.'
    },
    {
        question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim lorem hac a ultricies. Id ornare turpis vulputate enim sed magna sit. A id cursus dolor urna. Aliquam diam integer vitae eget.'
    },
    {
        question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim lorem hac a ultricies. Id ornare turpis vulputate enim sed magna sit. A id cursus dolor urna. Aliquam diam integer vitae eget.'
    },
    {
        question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim lorem hac a ultricies. Id ornare turpis vulputate enim sed magna sit. A id cursus dolor urna. Aliquam diam integer vitae eget.'
    },
];

const Faq = () => {
    const [selected, setSelected] = useState(null);

    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null);
        }
        setSelected(i);
    };

    return (
        <div className="w-full max-w-xl mx-auto m-24 my-14 sm:my-36 px-2">
            <h1 className="text-4xl font-bold text-center mb-6">Suspendisse vitae</h1>
            <p className="text-center mb-0 sm:mb-6 text-introHeadingGrey text-sm sm:text-base md:text-lg">
                At lacus vitae nulla sagittis scelerisque nisl. Pellentesque duis cursus vestibulum, facilisi ac, sed faucibus.
            </p>
            <div className="bg-white shadow-md rounded-lg overflow-hidden my-14 mx-4">
                {faqs.map((faq, i) => (
                    <div key={i} className="border-b border-gray-200">
                        <div
                            className={`p-6 flex justify-between items-center cursor-pointer ${selected === i ? 'bg-gray-100 text-gray-800' : 'text-gray-600'}`}
                            onClick={() => toggle(i)}
                        >
                            <h2 className="text-sm sm:text-base md:text-lg font-medium">{faq.question}</h2>
                            <span>{selected === i ? <MdOutlineKeyboardArrowUp className="text-gray-800" /> : <MdOutlineKeyboardArrowDown />}</span>
                        </div>
                        {selected === i && <div className="text-sm sm:text-base md:text-lg p-6 text-introHeadingGrey">{faq.answer}</div>}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Faq;
