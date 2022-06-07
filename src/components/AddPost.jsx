import {
  Add,
  Camera,
  EmojiEmotions,
  PersonAdd,
  PostAdd,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  Stack,
  styled,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const AddPost = () => {
  const [modalState, setModalState] = useState(false);

  const StyledModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  });

  const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "10px",
  });

  return (
    <>
      <Tooltip
        onClick={(e) => setModalState(true)}
        title="Add Post"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(45%)", md: 25 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <Add />
        </Fab>
      </Tooltip>

      <StyledModal
        open={modalState}
        onClose={(e) => setModalState(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          bgcolor={"background.default"}
          color={"text.primary"}
          borderRadius={2}
          p={3}
          width={400}
          height={230}
        >
          <Typography variant="h6" textAlign="center">
            Create Post
          </Typography>

          <UserBox>
            <Avatar
              sx={{ width: 30, height: 30 }}
              src="https://images.unsplash.com/photo-1471357674240-e1a485acb3e1"
            />
            <Typography variant="span" fontWeight={500}>
              td Usman
            </Typography>
          </UserBox>

          <TextField
            sx={{ width: "100%", marginTop: "5px" }}
            id="standard-multiline-static"
            multiline
            rows={2}
            placeholder="Content..."
            variant="standard"
          />

          <Stack direction={"row"} gap={1} marginTop={2} marginBottom={3}>
            <EmojiEmotions color="primary" />
            <PersonAdd color="success" />
            <Camera color="error" />
          </Stack>

          <ButtonGroup
            fullWidth
            sx={{ width: "100%" }}
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button>Post</Button>
            <Button sx={{ width: "100px" }}>
              <PostAdd />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
};

export default AddPost;
