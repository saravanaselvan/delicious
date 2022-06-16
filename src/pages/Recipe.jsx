import { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";

const Recipe = () => {
  const [recipeInfo, setRecipeInfo] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");

  const { id } = useParams();

  const getRecipeInfo = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const recipeInfo = await data.json();
    // console.log(recipeInfo.analyzedInstructions[0].steps);
    setRecipeInfo(recipeInfo);
  };

  useEffect(() => {
    getRecipeInfo();
  }, [id]);
  return (
    <DetailWrapper>
      <div>
        <h2>{recipeInfo.title}</h2>
        <img src={recipeInfo.image} alt="" />
      </div>
      <Info>
        <Button
          className={activeTab === "instructions" ? "active" : ""}
          onClick={() => setActiveTab("instructions")}
        >
          Instructions
        </Button>
        <Button
          className={activeTab === "ingredients" ? "active" : ""}
          onClick={() => setActiveTab("ingredients")}
        >
          Ingredients
        </Button>
        {activeTab === "instructions" && (
          <div style={{ marginTop: "2rem" }}>
            <h4
              style={{ lineHeight: "1.5rem" }}
              dangerouslySetInnerHTML={{ __html: recipeInfo.summary }}
            ></h4>
            <h5
              dangerouslySetInnerHTML={{ __html: recipeInfo.instructions }}
            ></h5>
          </div>
        )}
        {activeTab === "ingredients" && (
          <h5>
            <ul>
              {recipeInfo.extendedIngredients &&
                recipeInfo.extendedIngredients.map((item, index) => (
                  <li key={index} className="ingredients">
                    {item.original}
                  </li>
                ))}
            </ul>
          </h5>
        )}
      </Info>
    </DetailWrapper>
  );
};

export default Recipe;

const DetailWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;
  .active {
    background: linear-gradient(35deg, #607d8b, #313131);
    color: white;
  }
  h2 {
    margin-bottom: 2rem;
  }
  li {
    font-size: 1rem;
    line-height: 2.5rem;
  }
  li.ingredients {
    text-transform: capitalize;
  }
  ul {
    margin-top: 2rem;
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 1rem;
  font-weight: 600;
  cursor: pointer;
`;

const Info = styled.div`
  margin-left: 4rem;
`;
