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
          display: "inline-block",
          position:"relative",
          "&:before": {
            content: "''",
            position: "absolute",
            width: "100%",
            transform: "scaleX(0)",
            height: "2px",
            bottom: 0,
            backgroundColor:"#22AAA1",
            transformOrigin:"bottom right",
            transition: "transform 0.25s ease-out"
          },
          "&:hover:before": {
            transform: "scaleX(1)",
            transformOrigin: "bottom left"
          },
        }}
      >
        {props.texto}
      </Typography>
    </Link>
  );
};
