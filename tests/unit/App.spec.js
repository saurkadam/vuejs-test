import { shallowMount, mount } from '@vue/test-utils'
import App from '@/App.vue'
describe('App.vue', () => {
    const wrapper = shallowMount(App)
    test('has a 1 div with id app', () => {
        //mobile layout has 5 buttons and desktop layout has 5 buttons
        expect(wrapper.findAll('#app').length).toBe(1)
      })
})