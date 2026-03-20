
import { Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { Checkout } from "./pages/Checkout"
import { DefaultLayout } from "./layouts/DefaultLayout"
import { ConfirmedOrder } from "./pages/ConfirmedOrder"

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route index path="/" element={<Home />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/confirmed-order" element={<ConfirmedOrder />} />
            </Route>
        </Routes>
    )
}
