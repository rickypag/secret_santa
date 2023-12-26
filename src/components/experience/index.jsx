import { skeleton } from '../../helpers/utils';
import { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Card } from '@mui/material';

const ListItem = ({ time, position, company, companyLink }) => (
  <li className="mb-5 ml-4">
    <div
      className="absolute w-2 h-2 bg-base-300 rounded-full border border-base-300 mt-1.5"
      style={{ left: '-4.5px' }}
    ></div>
    <div className="my-0.5 text-xs">{time}</div>
    <h3 className="font-semibold">{position}</h3>
    <div className="mb-4 font-normal">
      <a href={companyLink} target="_blank" rel="noreferrer">
        {company}
      </a>
    </div>
  </li>
);

const Experience = ({ profile }) => {

  const ceoExperience = [
      {
          "company": "Naoto enterprise",
          "position": "Chef execution officer",
          "from": "September 2022",
          "to": "Present",
      },
      {
          "company": "Fiorito - Servizio di pulizia",
          "position": "Gestore dell'erba cattiva",
          "from": "August 2021",
          "to": "September 2022",
      }
  ]

  const chefExperience = [
    {
        "company": "VH2O",
        "position": "Esperto di pandori",
        "from": "December 2015",
        "to": "Present",
    },
    {
        "company": "Anzellotti catering",
        "position": "Supervisore di pasta alla carlofortina",
        "from": "July 2018",
        "to": "Present"
    },
    {
        "company": "VH2O",
        "position": "Consulente di Ramen praghese",
        "from": "March 2015",
    }
  ]

  const experiences = profile === "ceo"? ceoExperience : chefExperience;

  return (
    <Card sx={{ maxWidth: "sm", width: "100%" }}>
      <div className="card shadow-lg compact bg-base-100">
        <div className="card-body">
          <div className="mx-3">
            <h5 className="card-title">
              <span className="text-base-content opacity-70">
                Esperienza
              </span>
            </h5>
          </div>
          <div className="text-base-content text-opacity-60">
            <ol className="relative border-l border-base-300 border-opacity-30 my-2 mx-4">
              {experiences.map((experience, index) => (
                <ListItem
                  key={index}
                  time={`${experience.from}${experience.to?" - " + experience.to : ""}`}
                  position={experience.position}
                  company={experience.company}
                  companyLink={
                    experience.companyLink ? experience.companyLink : null
                  }
                />
              ))}
            </ol>
          </div>
        </div>
      </div>
    </Card>
  );
};

ListItem.propTypes = {
  time: PropTypes.node,
  position: PropTypes.node,
  company: PropTypes.node,
  companyLink: PropTypes.string,
};

Experience.propTypes = {
  experiences: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Experience;
