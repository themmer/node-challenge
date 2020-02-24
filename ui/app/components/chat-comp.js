import Component from "@glimmer/component";

const options = {
  serverUrl: "http://localhost:3000", // Url to your Slack server component
  widgetState: "opened", // Have the component start opened or closed

  headerText: "How can we help?", // Text in the widget header
  headerImage: null, // Path to profile image

  emptyChatTopic: "Support chat", // Topic to show inside empty chat
  emptyChatText: "Questions? Just type it below and we'll answer you...", // Text to show inside empty chat

  inputPlaceholderText: "Write message here...", // Placeholder for the text input

  supportUsername: "Chat Specialist", // Name to show support replies under
  chatUserName: "Me" // Name to show before user messages
};

export default class ChatCompComponent extends Component {
  options = options
}
