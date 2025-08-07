import { CartButton } from "../../../../components/CartButton";
import { InputNumber } from "../../../../components/InputNumber";
import { CoffeeCardContainer, CoffeeCategoriesContainer, CoffeeCategory, PriceCoffeeCard } from "./styles"

interface CoffeeCardProps {
    name: string,
    description: string,
    price: number,
    categories: string[]
    image: string
}

export function CoffeeCard({ name, description, price, categories, image }: CoffeeCardProps) {

    const coffeeImage = new URL(`../../../../assets/${image}`, import.meta.url).href;

    return (
        <CoffeeCardContainer>
            <img src={coffeeImage} alt="" />

            <CoffeeCategoriesContainer>
                {
                    categories.map((category, index) => <CoffeeCategory key={index}>{category}</CoffeeCategory>)
                }
            </CoffeeCategoriesContainer>

            <h3>{name}</h3>
            <span className="coffee-description">{description}</span>

            <PriceCoffeeCard>
                <div className="price-actions">
                    <div>
                        <span className="coffee-coin">R$ </span>
                        <span className="coffee-price">{price}</span>
                    </div>
                    <div className="amount-and-cart">
                        <InputNumber />
                        <CartButton $variant="purple" />
                    </div>
                </div>
            </PriceCoffeeCard>


        </CoffeeCardContainer>
    )

}