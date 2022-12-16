import { Input, Text } from "@mantine/core"

export type ToFieldProps = {
    to: string
    setTo: (to: string) => void
}

export default function ToField(props: ToFieldProps) {
    return (
        <>
             <Input icon={<Text>To:</Text>} />
        </>
    )
}