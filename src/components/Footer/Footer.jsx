import { Box, Divider, Typography, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Social } from "../Social/Social";

export const Footer = () => {
    const desktop = useMediaQuery('(max-width:1024px)')


    return (
        <Box bgcolor='rgba(242, 243, 213, 0.74)' sx={{
            height: `${desktop?'53rem':'35rem'}`,
            borderTop:'2px solid #22AAA1',
            paddingLeft: `${desktop?'1.5rem':'4.5rem'}`,
            paddingRight: `${desktop?'1.5rem':'4.5rem'}`,
            paddingTop: `${desktop?'1.5rem':'5rem'}`,
            paddingBottom:`${desktop?'1.5rem':'5rem'}`,
            display:'flex',
            flexDirection:'column',
            justifyContent:'space-between'
        }}>
            <Typography>Aqui é o footer. Deve aparecer a localização e seu ponto no google maps, além de informações que também aparecem em "Contato"</Typography>
        </Box>
    )
}