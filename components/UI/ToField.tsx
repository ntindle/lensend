import { Input, Text } from "@mantine/core"
import { Profile } from "@use-lens/react-apollo"
import { useEffect } from "react"

export type ToFieldProps = {
    to: string
    setTo: (to: string) => void
    placeholder?: string
}

export default function ToField(props: ToFieldProps) {
    console.log(props.to)


    useEffect(() => {
        console.log(props.to)
        if (props.to === '') {
            props.setTo('')
        }
    }, [props.to])
    return (
        <>
             <Input icon={<Text>To:</Text>} value={props.to} placeholder={props.placeholder} onChange={(event) => props.setTo(event.currentTarget.value)}/>
        </>
    )
}