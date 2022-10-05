import { NavLink } from "react-router-dom";
import { Routes } from "../../Router/Routes";
export const Menu = () => {
  return (
    <nav>
      <ul>
        {Routes.map((route) => (
          <li key={route.text}>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "red" : "blue",
              })}
              to={route.path}
              end
            >
              {route.text}
            </NavLink>
          </li>
        ))}

      </ul>
    </nav>
  );
};
