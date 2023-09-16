// import { Link } from "react-router-dom";
// import { Carousel, Image } from "react-bootstrap";
// import Loader from "./Loader";
// import Message from "./Message";
// import { useGetTopProductsQuery } from "../slices/productsApiSlice";
// import "./slider.css";

// const ProductCarousel = () => {
//   const { data: products, isLoading, error } = useGetTopProductsQuery();

//   return isLoading ? (
//     <Loader />
//   ) : error ? (
//     <Message variant="danger">{error?.data?.message || error.error}</Message>
//   ) : (
//     <Carousel className="testsd" pause="hover">
//       {products.map((product) => (
//         <Carousel.Item key={product._id}>
//           <Link to={`/product/${product._id}`}>
//             <Image
//               className="imageslider"
//               src={product.image}
//               alt={product.name}
//               fluid
//             />
//             <Carousel.Caption className="carousel-caption">
//               <h2 className="text-white text-right">
//                 {product.name} (${product.price})
//               </h2>
//             </Carousel.Caption>
//           </Link>
//         </Carousel.Item>
//       ))}
//     </Carousel>
//   );
// };

// export default ProductCarousel;
import Splide from "@splidejs/react-splide";

function Slider() {
  return (
    <Splide
      className="splide"
      options={{
        type: "loop",
        perPage: 3,
        perMove: 1,
      }}
    >
      <SplideSlide>
        <img src="/image1.png" />
      </SplideSlide>

      <SplideSlide>
        <img src="/image2.png" />
      </SplideSlide>

      <SplideSlide>
        <img src="/image3.png" />
      </SplideSlide>
    </Splide>
  );
}

export default Slider;
