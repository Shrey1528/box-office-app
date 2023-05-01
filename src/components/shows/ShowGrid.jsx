import ShowCard from './ShowCard';
import NotFoundImgSrc from '../../assets/notfound.png';

const ShowGrid = ({ shows }) => {
  return (
    <div>
      {shows.map(data => (
        <ShowCard
          key={data.show.id}
          name={data.show.name}
          image={data.show.image ? data.show.image.medium : NotFoundImgSrc}
          summary={data.show.summary}
          id={data.show.id}
        />
      ))}
    </div>
  );
};

export default ShowGrid;
