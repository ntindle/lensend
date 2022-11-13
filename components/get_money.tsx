import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDownLong } from '@fortawesome/free-solid-svg-icons'

import {
    Text,
    Stack,
    Button,

} from '@mantine/core';
export default function GetMoney() {
    return (
        <Button color="blue" size="xl" styles={(theme) => ({
            root: {
                border: 0,
                height: 120,
                width: 160,
                margin: 10,
                paddingLeft: 20,
                paddingRight: 20,

            },

        })}>
            <Stack>
                <FontAwesomeIcon icon={faArrowDownLong} />
                <Text>
                    Get Money
                </Text>
            </Stack>
        </Button>
    );
}