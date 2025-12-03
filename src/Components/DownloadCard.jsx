const DownloadCard = ({ downloadCard }) => {
  return (
    <button onClick={downloadCard} className="download-btn">
      Download Card <i className="ri-download-2-line"></i>
    </button>
  );
};

export default DownloadCard;
