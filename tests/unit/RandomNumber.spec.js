import { mount } from '@vue/test-utils';
import RandomNumber from '@/components/RandomNumber.vue';

describe('RandomNumber', () => {
  test('By default, the randomNumber data value should be 0', () => {
    const wrapper = mount(RandomNumber);
    expect(wrapper.html()).toContain('<span>0</span>');
  });
  test('If we click the generate button, randomNumber should be between 1 (min) and 10 (max)', async () => {
    const wrapper = mount(RandomNumber);
    await wrapper.find('button').trigger('click');
    const randomNumber = +(wrapper.find('span').text());
    expect(randomNumber).toBeGreaterThanOrEqual(1);
    expect(randomNumber).toBeLessThanOrEqual(10);
  });
  test('If we change the min and max props to 200 and 300 and click the button, randomNumber should be between 200 (min) and 300 (max).', async () => {
    const wrapper = mount(RandomNumber, { propsData: { min: 200, max: 300 } });
    await wrapper.find('button').trigger('click');
    const randomNumber = +(wrapper.find('span').text());
    expect(randomNumber).toBeGreaterThanOrEqual(200);
    expect(randomNumber).toBeLessThanOrEqual(300);
  });
});
