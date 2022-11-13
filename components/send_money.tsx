import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpLong } from '@fortawesome/free-solid-svg-icons'
import { client, SearchProfiles } from '../pages/api/apollo'
import { useState, useRef } from 'react';
import { ethers } from 'ethers'
import {
    Text,
    Stack,
    Button,
    Modal,
    Autocomplete,
    Loader,
    Group,
    ActionIcon,
    NumberInputHandlers,
    NumberInput,

} from '@mantine/core';


type Props = {
    from?: string
}



export function SendMoneyButton(props: Props) {
    const [opened, setOpened] = useState(false);
    const timeoutRef = useRef<number>(-1);
    const [value, setValue] = useState('');
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<string[]>([]);
    const [recipient, setRecipient] = useState<string>('');
    const [amount, setAmount] = useState<number>(0);
    const [token, setToken] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    const handlers = useRef<NumberInputHandlers>();

    async function get_LensAccountsMatchingPrefix(handle: string): Promise<string[]> {
        try {
            const handles = await client.query({
                query: SearchProfiles,
                variables: {
                    request: {
                        "type": "PROFILE",
                        "query": handle,
                        "customFilters": [
                            "GARDENERS"
                        ],
                        "limit": 8
                    }
                }
            })
            console.log(JSON.parse(JSON.stringify(handles)))
            return handles.data.search.items.map((item: any) => item.handle)
        }
        catch (err) {
            console.log('Error getting handles: ', err)
            return []
        }
    }


    const handleChange = async (val: string) => {
        window.clearTimeout(timeoutRef.current);
        setValue(val);
        setData([]);

        console.log(val)
        const accounts = await get_LensAccountsMatchingPrefix(val)

        if (val.trim().length === 0) {
            setLoading(false);
        } else {
            setLoading(true);
            timeoutRef.current = window.setTimeout(() => {
                setLoading(false);
                setData(accounts);
            }, 1000);
        }
    };

    return (
        <>
            <Modal

                overlayOpacity={0.55}
                overlayBlur={3}
                opened={opened}
                onClose={() => setOpened(false)}
                title="Send Money"
            >
                <Autocomplete
                    style={{ marginLeft: 'auto' }}
                    value={value}
                    data={data}
                    onChange={handleChange}
                    nothingFound="No options"
                    spellCheck={false}
                    rightSection={loading ? <Loader size={16} /> : null}
                    // label="Search for a profile"
                    placeholder="Search for a profile"
                    onItemSubmit={(val) => {
                        if (val) {
                            setRecipient(val.value)
                            console.log(val)
                        }
                    }}
                />
                {/* Add a profile lookup here */}
                {recipient && <Group spacing={5} style={{
                    marginTop: 10,
                    marginBottom: 10,

                }}>
                    <ActionIcon variant="default" onClick={() => handlers.current.decrement()}>
                        –
                    </ActionIcon>

                    <NumberInput
                        hideControls
                        value={amount}
                        onChange={(val) => setAmount(val)}
                        handlersRef={handlers}
                        max={10}
                        min={0}
                        step={1}
                        styles={{ input: { width: 54, textAlign: 'center' } }}
                    />

                    <ActionIcon variant="default" onClick={() => handlers.current.increment()}>
                        +
                    </ActionIcon>
                </Group>}
                {recipient && amount && <Button style={{ marginTop: 10 }} onClick={() => {
                    console.log('send money to: ', recipient)
                }}>Send Money</Button>}
            </Modal>
            <Button color="green" size="xl"
                onClick={() => setOpened(true)}
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
        </>
    );
}

export function SendMoneyModal() {
    return (
        <div>
            <Text>Send Money</Text>
        </div>
    );
}