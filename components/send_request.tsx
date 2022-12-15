import { Button, Flex } from "@mantine/core";

export default function SendRequestButtons() {
    return (
        <Flex
            mih={50}
            gap="xl"
            justify="center"
            align="center"
            direction="row"
            wrap="nowrap">
            <Button variant="outline" color="blue" style={{ width: "100%" }}>Send</Button>
            <div style={{ flex: 1 }} />
            <Button variant="outline" color="blue" style={{ width: "100%" }}>Request</Button>
        </Flex>
    )
}