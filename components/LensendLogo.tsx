import logo from '../static/logo.png';
import Image from "next/image";
import { Text } from '@mantine/core';

export default function LensendLogo() {

    return (
        <Text style={{ fontFamily: "Montserrat" }} inline><a href="https://lensend.xyz">Lensend.xyz</a></Text>
        // <Image src={logo} alt="Lensend Logo" width={4234 / 20} height={916 / 20} />
    )
}