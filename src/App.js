// import { React } from "react";

// //one dot finds in src folder only , 2 dots finds in parent
// //directory

// import data from "../components/data";
// // import jokesData from "../components/jokesData.js";
// import Card from "../components/Card.js";
// import Hero from "../components/Hero.js";
// import Navbar from "../components/Navbar.js";
// // import Contact from "../components/Contact.js";
// // import Jokes from "../components/jokes.js";

// export default function App() {
//   const cards = data.map((item) => {
//     return (
//       <Card
//         id={item.setup}
//         title={item.punchline}
//         price={item.price}
//         location={item.location}
//         review={item.stats.review}
//         rating={item.stats.rating}
//         img={item.img}
//       />
//     );
//   });
//   return (
//     <div>
//       <Navbar />
//       <section className="class-list">
//         {/* rendering cards with mapping components */}
//         {cards}
//       </section>
//     </div>
//   );
// }

//  <Card
//   img="https://image.shutterstock.com/image-vector/set-vector-cards-valentines-day-260nw-1856429269.jpg"
//   country="india"
//   review="2"
//   price="132"
//   rating="5.0"
// />
// <Card
//   img="https://image.shutterstock.com/image-vector/doodle-hearts-hand-drawn-love-260nw-1549742900.jpg"
//   country="india"
//   review={4}
//   price="132"
//   rating="9.0"
// />
// <Card
//   img="https://image.shutterstock.com/image-vector/set-vector-cards-valentines-day-260nw-1856429269.jpg"
//   country="india"
//   review="2"
//   price="1332"
//   rating="2.0"
// />
// <Card
//   img="https://image.shutterstock.com/image-vector/love-air-vector-lettering-clip-260nw-1240722589.jpg"
//   country="india"
//   review="4"
//   price="1342"
//   rating="6.0"
// />

// {/* <Jokes
//   // setup="I got some cupcakes here"
//   punchline="i cant wait to eat them"
// />

// <Jokes
//   setup="I got some cupcakes here"
//   punchline="i cant wait to eat them"
// />

// <Jokes
//   setup="I got some cupcakes here"
//   punchline="i cant wait to eat them"
// />

// <Jokes
//   setup="I got some cupcakes here"
//   punchline="i cant wait to eat them"
// />

// <Jokes
//   setup="I got some cupcakes here"
//   punchline="i cant wait to eat them"
// /> *

import { React } from "react";
// import Card from "../components/Card";

import practise from "../components/practise";

import Practisecard from "../components/practise-card";

export default function App() {
  const school = practise.map((item) => {
    return (
      <Practisecard
        class={item.class}
        rollno={item.rollno}
        subject={item.subject}
      />
    );
  });

  return <div>{school}</div>;
}
