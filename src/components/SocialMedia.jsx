import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const SocialMedia = () => {
  return (
    <div className="app__social">
        <div>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/serhii-putilov"
          >
            <AiFillLinkedin />
          </a>
        </div>
        <div>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/SergeyPutilov"
          >
            <AiFillGithub />
          </a>
        </div>
    </div>
  )
};

export default SocialMedia;