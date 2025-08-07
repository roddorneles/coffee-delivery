import { BenefitsContainer, BenefitsRow, HeroSectionContainer, HeroSectionContent, IconWrapper } from "./styles";
import coffeeDelivery from "../../../../assets/coffee-delivery.svg"
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";


export function HeroSection() {
    return (

        <HeroSectionContainer>
            <HeroSectionContent>
                <div className="left-side">
                    <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                    <h2>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</h2>

                    <BenefitsContainer>
                        <BenefitsRow>
                            <IconWrapper $iconBackground="yellowDark">
                                <ShoppingCart size={16} weight="fill" />
                            </IconWrapper>
                            <span>Compra simples e segura</span>
                        </BenefitsRow>
                        <BenefitsRow>
                            <IconWrapper $iconBackground="gray">
                                <Package size={16} weight="fill" />
                            </IconWrapper>
                            <span>Embalagem mantém o café intacto</span>
                        </BenefitsRow>
                        <BenefitsRow>
                            <IconWrapper $iconBackground="yellowLight">
                                <Timer size={16} weight="fill" />
                            </IconWrapper>
                            <span>Entrega rápida e rastreada</span>
                        </BenefitsRow>
                        <BenefitsRow>
                            <IconWrapper $iconBackground="purple">
                                <Coffee size={16} weight="fill" />
                            </IconWrapper>
                            <span>O café chega fresquinho até você</span>
                        </BenefitsRow>
                    </BenefitsContainer>
                </div>
                <img src={coffeeDelivery} alt="" />
            </HeroSectionContent>
        </HeroSectionContainer>

    )
}