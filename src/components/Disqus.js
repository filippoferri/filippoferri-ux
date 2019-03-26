import React from "react";
import Disqus from "disqus-react";

import Conversation from '../img/conversation.svg';

class addDisqus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      conversation: false
    };
    this.getButton = this.getButton.bind(this);
    this.getDisqus = this.getDisqus.bind(this);
  }

  getButton() {
    return (
      <div className="columns">
        <div className="column is-8-desktop is-offset-2-desktop has-text-centered">
          <div className="sh-block-icon"><img src={Conversation} alt="Mostra la conversazione"/></div>
          <button onClick={() => this.setState({ conversation: true })} type="button"
                  className="button is-primary has-text-black">Show the conversation
          </button>
        </div>
      </div>);
  }

  getDisqus() {
    const disqusShortname = "filippo-ferri";
    const disqusConfig = {
      url: this.props.url,
      identifier: this.props.title,
      title: this.props.title
    };
    return (
      <Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig}/>
    );
  }

  render() {
    return (
      <div>
        {this.state.conversation ? this.getDisqus() : this.getButton()}
      </div>
    );

  }
}

export default addDisqus;