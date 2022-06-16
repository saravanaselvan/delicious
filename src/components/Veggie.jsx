import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, Gradient, Wrapper } from "../utils/Styled";

const Veggie = () => {
  const [veggie, setVeggie] = useState([]);

  const getVeggie = async () => {
    let localVeggie = localStorage.getItem("veggie");

    if (localVeggie) {
      setVeggie(JSON.parse(localVeggie));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`
      );
      const { recipes } = await api.json();
      setVeggie(recipes);
      localStorage.setItem("veggie", JSON.stringify(recipes));
    }
  };

  useEffect(() => {
    getVeggie();
  }, []);

  return (
    <div>
      <Wrapper>
        <h3>Our Vegetarian Picks</h3>
        <Splide
          options={{
            perPage: 2,
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "5rem",
          }}
        >
          {veggie.map(({ id, title, image }) => (
            <SplideSlide key={id}>
              <Link to={`/recipe/${id}`}>
                <Card>
                  <p>{title}</p>
                  <img src={image} alt={title} />
                  <Gradient />
                </Card>
              </Link>
            </SplideSlide>
          ))}
        </Splide>
      </Wrapper>
    </div>
  );
};

export default Veggie;
