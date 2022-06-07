import { Box, Stack } from "@mui/material";
import NavBar from "./components/NavBar";
import Feed from "./components/Feed";
import RightBar from "./components/RightBar";
import SideBar from "./components/SideBar";

function App() {
  return (
    <Box>
      <NavBar />
      <Stack direction={"row"} spacing={2} justifyContent="space-between">
        <SideBar />
        <Feed />
        <RightBar />
      </Stack>
    </Box>
  );
}

export default App;
