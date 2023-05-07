import { Link } from 'react-router-dom';

const ShowCard = ({ name, image, id, summary, onStarMeClick }) => {
  const summaryStripped = summary
    ? summary.split(' ').slice(0, 10).join(' ').replace(/<.+?>/g, '') + '...'
    : 'No description';

  const handleStarClick = () => {
    onStarMeClick(id);
  };

  return (
    <div>
      <div>
        <img src={image} alt={name} />
      </div>
      <h1>{name}</h1>

      <p>{summaryStripped}</p>

      <div>
        <Link to={`/show/${id}`} target="_blank" rel="noreferrer">
          Read More
        </Link>
        <button type="button" onClick={handleStarClick}>
          Star me
        </button>
      </div>
    </div>
  );
};

export default ShowCard;
