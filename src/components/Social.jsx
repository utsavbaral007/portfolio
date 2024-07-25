import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const socials = [
  {
    icon: <FaGithub />,
    path: "https://github.com/utsavbaral007",
  },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/utsavbaral7",
  },
  {
    icon: <FaTwitter />,
    path: "https://x.com/utsavvv007",
  },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((social, index) => {
        return (
          <Link
            key={index}
            href={social.path}
            target="_blank"
            className={iconStyles}
          >
            {social.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
