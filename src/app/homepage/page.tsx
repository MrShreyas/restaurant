"use client"

import Introduction from "../components/introduction";
import DeliveryService from "../components/delivery";
import Menu from "../components/menu";
import MenuSection from "../components/menusection";
import Reviews from "../components/reviews";
import Services from "../components/services";


export default function HomePage() {
    return(
        <div>
            <Introduction></Introduction>
            <Menu></Menu>
            <MenuSection></MenuSection>
            <Services></Services>
            <DeliveryService></DeliveryService>
            <Reviews></Reviews>
        </div>
    )
}