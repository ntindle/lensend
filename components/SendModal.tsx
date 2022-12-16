import { Modal, Text } from "@mantine/core"

export type SendModalProps = {
    currency: string
    // setCurrency: (currency: string) => void
    amount: string
    // setAmount: (amount: string) => void

    onClose: () => void
    opened: boolean
}

export default function SendModal(props: SendModalProps) {

    return (
        <Modal
            onClose={props.onClose}
            opened={props.opened}
            fullScreen
            title="Send"
          >
            <Text>{`${props.amount} ${props.currency}`}</Text>
        </Modal>
    )
}