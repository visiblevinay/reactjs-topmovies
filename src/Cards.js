// import img from"./img/image1.jpeg";

function Cards(props) {
    return (
        <div className="card">
            <img src={props.img} alt="Profile photo"/>
            <h1>Name: {props.name}</h1>
        </div>
    )
}


export default Cards;