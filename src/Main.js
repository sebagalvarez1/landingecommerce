const Main = (props) =>{

    console.log (props.nombre);
    return (<header>
                <nav>
                    <a href="#">Clickeame</a>
                    <h2>Bienvenido {props.nombre}</h2>
                </nav>
            </header> );
}

export default Main;