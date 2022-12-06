import Album from "./Album"

const arr = [
  {
    title: "Starboy",
    artist: "Weekend",
  },
  {
    title: "Some",
    artist: "Dude",
  },
  {
    title: "Coding",
    artist: "Like",
  },
  {
    title: "Share",
    artist: "Subscribe",
  },
];

function Body() {
  return (
    <>
      <div className="body-intro">
        <h3>This is the body of my App</h3>
        <p>The body is a component below is a list of my favourite Albums</p>
      </div>

      <ul className="album-list">
        {arr.map((album, index) => (
          <Album key={index}  artist={album.artist} title={album.title}/>
        ))}
      </ul>
    </>
  );
}

export default Body;

