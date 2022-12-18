import { Button, Modal, Text } from "@mantine/core"
import { Profile } from "@use-lens/react-apollo"
import { useState } from "react"
import FriendsSelector from "./FriendsSelector"
import ReasonField from "./ReasonField"
import SearchResults from "./SearchResults"
import SendRequestModalHeader from "./SendRequestModalHeader"
import Suggestions from "./Suggestions"
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
    const [disabled, setDisabled] = useState(true)
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
                buttonStatus={disabled}
                currency={props.currency}
                onClose={props.onClose}
                onClick={() => {
                    console.log("Send")
                }}
            />
            <ToField to={to} setTo={setTo}/>
            <ReasonField reason={reason} setReason={setReason} />
            {to === '' && <>
                <Suggestions onClick={(value) => {
                    setTo(value.handle)
                    setDisabled(false)
                    console.log((value))
                }} />
                {/* <FriendsSelector onClick={(value) => {
                    console.log((value))
                }} /> */}
            </>
            }
            {to !== '' &&
                <SearchResults query={to} onClick={(value) => {
                    setTo(value.handle)
                    setDisabled(false)
                    console.log((value))
                }} />
            }

        </Modal >
    )
}