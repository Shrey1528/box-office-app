import ActorCard from './ActorCard';
import NotFoundImgSrc from '../../assets/notfound.png';

const ActorsGrid = ({ actors }) => {
  return (
    <div>
      {actors.map(data => (
        <ActorCard
          key={data.person.id}
          name={data.person.name}
          image={data.person.image ? data.person.image.medium : NotFoundImgSrc}
          country={data.person.country ? data.person.country.name : null}
          birthday={data.person.birthday}
          deathday={data.person.deathday}
          gender={data.person.gender}
        />
      ))}
    </div>
  );
};

export default ActorsGrid;
