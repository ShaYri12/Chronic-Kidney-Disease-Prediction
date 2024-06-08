import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function AccordionUsage() {
  // Array of questions and answers
  const faqs = [
    {
      question: "What is the Disease Prediction System?",
      answer: "The Disease Prediction System is an online platform designed to help users assess their health risks and predict potential diseases based on symptoms provided."
    },
    {
      question: "How does the Disease Prediction System work?",
      answer: "Our system utilizes advanced algorithms and machine learning techniques to analyze the symptoms entered by users and generate predictions about possible diseases or health conditions."
    },
    {
      question: "Is the Disease Prediction System accurate?",
      answer: "While we strive for accuracy, it's important to note that our system provides predictions based on the information provided by users and the algorithms it employs. It's always advisable to consult a healthcare professional for a definitive diagnosis and medical advice."
    },
    {
      question: "What kind of symptoms can I input into the Disease Prediction System?",
      answer: "You can input a wide range of symptoms into our system, including common ailments like headaches, fever, fatigue, as well as more specific symptoms related to various diseases or conditions."
    },
    {
      question: "Is my personal information safe when using the Disease Prediction System?",
      answer: "Yes, we take the privacy and security of your personal information seriously. Any data entered into the system is kept confidential and is only used for the purpose of generating predictions. Please refer to our privacy policy for more details."
    },
    {
      question: "Can the Disease Prediction System replace a visit to the doctor?",
      answer: "No, the Disease Prediction System is not a substitute for professional medical advice, diagnosis, or treatment. It is intended to provide users with preliminary information and raise awareness about potential health risks. Always consult a qualified healthcare provider for personalized medical guidance."
    },
    {
      question: "How should I interpret the results from the Disease Prediction System?",
      answer: "The results provided by our system are for informational purposes only and should not be considered a definitive diagnosis. If you receive concerning results, we recommend seeking further evaluation from a healthcare professional for proper diagnosis and treatment."
    },
    {
      question: "Can I use the Disease Prediction System for emergency situations?",
      answer: "No, the Disease Prediction System is not designed for use in emergency situations. If you are experiencing a medical emergency, please seek immediate medical assistance by contacting emergency services or visiting the nearest hospital."
    }
  ];

  return (
    <section className="bg-[#eafeeb] py-8 min-h-screen md:px-[8%] px-[5%]  text-center">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold py-3">Frequently Asked Questions</h1>
        <p className="pb-8 md:w-[60%] w-full">
          Answers to Your Questions: Find clarity on common queries about our
          disease prediction service, data privacy, accuracy, and more.
        </p>
      </div>

      <div>
        {faqs.map((faq, index) => (
          <Accordion key={index} className="text-left">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index + 1}-content`}
              id={`panel${index + 1}-header`}
            >
              <span className="font-semibold">{faq.question}</span>
            </AccordionSummary>
            <AccordionDetails>
              {faq.answer}
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </section>
  );
}
