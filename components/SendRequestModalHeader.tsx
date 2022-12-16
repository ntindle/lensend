import { Button, Flex, Text } from "@mantine/core"
import { IconX } from "@tabler/icons"

export type SendRequestModalHeaderProps = {
    currency: string
    amount: string
    onClose: () => void
    buttonStatus: boolean
    text: string
}

export default function SendRequestModalHeader(props: SendRequestModalHeaderProps){
    return(
        <Flex mih={50}
        gap="md"
        justify="center"
        align="center"
        direction="row"
        wrap="wrap">
        <IconX onClick={props.onClose} />
        <div style={{ flex: '1' }} />
        <Text>{`${props.amount} ${props.currency}`}</Text>
        <div style={{ flex: '1' }} />

        <Button disabled={props.buttonStatus} radius={'xl'}>{props.text}</Button>
    </Flex>
    )
}