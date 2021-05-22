import male from "./hausa/male";

const tribe = require("./tribe");
const hausaMale = require("./hausa/male");
const hausaFemale = require("./hausa/female");
const hausaState = require("./hausa/state");
const igboMale = require("./igbo/male");
const igboFemale = require("./igbo/female");
const igboState = require("./igbo/state");
const yorubaMale = require("./yoruba/male");
const yorubaFemale = require("./yoruba/female");
const yorubaState = require("./yoruba/state");
const sex = require("./gender");

export default (req, res) => {

  
  // res.setHeader("Access-Control-Allow-Origin", "*");

  // if (req.method == "OPTIONS") {
    // res.setHeader("Access-Control-Allow-Credentials", "'true");
    // res.setHeader("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    // res.setHeader(
      // "Access-Control-Allow-Headers",
      // "Origin, x-access-token, x-api-token, X-Requested-With, Content-Type, Accept"
    // );
    // res.setHeader("Access-Control-Max-Age", "3800");
// 
    // res.status(201).end();
  // }
  

  let end = req.query.limit;
  console.log(end)
  let gender;
  var index = 0;
  if (end > 1000) {
    return res.status(501).json({
      message: "The maximum number of data you can generate is 1000",
    });
  }

  if (!req.query.limit) {
    return res.status(401).json({ message: " Please provide a limit" });
  }

  try {
    var dataArray = [];
    let firstName, lastName, state;

    function equation() {
      index = index + 1;
      const toogleArray = (incomingData) => {
        const length = incomingData.length;
        const randomNum = Math.floor(Math.random() * length);
        const randomPick = incomingData[randomNum];
        return randomPick;
      };
      gender = toogleArray(sex);
      const grouping = {
        Yoruba: function () {
          state = toogleArray(yorubaState);
          if (toogleArray(gender) == "male") {
            firstName = toogleArray(yorubaMale);
            lastName = toogleArray(yorubaMale);
          } else {
            firstName = toogleArray(yorubaFemale);
            lastName = toogleArray(yorubaFemale);
          }

          return {
            firstName,
            lastName,
            location: state + "," + " " + "Nigeria",
            gender,
          };
        },
        Igbo: function () {
          state = toogleArray(igboState);
          if (toogleArray(gender) == "male") {
            firstName = toogleArray(igboMale);
            lastName = toogleArray(igboMale);
          } else {
            firstName = toogleArray(igboFemale);
            lastName = toogleArray(igboFemale);
          }

          return {
            firstName,
            lastName,
            location: state + "," + " " + "Nigeria",
            gender,
          };
        },
        Hausa: function () {
          state = toogleArray(hausaState);
          if (toogleArray(gender) == "male") {
            firstName = toogleArray(hausaMale);
            lastName = toogleArray(hausaMale);
          } else {
            firstName = toogleArray(hausaFemale);
            lastName = toogleArray(hausaFemale);
          }

          return {
            firstName,
            lastName,
            location: state + "," + " " + "Nigeria",
            gender,
          };
        },
      };

      const result = grouping[toogleArray(tribe)]();
      dataArray.push({
        ...result,
        course: "Online Course",
        index,
        imageUri:
          "https://api.backendless.com/2F26DFBF-433C-51CC-FF56-830CEA93BF00/473FB5A9-D20E-8D3E-FF01-E93D9D780A00/files/CountryFlags/nga.svg",
      });
      if (dataArray.length == end) {
        return res.status(200).json(dataArray);
      }
      equation();
    }

    equation();
  } catch (error) {
    res.status(501).json({ err: error, message: "Something went wrong !!!" });
  }
};
