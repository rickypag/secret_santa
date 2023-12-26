import { MdLocationOn } from 'react-icons/md';
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillMediumSquare,
} from 'react-icons/ai';
import { SiTwitter } from 'react-icons/si';
import { CgDribbble } from 'react-icons/cg';
import { RiPhoneFill, RiMailFill } from 'react-icons/ri';
import { Fragment } from 'react';
import {
  FaBehanceSquare,
  FaBuilding,
  FaDev,
  FaFacebook,
  FaGlobe,
  FaSkype,
  FaMastodon,
  FaStackOverflow,
  FaTelegram,
  FaLinkedin,
  FaYoutube,
} from 'react-icons/fa';
import PropTypes from 'prop-types';
import { skeleton } from '../../helpers/utils';
import { Card } from '@mui/material';

const isCompanyMention = (company) => {
  return company.startsWith('@') && !company.includes(' ');
};

const companyLink = (company) => {
  return `https://github.com/${company.substring(1)}`;
};

const getFormattedMastodonValue = (mastodonValue, isLink) => {
  const [username, server] = mastodonValue.split('@');

  if (isLink) {
    return `https://${server}/@${username}`;
  } else {
    return `${username}@${server}`;
  }
};

const ListItem = ({ icon, title, value, link, skeleton = false }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="flex justify-start py-2 px-1 items-center"
    >
      <div className="flex-grow font-medium gap-2 flex items-center my-1">
        {icon} {title}
      </div>
      <div
        className={`${
          skeleton ? 'flex-grow' : ''
        } text-sm font-normal text-right mr-2 ml-3 ${link ? 'truncate' : ''}`}
        style={{
          wordBreak: 'break-word',
        }}
      >
        {value}
      </div>
    </a>
  );
};

const Details = () => {

  return (
    <Card sx={{ maxWidth: "sm", width: "100%" }}>
      <div className="card-body">
        <div className="text-base-content text-opacity-60">
          <ListItem
            icon={<MdLocationOn />}
            title="Basato a:"
            value="Roma"
          />
          <ListItem
            icon={<FaBuilding />}
            title="Azienda:"
            value="Accenture"
            link="https://www.accenture.com/it-it"
          />           
          <ListItem
            icon={<FaLinkedin />}
            title="LinkedIn:"
            value="naoto-anzellotti"
            link="https://it.linkedin.com/in/naoto-anzellotti-041967196"
          />
          <ListItem
            icon={<FaFacebook />}
            title="Facebook:"
            value="naoto.anzellotti"
            link="https://www.facebook.com/naoto.anzellotti"
          />
          <ListItem
            icon={<AiFillInstagram />}
            title="Instagram:"
            value="naotoanzellotti"
            link="https://www.instagram.com/naotoanzellotti/"
          />
          <ListItem
            icon={<RiMailFill />}
            title="Email:"
            value="naoto.anzellotti@hotmail.com"
            link="mailto:$naoto.anzellotti@hotmail.com"
          />
        </div>
      </div>
    </Card>
  );
};

Details.propTypes = {
  profile: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  social: PropTypes.object.isRequired,
  github: PropTypes.object.isRequired,
};

ListItem.propTypes = {
  icon: PropTypes.node,
  title: PropTypes.node,
  value: PropTypes.node,
  link: PropTypes.string,
  skeleton: PropTypes.bool,
};

export default Details;
