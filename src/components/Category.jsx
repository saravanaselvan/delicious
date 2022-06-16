import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Category = () => {
  const categories = [
    {
      icon: <FaPizzaSlice />,
      name: "Italian",
    },
    {
      icon: <FaHamburger />,
      name: "American",
    },
    {
      icon: <GiNoodles />,
      name: "Thai",
    },
    {
      icon: <GiChopsticks />,
      name: "Chinese",
    },
  ];
  return (
    <Menu>
      {categories.map(({ icon, name }) => (
        <MenuItem key={name} to={`/cuisine/${name}`}>
          {icon}
          <h4>{name}</h4>
        </MenuItem>
      ))}
    </Menu>
  );
};

export default Category;

const Menu = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;
  gap: 1rem;
`;

const MenuItem = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 2rem;
  gap: 0.75rem;
  text-decoration: none;
  background: linear-gradient(35deg, #607d8b, #313131);
  width: 6rem;
  height: 6rem;
  color: white;
  cursor: pointer;
  transform: scale(0.8);

  h4 {
    color: white;
    font-size: 0.8rem;
  }
  svg {
    font-size: 1.5rem;
  }

  &.active {
    background: linear-gradient(to right, #f27121, #e94057);
  }
`;
