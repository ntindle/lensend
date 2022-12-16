import { Button, Flex } from "@mantine/core";
import SendModal from "./SendModal";

export type SendRequestButtonsProps = {
    setSendModalOpened: (opened: boolean) => void
    setRequestModalOpened: (opened: boolean) => void
}

export default function SendRequestButtons(props: SendRequestButtonsProps) {
    return (
        <Flex
            mih={50}
            gap="xl"
            justify="center"
            align="center"
            direction="row"
            wrap="nowrap">
            <Button variant="outline" color="blue" style={{ width: "100%" }} onClick={() => {
                props.setSendModalOpened(true)
            }}>Send</Button>
            <div style={{ flex: 1 }} />
            <Button variant="outline" color="blue" style={{ width: "100%" }} onClick={() => {
                props.setRequestModalOpened(true)
            }}>Request</Button>
        </Flex >
    )
}