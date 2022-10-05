import { NavLink } from "react-router-dom";
import { rutas } from "../../Router/rutas";
export const Menu = () => {
  return (
    <nav>
      <ul>
        {rutas.map((route) => (
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
