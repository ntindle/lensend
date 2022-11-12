import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpLong } from '@fortawesome/free-solid-svg-icons'

import {
    Text,
    Stack,
    Button,

} from '@mantine/core';
export default function SendMoney() {
    return (
        <Button color="green" size="xl"
            styles={(theme) => ({
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
                <FontAwesomeIcon icon={faArrowUpLong} />
                <Text>
                    Send Money
                </Text>
            </Stack>
        </Button>
    );
}