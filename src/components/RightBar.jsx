import {
  Box,
  Typography,
  Avatar,
  AvatarGroup,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider,
} from "@mui/material";
import React from "react";

const RightBar = () => {
  return (
    <Box
      flex={2}
      p={2}
      sx={{
        display: { xs: "none", sm: "block" },
      }}
    >
      <Box position={"fixed"} width={380}>
        <Typography variant="h6" color="initial" fontWeight={100}>
          Online Friends
        </Typography>

        <AvatarGroup max={7}>
          <Avatar
            alt="Remy Sharp"
            src="https://www.pexels.com/photo/close-up-shot-of-a-person-holding-a-white-flower-7280128/"
          />
          <Avatar
            alt="Travis Howard"
            src="https://www.pexels.com/photo/close-up-shot-of-a-person-holding-a-white-flower-7280128/"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://www.pexels.com/photo/close-up-shot-of-a-person-holding-a-white-flower-7280128/"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://www.pexels.com/photo/close-up-shot-of-a-person-holding-a-white-flower-7280128/"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://www.pexels.com/photo/close-up-shot-of-a-person-holding-a-white-flower-7280128/"
          />
          <Avatar
            alt="T Henderson"
            src="https://www.pexels.com/photo/close-up-shot-of-a-person-holding-a-white-flower-7280128/"
          />
          <Avatar
            alt="Trevor Rson"
            src="https://www.pexels.com/photo/close-up-shot-of-a-person-holding-a-white-flower-7280128/"
          />
          <Avatar
            alt="Treor Rson"
            src="https://www.pexels.com/photo/close-up-shot-of-a-person-holding-a-white-flower-7280128/"
          />
          <Avatar
            alt="Trederson"
            src="https://www.pexels.com/photo/close-up-shot-of-a-person-holding-a-white-flower-7280128/"
          />
          <Avatar
            alt="Trevor"
            src="https://www.pexels.com/photo/close-up-shot-of-a-person-holding-a-white-flower-7280128/"
          />
          <Avatar
            alt="Henderson"
            src="https://www.pexels.com/photo/close-up-shot-of-a-person-holding-a-white-flower-7280128/"
          />
        </AvatarGroup>

        <Typography
          variant="h6"
          color="initial"
          fontWeight={100}
          margin={"10px 0"}
        >
          Latest Photos
        </Typography>

        <ImageList cols={4} rowHeight={110} gap={4}>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
              alt="Breakfast"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d"
              alt="Burger"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1522770179533-24471fcdba45"
              alt="Camera"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1471357674240-e1a485acb3e1"
              alt="Coffee"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1533827432537-70133748f5c8"
              alt="Hats"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1558642452-9d2a7deb7f62"
              alt="Honey"
            />
          </ImageListItem>
        </ImageList>

        <Typography variant="h6" color="initial" fontWeight={100} mt={2}>
          Latest Conversations
        </Typography>

        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default RightBar;
