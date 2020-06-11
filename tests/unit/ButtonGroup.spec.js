import { shallowMount } from '@vue/test-utils'
import ButtonGroup from '@/components/shared/DiscoverComponent/ButtonGroup.vue'
import UpperAreaDiscover from '@/components/shared/DiscoverComponent/UpperAreaDiscover.vue'
describe('ButtonGroup.vue', () => {
    const wrapper = shallowMount(ButtonGroup, {
      parentComponent: UpperAreaDiscover
    })
    test('Discover component is a child component of App', () => {
      expect(wrapper.vm.$parent.$options.name).toBe('UpperAreaDiscover')
    })
    test('ButtonGroup emit on click', async () => {

        wrapper.vm.$emit('changePackageView')
        wrapper.vm.$emit('changePackageView', 2)
      
        await wrapper.vm.$nextTick() // Wait until $emits have been handled
    
        expect(wrapper.emitted().changePackageView).toBeTruthy()
      
        // assert event count
        expect(wrapper.emitted().changePackageView.length).toBe(2)
      
        // assert event payload
        expect(wrapper.emitted().changePackageView[1]).toEqual([2])
      })

})
