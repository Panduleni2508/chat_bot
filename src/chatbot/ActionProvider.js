class ActionProvider {
    constructor(createChatBotMessages, setStateFunc) {
        this.createChatBotMessages = createChatBotMessages;
        this.setState = setStateFunc;
    }
    greet = () => {
        const message = this.createChatBotMessages ("Hello valued client.");
        this.addMessageToState(message);
    };

    handleICTQuiz = () => {
        const message = this.createChatBotMessage(
          "Fantastic! Here are some of the most common questions asked!",
          {
            widget: "ICTQuiz",
          }
        );
    
        this.addMessageToState(message);
      };

    addMessageToState = (message) => {
        this.setState((prevState) => ({
            ...prevState,
            messages: [...prevState.messages, message]
       }));
    };
}

export default ActionProvider;