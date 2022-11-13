import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpLong } from '@fortawesome/free-solid-svg-icons'

import {
    Text,
    Stack,
    Button,
    Divider,
    Paper,
    Container,

} from '@mantine/core';
export default function Post() {
    return (
        <Container>
            <Divider my="sm" />
            <Paper shadow="xs" radius="sm" p="xs">
                <Text>Paper is the most basic ui component</Text>
                <Text>
                    Use it to create cards, dropdowns, modals and other components that require background
                    with shadow
                </Text>
            </Paper>
        </Container>
    );
}