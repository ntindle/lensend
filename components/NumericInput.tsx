import { Box, Button, SimpleGrid, } from "@mantine/core";

export type NumericInputProps = {
    onChange: (value: string) => void;
}

export default function NumericInput(props: NumericInputProps) {
    return (
        <Box>
            <SimpleGrid cols={3}>
                <Button variant="subtle" onClick={() => { props.onChange('1') }}>1</Button>
                <Button variant="subtle" onClick={() => { props.onChange('2') }}>2</Button>
                <Button variant="subtle" onClick={() => { props.onChange('3') }}>3</Button>
                <Button variant="subtle" onClick={() => { props.onChange('4') }}>4</Button>
                <Button variant="subtle" onClick={() => { props.onChange('5') }}>5</Button>
                <Button variant="subtle" onClick={() => { props.onChange('6') }}>6</Button>
                <Button variant="subtle" onClick={() => { props.onChange('7') }}>7</Button>
                <Button variant="subtle" onClick={() => { props.onChange('8') }}>8</Button>
                <Button variant="subtle" onClick={() => { props.onChange('9') }}>9</Button>
                <Button variant="subtle" onClick={() => { props.onChange('.') }}>.</Button>
                <Button variant="subtle" onClick={() => { props.onChange('0') }}>0</Button>
                <Button variant="subtle" onClick={() => { props.onChange('\b') }}>&lt;</Button>
            </SimpleGrid>
        </Box>
    )
}