import { useState, useEffect, useRef } from 'react';
import { ethers } from 'ethers'

import { client, challenge, authenticate, getFollowers, getLensAccountsMatchingPrefix, SearchProfiles } from './api/apollo'


import {
    AppShell,
    Header,
    Footer,
    Text,
    useMantineTheme,
    Container,
    Flex,
    Button,
    Stack,
} from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQrcode } from '@fortawesome/free-solid-svg-icons'
import { SendMoneyButton } from '../components/send_money';
import GetMoney from '../components/get_money';
import Post from '../components/post';

export default function AppShellDemo() {
    const theme = useMantineTheme();
    const [opened, setOpened] = useState(false);

    const [address, setAddress] = useState()
    const [token, setToken] = useState()



    useEffect(() => {
        /* when the app loads, check to see if the user has already connected their wallet */
        checkConnection()
    }, [])
    async function checkConnection() {
        // @ts-ignore
        if (window.ethereum) {
            // @ts-ignore
            const provider = new ethers.providers.Web3Provider(window.ethereum)
            const accounts = await provider.listAccounts()
            if (accounts.length) {
                // @ts-ignore
                setAddress(accounts[0])
            }
        }
        else {
            console.log('No ethereum object found')
        }
    }
    async function connect() {
        /* this allows the user to connect their wallet */
        // @ts-ignore
        const account = await window.ethereum.send('eth_requestAccounts')
        if (account.result.length) {
            setAddress(account.result[0])
        }
    }
    async function login() {
        try {
            /* first request the challenge from the API server */
            const challengeInfo = await client.query({
                query: challenge,
                variables: { address }
            })
            // @ts-ignore
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner()
            /* ask the user to sign a message with the challenge info returned from the server */
            const signature = await signer.signMessage(challengeInfo.data.challenge.text)
            /* authenticate the user */
            const authData = await client.mutate({
                mutation: authenticate,
                variables: {
                    address, signature
                }
            })
            /* if user authentication is successful, you will receive an accessToken and refreshToken */
            const { data: { authenticate: { accessToken } } } = authData
            console.log({ accessToken })
            setToken(accessToken)
        } catch (err) {
            console.log('Error signing in: ', err)
        }
    }

    async function get_followers() {
        try {
            console.log(address)
            console.log(token)
            const followers = await client.query({
                query: getFollowers,
                variables: { address }
            })
            console.log(JSON.parse(JSON.stringify(followers)))

            return ((await followers).data.following.items)
        } catch (err) {
            console.log('Error getting followers: ', err)
        }

    }



    return (
        <AppShell
            styles={{
                main: {
                    background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
                },
            }}
            navbarOffsetBreakpoint="sm"
            asideOffsetBreakpoint="sm"
            // navbar={(() => {
            //     if (token) {
            //         return (
            //             <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }}>
            //                 <Text>Application navbar</Text>
            //             </Navbar>
            //         )
            //     }
            //     else {
            //         return (<div></div>)
            //     }
            // })()
            // }
            // aside={
            //   <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
            //     <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
            //       <Text>Application sidebar</Text>
            //     </Aside>
            //   </MediaQuery>
            // }
            footer={
                <Footer height={60} p="md">
                    made with ❤️ ntindle.lens
                </Footer>
            }
            header={
                <Header height={{ base: 50, md: 70 }} p="md">
                    {/* <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}> */}
                    {
                        !address || !token &&
                        <Text>
                            Lensend
                        </Text>
                    }                    {
                        !address &&
                        <Text>
                            Lensend
                        </Text>
                    }
                    {
                        address && token &&
                        <Flex mih={50}
                            gap="xs"
                            justify="center"
                            align="center"
                            direction="row"
                            wrap="wrap"
                            style={{
                                marginRight: 0
                            }}>
                            {/* <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                                <Burger
                                    opened={opened}
                                    onClick={() => setOpened((o) => !o)}
                                    size="sm"
                                    color={theme.colors.gray[6]}
                                    mr="xl"
                                />
                            </MediaQuery> */}
                            <Text>
                                Lensend
                            </Text>

                            <Container style={{ marginLeft: 'auto', marginRight: '0' }}>
                                <FontAwesomeIcon icon={faQrcode} />

                            </Container>
                        </Flex>
                    }
                    {/* </div> */}
                </Header>
            }
        >

            <div>
                { /* if the user has not yet connected their wallet, show a connect button */}
                {
                    !address && <Button onClick={connect}>Connect</Button>
                }
                { /* if the user has connected their wallet but has not yet authenticated, show them a login button */}
                {
                    address && !token && (
                        <div onClick={login}>
                            <Button>Login</Button>
                        </div>
                    )
                }
                { /* once the user has authenticated, show them the app*/}
                {

                    address && token &&

                    <Container>
                        <Flex
                            mih={50}
                            // bg="rgba(0, 0, 0, .3)"
                            gap="md"
                            justify="center"
                            align="center"
                            direction="row"
                            style={{ overflowX: 'auto' }}
                        >
                            <SendMoneyButton />
                            <GetMoney />
                        </Flex>

                        <Stack>
                            <Post from='nader.lens' to='ntindle.lens' ></Post>
                        </Stack>
                    </Container>

                }
            </div>


        </AppShell>
    );
}