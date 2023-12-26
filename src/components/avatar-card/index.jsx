import PropTypes from 'prop-types';
import { Box, Card, Stack } from '@mui/material';

const AvatarCard = ({ profile }) => {
  return (
    <Card sx={{ padding: 3, maxWidth: "sm", width: "100%" }}>
      <Stack spacing={2}>
        <Box sx={{ justifyContent: "center", display: "flex" }}>
          <img
            src={profile === "chef"? "profile-picture-chef.jpg" : "profile-picture.jpeg"}
            style={{ height: 100, width: 100, borderRadius: 100, borderColor: "#aaaaaa", borderWidth: 3 }}
          />
        </Box>
        <div className="text-center mx-auto px-8">
          <h5 className="font-bold text-2xl">
            <span className="text-base-content opacity-70">
              Naoto Anzellotti
            </span>
          </h5>
          <div className="mt-3 text-base-content text-opacity-60 font-mono">
            👨‍💼 Balancing the Spice of Life with the Savvy of Business! 🧑‍🍳
          </div>
        </div>
      </Stack>
    </Card>
  );
};

AvatarCard.propTypes = {
  profile: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  avatarRing: PropTypes.bool.isRequired,
  resume: PropTypes.shape({
    fileUrl: PropTypes.string,
  }),
};

export default AvatarCard;
