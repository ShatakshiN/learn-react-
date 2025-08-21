type cardImg = {
    img?: string,
    title?: string
    btnText?: string
}


function UserCard({img, title, btnText}:cardImg) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the bulk of the card’s content.
        </p>
        <a href="#" className="btn btn-primary">{btnText}</a>
      </div>
    </div>
  );
}

export default UserCard; 