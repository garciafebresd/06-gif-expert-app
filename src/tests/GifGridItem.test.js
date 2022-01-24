import React from 'react'
import { shallow } from 'enzyme';
import { GifGridItem } from '../components/GifGridItem';

describe('Testing the component GifGridItem', () => {

    let wrapper;
    const title = 'saitama gif';
    const url = 'https://media3.giphy.com/media/yo3TC0yeHd53G/giphy.gif?cid=302e87eafbovpk4miuyk21s037mx5yqxvbuch3ejtcvi7gx9&amp;rid=giphy.gif&amp;ct=g';

    beforeEach(()=>{
        wrapper = initGifGridItemComponent();
    });

    function initGifGridItemComponent(value = null){
        return shallow( <GifGridItem title={ title } url={ url } /> );
    }

    test('should show GifGridItem', () => {

        expect(wrapper).toMatchSnapshot();

    });

    test('should show title in p tag', () => {

        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);

    });


    test('the image should has url and alt properties', () => {

        const img = wrapper.find('img').props();
        expect(img.alt).toBe(title);
        expect(img.src).toBe(url);
        // const img = wrapper.find('img');
        // expect(img.prop('alt')).toBe(title);
        // expect(img.prop('src')).toBe(url);
    });
    

    test('should have classname animate__fadeIn', () => {

        const div = wrapper.find('div');
        const className = div.prop('className');
        expect(className.includes('animate__fadeIn')).toBe(true);

    });
    
});
