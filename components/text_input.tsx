import { ActionIcon, Box, CopyButton, TextInput, Tooltip } from "@mantine/core";
import { IconCheck, IconCopy } from "@tabler/icons";

export type TextInputProps = {
    placeholder: string;
    label: string;
}

export default function DemoTextInput(props: TextInputProps) {
    return (
        <Box maw={1514}>
            <TextInput
                label={props.label}
                placeholder={props.placeholder}
                radius='xl'

            />
        </Box>
    )
}