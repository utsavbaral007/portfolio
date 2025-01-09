import { FaFacebook, FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  MailruShareButton,
} from "react-share";

const socials = [
  {
    icon: <FaFacebook />,
    component: FacebookShareButton,
  },
  {
    icon: <FaTwitter />,
    component: TwitterShareButton,
  },
  {
    icon: <FaLinkedin />,
    component: LinkedinShareButton,
  },
  {
    icon: <FaEnvelope />,
    component: MailruShareButton,
  },
];

const SocialShare = ({ containerStyles, iconStyles, title }) => {
  console.log(location.href)
  return (
    <div className={containerStyles}>
      {socials.map((data, index) => (
        <data.component url={location.href} key={index} title={title}>
          <i className={iconStyles}>{data.icon}</i>
        </data.component>
      ))}
    </div>
  );
};

export default SocialShare;
