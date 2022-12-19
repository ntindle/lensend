'use client';
import { Avatar, Button, Header } from "@mantine/core";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAuthenticateMutation, useChallengeLazyQuery, useGlobalProtocolStatsQuery } from "@use-lens/react-apollo";
import { useContext, useEffect, useState } from "react";
import { useAccount, useSignMessage } from "wagmi";
import { AppContext } from "../pages/_app";
import ConnectedLensAvatar from "./ConnectedLensAvatar";
import LensendLogo from "./LensendLogo";


export default function FrameHeader() {

    const [_isConnected, _setIsConnected] = useState(false);


    const { network, session, setSession } = useContext(AppContext);
    const { isConnected, address } = useAccount();
    const { signMessageAsync } = useSignMessage();
    const [lensConnected, setLensConnected] = useState(false);

    const [loadChallenge] = useChallengeLazyQuery();
    const [authenticate] = useAuthenticateMutation();

    // Sync state with the autoconnector 
    useEffect(() => {
        _setIsConnected(isConnected);
    }, [isConnected]);


    // TODO: Add refresh token logic
    const handleSignInWithLens = async () => {
        try {
            const challenge = await loadChallenge({
                variables: { request: { address } }
            });
            const challengeText = challenge?.data?.challenge?.text;

            if (!challengeText) {
                return alert('Error with loading challenge. Please, try again with page reload.');
            }

            const signature = await signMessageAsync({
                message: challengeText
            });

            const auth = await authenticate({
                variables: { request: { address, signature } }
            });

            if (auth?.data) {
                setSession({
                    accessToken: auth.data.authenticate.accessToken,
                    refreshToken: auth.data.authenticate.refreshToken
                });

                setLensConnected(true);
                console.log('Lens connected');
            } else {
                return alert('Authentication was unsuccessful. Please, check if your "set up" is correct and try again');
            }
        } catch (error) {
            alert('Error during Sign-In with Lens. Please, try again with page reload.');
            console.error(error);
        }
    };


    return (
        <Header height={{ base: 50, md: 70 }} p="md" withBorder={false}>
            <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                <LensendLogo />
                {/* Push the rest to the end */}
                <div style={{ flex: 1 }} />
                <>
                    {_isConnected && !lensConnected &&

                        <Button
                            onClick={handleSignInWithLens}>
                            Sign-In with Lens
                        </Button>
                    }
                    {!_isConnected &&

                        <ConnectButton accountStatus={{
                            smallScreen: 'avatar',
                            largeScreen: 'full',
                        }} />
                    }
                    {
                        lensConnected &&
                        <ConnectedLensAvatar />
                    }
                </>
            </div>
        </Header>
    )
}