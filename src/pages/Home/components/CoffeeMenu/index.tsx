import { CoffeeCard } from "../CoffeeCard";
import { CoffeeMenuContainer, CoffeesCatalogContainer } from "./styles";

export const coffees = [
    {
        id: "1",
        name: "Expresso Tradicional",
        description: "O tradicional café feito com água quente e grãos moídos",
        categories: ["tradicional"],
        image: "expresso-tradicional.svg",
        price: 9.90,
    },
    {
        id: "2",
        name: "Expresso americano",
        description: "Expresso diluído, menos intenso que o tradicional",
        categories: ["tradicional"],
        image: "expresso-americano.svg",
        price: 9.90,
    },
    {
        id: "3",
        name: "Expresso Cremoso",
        description: "Café expresso tradicional com espuma cremosa",
        categories: ["tradicional"],
        image: "expresso-cremoso.svg",
        price: 9.90,
    },
    {
        id: "4",
        name: "Expresso Gelado",
        description: "Bebida preparada com café expresso e cubos de gelo",
        categories: ["tradicional", "gelado"],
        image: "expresso-gelado.svg",
        price: 9.90,
    },
    {
        id: "5",
        name: "Café com Leite",
        description: "Meio a meio de expresso tradicional com leite vaporizado",
        categories: ["tradicional", "com leite"],
        image: "cafe-com-leite.svg",
        price: 9.90,
    },
    {
        id: "6",
        name: "Latte",
        description: "Meio a meio de expresso tradicional com leite vaporizado",
        categories: ["tradicional", "com leite"],
        image: "latte.svg",
        price: 9.90,
    },
    {
        id: "7",
        name: "Capuccino",
        description: "Bebida com canela feita de doses iguais de café, leite e espuma",
        categories: ["tradicional", "com leite"],
        image: "capuccino.svg",
        price: 9.90,
    },
    {
        id: "8",
        name: "Macchiato",
        description: "Café expresso misturado com um pouco de leite quente e espuma",
        categories: ["tradicional", "com leite"],
        image: "macchiato.svg",
        price: 9.90,
    },
    {
        id: "9",
        name: "Mocaccino",
        description: "Café expresso com calda de chocolate, pouco leite e espuma",
        categories: ["tradicional", "com leite"],
        image: "mocaccino.svg",
        price: 9.90,
    },
    {
        id: "10",
        name: "Chocolate Quente",
        description: "Bebida feita com chocolate dissolvido no leite quente e café",
        categories: ["especial", "com leite"],
        image: "chocolate-quente.svg",
        price: 9.90,
    },
    {
        id: "11",
        name: "Cubano",
        description: "Drink gelado de café expresso com rum, creme de leite e hortelã",
        categories: ["especial", "alcóolico", "gelado"],
        image: "cubano.svg",
        price: 9.90,
    },
    {
        id: "12",
        name: "Havaiano",
        description: "Bebida adocicada preparada com café e leite de coco",
        categories: ["especial"],
        image: "havaiano.svg",
        price: 9.90,
    },
    {
        id: "13",
        name: "Árabe",
        description: "Bebida preparada com grãos de café árabe e especiarias",
        categories: ["especial"],
        image: "arabe.svg",
        price: 9.90,
    },
    {
        id: "14",
        name: "Irlandês",
        description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
        categories: ["especial", "alcóolico"],
        image: "irlandes.svg",
        price: 9.90,
    }

]

export function CoffeeMenu() {

    return (
        <CoffeeMenuContainer>
            <h2>Nossos cafés</h2>

            <CoffeesCatalogContainer>
                {
                    coffees.map((coffee) => {
                        return <CoffeeCard {...coffee} />
                    })
                }
            </CoffeesCatalogContainer>

        </CoffeeMenuContainer>
    )

}