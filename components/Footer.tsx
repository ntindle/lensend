import { Flex, Footer, Text } from "@mantine/core";
import { IconActivity, IconCoin, IconHome, IconQrcode, IconSearch } from "@tabler/icons";

export type FrameFooterProps = {
    onHomeClick: () => void;
    onSearchClick: () => void;
    onActivityClick: () => void;
    onBalanceClick: () => void;
    onQrClick: () => void;
}

export default function FrameFooter(props: FrameFooterProps) {
    return (
        <Footer height={60} p="md" withBorder={false}>
            <Text inline>
                made with ❤️ by <Text inline><a href="https://www.lensfrens.xyz/ntindle.lens">ntindle</a></Text>
            </Text>
            <Flex
                mih={50}
                gap="xl"
                justify="center"
                align="center"
                direction="row"
                wrap="nowrap"
            >
                {/* <IconCoin onClick={props.onBalanceClick}>Balance</IconCoin>
                <IconQrcode onClick={props.onQrClick}>QR</IconQrcode> */}
                {/* <IconHome onClick={props.onHomeClick}>Home</IconHome> */}
                {/* <IconSearch onClick={props.onSearchClick}>Find</IconSearch>
                <IconActivity onClick={props.onActivityClick}>Activity</IconActivity> */}
            </Flex>
        </Footer>
    )
}