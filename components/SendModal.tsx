import { Button, LoadingOverlay, Modal, Space, Text } from "@mantine/core"
import { Profile } from "@use-lens/react-apollo"
import { parseEther } from "ethers/lib/utils.js"
import { useState } from "react"
import { usePrepareSendTransaction, useSendTransaction, useWaitForTransaction } from "wagmi"
import FriendsSelector from "./FriendsSelector"
import ReasonField from "./ReasonField"
import SearchResults from "./SearchResults"
import SendPreviewCard from "./SendPreviewCard"
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
    const [profile, setProfile] = useState<Profile | null>(null)


    const { config } = usePrepareSendTransaction({
        request: {
            to: profile?.ownedBy,
            value: +props.amount ? parseEther(props.amount) : undefined,
        },
    })
    const { data, sendTransaction } = useSendTransaction(config)
    const { isLoading, isSuccess } = useWaitForTransaction({
        hash: data?.hash,
    })


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
            {isLoading &&
                <LoadingOverlay visible />
            }

            <SendRequestModalHeader text="Send"
                amount={props.amount}
                buttonStatus={disabled}
                currency={props.currency}
                onClose={() => {
                    setTo('')
                    setReason('')
                    setProfile(null)
                    setDisabled(true)
                    props.onClose()
                }}
                onClick={() => {
                    console.log("Send")
                    sendTransaction?.()
                    setDisabled(true)
                }}
            />
            <ToField to={to} setTo={(value) => {
                setProfile(null)
                setTo(value)
            }} />
            <ReasonField reason={reason} setReason={setReason} />

            {/* Show the suggestions, friends, and search only when there is no profile selected */}
            {to === '' && profile == null && <>
                <Suggestions onClick={(value) => {
                    setTo(value.handle)
                    setProfile(value)
                    setDisabled(false)
                    console.log((value))
                }} />
                <FriendsSelector onClick={(value) => {
                    setTo(value.handle)
                    setProfile(value)
                    setDisabled(false)
                    console.log((value))
                }} />
            </>
            }
            {to !== '' && profile == null &&
                <SearchResults query={to} onClick={(value) => {
                    setTo(value.handle)
                    setProfile(value)
                    setDisabled(false)
                    console.log((value))
                }} />
            }
            {profile != null && <>
                <Space h="xl" />
                <SendPreviewCard amount={props.amount} currency={props.currency} reciever={profile} reason={reason} hash={data?.hash} isTransactionSuccess={isSuccess} />
                <Space h="xl" />
            </>
            }

        </Modal >
    )
}