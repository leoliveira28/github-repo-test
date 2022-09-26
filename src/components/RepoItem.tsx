import { Link, List, ListIcon, ListItem, Text } from "@chakra-ui/react";
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
    <List spacing={3}>
      <ListItem m='10px' p='2px'>
        <ListIcon as={FaChevronRight} color="green.500" />
        {props.repo.name}
        <Text>{props.repo.description}</Text>
        <Link as="a" href={props.repo.html_url} color='purple.500'>
          Ver repositório
        </Link>
      </ListItem>
    </List>
  );
}
