import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			backgroundPage: 'var(--background-page)',
  			textDark: 'hsl(var(--text-dark))',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			fb_green: 'var(--green)',
  			fb_green_button: 'var(--green-button)',
  			fb_blue: 'var(--blue)',
  			fb_blue_main: 'var(--blue-main)',
  			fb_blue_button: 'var(--blue-button)',
  			fb_text_gray: 'var(--text-gray)',
  			fb_gray: 'var(--gray)',
  			fb_gray_bread: 'var(--gray-bread)',
  			fb_gray_main: '#031D3A',
  			fb_gray_background: 'var(--background-section)',
  			fb_gradiente_opacity: 'hsla(212, 90%, 12%, 0.8)',
  			'fb_dark-blue': 'hsla(212, 90%, 12%, 1)',
  			'fb_light-blue': 'hsla(206, 15%, 60%, 0)'
  		},
  		transitionDuration: {
  			fb_transition_ease: 'all 0.25s ease'
  		},
  		spacing: {
  			'fb_space-section': 'var(--fb_space-section)'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		backgroundImage: {
  			'footer-image': 'url("/images/bg-footer.webp")',
  			'newsletter-image': 'url("/images/bg-newsletter.webp")',
  			fb_gradient: 'linear-gradient(-240deg, #031D3A 0%, #126597 100%)',
  			'banner-cta': 'url("/images/banner-mais-background-blue-_1_.webp")',
  			'hero-image': 'url("/images/bg-hero-section.webp")',
  			'partner-background': 'url("/images/bg-ambiental.webp")',
  			fb_category_image: 'url("/images/banners/bg-categories.webp")',
  			'hero-section-ambiental': 'url("/images/hero-green-leafs.jpg")',
  			'hero-green-leafs': 'url("/images/social/hero-section.webp")',
  			'hero-section-gray-palms': 'url("/images/hero-section-gray-palms.jpg")',
  			'hero-section-gray': 'url("/images/hero-section-gray.jpg")',
  			'green-featured': 'url("/images/transparencia/green-bg-featured.webp")',
  			'ambiental-sustentaveis-bg': 'url("/images/ambiental/bg-sustentaveis.webp")',
  			'bg-ciclos': 'url("/images/ambiental/bg-ciclos.webp")',
  			'cmr-saude': 'url("/images/home/bg-cmr.webp")',
  			'bg-investimento': 'url("/images/ambiental/bg-investimento.webp")',
  			'bg-doacoes': 'url("/images/ambiental/bg-doacoes.webp")',
  			fb_category_noticias: 'url("/images/banners/banner-category-40-anos.webp")',
  			fb_gradient_posts: 'linear-gradient(0deg, rgba(0,0,0,0.5018382352941176) 0%, rgba(255,255,255,0) 100%)',
  			'hero-page-historia': 'url("/images/historia/hero-historia.webp")',
  			'hero-quem-somos': 'url("/images/quem-somos/foto_de_cima_da_fabrica.webp")',
  			'new-hero-quem-somos': 'url("/images/quem-somos/foto_de_cima_da_fabrica.webp")',
				'seja-representante': 'url("/representantes/pessoas-apertando-as-maos.webp")'
  		},
  		boxShadow: {
  			custom_image: '0 0 10px rgba(0, 0, 0, 0.5)',
  			custom_shadow: '0 0 4px 0 #00000040',
  			shadow_image_info_section: '0px 5px 15px 0px rgba(0, 0, 0, 0.35)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		},
  		transitionProperty: {
  			height: 'height'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
