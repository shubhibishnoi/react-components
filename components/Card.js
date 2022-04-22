import { React } from "react";

export default function Card(props) {
  return (
    <div className="card">
      <img src={props.img} className="card-img" />
      <div className="card-stats">
        {/* <img
          src="https://image.shutterstock.com/image-vector/star-icon-260nw-158747405.jpg"
          className="star-img"
        /> */}
        <span> {props.rating} </span>
        <span>({props.review}) </span>
        <span> {props.country} </span>
      </div>
      <p>life of athelte is so tough.</p>
      <p>
        <span className="bold"> from $ {props.price}</span> /person
      </p>
    </div>
  );
}
