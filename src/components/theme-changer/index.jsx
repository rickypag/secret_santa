import PropTypes from 'prop-types';
import { Button, Card, Typography } from '@mui/material';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';

const ThemeChanger = ({ profile, setProfile }) => {
  const isChef = profile === "chef"

  return (
    <Card sx={{ maxWidth: "sm", width: "100%", paddingRight: 3 }}>
      <div className="flex-row items-center space-x-4 flex pl-6 pr-2 py-4">
        <div className="flex-1">
          <h5 className="card-title">
            <span className="text-base-content opacity-70">Profilo</span>
          </h5>
          <span className="text-base-content text-opacity-40 capitalize text-sm">
            {isChef? "Chef" : "Chief Executive Officer"}
          </span>
        </div>
        <div className="flex-0">
          <Button variant="outlined" onClick={() => setProfile(profile === "chef"? "ceo" : "chef")}>
              <img
                src={!isChef? "chef.png" : "ceo.png"}
                style={{ height: 25, width: 25, marginRight: 10 }}
              />
              <Typography sx={{ marginRight: 1 }}>
                {!isChef? "Chef" : "CEO"}
              </Typography>
              <SwapHorizIcon />
          </Button>
        </div>
      </div>
    </Card>
  );
};

ThemeChanger.propTypes = {
  theme: PropTypes.string,
  setTheme: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  themeConfig: PropTypes.object.isRequired,
};

export default ThemeChanger;
