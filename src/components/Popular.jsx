import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Card, Gradient, Wrapper } from "../utils/Styled";
import { Link } from "react-router-dom";

const Popular = () => {
  const [popular, setPopular] = useState([]);

  const getPopular = async () => {
    let localPopular = localStorage.getItem("popular");

    if (localPopular) {
      setPopular(JSON.parse(localPopular));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
      );
      const { recipes } = await api.json();
      setPopular(recipes);
      localStorage.setItem("popular", JSON.stringify(recipes));
    }
  };

  useEffect(() => {
    getPopular();
  }, []);
  return (
    <div>
      <Wrapper>
        <h3>Popular Picks</h3>
        <Splide
          options={{
            perPage: 3,
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "5rem",
          }}
        >
          {popular.map(({ id, title, image }) => (
            <SplideSlide key={id}>
              <Card>
                <Link to={`/recipe/${id}`}>
                  <p>{title}</p>
                  <img src={image} alt={title} />
                  <Gradient />
                </Link>
              </Card>
            </SplideSlide>
          ))}
        </Splide>
      </Wrapper>
    </div>
  );
};

export default Popular;
