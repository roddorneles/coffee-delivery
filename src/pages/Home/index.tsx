import { Header } from "../../components/Header";
import { CoffeeMenu } from "./components/CoffeeMenu";
import { HeroSection } from "./components/HeroSection";
import { HomeContainer } from "./styles";

export function Home() {
    return (
        <HomeContainer>
            <HeroSection />
            <CoffeeMenu />
        </HomeContainer>
    )
}