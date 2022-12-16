import { Input, Text } from "@mantine/core"

export type ToFieldProps = {
    to: string
    setTo: (to: string) => void
    placeholder?: string
}

export default function ToField(props: ToFieldProps) {
    return (
        <>
             <Input icon={<Text>To:</Text>} placeholder={props.placeholder} onChange={(event) => props.setTo(event.currentTarget.value)}/>
        </>
    )
}