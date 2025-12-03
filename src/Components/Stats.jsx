import Followers from "./Followers";
import Following from "./Following";
import Repos from "./Repos";

const Stats = ({ followers, following, repos }) => {
  return (
    <div className="stats">
      <Followers followers={followers} />
      <Following following={following} />
      <Repos repos={repos} />
    </div>
  );
};

export default Stats;
