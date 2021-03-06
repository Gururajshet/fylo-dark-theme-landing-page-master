module.exports = {
  purge: ["*.html"],
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
        base: "16px",
        primary: "14px",
      },
      backgroundImage: {
        desktop: ' url("../images/bg-curvy-desktop.svg")',
        mobile: 'url("../images/bg-curvy-mobile.svg")',
      },
      spacing: {
        18: "74px",
        100: "400px",
        102: "440px",
        103: "460px",
        104: "470px",
      },
      boxShadow: {
        customShadow: "2px 0px 40px -2px rgba(0,0,0,0.73)",
      },
    },
  },
  variants: {
    extend: {
      colors: ["active"],
      backgroundColor: ["active", "hover"],
      fontWeight: ["focus"],
      scale: ["hover"]
    },
  },
  plugins: [],
};