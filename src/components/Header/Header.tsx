import React from "react";
import { useLocation, useNavigate } from "react-router";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Button,
  Toolbar,
  Link,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import { navItems, drawerWidth } from "../../utils";

const Header: React.FC = () => {
  const { pathname } = useLocation();

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();
  const handleDrawerToggle = () => setMobileOpen((prevState) => !prevState);

  const handleNavClick = (href: string) => navigate(href);

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Link
        href="/"
        variant="h6"
        sx={{ my: 2, color: "currentcolor", textDecoration: "none" }}
      >
        RECIPES
      </Link>
      <Divider />
      <List>
        {navItems.map(({ title, href }) => (
          <ListItem key={title} disablePadding>
            <Button
              sx={{ color: pathname === href ? "orange" : "currentColor" }}
              onClick={() => handleNavClick(href)}
            >
              <ListItemText primary={title} />
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar component="header">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Link
            variant="h6"
            href="/"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              color: "currentcolor",
              textDecoration: "none",
            }}
          >
            RECIPES
          </Link>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map(({ title, href }) => (
              <Button
                key={title}
                sx={{ color: pathname === href ? "orange" : "currentColor" }}
                onClick={() => handleNavClick(href)}
              >
                {title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        container={window.document.body}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        component={"header"}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Header;
