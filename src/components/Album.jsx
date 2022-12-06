function Album({ artist, title }) {
  return (
    <li className="album">
      <p>
        <span className="bold-text">Title: </span> {title}
      </p>
      <p>
        <span className="bold-text">Artist: </span> {artist}
      </p>
    </li>
  );
}

export default Album