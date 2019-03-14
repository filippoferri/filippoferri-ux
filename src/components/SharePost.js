import React from 'react'
import {
  FacebookShareButton,
  TwitterShareButton,
  EmailShareButton,
} from 'react-share';

import facebook from "../img/svg/facebook.svg"
import twitter from "../img/svg/twitter.svg"
import email from "../img/svg/mail.svg"

class SharePost extends React.Component {

  render() {

    const shareUrl = this.props.shareUrl;
    const title = this.props.title;

    return (<div className="social-share">
      <FacebookShareButton
        url={shareUrl}
        quote={title}
        className="button">
        <img src={facebook} alt="Facebook"/>
      </FacebookShareButton>
      <TwitterShareButton
        url={shareUrl}
        title={title}
        className="button">
        <img src={twitter} alt="twitter"/>
      </TwitterShareButton>
      <EmailShareButton
        url={shareUrl}
        subject={title}
        body= { "Questo articolo è molto interessante: " + shareUrl}
        className="button">
        <img src={email} alt="Email"/>
      </EmailShareButton>
    </div>)
  }
};

export default SharePost;