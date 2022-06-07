import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";

import React from "react";

const Posts = () => {
  return (
    <>
      <Card sx={{ marginBottom: 5 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "gray" }} aria-label="recipe">
              td
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title="td Usman"
          subheader="June 07, 2022"
        />

        <CardMedia
          component="img"
          height="194"
          image="https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c"
          alt="Paella dish"
        />

        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: "red" }} />}
            />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
        </CardActions>
      </Card>
    </>
  );
};

export default Posts;
