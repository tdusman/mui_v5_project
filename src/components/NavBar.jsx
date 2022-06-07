import { Mail, Notifications, Spa } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const Navbar = () => {
  const [menuState, setMenuState] = useState(false);

  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });

  const Search = styled(Box)(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    width: "40%",
    borderRadius: theme.shape.borderRadius,
  }));

  const Icons = styled(Box)(({ theme }) => ({
    display: "none",
    alignItems: "center",
    gap: "20px",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  }));

  const UserNameBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  }));

  return (
    <AppBar position="sticky">
      <StyledToolbar position="stick">
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          MUI v5
        </Typography>
        <Spa sx={{ display: { xs: "block", sm: "none" } }}></Spa>
        <Search>
          <InputBase placeholder="Search..." />
        </Search>
        <Icons>
          <Badge badgeContent={3} color="secondary">
            <Mail />
          </Badge>
          <Badge badgeContent={2} color="success">
            <Notifications />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://images.unsplash.com/photo-1471357674240-e1a485acb3e1"
            onClick={(e) => setMenuState(true)}
          ></Avatar>
        </Icons>
        <UserNameBox onClick={(e) => setMenuState(true)}>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://images.unsplash.com/photo-1471357674240-e1a485acb3e1"
          ></Avatar>
          <Typography variant="span">Usman</Typography>
        </UserNameBox>
      </StyledToolbar>

      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={menuState}
        onClose={(e) => setMenuState(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
