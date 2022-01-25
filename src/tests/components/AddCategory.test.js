import React from 'react';
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('Testing AddCategory component', () => {

    const setCategories = jest.fn();
    let wrapper = shallow( <AddCategory setCategories={ setCategories } /> );

    beforeEach(()=>{
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategories={ setCategories } /> );
    });

    test('should render AddCategory in snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should change the input text', () => {
        const input = wrapper.find('input');
        const value = 'Hola mundo';

        input.simulate('change', {target: {value}});

        const p = wrapper.find('p').text().trim();

        expect( p ).toBe(value);
    });
    
    test('should not post information on submit', () => {
        wrapper.find('form').simulate('submit', { preventDefault(){} });

        expect(setCategories).not.toHaveBeenCalled();
    });
    

    test('should call setCategories and clean the input text', () => {

        // simulate input chance
        const input = wrapper.find('input');
        const value = 'Hola mundo';
        input.simulate('change', {target: {value}});

        // simulate form submit
        wrapper.find('form').simulate('submit', { preventDefault(){} });

        // setCategories must be called
        // expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledTimes(1);
        // Validando que lo que se llamo sea una función
        expect(setCategories).toHaveBeenCalledWith( expect.any(Function) );

        // the value must be empty string
        const p = wrapper.find('input').prop('value');
        expect( p ).toBe('');
    });
    
});


