import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'light-cyan': 'hsl(193,38%,86%)',
        'neon-green': 'hsl(150,100%,66%)',
        'grayish-blue': 'hsl(217,19%,3%)',
        'dark-grayish-blue': 'hsl(217,19%,24%)',
        'dark-blue': 'hsl(218,23%,16%)'
      }
    },
  },
  plugins: [],
}
export default config
