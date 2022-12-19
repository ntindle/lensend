import { Button, Flex } from "@mantine/core";

export type SendRequestButtonsProps = {
    sendModalOpened: boolean
    requestModalOpened: boolean
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
                console.log("Send Modal Button Clicked")
                props.setSendModalOpened(true)
                console.log(props.sendModalOpened)
            }}>Send</Button>
            {/* <div style={{ flex: 1 }} /> */}
            {/* <Button variant="outline" color="blue" style={{ width: "100%" }} onClick={() => {
                console.log("Request Modal Button Clicked")
                props.setRequestModalOpened(true)
                console.log(props.requestModalOpened)
            }}>Request</Button> */}
        </Flex >
    )
}