import { Input, Text } from "@mantine/core"

export type ReasonFieldProps = {
    reason: string
    setReason: (reason: string) => void
    placeholder?: string
}

export default function ReasonField(props: ReasonFieldProps) {
    return (
        <>
            <Input icon={<Text>For:</Text>} placeholder={props.placeholder} onChange={(event) => props.setReason(event.currentTarget.value)} />
        </>
    )
}