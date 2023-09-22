function Story(props) {
  let image;
  if (!props.image) {
    image = "https://placehold.co/600x400?text=News";
  } else {
    image = props.image;
  }

  function handleDelete(e) {
    if (e.target.classList.contains("removeButton")) {
      const storyElement = document.getElementById(`story-${props.id}`);
      if (storyElement) {
        storyElement.remove();
      }
    }
  }

  return (
    <li id={`story-${props.id}`} className="list" onClick={handleDelete}>
      <div className="wholeList">
        <div>
          <img className="image" src={image} alt="" />
        </div>
        <div className="rightSide">
          <button className="removeButton">Remove</button>
          <a href={props.link}>
            <h2>{props.title}</h2>
          </a>
          <h3 className="author">By: {props.author}</h3>
          <p className="description">{props.description}</p>
        </div>
      </div>
    </li>
  );
}

export default Story;
