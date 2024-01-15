import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import AddTodo from './AddTodo.vue'

describe('Add Item', () => {
    const wrapper = mount(AddTodo);
    it('renders properly', () => {
        expect(wrapper.text()).toContain('Add Item')
        expect(wrapper.html()).toMatchSnapshot();
        expect(wrapper.find('addItem')).toBeTruthy();
        expect(wrapper.find('v-btn')).toBeTruthy();
        expect(wrapper.find('v-btn').attributes('type')).toEqual('submit');
    })
    // it('should save the value on submit', () => {
    //     expect(wrapper.find('v-btn').attributes('type')).toEqual('submit');
    //     wrapper.get('v-text-field').setValue('this is my item');
    //     wrapper.find('v-btn').trigger('click');
    // })
})
