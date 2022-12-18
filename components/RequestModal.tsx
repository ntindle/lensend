import { Modal, Text } from "@mantine/core"
import { useState } from "react"
import SendRequestModalHeader from "./SendRequestModalHeader"

export type RequestModalProps = {
    currency: string
    // setCurrency: (currency: string) => void
    amount: string
    // setAmount: (amount: string) => void

    onClose: () => void
    opened: boolean
}

export default function RequestModal(props: RequestModalProps) {
    const [enabled, setEnabled] = useState(true)
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
            <SendRequestModalHeader text="Request"
                amount={props.amount}
                buttonStatus={enabled}
                currency={props.currency}
                onClose={props.onClose}
                onClick={() => {
                    console.log("Request")
                }}
            />
            <Text>{`${props.amount} ${props.currency}`}</Text>
        </Modal >
    )
}