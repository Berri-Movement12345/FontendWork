import { Container, Carousel } from "react-bootstrap";
// import logo from "./media/not2.png";
import logo from "./media/not2.png";

const caroData = [
  {
    id: 1,
    title: "carosuel",
    SubTitle: "sub caro",
    image: logo,
  },
  {
    id: 2,
    title: "carosuel",
    SubTitle: "sub caro",
    image: logo,
  },
  {
    id: 3,
    title: "carosuel",
    SubTitle: "sub caro",
    image: logo,
  },
  {
    id: 4,
    title: "carosuel",
    SubTitle: "sub caro",
    image: logo,
  },
  {
    id: 5,
    title: "carosuel",
    SubTitle: "sub caro",
    image: logo,
  },
  {
    id: 6,
    title: "carosuel",
    SubTitle: "sub caro",
    image: logo,
  },
  
];



    function Slider(){
      return(
        <Container fluid>
          <Carousel>
            {caroData.map ((caro)=>(
              <Carousel.Item interval={500}>
               <img style={{width:"100hv", height:"90%"}} src={caro.image} alt={`caro image ${caro.id}`} />
               <Carousel.Caption>
                <h3 style={{color:"red"}}>
                  {caro.title}
                  {caro.id}
                </h3>
                <p style={{color:"green"}}>
                  {caro.SubTitle}
                  {caro.id}
                </p>
               </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </Container>
      )
    }
    export default Slider;
// function Slider() {
//   return (
//     <Container fluid>
//       <Carousel>
//         {caroData.map((caro) => (
//           <Carousel.Item key={caro.id} interval={5000}>
//             <img style={{width:"100hv", height:"90%"}} src={caro.image} alt={`caro image ${caro.id}`} />
//             <Carousel.Caption>
//               <h3 style={{ color: "gold" }}>
//                 {caro.title}
//                 {caro.id}
//               </h3>
//               <p style={{ color: "red" }}>
//                 {caro.SubTitle}
//                 {caro.id}
//               </p>
//             </Carousel.Caption>
//           </Carousel.Item>
//         ))}
//       </Carousel>
//     </Container>
//   );
// }
// export default Slider;

// import Carousel from 'react-bootstrap/Carousel';
// import logo from './media/not2.png';



// function Slider() {
//   return (
//     <Carousel>
//       <Carousel.Item interval={5000}>
//         <img src={logo} alt={"First slide"} />
//         <Carousel.Caption>
//           <h3>First slide label</h3>
//           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//            <img src={logo} alt={"First slide"} />
//         <Carousel.Caption>
//           <h3>Second slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//            <img src={logo} alt={"First slide"} />
//         <Carousel.Caption>
//           <h3>Third slide label</h3>
//           <p>
//             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//           </p>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>
//   );
// }

// export default Slider;