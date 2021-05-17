import md5 from 'md5';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import './assets/styles/globalStyle.css';
import Header from './Components/Header';
import Login from './Components/Login';
import Slide from './Components/Slide';



function App() {

    const [hqs, setHqs] = useState();
    const [characters, setCharacters] = useState();
    const [movies, setMovies] = useState();

    const public_key = 'e865e7f2f1ccdad8015919d91419ef5a';
    const private_key = '31b1d4b98b12cd521e887ae6a4babadc10188585';

    const time = Number(new Date());

    const hash = md5(time + private_key + public_key);


    const getCharaters = async () => {
        const response = await fetch(`https://gateway.marvel.com/v1/public/characters?ts=${time}&apikey=${public_key}&hash=${hash}&limit=9`);
        const body = await response.json();
        setCharacters(body.data.results)
        console.log('chars', body)
    }

    const getHqs = async () => {
        const response = await fetch(`https://gateway.marvel.com/v1/public/comics?ts=${time}&apikey=${public_key}&hash=${hash}&limit=9`);
        const body = await response.json();
        setHqs(body.data.results)
        console.log('hqs', body)
    }
    const getMovies = async () => {
        const response = await fetch(`https://gateway.marvel.com/v1/public/series?ts=${time}&apikey=${public_key}&hash=${hash}&startYear=2018`);
        const body = await response.json();
        setMovies(body.data.results)
        console.log('movies', body)
    }



    useEffect(() => {
        getCharaters();
        getHqs();
        getMovies();
    }, []);



    return (

        <BrowserRouter>
            <Route render={(props) => (props.location.pathname !== "/" && props.location.pathname !== "/login" ) && <Header />} />
            <Route path="/login" exact component={() => <Login title="Bem-vindo(a) de volta!" subtitle="Acesse sua conta:" button="Entrar" />} />
            <Route path="/personagens" component={() => <Slide slides={characters} />} />
            <Route path="/hq" component={() => <Slide slides={hqs} />} />
            <Route path="/filmes" component={() => <Slide slides={movies} />} />
        </BrowserRouter>

    );
}

export default App;
