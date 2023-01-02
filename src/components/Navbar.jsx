import { Box, Typography, useMediaQuery } from "@mui/material";
import imagemLogo from "../assets/logoUBAPC.png";
import { LinkText } from "./LinkText";

export const Navbar = () => {
  const desktop = useMediaQuery("(max-width:1024px)");

  return (
    <Box
      sx={{
        display: "flex",
        backgroundColor: "rgba(242, 243, 213, 0.74)",
      }}
    >
      <Box
        sx={{
          backgroundImage: `url(${imagemLogo})`,
          backgroundSize: "cover",
          height: "4rem",
          minWidth: "5.2rem",
        }}
      />
      <Box
        pt="1.5rem"
        mr="3rem"
        ml={desktop ? "3rem" : "8rem"}
        sx={{
          display: "flex",
          justifyContent: "space-around",
          columnGap: "1.5rem",
          width: "calc(100% - 5.2rem)",
          flexWrap: "wrap"
        }}
      >
        <LinkText texto="Institucional"/>
        <LinkText texto="Ações"/>
        <LinkText texto="Depoimentos"/>
        <LinkText texto="Notícias"/>
        <LinkText texto="Contato"/>
      </Box>
    </Box>
  );
};
