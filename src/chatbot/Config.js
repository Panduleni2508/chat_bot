// import Chatbot from "react-chatbot-kit";
import React from 'react';
import { createChatBotMessage } from 'react-chatbot-kit';
import Quiz from '../components/Quiz/Quiz';
import Options from '../components/Options/Options';

const Config = {
    botName: "AssistanceBot",
    initialMessages: 
    [createChatBotMessage('Good day, how may I be of assistance?',{
        widget: "options",
    }),
    ],
    widgets: [
        {
            widgetName: "options",
            widgetFunc: (props) => <Options {...props} />,
        },
        {
            widgetName: "ICTQuiz",
            widgetFunc: (props) => <Quiz {...props} />,
            props: {
                questions: [
                    {
                      question: "Do you create websites and mobile apps?",
                      answer:
                        "Yes, we do.",
                      id: 1,
                    },
                    {
                      question: "Do you provide web hosting?",
                      answer:
                        "Yes, we do provide website hosting services, please refer to the ICT page under services to view all the hosting packages. ",
                      id: 2,
                    },
                  ],
            },
        },
    ],
};

export default Config;