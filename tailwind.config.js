module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        darkBlueintro: "hsl(217, 28%, 15%)",
        darkBlueBack: "hsl(218, 28%, 13%)",
        darkBlueFooter: "hsl(216, 53%, 9%)",
        darkBluetestimonial: "hsl(219, 30%, 18%)",
        cyan: "hsl(176, 68%, 64%)",
        blue: "hsl(198, 60%, 50%)",
        lightred: "hsl(0, 100%, 63%)",
      },
      fontFamily: {
        Raleway: ["Raleway"],
        OpenSans: ["Open Sans"],
      },
      fontSize: {
        base: "87.5",
        primary: "14px",
      },
      backgroundImage: {
        desktop: ' url("../images/bg-curvy-desktop.svg")',
        mobile: 'url("../images/bg-curvy-mobile.svg")',
      },
      spacing: {
        '18': '74px'
      }
    },
  },
  variants: {
    extend: {
      colors: ['active'],
      backgroundColor: ['active'],
      fontWeight: ['focus'],
    },
  },
  plugins: [],
};