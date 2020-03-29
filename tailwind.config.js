module.exports = {
  theme: {
    fontFamily: {
      body: ["Source Sans Pro", "sans-serif"],
      display: ["Source Sans Pro", "sans-serif"]
    },

    extend: {
      colors: {
        greenMOM: "#95BC24",
        greenMOMlight: "#EFE7DA",
        blueMOM: "#0F1D66"
      }
    }
  },
  variants: {},
  plugins: [
    require("tailwindcss-animatecss")({
      settings: {
        animatedSpeed: 1000,
        heartBeatSpeed: 1000,
        hingeSpeed: 2000,
        bounceInSpeed: 750,
        bounceOutSpeed: 750,
        animationDelaySpeed: 1000
      },
      variants: ["responsive"]
    })
  ]
};
