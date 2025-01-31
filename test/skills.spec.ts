import { shallowMount } from '@vue/test-utils'
import skills from '@/pages/skills.vue'

describe('skills', () => {
  it('renders correctly', () => {
    const wrapper = shallowMount(skills, {
      data() {
        return {
          navbar: { resumeUrl: '', externalLinks: [] },
          skills: {
            skills: [
              'HTML',
              'JavaScript',
              'CSS',
              'SCSS',
              'Bootstrap',
              'Angular',
              'Vue.js',
              'Nuxt.js',
              'PHP',
              'Laravel',
              'Bash',
              'Docker',
              'JQuery',
              'Webpack',
            ],
          },
        }
      },
      stubs: ['Icon'],
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
