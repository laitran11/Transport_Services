
import { Toolbar, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Toolbar
      sx={{
        color: "#1E1E1E",
        fontSize: "16px",
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
      }}
    >
      <Typography>
        Copyright © 2024 All rights reserved | This template is made by LT
      </Typography>
    </Toolbar>
  );
}
