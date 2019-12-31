import { mount } from '@vue/test-utils';
import MainSection from '../MainSection.vue';


describe('MainSection', () => {
    test('checks for class ', () => {
        const wrapper = mount(MainSection)
        expect(wrapper.html()).toContain('id="container"')
    });

    test('renders text inside props', () => {
        const sideNav = 'Latest news'
        const wrapper = mount(MainSection, {
            propsData: {
                sideNav
            }
        })
        expect(wrapper.text()).toContain("Latest news")
    })

    it('works with await', async () => {
        expect.assertions(1);
        const data = await ("Database.json");
        expect(data).toEqual("Database.json");
    });
});


