import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpLong } from '@fortawesome/free-solid-svg-icons'

import {
    Text,
    Stack,
    Button,
    Divider,
    Paper,
    Container,
    Card,
    Group,
    Menu,
    ActionIcon,

} from '@mantine/core';
import { FunctionComponent } from 'react';
import NextFunctionComponent from 'next';

type Props ={
    from: string,
    to: string,
}

export default function Post(props: Props){
    return (
        <Container>
            <Divider my="sm" />
            <Card shadow="xs" radius="sm" p="xs">
                <Card.Section withBorder inheritPadding py="xs">
                    <Group position="apart">
                        <Text weight={500}>{props.from}&gt;{props.to}</Text>
                        <Menu withinPortal position="bottom-end" shadow="sm">
                            <Menu.Target>
                                <Text>
                                ***
                                </Text>
                            </Menu.Target>

                            <Menu.Dropdown>
                                <Menu.Item >Download zip</Menu.Item>
                                <Menu.Item>Preview all</Menu.Item>
                                <Menu.Item color="red">
                                    Delete all
                                </Menu.Item>
                            </Menu.Dropdown>
                        </Menu>
                    </Group>
                </Card.Section>
                <Text>Card is the most basic ui component</Text>
                <Text>
                    Use it to create cards, dropdowns, modals and other components that require background
                    with shadow
                </Text>
            </Card>
        </Container>
    );
}