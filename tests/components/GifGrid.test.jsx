import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";

describe('Pruebas en <GifGrid/>', () => {

    const category = 'Dragon Ball';

    test('debe mostar el loading inicialmente', () => {

        render ( <GifGrid category={ category }/> );
        // screen.debug();

        expect(screen.findByText('Cargando...'));
        expect(screen.findByText( category ));


    })
})