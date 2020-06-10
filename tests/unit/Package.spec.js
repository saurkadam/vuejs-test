import { shallowMount, mount } from '@vue/test-utils'
import Package from '@/components/Package.vue'
import App from '@/App.vue'
import AlignerComponent from '@/components/shared/AlignerComponent.vue'
describe('Package.vue', () => {
    const data = [];
    const wrapper = mount(Package, {
      propsData: { data },
      parentComponent: App
    })
    test('Package component is a child component of App', () => {
        expect(wrapper.vm.$parent.$options.name).toBe('App')
    })
    test('To test if the prop sent to package is an array', () => {
        expect(Array.isArray(wrapper.vm.data)).toBe(true);
    })
})