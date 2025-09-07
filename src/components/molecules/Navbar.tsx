"use client";

import { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Link from "next/link";
import { LinkedIn, ExpandMore } from "@mui/icons-material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export default function Navbar() {
  // Estados para los menús
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [subAnchorEl, setSubAnchorEl] = useState<null | HTMLElement>(null);

  const handleOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
    setSubAnchorEl(null);
  };

  const handleOpenSubMenu = (event: React.MouseEvent<HTMLLIElement>) => {
    setSubAnchorEl(event.currentTarget);
  };

  const handleCloseSubMenu = () => {
    setSubAnchorEl(null);
  };

  // Cerrar menús al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      setAnchorEl(null);
      setSubAnchorEl(null);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#fbbf24", boxShadow: "none" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Logo */}
        <Typography variant="h6" sx={{ fontWeight: "bold", color: "black" }}>
          <Link href="/" passHref>
            <span style={{ fontWeight: "900" }}>Ciro</span>

          </Link>
        </Typography>

        {/* Links */}
        <Box sx={{ display: "flex", gap: 4, alignItems: "center" }}>
          {/* Servicios con menú */}
          <div>
            <Button
              onClick={handleOpenMenu}
              endIcon={
                <ExpandMore
                  sx={{
                    transition: "transform 0.3s",
                    transform: anchorEl ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                />
              }
              sx={{
                color: "black",
                textTransform: "none",
                fontSize: "1rem",
                fontWeight: 500,
              }}
            >
              Servicios
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleCloseMenu}
              PaperProps={{
                elevation: 4,
                sx: {
                  borderRadius: 2,
                  mt: 1,
                  minWidth: 220,
                  "& .MuiMenuItem-root": {
                    fontSize: "0.95rem",
                  },
                },
              }}
            >
              {/* Electricidad con submenú */}
              <MenuItem onClick={handleOpenSubMenu} sx={{ justifyContent: "space-between" }}>
                Electricidad
                <ExpandMore
                  sx={{
                    transition: "transform 0.3s",
                    transform: subAnchorEl ? "rotate(180deg)" : "rotate(-90deg)",
                  }}
                />
              </MenuItem>
              <Menu
                anchorEl={subAnchorEl}
                open={Boolean(subAnchorEl)}
                onClose={handleCloseSubMenu}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                transformOrigin={{ vertical: "top", horizontal: "left" }}
                PaperProps={{
                  elevation: 4,
                  sx: { borderRadius: 2, mt: 0.5, minWidth: 200 },
                }}
              >
                <Link href="/servicios/electricidad/domestica" passHref>
                  <MenuItem onClick={handleCloseMenu}>Doméstica</MenuItem>
                </Link>
                <Link href="/servicios/electricidad/industrial" passHref>
                  <MenuItem onClick={handleCloseMenu}>Industrial</MenuItem>
                </Link>
              </Menu>

              {/* Otras páginas */}
              <Link href="/servicios/instalacion-camaras" passHref>
                <MenuItem onClick={handleCloseMenu}>Instalación de cámaras</MenuItem>
              </Link>
              <Link href="/servicios/tendido-cables" passHref>
                <MenuItem onClick={handleCloseMenu}>Tendido de cables</MenuItem>
              </Link>
              <Link href="/servicios/analisis-temperatura" passHref>
                <MenuItem onClick={handleCloseMenu}>Análisis de temperatura</MenuItem>
              </Link>
            </Menu>
          </div>

          {/* Otros enlaces */}
          <Link href="/formacion" passHref>
            <Typography variant="body1" sx={{ color: "black", textDecoration: "none" }}>
              Formación
            </Typography>
          </Link>
          <Link href="/blog" passHref>
            <Typography variant="body1" sx={{ color: "black", textDecoration: "none" }}>
              Blog
            </Typography>
          </Link>
          <Link href="/acerca" passHref>
            <Typography variant="body1" sx={{ color: "black", textDecoration: "none" }}>
              Acerca de
            </Typography>
          </Link>
          <Link href="/contacto" passHref>
            <Typography variant="body1" sx={{ color: "black", textDecoration: "none" }}>
              Contacto
            </Typography>
          </Link>
        </Box>

        {/* LinkedIn */}
        <IconButton
          color="inherit"
          component="a"
          href="https://www.linkedin.com"
          target="_blank"
          sx={{ color: "black" }}
        >
          <LinkedIn />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
