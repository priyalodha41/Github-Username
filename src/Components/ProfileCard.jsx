import Bio from "./Bio"
import DownloadCard from "./DownloadCard"
import Image from "./Image"
import Name from "./Name"
import Stats from "./Stats"
import { toPng } from "html-to-image";


const ProfileCard = ({ img, bio, name, followers, following, repos }) => {

  const downloadCard = () => {
  const card = document.getElementById("cardWrapper");

  toPng(card, { pixelRatio: 2 }) 
    .then((dataUrl) => {
      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = "github-profile-card.png";
      link.click();
    })
    .catch((err) => {
      console.log("Error generating image:", err);
    });

};

  return (
  
    <div>
     <div id="cardWrapper">
        <div className="profile-card-dark" id="profileCard">
            <Image img={img} />
            <Name name={name} />
            <Bio bio={bio} />
            <Stats followers={followers} following={following} repos={repos} />
        </div>
     </div>
     <div className="download-wrapper">
          <DownloadCard downloadCard={downloadCard} />
      </div>

    </div>
  );
};
export default ProfileCard