import { Modal, Text } from "@mantine/core"
import { useState } from "react"
import ReasonField from "./ReasonField"
import SendRequestModalHeader from "./SendRequestModalHeader"
import ToField from "./ToField"

export type SendModalProps = {
    currency: string
    // setCurrency: (currency: string) => void
    amount: string
    // setAmount: (amount: string) => void

    onClose: () => void
    opened: boolean
}

export default function SendModal(props: SendModalProps) {
    const [enabled, setEnabled] = useState(true)
    const [to, setTo] = useState("")
    const [reason, setReason] = useState("")
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
            <SendRequestModalHeader text="Send"
                amount={props.amount}
                buttonStatus={enabled}
                currency={props.currency}
                onClose={props.onClose}
            />
            <ToField to={to} setTo={setTo}/>
            <ReasonField reason={reason} setReason={setReason}/>
        </Modal >
    )
}