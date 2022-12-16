import { Header } from "@mantine/core";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import LensendLogo from "./lensend_logo";

export default function FrameHeader() {
    return (
        <Header height={{ base: 50, md: 70 }} p="md" withBorder={false}>
            <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                <LensendLogo />
                {/* Push the rest to the end */}
                <div style={{ flex: 1 }} />
                <ConnectButton accountStatus={{
                    smallScreen: 'avatar',
                    largeScreen: 'full',
                }} />
            </div>
        </Header>
    )
}