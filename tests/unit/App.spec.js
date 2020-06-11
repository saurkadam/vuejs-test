import { shallowMount, mount } from '@vue/test-utils'
import App from '@/App.vue'
describe('App.vue', () => {
    const wrapper = shallowMount(App)
    test('has a 1 div with id app', () => {
        expect(wrapper.findAll('#app').length).toBe(1)
      })
})