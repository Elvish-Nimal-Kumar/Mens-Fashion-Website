import React from "react";
import "./FAQ.css";

function FAQ() {

    const faqData = [
        {
            question: "How do I place an order?",
            answer:
                "Add products to your cart and proceed to checkout."
        },
        {
            question: "What payment methods are accepted?",
            answer:
                "We accept Cash On Delivery, UPI, Credit Card, and Debit Card."
        },
        {
            question: "How long does delivery take?",
            answer:
                "Orders are delivered within 3-7 business days."
        },
        {
            question: "Can I return products?",
            answer:
                "Yes, products can be returned within 7 days of delivery."
        },
        {
            question: "How can I contact support?",
            answer:
                "You can contact us through the Contact Us page."
        }
    ];

    return (
        <div className="faq-container">

            <div className="faq-card">

                <h2>
                    Frequently Asked Questions
                </h2>

                {faqData.map((faq, index) => (

                    <div
                        className="faq-item"
                        key={index}
                    >

                        <h4>
                            {faq.question}
                        </h4>

                        <p>
                            {faq.answer}
                        </p>

                    </div>

                ))}

            </div>

        </div>
    );
}

export default FAQ;