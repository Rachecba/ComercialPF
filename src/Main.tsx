import React from "react"
import { Route, Switch } from "react-router-dom"
import Products from "./Components/pages/catalog/Products"
import Contact from "./Components/pages/contact-us/Contact"
import Home from "./Components/pages/home/Home"
import WhoWeAre from "./Components/pages/home/whoWeAre/whoWeAre"

function Main() {

    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/us" component={WhoWeAre} />
            <Route path="/product" component={Products} />
            <Route path="/contact" component={Contact} />
        </Switch>
    )
}

export default Main