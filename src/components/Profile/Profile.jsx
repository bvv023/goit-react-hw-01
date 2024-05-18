import PropTypes from 'prop-types';
import css from './Profile.module.css'; 

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.profile}>
      <div className={css.profileDetails}>
        <img className={css.profileImage} src={image} alt="User avatar" />
        <p className={css.name}>{name}</p>
        <p className={css.profileText}>@{tag}</p>
        <p className={css.profileText}>{location}</p>
      </div>

      <ul className={css.profileStats}>
        <li className={css.profileStatsItem}>
          <span className={css.profileStatsLabel}>Followers</span>
          <span className={css.profileStatsValue}>{stats.followers}</span>
        </li>
        <li className={css.profileStatsItem}>
          <span className={css.profileStatsLabel}>Views</span>
          <span className={css.profileStatsValue}>{stats.views}</span>
        </li>
        <li className={css.profileStatsItem}>
          <span className={css.profileStatsLabel}>Likes</span>
          <span className={css.profileStatsValue}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;
