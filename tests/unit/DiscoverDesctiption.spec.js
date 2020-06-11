import { shallowMount } from '@vue/test-utils'
import DiscoverDescription from '@/components/shared/DiscoverComponent/DiscoverDescription.vue'
import Discover from '@/components/Discover.vue'

describe('UpperAreaDiscover.vue', () => {
    const wrapper = shallowMount(DiscoverDescription, {
      parentComponent: Discover
    })
    test('Discover component is a child component of App', () => {
      expect(wrapper.vm.$parent.$options.name).toBe('Discover')
    })

    test('has 3 li tags', () => {
      expect(wrapper.findAll('li').length).toBe(3)
    })

    test('has 2 active class', () => {
        expect(wrapper.findAll('.active').length).toBe(2)
    })

    test('has 2 p tag', () => {
        expect(wrapper.findAll('p').length).toBe(1)
      })
})
