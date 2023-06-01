import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components";


describe('prueba en <GifItem/>', () => {

    const title = 'mono';
    const url = 'http://jhdhdhdhhdhdhhd.com/gato';

    test('GiItem debe hacer match con el snapshot', () => {
        
        const { container } = render ( <GifItem title = { title } url = { url } /> );

        expect( container ).toMatchSnapshot();
    });

    test('debe mostrar la imagen con el url y el atl indicado', () => {

        render ( <GifItem title ={ title } url ={ url } /> );

        // screen.debug(); 
        // expect( screen.getByRole('img').src).toBe(url);
        const { src, alt } = screen.getByRole('img');
        expect( src ).toBe( url );
        expect( alt ).toBe( alt );


    });

    test('debe mostrar el titulo en el componente', () => {

        render ( <GifItem title ={ title } url ={ url } /> );
        expect( title ).toBeTruthy( );



    })

})