import { Flex, Text } from "@mantine/core";

export type NumericOutputProps = {
    value: string;
    currency: string;
}
export default function NumericOutput(props: NumericOutputProps) {
    return (
        <Flex
            mih={50}
            gap="xl"
            justify="center"
            align="center"
            direction="row"
            wrap="nowrap">

            <Text size={'40px'}>
                {props.currency} {props.value}
            </Text>
        </Flex>
    )
}