function Feed(props) {
  return (
    <div className="container">
      <img src={props.img} />

      <div className="content">
        <h2 className="name">
          <a href={props.link}>{props.title}</a>
        </h2>
        <h3> By: {props.creator}</h3>
        <p>{props.desc}</p>
      </div>
    </div>
  );
}

export default Feed;
