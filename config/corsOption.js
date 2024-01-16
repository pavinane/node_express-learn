const WhiteList = [
  "http://localhost:3500",
  "http://127.0.0.1:5500",
  "https://www.google.com/",
];

const corsOption = {
  origin: (origin, callback) => {
    if (WhiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowedby CORS"));
    }
  },
  opitonSuccessStatus: 200,
};

module.exports = corsOption;
