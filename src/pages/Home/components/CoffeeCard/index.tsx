import { useContext, useState } from "react";
import { CartButton } from "../../../../components/CartButton";
import { InputNumber } from "../../../../components/InputNumber";
import { CoffeeCardContainer, CoffeeCategoriesContainer, CoffeeCategory, PriceCoffeeCard } from "./styles"
import { CartContext, type Coffee } from "../../../../contexts/CartContext";

interface CoffeeCardProps {
    coffee: Coffee
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {

    const { name, description, price, categories, image, id } = coffee;

    const { coffeesInCart, addCoffeeToCart } = useContext(CartContext);

    const [amount, setAmount] = useState(1);

    function increaseAmount() {
        setAmount((amount) => amount + 1)
    }

    function decreaseAmount() {
        setAmount((amount) => {
            if (amount <= 1) {
                return 1;
            }
            return amount - 1
        })
    }

    function handleAddCoffeToCart() {
        // pass only the id now
        addCoffeeToCart(id, amount);
        setAmount(1);
    }

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
                        <InputNumber number={amount} onMinus={decreaseAmount} onPlus={increaseAmount} />
                        <CartButton $variant="purple" onClick={handleAddCoffeToCart} />
                    </div>
                </div>
            </PriceCoffeeCard>
        </CoffeeCardContainer>
    )

}