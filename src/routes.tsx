import React,{useContext , useEffect} from 'react'
import {BrowserRouter , Switch , Route} from 'react-router-dom'

import Home from './pages/home'
import AddPet from './pages/add-pet'
import Agenda from './pages/agenda'
import FluxoDeCaixa from './pages/fluxo-caixa'

import Logo from './components/logo/logo'
import Menu from './components/menu/menu'

const Routes = () => {
    return (
        <BrowserRouter>
            <Logo />
            <Menu />
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/adicionarPet" component={AddPet}/>
                <Route exact path="/agenda" component={Agenda}/>
                <Route exact path="/fluxoDeCaixa" component={FluxoDeCaixa}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes