import NotFoundImgSrc from '../../assets/notfound.png';

const Cast = ({ cast }) => {
  return (
    <div>
      {cast.map(({ person, character, voice }) => (
        <div key={person.id} className="cast-item">
          <div className="pic-wrapper">
            <img src={person.image ? person.image.medium : NotFoundImgSrc} />
          </div>

          <div className="actor">
            {person.name} | {character.name} {voice && '| Voiceover'}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cast;
