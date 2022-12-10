const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  //Changed due to tailwind V3

  important: true,
  variants: {
    extend: {
      rotate: ['group-focus'],
      textColor: ['group-focus'],
      maxHeight: ['group-focus'],
      translate: ['group-hover'],
    },
  },
  theme: {
    extend: {
      textUnderlineOffset: {
        8: '8px',
      },
      fontFamily: {
		sans: ["Manrope", ...defaultTheme.fontFamily.sans],
		cursive: ["Playfair Display", ...defaultTheme.fontFamily.sans],
	},
      fontSize: {
        xxs: '0.6rem',
        '22px': '22px',
        '2.5xl': '27px',
      },
      lineHeight: {
        '3rem': '3rem',
        '3.5rem': '3.5rem',
      },
      boxShadow: {
        'custom-card':
          '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 0px 24px -1px rgba(0, 0, 0, 0.06) !important',
        'scroll-button':
          '0 6px 8px -1px rgba(0, 0, 0, 0.2), 0 0px 28px -1px rgba(0, 0, 0, 0.1) !important',
        'top-shadow': '0px 4px 34px -10px rgba(0,0,0,0.75) !important',
        'details-card': '0px 1px 6px rgba(121, 119, 119, 0.3) !important',
        'aligned-shadow': '0px 2px 20px -8px rgba(82,89,234,1) !important',
        'rewards-card': '0px 12px 50px rgba(0, 0, 0, 0.06) !important',
        'top-picks-card': '0px 25px 52px -12px rgba(16, 24, 40, 0.1) !important',
        'property-card':
          '0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px -1px rgba(16, 24, 40, 0.1) !important',
        top: '0px -1px 3px rgba(16, 24, 40, 0.13) !important',
      },
      backgroundImage: (theme) => ({
        'dotted-pattern': ' url(/assets/img/pattern1.svg)',
        'investment-type-preleased':
          'linear-gradient(180deg, rgba(19, 21, 71, 0) -100.00%, rgba(41, 40, 40, 0.78) 100%), url(/assets/img/landing/investment-types/preleased.webp)',
        'investment-type-plots':
          'linear-gradient(180deg, rgba(19, 21, 71, 0) -100.00%, rgba(41, 40, 40, 0.78) 100%), url(/assets/img/landing/investment-types/plots.webp)',
        'investment-type-reits':
          'linear-gradient(180deg, rgba(19, 21, 71, 0) -100.00%, rgba(41, 40, 40, 0.78) 100%), url(/assets/img/landing/investment-types/reits.webp)',
        'investment-type-fractional':
          'linear-gradient(180deg, rgba(19, 21, 71, 0) -100.00%, rgba(41, 40, 40, 0.78) 100%), url(/assets/img/landing/investment-types/fractional.webp)',
        'investment-type-buyback':
          'linear-gradient(180deg, rgba(19, 21, 71, 0) -100.00%, rgba(41, 40, 40, 0.78) 100%), url(/assets/img/landing/investment-types/buyback.webp)',
        'cfbanner-bg': 'url(/assets/img/cf/Banner.svg)',
        'launching-soon': 'url(/assets/img/investments/coming-soon.svg)',
        'why-choose-propreturns-landing-bg': 'url(/assets/img/landing/how-1.svg)',
        building: 'url(/assets/img/banner/building.svg)',
        requirement: 'url(/assets/img/banner/Requirement.svg)',
        bluegradient: 'url(/assets/img/banner/bluegradient.svg)',
        purplegradient: 'url(/assets/img/banner/purple.svg)',
        greengradient: 'url(/assets/img/banner/greengradient.svg)',
        pinkgradient: 'url(/assets/img/banner/Pink.svg)',
        advice:
          'linear-gradient(180deg, rgba(19, 21, 71, 0) -100.00%, rgba(41, 40, 40, 0.78) 100%),url(/assets/img/banner/advice.webp)',
        delhiplotgradient:
          'linear-gradient(90deg, rgba(151, 150, 240, 0.4) 0%, rgba(251, 199, 212, 0.22) 100%)',
        'sell-property': 'url(/assets/img/banner/sellproperty.svg)',
        tick: 'url(/assets/img/cf/tick.svg)',
        tickCard: 'url(/assets/img/cf/tickCard.svg)',
        'why-choose-propreturns-landing': 'url(/assets/img/landing/how-1.svg)',
        'reit-landing': 'url(/assets/img/REIT/landing/landingBG.svg)',
        'new-main-banner': 'url(/assets/img/landing/bg-new-banner.webp)',
        'why-us-background': 'url(/assets/img/landing/how-3.svg)',
        'main-banner': 'url(/assets/img/landing/bg-sm.webp)',
        'main-banner-md': 'url(/assets/img/landing/bg-md1.webp)',
        'image-unavailable': "url('/assets/img/listing/property-image-unavailable.webp')",
        'metrics-image': 'url(/assets/img/landing/metrics-image.webp)',
        emiCalculator: 'url(/assets/img/calculator/calculator-bg.webp)',
        valuationFinder: 'url(/assets/img/calculator/valuation-bg.webp)',
        'main-website-referral-banner': 'url(/assets/img/main-website-referral/banner.webp)',
        'main-website-referral-banner-mobile':
          'url(/assets/img/main-website-referral/banner-mobile.webp)',
        referBanner: 'url(/assets/img/main-website-referral/referBanner.webp)',
        referBannerMobile: 'url(/assets/img/main-website-referral/referBannerMobile.webp)',
        cta: 'linear-gradient(#262747b4, #26274774), url(/assets/img/bg/1.webp)',
        'greenock-warehouse-banner':
          'linear-gradient(180deg, rgba(19, 21, 71, 0) -100.00%, rgba(41, 40, 40, 0.78) 100%), url(/assets/img/listing/banner/greenock-warehouse.webp)',
        'strata-bengaluru-banner':
          'linear-gradient(180deg, rgba(19, 21, 71, 0) -100.00%, rgba(41, 40, 40, 0.78) 100%), url(/assets/img/listing/banner/fractional-2.webp)',
        'refer-and-earn-banner': 'url(/assets/img/banner/Frame.webp)',
        'refer-and-earn-banner-lg': 'url(/assets/img/banner/Frame2.webp)',
        'refer-and-earn-new': 'linear-gradient(90deg, #4776E6 0%, #8E54E9 100%)',
        'post-requirement': 'linear-gradient(90deg, #F2709C 0%, #FF9472 100%)',
        'property-loans': 'linear-gradient(90deg, #004680 0%, #4484BA 100%)',
        'loan-details-banner': 'linear-gradient(93.65deg, #FF9472 0.16%, #F68FFF 100.56%)',
        'visit-property-details-banner': 'linear-gradient(93.65deg, #8572FF 0.16%, #8F9BFF 100.56%)',
        'labdhi-banner':
          'linear-gradient(180deg, rgba(19, 21, 71, 0) -100.00%, rgba(41, 40, 40, 0.78) 100%), url(/assets/img/listing/banner/labdhi.webp)',
        '9north-banner':
          'linear-gradient(180deg, rgba(19, 21, 71, 0) -100.00%, rgba(41, 40, 40, 0.78) 100%), url(/assets/img/listing/banner/9north-banner.webp)',
        'fractional-banner':
          'linear-gradient(180deg, rgba(19, 21, 71, 0) -100.00%, rgba(41, 40, 40, 0.78) 100%), url(/assets/img/listing/banner/fractional-banner-2.webp)',
        'construction-finance-banner':
          'linear-gradient(180deg, rgba(19, 21, 71, 0) -100.00%, rgba(41, 40, 40, 0.78) 100%), url(/assets/img/listing/banner/cf-banner.webp)',
        'dlf-banner':
          'linear-gradient(180deg, rgba(19, 21, 71, 0) -100.00%, rgba(41, 40, 40, 0.78) 100%), url(/assets/img/listing/banner/dlf-banner.webp)',
        'emmar-banner':
          'linear-gradient(180deg, rgba(19, 21, 71, 0) -100.00%, rgba(41, 40, 40, 0.78) 100%), url(/assets/img/listing/banner/emaar-banner.webp)',
        'strata-banner':
          'linear-gradient(180deg, rgba(19, 21, 71, 0) -100.00%, rgba(41, 40, 40, 0.78) 100%), url(/assets/img/listing/banner/strata.webp)',
        'new-listing-color':
          'linear-gradient(90deg, rgba(2, 170, 176, 1) 0%, rgba(0, 205, 94, 1) 100%)',
        'hot-property-color':
          'linear-gradient(90deg, rgba(255, 78, 80, 1) 0%, rgba(249, 163, 35, 1) 100%)',
        'top-banner':
          'linear-gradient(205.49deg, rgba(83, 88, 226, 0.0418) 16.14%, rgba(237, 245, 252, 0) 109.5%)',
        'people-interested-color': 'linear-gradient(90deg, #1F81B8 0%, #24B1A9 87.63%)',
        point:
          "url(\"data:image/svg+xml,%0A%3Csvg enable-background='new 0 0 36 36' height='512' viewBox='0 0 36 36' width='512' xmlns='http://www.w3.org/2000/svg'%3E%3Cg id='bg'%3E%3Cg%3E%3C/g%3E%3C/g%3E%3Cg id='color'%3E%3Cg%3E%3Ccircle cx='18' cy='18' fill='%232fdf84' r='11.25'/%3E%3C/g%3E%3Cg%3E%3Cpath d='m9 18c0-5.833 4.44-10.629 10.125-11.193-.37-.037-.745-.057-1.125-.057-6.213 0-11.25 5.037-11.25 11.25s5.037 11.25 11.25 11.25c.38 0 .755-.02 1.125-.057-5.685-.564-10.125-5.36-10.125-11.193z' fill='%2300b871'/%3E%3C/g%3E%3Cg%3E%3C/g%3E%3C/g%3E%3Cg id='regular'%3E%3Cg%3E%3Cpath d='m18 30c-6.617 0-12-5.383-12-12s5.383-12 12-12 12 5.383 12 12-5.383 12-12 12zm0-22.5c-5.79 0-10.5 4.71-10.5 10.5s4.71 10.5 10.5 10.5 10.5-4.71 10.5-10.5-4.71-10.5-10.5-10.5z'/%3E%3C/g%3E%3Cg%3E%3Cpath d='m16.875 22c-.192 0-.384-.073-.53-.22l-3.25-3.25 1.061-1.061 2.72 2.72 5.97-5.97 1.061 1.061-6.5 6.5c-.148.147-.34.22-.532.22z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        'point-alt':
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='15' height='15' viewBox='0 0 15 15'%3E%3Cg id='Ellipse_5' data-name='Ellipse 5' fill='%23dfe1fc' stroke='%235259ea' strokeWidth='3'%3E%3Ccircle cx='7.5' cy='7.5' r='7.5' stroke='none'/%3E%3Ccircle cx='7.5' cy='7.5' r='6' fill='none'/%3E%3C/g%3E%3C/svg%3E%0A\")",
        'rewardsandtransactionbenefits-bg1': 'url(/assets/img/REIT/rewards/benefitsBG1.svg)',
        'rewardsandtransactionbenefits-bg2': 'url(/assets/img/REIT/rewards/benefitsBG2.svg)',
        rewardsCardBg: 'url(/assets/img/REIT/rewards/rewardsCardBg.svg)',
        wheelOuter: 'url(/assets/img/REIT/rewards/wheelOuter.svg)',
        wheel: 'url(/assets/img/REIT/rewards/wheel.webp)',
        wheelCap: 'url(/assets/img/REIT/rewards/wheelCap.webp)',
        gridPattern: 'url(/assets/img/misc/bgGridPattern.svg)',
        investorsBg: 'url(/assets/img/REIT/landing/gridPattern2.svg)',
        voucherBgREITsLanding: 'url(/assets/img/REIT/landing/voucherButton.webp)',
        'dark-loan-gradient': 'url(/assets/img/loans/dark-loan-gradient.webp)',
        'loan-pattern': 'url(/assets/img/loans/loan-background-pattern.svg)',
        'learn-header': 'url(/assets/img/learn/LearnHeaderDesktop.webp)',
        'learn-header-mobile': 'url(/assets/img/learn/LearnHeaderMobile.webp)',
      }),
      backgroundPosition: {
        'banner-bottom-4': 'center bottom -4rem',
        'banner-bottom-18': 'center bottom -18rem',
      },
      backgroundColor: {
        'white-opacity-30': '#F3F6FE',
        'white-opacity-40': '#F9F9F9C4',
        'white-opacity-50': '#ffffff70',
        'white-opacity-60': '#FAFAFA',
        'white-opacity-80': '#ffffffc0',
        'white-opacity-90': '#ffffffe6',
        glass: 'rgba(0, 0, 0, 0.5)',
        'cost-sheet': 'rgba(86, 63, 108, 0.66)',
        'green-50': 'rgba(233, 240, 240, 1)',
        'gray-850': '#455964',
        'gray-60': '#F9FAFB',
      },
      width: {
        '22rem': '22rem',
        '17rem': '17rem',
        '27rem': '27rem',
      },
      height: {
        '90vh': '90vh',
        '80vh': '80vh',
        '32rem': '32rem',
        '31rem': '31rem',
        '30rem': '30rem',
        '26rem': '26rem',
        '23rem': '23rem',
        thin: '1px',
        1.25: '5px',
        710: '710px',
      },
      maxWidth: {
        '1/4': '25%',
        '1/3': '30%',
        '1/2': '50%',
        '3/4': '75%',
      },
      maxHeight: {
        '1/4': '25%',
        '1/3': '30%',
        '1/2': '50%',
        '3/4': '75%',
        144: '576px',
      },
      minWidth: {
        '1/4': '25%',
        '1/3': '30%',
        '2/5': '40%',
        '1/2': '50%',
        '3/4': '75%',
        96: '384px',
        56: '224px',
        72: '288px',
        36: '144px',
        32: '128px',
        28: '112px',
        24: '96px',
      },
      padding: {
        0.5: '0.15rem',
        0.1: '0.1rem',
        1.25: '5px',
      },
      colors: {
        primary: '#ff5e5e',
        'primary-hover': '#4d52db',
        'primary-dark': '#1C2180',
        'light-black': '#191c20',
        dark: '#292929',
        violet: '#9E87DD',
        'dark-gradient-primary': '#3E8BFF',
        'dark-gradient-secondary': '#CDA6FF',
        'errorpage-primary': '#391640',
        'errorpage-secondary': '#77537E',
        whatsapp: '#25D366',
        'dark-blue': '#282E41',
        'off-white': '#F8F9FB',
        'whatsapp-green': '#1AB152',
        'neutral-50': '#f9fafb',
        'neutral-100': '#f3f4f6',
        'neutral-200': '#e5e7eb',
        'neutral-300': '#d1d5db',
        'neutral-400': '#9ca3af',
        'neutral-500': '#6b7280',
        'neutral-600': '#4b5563',
        'neutral-700': '#374151',
        'neutral-800': '#1f2937',
        'neutral-900': '#111827',
      },
      borderWidth: {
        14: '14px',
        0.5: '0.5px',
        2.5: '2.5px',
      },
      borderRadius: {
        '4xl': '40px',
        '1/2': '50%',
      },
      borderColor: {
        'primary-100': '#D2D3F9',
      },
      zIndex: {
        '-10': '-10',
        60: 60,
      },
      scale: {
        101: '1.01',
        80: '0.80',
        103: '1.03',
      },
      filter: {
        'drop-shadow': 'drop-shadow(16px 16px 20px #5359ea)',
      },
      blur: {
        xs: '2px',
      },
    },
    screens: {
      xxs: '300px',
      xs: '370px',
      sm: '576px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
  },
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
};