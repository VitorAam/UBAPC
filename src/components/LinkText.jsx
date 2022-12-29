import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const LinkText = (props) => {
  return (
    <Link
      to={props.link}
      style={{
        textDecoration: "none",
        color: "inherit",
      }}
    >
      <Typography
        sx={{
          transition: "10s",
          "&:hover": {
            textDecoration: "underline",
            textDecorationColor: "#777b7e",
            textDecorationThickness: "2px",
          },
        }}
      >
        {props.texto}
      </Typography>
    </Link>
  );
};
