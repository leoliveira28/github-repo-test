import {
  Box,
  Button,
  FormControl,
  Heading,
  Input,
  List,
  SimpleGrid,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { RepoItem } from "./RepoItem";

interface Repo {
  name: string;
  description: string;
  html_url: string;
}

export function RepositoryList() {
  const [userName, setUerName] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("Aguardando");
  const [repos, setRepo] = useState<Repo[]>([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setDescription(userName ? "Não encontrei esse username" : "Aguardando");
        setRepo(data);
      });
  }, [url]);
  return (
    <Box alignItems="center" justifyContent="center" m="40px">
      <Heading mx="auto">Github RepoExplorer</Heading>
      <Box>
        <FormControl m="40px" w="80%" maxWidth="1440px">
          <Input
            mb="20px"
            type="text"
            placeholder="Github username"
            onChange={(e) => setUerName(e.target.value)}
          />
          <Button
            type="submit"
            colorScheme="purple"
            onClick={() => {
              setUrl("https://api.github.com/users/" + userName + "/repos");
            }}
          >
            Buscar
          </Button>
        </FormControl>
      </Box>
      <SimpleGrid columns={[1, null, 2]} mb="10px" spacing={10}>
        {repos.length > 0 ? (
          repos.map((repo) => <RepoItem key={repo.name} repo={repo} />)
        ) : (
          <Box>{description}</Box>
        )}
      </SimpleGrid>
    </Box>
  );
}
