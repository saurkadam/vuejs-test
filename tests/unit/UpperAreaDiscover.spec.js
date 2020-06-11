import { shallowMount } from '@vue/test-utils'
import UpperAreaDiscover from '@/components/shared/DiscoverComponent/UpperAreaDiscover.vue'
import Discover from '@/components/Discover.vue'

describe('UpperAreaDiscover.vue', () => {
    const wrapper = shallowMount(UpperAreaDiscover, {
      parentComponent: Discover
    })
    test('Discover component is a child component of App', () => {
      expect(wrapper.vm.$parent.$options.name).toBe('Discover')
    })
    test('UpperAreaDiscover emit sends data to discover', async () => {

        wrapper.vm.$emit('changePackageFromButtonGroup')
        wrapper.vm.$emit('changePackageFromButtonGroup', 2)
      
        await wrapper.vm.$nextTick() // Wait until $emits have been handled
    
        expect(wrapper.emitted().changePackageFromButtonGroup).toBeTruthy()
      
        // assert event count
        expect(wrapper.emitted().changePackageFromButtonGroup.length).toBe(2)
      
        // assert event payload
        expect(wrapper.emitted().changePackageFromButtonGroup[1]).toEqual([2])
      })

})
