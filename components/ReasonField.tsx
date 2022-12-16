import { Input, Text } from "@mantine/core"

export type ReasonFieldProps = {
    reason: string
    setReason: (reason: string) => void
}

export default function ReasonField(props: ReasonFieldProps) {
    return (
        <>
            <Input icon={<Text>For:</Text>}/>
        </>
    )
}