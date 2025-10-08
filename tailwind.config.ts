import type { Config } from 'tailwindcss'
const config: Config = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx}','./components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: { bg:'#0D0D0D', accent:'#00FFCC', accent2:'#FF0066' },
      boxShadow: { glow:'0 0 30px rgba(0,255,204,0.25)', glowPink:'0 0 30px rgba(255,0,102,0.25)' },
      keyframes: {
        marquee:{'0%':{transform:'translateX(0)'},'100%':{transform:'translateX(-50%)'}},
        floaty:{'0%,100%':{transform:'translateY(0px)'},'50%':{transform:'translateY(-6px)'}}
      },
      animation: { marquee:'marquee 22s linear infinite', floaty:'floaty 6s ease-in-out infinite' }
    }
  },
  plugins:[]
}
export default config
