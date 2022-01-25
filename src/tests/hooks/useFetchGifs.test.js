import React from 'react';
import '@testing-library/jest-dom';
import { renderHook } from '@testing-library/react-hooks';
import { shallow } from 'enzyme';
import { useFetchGifs } from '../../hooks/useFetchGifs';

describe('Testing my custom hook', () => {

    test('should return the initial state', async() => {

        const category = 'Samurai X';
        const {result, waitForNextUpdate} = renderHook(() => useFetchGifs(category));
        const {data, loading} = result.current;

        await waitForNextUpdate();
        expect(data).toEqual([]);
        expect(loading).toBe(true);

    });

    test('should return an array of images and the loading property in false', async() => {

        const category = 'Dragon Ball';
        const {result, waitForNextUpdate} = renderHook(() => useFetchGifs(category));

        await waitForNextUpdate();
        const {data, loading} = result.current;

        expect(data.length).toEqual(10);
        expect(loading).toBe(false);
    });
    
    
});

