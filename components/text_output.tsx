import { ActionIcon, Box, CopyButton, TextInput, Tooltip } from "@mantine/core";
import { IconCheck, IconCopy } from "@tabler/icons";

export type TextOutputProps = {
    placeholder: string;
    copyValue: string;
    label: string;
}

export default function TextOutput(props: TextOutputProps){
    return (
        <Box maw={1514}>
        <TextInput
            disabled
            label={props.label}
            placeholder={props.placeholder}
            radius='xl'
            rightSection={
                <CopyButton value={props.copyValue} timeout={2000}>
                    {({ copied, copy }) => (
                        <Tooltip label={copied ? 'Copied' : 'Copy'} withArrow position="right">
                            <ActionIcon color={copied ? 'teal' : 'gray'} onClick={copy}>
                                {copied ? <IconCheck size={16} /> : <IconCopy size={16} />}
                            </ActionIcon>
                        </Tooltip>
                    )}
                </CopyButton>
            }
        />
    </Box>
    )
}