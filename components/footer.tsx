import { Flex, Footer } from "@mantine/core";
import { IconActivity, IconCoin, IconHome, IconQrcode, IconSearch } from "@tabler/icons";

export default function FrameFooter() {
    return (
        <Footer height={60} p="md" withBorder={false}>
            {/* <Text inline>
                made with ❤️ by <Text style={{ fontFamily: "Montserrat" }} inline><a href="https://www.lensfrens.xyz/ntindle.lens">ntindle</a></Text>
            </Text> */}
            <Flex
                mih={50}
                gap="xl"
                justify="center"
                align="center"
                direction="row"
                wrap="nowrap"
            >
                <IconCoin>Balance</IconCoin>
                <IconQrcode>QR</IconQrcode>
                <IconHome>Home</IconHome>

                <IconSearch>Find</IconSearch>
                <IconActivity>Activity</IconActivity>
            </Flex>
        </Footer>
    )
}