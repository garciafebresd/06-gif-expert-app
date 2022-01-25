import React from 'react';
import { shallow } from 'enzyme';
import { getGifs } from '../../helpers/getGifs';

describe('Testing helper getGifs fetch', () => {


    test('should get 10 elements from api', async() => {

        const gifs = await getGifs('Dragon Ball');
        expect(gifs.length).toBe(10);

    });

    test('should get empty array from api', async() => {

        const gifs = await getGifs('');
        expect(gifs.length).toBe(0);

    });
    
});

