import { definePreset } from '@primevue/themes'
import Aura from '@primevue/themes/aura'

const DSS360Aura = definePreset(Aura, {
  semantic: {
    primary: {
      50: '#E8E8EB',
      100: '#B8B8C1',
      200: '#9596A3',
      300: '#656679',
      400: '#30314B',
      500: '#191A35',
      600: '#171832',
      700: '#121227',
      800: '#0E0E1E',
      900: '#0B0B17',
      950: '#010101'
    },
    colorScheme: {
      light: {
        primary: {
          color: '{primary.500}',
          contrastColor: '#ffffff',
          hoverColor: '{primary.600}',
          activeColor: '{primary.700}'
        },
        highlight: {
          background: '{primary.50}',
          focusBackground: '{primary.100}',
          color: '{primary.700}',
          focusColor: '{primary.800}'
        }
      },
      dark: {
        primary: {
          color: '{primary.400}',
          contrastColor: '{surface.900}',
          hoverColor: '{primary.300}',
          activeColor: '{primary.200}'
        },
        highlight: {
          background: 'color-mix(in srgb, {primary.400}, transparent 84%)',
          focusBackground: 'color-mix(in srgb, {primary.400}, transparent 76%)',
          color: 'rgba(255,255,255,.87)',
          focusColor: 'rgba(255,255,255,.87)'
        }
      }
    }
  },
  components: {
    button: {
      colorScheme: {
        light: {
          root: {
            primary: {
              background: '{primary.500}',
              hoverBackground: '{primary.600}',
              activeBackground: '{primary.700}',
              borderColor: '{primary.500}',
              hoverBorderColor: '{primary.600}',
              activeBorderColor: '{primary.700}',
              color: '#ffffff',
              hoverColor: '#ffffff',
              activeColor: '#ffffff',
              focusRing: {
                color: '{primary.500}',
                shadow: 'none'
              }
            },
            secondary: {
              background: '{surface.100}',
              hoverBackground: '{surface.200}',
              activeBackground: '{surface.300}',
              borderColor: '{surface.100}',
              hoverBorderColor: '{surface.200}',
              activeBorderColor: '{surface.300}',
              color: '{surface.600}',
              hoverColor: '{surface.700}',
              activeColor: '{surface.800}',
              focusRing: {
                color: '{surface.600}',
                shadow: 'none'
              }
            }
          }
        },
        dark: {
          root: {
            primary: {
              background: '{primary.400}',
              hoverBackground: '{primary.300}',
              activeBackground: '{primary.200}',
              borderColor: '{primary.400}',
              hoverBorderColor: '{primary.300}',
              activeBorderColor: '{primary.200}',
              color: '{surface.900}',
              hoverColor: '{surface.900}',
              activeColor: '{surface.900}',
              focusRing: {
                color: '{primary.400}',
                shadow: 'none'
              }
            },
            secondary: {
              background: '{surface.700}',
              hoverBackground: '{surface.600}',
              activeBackground: '{surface.500}',
              borderColor: '{surface.700}',
              hoverBorderColor: '{surface.600}',
              activeBorderColor: '{surface.500}',
              color: '{surface.200}',
              hoverColor: '{surface.100}',
              activeColor: '{surface.0}',
              focusRing: {
                color: '{surface.400}',
                shadow: 'none'
              }
            }
          }
        }
      }
    },
    card: {
      colorScheme: {
        light: {
          root: {
            background: '{surface.0}',
            color: '{surface.700}'
          },
          subtitle: {
            color: '{surface.500}'
          }
        },
        dark: {
          root: {
            background: '{surface.900}',
            color: '{surface.0}'
          },
          subtitle: {
            color: '{surface.400}'
          }
        }
      }
    },
    inputtext: {
      colorScheme: {
        light: {
          root: {
            background: '{surface.0}',
            disabledBackground: '{surface.200}',
            filledBackground: '{surface.50}',
            filledFocusBackground: '{surface.50}',
            borderColor: '{surface.300}',
            hoverBorderColor: '{surface.400}',
            focusBorderColor: '{primary.500}',
            invalidBorderColor: '{red.400}',
            color: '{surface.700}',
            disabledColor: '{surface.500}',
            placeholderColor: '{surface.500}',
            shadow: 'none',
            paddingX: '0.75rem',
            paddingY: '0.5rem',
            borderRadius: '{border.radius.md}',
            focusRing: {
              width: '0',
              style: 'none',
              color: 'transparent',
              offset: '0',
              shadow: 'none'
            },
            transitionDuration: '{transition.duration}'
          }
        },
        dark: {
          root: {
            background: '{surface.950}',
            disabledBackground: '{surface.700}',
            filledBackground: '{surface.800}',
            filledFocusBackground: '{surface.800}',
            borderColor: '{surface.700}',
            hoverBorderColor: '{surface.600}',
            focusBorderColor: '{primary.400}',
            invalidBorderColor: '{red.300}',
            color: '{surface.0}',
            disabledColor: '{surface.400}',
            placeholderColor: '{surface.400}',
            shadow: 'none',
            paddingX: '0.75rem',
            paddingY: '0.5rem',
            borderRadius: '{border.radius.md}',
            focusRing: {
              width: '0',
              style: 'none',
              color: 'transparent',
              offset: '0',
              shadow: 'none'
            },
            transitionDuration: '{transition.duration}'
          }
        }
      }
    }
  }
})

export default DSS360Aura
