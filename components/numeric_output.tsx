import { Flex, Text, Title } from "@mantine/core";

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

            <Title size="h1">
                {props.currency} {props.value}
            </Title>
        </Flex>
    )
}