import { Card } from '@mui/material';
import PropTypes from 'prop-types';

const Skill = ({ profile }) => {

  const ceoSkills = ["Python", "Ricerca Operativa", "Consulenza", "Rappresentanza", "Calcetto", "Inglese", "Giapponese", "Italiano"]
  const chefSkills = ["Crema", "Pandoro", "Ramen", "Cucina fusion", "Pesto", "Tonno"]

  const skills = profile === "ceo"? ceoSkills : chefSkills

  return (
    <Card sx={{ maxWidth: "sm", width: "100%" }}>
      <div className="card-body">
        <div className="mx-3">
          <h5 className="card-title">
            <span className="text-base-content opacity-70">
              Skill
            </span>
          </h5>
        </div>
        <div className="p-3 flow-root">
          <div className="-m-1 flex flex-wrap justify-center">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="m-1 text-xs inline-flex items-center font-bold leading-sm px-3 py-1 badge-primary bg-opacity-90 rounded-full"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};

Skill.propTypes = {
  loading: PropTypes.bool.isRequired,
  skills: PropTypes.array.isRequired,
};

export default Skill;
