import { describe, test, expect } from 'vitest'
import HelloWorld from './HelloWorld.vue'
import { mount } from '@vue/test-utils';
describe('HelloWorld.vue', () => {
    test('renders props.msg when passed', () => {
        const msg = 'new message'
        const wrapper = mount(HelloWorld, {
            props: { msg }
        })
        expect(wrapper.text()).toContain(msg)
    })

    test('initial count is 0', () => {
        const wrapper = mount(HelloWorld, {
            props: { msg: 'Hello' }
        })
        expect(wrapper.find('button').text()).toContain('count is 0')
    })

    test('increases count by 2 when button is clicked', async () => {
        const wrapper = mount(HelloWorld, {
            props: { msg: 'Hello' }
        })
        const button = wrapper.find('button')
        await button.trigger('click')
        expect(button.text()).toContain('count is 2')
    })

    test('increases count correctly on multiple clicks', async () => {
        const wrapper = mount(HelloWorld, {
            props: { msg: 'Hello' }
        })
        const button = wrapper.find('button')
        await button.trigger('click')
        await button.trigger('click')
        expect(button.text()).toContain('count is 4')
    })
})
