
import { getGifs } from "../../src/helpers/getGifs";

describe('pruebas en <getGifs/>', () => {

    test('getGifs debe devolver un arreglo', async () => {

        const gifs = await getGifs('dragon ball');
        console.log(gifs);

        expect( gifs.length ).toBeGreaterThan(0);

        expect ( gifs[0] ).toEqual({ 
            id: expect.any( String ),
            title: expect.any( String ),
            url: expect.any( String ),
    
        });

        
    })
})