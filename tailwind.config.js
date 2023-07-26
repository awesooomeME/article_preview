/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        very_dark_grayish_blue: 'hsl(217, 19%, 35%)',
        desaturated_dark_blue: 'hsl(214, 17%, 51%)',
        grayish_blue: 'hsl(212, 23%, 69%)',
        light_grayish_blue: 'hsl(210, 46%, 95%)'
      },
      fontWeight: {
        normal: '500',
        heavy: '700'
      },
      screens: {
        desktop: '650px'
      },
      backgroundImage: {
        'share_icon': "url('../public/images/icon-share.svg')",
        'fb_icon': "url('../public/images/icon-facebook.svg')",
        'pinterest_icon': "url('../public/images/icon-pinterest.svg')",
        'twitter_icon': "url('../public/images/icon-twitter.svg')",
      }
    },
  },
  plugins: [],
}
