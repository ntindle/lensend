import { Select } from "@mantine/core";

export type CurrencySelectorProps = {
    defaultValue: string;
    validValues: string[];
    onChange: (value: string) => void;
    value: string;
}

export default function CurrencySelector(props: CurrencySelectorProps) {
    return (

      <Select
        placeholder={props.defaultValue}
        onSearchChange={props.onChange}
        searchValue={props.value}
        nothingFound="No options"
        radius={'xl'}
        data={props.validValues}
      />
    );
}