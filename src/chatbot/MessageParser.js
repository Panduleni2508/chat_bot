class MessageParser{
    constructor(actionProvider) {
        this.actionProvider = actionProvider;
    }

parse(message) {
    console.log(message);
    const lowercase = message.toLowerCase();

    if (lowercase.includes("hello", "hi", "good afternoon", "good morning", "good evening", "good day")) {
        this.actionProvider.greet();
    }

    if (lowercase.includes("modules") || lowercase.includes("coaches") || lowercase.includes("courses") || lowercase.includes("training") ) {
        this.actionProvider.handleModules();
    }
}
}

export default MessageParser;