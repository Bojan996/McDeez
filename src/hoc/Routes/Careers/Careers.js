import React, { useState, useEffect } from "react";
import "./Careers.css";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import Loader from "../../../components/UI/Spinner/Spinner";
import { withSnackbar } from "notistack";
import { lazyLoad } from "../../../helpers/intersectionObserver";
import Footer from "../../../components/UI/Footer/Footer";
import CountUp from 'react-countup';

import mainHeaderFirst from "../../../assets/images/Careers/mainHeaderFirst.jpg";
import mainHeaderSecond from "../../../assets/images/Careers/mainHeaderSecond.jpg";
import mainHeaderThird from "../../../assets/images/Careers/mainHeaderThird.jpg";
import CuttingImage from "../../../assets/images/Careers/CuttingImage.jpeg";
import hearthIcon from "../../../assets/images/Careers/hearthIcon.png";
import moneyIcon from "../../../assets/images/Careers/moneyIcon.png";
import healthyIcon from "../../../assets/images/Careers/healthyIcon.png";
import bookIcon from "../../../assets/images/Careers/bookIcon.png";
import familyIcon from "../../../assets/images/Careers/familyIcon.png";
import clockIcon from "../../../assets/images/Careers/clockIcon.png";


const careers = (props) => {

  const [loading, setLoading] = useState(false);
  const [inputInfo, setInputInfo] = useState({
    name: "",
    surname: "",
    email: "",
    age: "",
    comment: "",
  });

  useEffect(() => {
    const targets = [...document.querySelectorAll(".lazyLoadCareers")];
    targets.forEach((e) => lazyLoad(e, "CareersFade"));
  }, []);

  const inputHandler = (event, type) => {
    const updatedInputInfo = { ...inputInfo };
    updatedInputInfo[type] = event.target.value;
    setInputInfo(updatedInputInfo);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (
      inputInfo.email.includes("@") &&
      inputInfo.email.includes(".")
    ) {
      setLoading(true);
      const date = new Date(),
        month = date.getUTCMonth() + 1,
        day = date.getUTCDate(),
        year = date.getUTCFullYear(),
        currentDate = year + "/" + month + "/" + day;

      const fullApplication = {
        name: inputInfo.name,
        surname: inputInfo.surname,
        email: inputInfo.email,
        age: inputInfo.age,
        date: currentDate,
        comment: inputInfo.comment,
      };

      axios.post(
        `https://mcdeez-b6b14.firebaseio.com/careersAplications.json`,
        fullApplication
      );

      setTimeout((e) => {
        setLoading(false);
        props.enqueueSnackbar("Your message has been sent!", {
          variant: "success",
        });
        setTimeout((e) => {
          window.location.reload();
        }, 2000);
      }, 700);
    } else {
      alert("Your email is not valid!");
    }
  };

  return (
    <div className="CareersContainer">
      <div className="CareersMainHeader">
        <h1 className='CareersMainHeaderFirstPart'>Counting<span> up to</span></h1>
        <div>
          <span><CountUp start={0} end={989} duration={4}/></span>
        </div>
        <h1>employees<span> worldwide</span></h1>
      </div>
      <p className="CareersMainHeaderParagraph">
        We are a global society, therefore we are continuously growing and
        searching for new and experienced chefs!
        <span> Our restaurants are all over the world, so we probably have a nice
        location for you also!</span>
      </p>
      <div className="CareersMainHeaderImages">
        <img
          className="CareersMainHeaderFirstImage"
          src={mainHeaderFirst}
          alt="kitchen"
        />
        <div className="CareersMainHeaderSecondImageDiv">
          <img src={mainHeaderSecond} alt="kitchen" />
          <img src={mainHeaderThird} alt="kitchen" />
        </div>
      </div>
      <div className="CareersFirstMissionDiv lazyLoadCareers">
        <p>OUR MISSION</p>
        <h1>Create a world where anyone can enjoy our food!</h1>
        <p>
          It’s an audacious, incredibly rewarding mission that our
          increasingly diverse team is dedicated to achieving.
        </p>
        <p>
          McDeez is built around the idea that everyone should be able to make
          a perfect meal, including where they stay, what they do, and who
          they meet. To that end, we empower millions of people around the
          world to use their passions and talents to become a McDeez eater.
        </p>
        <p>
          Exciting challenges lie ahead—new regions, technologies, and
          businesses. Guided by our four core values, we’ll meet these
          challenges creatively and with the support of our global community.
          Join us!
        </p>
      </div>
      <img
        className="CareersCuttingImage lazyLoadCareers"
        src={CuttingImage}
        alt="employees"
      />
      <div className="CareersSecondMissionDiv lazyLoadCareers">
        <p>BENEFITS</p>
        <h1>Live your best life</h1>
        <p>
          We offer the best employee benefits that you could imagine, we have
          it all, you just need to be a good worker.
        </p>
        <p>
          Our plan for the employees are very crutial to our comapny. There is
          an old saying "If you feed the bees, the bees will feed you". That
          is our goal, the people of McDeez will always have the best benefits
          there are on the market. Respectfulness is our jurney to success.
        </p>
      </div>
      <div className="CareersIconDiv lazyLoadCareers">
        <div
          className="CareersFirstSecondIconDiv"
          style={{ marginBottom: "70px" }}
        >
          <div>
            <img src={hearthIcon} alt="hearth" />
            <p>We pay for Healthcare</p>
          </div>
          <div>
            <img src={moneyIcon} alt="money" />
            <p>You get good salary</p>
          </div>
          <div>
            <img src={healthyIcon} alt="healthy" />
            <p>Organic healthy food</p>
          </div>
        </div>
        <div className="CareersFirstSecondIconDiv">
          <div>
            <img src={bookIcon} alt="book" />
            <p>Learning experience</p>
          </div>
          <div>
            <img src={familyIcon} alt="family" />
            <p>We care about family</p>
          </div>
          <div>
            <img src={clockIcon} alt="clock" />
            <p>Paid volunteer time</p>
          </div>
        </div>
      </div>
      <div className="CareersFormDiv">
        <h1 className="CareersFormHeader">Become a part of our team!</h1>
        <div className="CareersFormDivContent lazyLoadCareers">
          <div className="CareersFormDivContentLeft">
            <h1>
              Leave us a messsage <br /> we will call back
            </h1>
            <p>
              Please provide us with a message that describes your personality
              in short words. We would like also to hear about your experince
              until now. We are looking forward for your application!
            </p>
          </div>
          <form className="CareersFormDivContentForm">
            <div className="CareersFormNameSurname">
              <TextField
                id="outlined-basic"
                required={true}
                label="Name"
                variant="outlined"
                className="CareersFormInput"
                onChange={(event) => inputHandler(event, "name")}
              />
              <TextField
                id="outlined-basic"
                required={true}
                label="Surname"
                variant="outlined"
                className="CareersFormInput"
                onChange={(event) => inputHandler(event, "surname")}
              />
            </div>
            <div className="CareersFormEmailAge">
              <TextField
                id="outlined-basic"
                required={true}
                label="Email"
                variant="outlined"
                className="CareersFormInput"
                onChange={(event) => inputHandler(event, "email")}
              />
              <TextField
                id="outlined-basic"
                label="Age"
                variant="outlined"
                className="CareersFormInput"
                onChange={(event) => inputHandler(event, "age")}
              />
            </div>
            <TextField
              id="outlined-basic"
              label="Write something little about yourself"
              variant="outlined"
              className="CareersFormComment"
              multiline={true}
              rows="5"
              onChange={(event) => inputHandler(event, "comment")}
            />
            <button
              className="CareersSubmitButton"
              onClick={formSubmitHandler}
            >
              {loading ? (
                <Loader
                  style={{
                    fontSize: "2px",
                    color: "#FFCD39",
                    margin: "0 auto",
                    borderColor: "white",
                    borderLeftColor: "rgb(0, 140, 255)",
                    borderWidth: "4px",
                  }}
                />
              ) : (
                "Submit"
              )}
            </button>
          </form>
        </div>
      </div>
      <Footer history={props.history} />
    </div>
  );
}


export default withSnackbar(careers);
