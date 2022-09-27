import {
  Box,
  Link,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { FaChevronRight } from "react-icons/fa";

interface RepoItem {
  repo: {
    name: string;
    description: string;
    html_url: string;
  };
}
export function RepoItem(props: RepoItem) {
  return (
    <List spacing={3} border="1px" borderColor="purple.300" borderRadius={20}>
      <ListItem m="10px" p="2px">
        <ListIcon as={FaChevronRight} color="green.500" />
        {props.repo.name}
        <Text>{props.repo.description}</Text>
        <Link as="a" href={props.repo.html_url} color="pink.500">
          Ver repositório
        </Link>
      </ListItem>
    </List>
  );
}
