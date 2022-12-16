import { Button, Flex, Modal, Text } from "@mantine/core"
import { IconX } from "@tabler/icons"

export type RequestModalProps = {
    currency: string
    // setCurrency: (currency: string) => void
    amount: string
    // setAmount: (amount: string) => void

    onClose: () => void
    opened: boolean
}

export default function RequestModal(props: RequestModalProps) {

    return (
        <Modal
            onClose={props.onClose}
            opened={props.opened}
            fullScreen
            transitionDuration={200}
            transitionTimingFunction="ease"
            transition="slide-up"
            centered
            withCloseButton={false}
        >
            <>
                <Flex mih={50}
                    gap="md"
                    justify="center"
                    align="center"
                    direction="row"
                    wrap="wrap">
                    <IconX onClick={props.onClose} />
                    <div style={{ flex: '1' }} />
                    <Text >{`${props.amount} ${props.currency}`}</Text>
                    <div style={{ flex: '1' }} />

                    <Button disabled radius={'xl'}>Request </Button>
                </Flex>
            </>
            <Text>{`${props.amount} ${props.currency}`}</Text>
        </Modal >
    )
}