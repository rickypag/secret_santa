import { skeleton } from '../../helpers/utils';
import { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Card } from '@mui/material';

const ListItem = ({ time, degree, institution }) => (
  <li className="mb-5 ml-4">
    <div
      className="absolute w-2 h-2 bg-base-300 rounded-full border border-base-300 mt-1.5"
      style={{ left: '-4.5px' }}
    ></div>
    <div className="my-0.5 text-xs">{time}</div>
    <h3 className="font-semibold">{degree}</h3>
    <div className="mb-4 font-normal">{institution}</div>
  </li>
);

const Education = () => {
  const education = [
    {
        "institution": "Institution Name",
        "degree": "Degree",
        "from": "2015",
        "to": "2019"
    },
    {
        "institution": "Institution Name",
        "degree": "Degree",
        "from": "2012",
        "to": "2014"
    }
]

  return (
    <Card sx={{ maxWidth: "sm", width: "100%" }}>
        <div className="card shadow-lg compact bg-base-100">
          <div className="card-body">
            <div className="mx-3">
              <h5 className="card-title">
                <span className="text-base-content opacity-70">
                    Education
                </span>
              </h5>
            </div>
            <div className="text-base-content text-opacity-60">
              <ol className="relative border-l border-base-300 border-opacity-30 my-2 mx-4">  
                {education.map((item, index) => (
                  <ListItem
                    key={index}
                    time={`${item.from} - ${item.to}`}
                    degree={item.degree}
                    institution={item.institution}
                  />
                ))}
              </ol>
            </div>
          </div>
        </div>
      </Card>
  );
};

Education.propTypes = {
  loading: PropTypes.bool.isRequired,
  education: PropTypes.array.isRequired,
};

ListItem.propTypes = {
  time: PropTypes.node,
  degree: PropTypes.node,
  institution: PropTypes.node,
};

export default Education;
