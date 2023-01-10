import React from 'react';
import { Button, Card, Description, Header, Image, Price } from './styled';

function CardProduct({ name, image, description, price }) {
    return (
        <Card>
            <Header>{name}</Header>
            <Image src='https://images.kabum.com.br/produtos/fotos/308371/notebook-gamer-acer-nitro-5-intel-core-i7-10750h-geforce-gtx-1650-8gb-ram-512gb-ssd-15-6-ips-fhd-win-11-home-preto-an515-55-79x0_1645045438_m.jpg' />
            <Description>{description}</Description>
            <Price>R$ {price}</Price>
            <Button />
        </Card>
    );
}

export default CardProduct;