function News(props) {
  return (
    <div className="entirePage">
      <div className="titleBox">
        <h1 className="title">BlackPink</h1>
      </div>
      <div className="listOutline">
        <ul>{props.children}</ul>
      </div>
    </div>
  );
}

export default News;
