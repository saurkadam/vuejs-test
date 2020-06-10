import { shallowMount } from '@vue/test-utils'
import Discover from '@/components/Discover.vue'
import App from '@/App.vue'
describe('Discover.vue', () => {
    const mobile = true
    const wrapper = shallowMount(Discover, {
      propsData: { mobile },
      parentComponent: App
    })
    test('Discover component is a child component of App', () => {
      expect(wrapper.vm.$parent.$options.name).toBe('App')
    })
    test('To test the mobile prop sent to discover', () => {
      expect(wrapper.vm.mobile).toBeTruthy()
    })
    test('has a  5 buttons', () => {
      //mobile layout has 5 buttons and desktop layout has 5 buttons
      expect(wrapper.findAll('.btn-class').length).toBe(10)
    })
    test('Discover emit select size based upon click', async () => {

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
