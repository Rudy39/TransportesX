import './styles/HomePage.css';

const HomePage = (props) => {
    return (
        <main className="holder">
            <div className="homeing">
                <img src="images/home/img01.jpg" alt="avion"></img>                
            </div>
            <div className="columnas">
                <div className="bienvenidos left">
                    <h2>Bienvenidos</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a diam dui. Maecenas ornare mi a blandit dapibus. Etiam cursus commodo scelerisque. Pellentesque tempor tortor pellentesque sapien congue sollicitudin. Morbi faucibus, leo ut rutrum finibus, felis lectus ultrices tellus, rhoncus mollis ipsum nibh ac diam. Duis sit amet nunc nec est maximus maximus. Morbi at elementum augue. Cras in ligula non purus aliquam mattis. Quisque imperdiet erat at elit aliquet interdum. Morbi purus sapien, ornare non metus quis, fermentum facilisis urna. Curabitur dignissim orci vitae ex convallis, sit amet rhoncus lectus bibendum. Phasellus at luctus leo. Integer mollis luctus felis in rutrum. Sed nec ex vel metus molestie sagittis a at est.</p>
                </div>
                <div className="testimonios right">
                    <h2>Testimonios</h2>
                    <div className='testimonio'>
                        <span className="cita">Simplemente excelente</span><br></br>
                        <span className="autor">Juan Perez</span>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default HomePage;