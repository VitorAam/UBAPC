import { Box, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
import imagemLogo from "../../../assets/logoUBAPC.png";
import { LinkText } from "../../Text/LinkText";

export const Navbar = () => {
  const desktop = useMediaQuery("(max-width:1024px)");

  return (
    <Box
      sx={{
        display: "flex",
        backgroundColor: "rgba(242, 243, 213, 0.74)",
        justifyContent:"space-between",
        boxShadow:"1px 2px #22AAA1"
      }}
    >
      <Link to="/">
        <Box
          sx={{
            backgroundImage: `url(${imagemLogo})`,
            backgroundSize: "cover",
            height: "4rem",
            width: "5.2rem",
          }}
        />
      </Link>
      <Box
        pt="1.5rem"
        mr="3rem"
        ml={desktop ? "3rem" : "8rem"}
        sx={{
          display: "flex",
          justifyContent: "space-around",
          columnGap: "1.5rem",
          width: "calc(100% - 5.2rem)",
          flexWrap: "wrap",
          maxWidth:"50rem"
        }}
      >
        <LinkText link="/institucional" texto="Institucional"/>
        <LinkText link="/acoes" texto="Ações"/>
        <LinkText link="/depoimentos" texto="Depoimentos"/>
        <LinkText link="/noticias" texto="Notícias"/>
        <LinkText link="/contato" texto="Contato"/>
      </Box>
    </Box>
  );
};
