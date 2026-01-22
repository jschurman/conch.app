import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E5F2FF',
          100: '#B8DCFF',
          200: '#8AC6FF',
          300: '#5CB0FF',
          400: '#2E9AFF',
          500: '#007AFF',
          600: '#0062CC',
          700: '#004999',
          800: '#003166',
          900: '#001833',
        },
        coral: {
          50: '#FFF5F2',
          100: '#FFE4DB',
          200: '#FFD3C4',
          300: '#FFC2AD',
          400: '#FFB096',
          500: '#FF9F80',
          600: '#CC7F66',
          700: '#995F4D',
          800: '#664033',
          900: '#33201A',
        },
        ocean: {
          50: '#E8F8FD',
          100: '#C4EDF9',
          200: '#A0E2F5',
          300: '#7CD7F2',
          400: '#5ACCEE',
          500: '#5AC8FA',
          600: '#48A0C8',
          700: '#367896',
          800: '#245064',
          900: '#122832',
        },
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'SF Pro Display', 'SF Pro Text', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-ocean': 'linear-gradient(135deg, #5AC8FA 0%, #007AFF 100%)',
        'gradient-sunset': 'linear-gradient(135deg, #FF9F80 0%, #FF6B6B 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
