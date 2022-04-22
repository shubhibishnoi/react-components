import { React } from "react";

export default function Contact(props) {
  return (
    <div className="contact">
      <div className="contact-card">
        <img src={props.img} />
        <h3>{props.name}</h3>
        <div className="grp-info">
          <p>{props.phone}</p>
        </div>
        <div>
          <p>{props.email}</p>
        </div>
      </div>
    </div>
  );
}
