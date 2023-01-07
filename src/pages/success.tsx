import Link from "next/link";
import { ImageContainer, SuccessContainer } from "../styles/pages/success";

export default function Sucess () {
    return (
        <SuccessContainer>
            <h1>Compra efetuada!</h1>

            <ImageContainer>

            </ImageContainer>

            <p>
                Uhuuu! <strong>[nome do usuario]</strong>, sua camiseta <strong>[nome do produto]</strong>, já está a caminho da sua casa.
            </p>

            <Link href="">
                Voltar ao catálogo
            </Link>
        </SuccessContainer>
    )
}