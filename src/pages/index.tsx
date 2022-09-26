import { Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import { RepositoryList } from "../components/RepositoryList";

const Home: NextPage = () => {
  return (
    <Box>
      <RepositoryList />
    </Box>
  );
};

export default Home;
