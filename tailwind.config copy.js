/** @type {import('tailwindcss').Config} */

// ============================================
// COMPREHENSIVE COLOR PALETTE SYSTEM
// ============================================
// To switch themes, change the 'currentTheme' below
const currentTheme = 'boga'; // Options: 'boga', 'ocean', 'royal', 'forest', 'sunset', 'rose'

const colorPalettes = {
  boga: {
    dark: 'rgb(85, 88, 121)',
    medium: 'rgb(152, 161, 188)',
    light: 'rgb(222, 211, 196)',
    lightest: 'rgb(244, 235, 211)',
  },
  ocean: {
    dark: 'rgb(21, 94, 117)', // Deep teal
    medium: 'rgb(34, 197, 219)', // Bright teal
    light: 'rgb(165, 243, 252)', // Light cyan
    lightest: 'rgb(236, 254, 255)', // Very light cyan
  },
  royal: {
    dark: 'rgb(55, 48, 163)', // Deep purple
    medium: 'rgb(139, 69, 255)', // Bright purple
    light: 'rgb(196, 181, 253)', // Light purple
    lightest: 'rgb(245, 243, 255)', // Very light purple
  },
  forest: {
    dark: 'rgb(20, 83, 45)', // Deep green
    medium: 'rgb(34, 197, 94)', // Bright green
    light: 'rgb(187, 247, 208)', // Light green
    lightest: 'rgb(240, 253, 244)', // Very light green
  },
  sunset: {
    dark: 'rgb(194, 65, 12)', // Deep orange
    medium: 'rgb(249, 115, 22)', // Bright orange
    light: 'rgb(254, 215, 170)', // Light orange
    lightest: 'rgb(255, 247, 237)', // Very light orange
  },
  rose: {
    dark: 'rgb(159, 18, 57)', // Deep rose
    medium: 'rgb(244, 63, 94)', // Bright rose
    light: 'rgb(253, 164, 175)', // Light rose
    lightest: 'rgb(255, 241, 242)', // Very light rose
  },
};

// Get current theme colors
const themeColors = colorPalettes[currentTheme];

export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',

        // ============================================
        // THEME COLOR SYSTEM (replaces boga)
        // ============================================
        theme: themeColors,

        // Keep boga for backward compatibility during transition
        boga: themeColors,

        chart: {
          1: 'hsl(var(--chart-1))',
          2: 'hsl(var(--chart-2))',
          3: 'hsl(var(--chart-3))',
          4: 'hsl(var(--chart-4))',
          5: 'hsl(var(--chart-5))',
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))',
        },
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-20px)',
          },
        },
        shimmer: {
          '100%': {
            transform: 'translateX(100%)',
          },
        },
        'fade-in': {
          from: {
            opacity: '0',
            transform: 'translateY(10px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'scale-in': {
          from: {
            opacity: '0',
            transform: 'scale(0.95)',
          },
          to: {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 1.5s infinite',
        'fade-in': 'fade-in 0.4s ease-out',
        'scale-in': 'scale-in 0.3s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
