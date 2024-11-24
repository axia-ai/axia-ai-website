import React, { useState } from "react";
import backgroundVectorImage from "../assets/background_vector.png";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa6";
import { PiNotePencilFill } from "react-icons/pi";
import { FaCode } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import { GrHostMaintenance } from "react-icons/gr";

const OurProcess = () => {
  const [show, setShow] = useState(true);
  const render = () => {
    if (show) {
      setShow(true);
    } else {
      setShow(true);
      setShow2(false);
      setShow3(false);
      setShow4(false);
      setShow5(false);
    }
  };
  const [show2, setShow2] = useState(false);
  const render2 = () => {
    if (show2) {
      setShow2(true);
    } else {
      setShow(false);
      setShow2(true);
      setShow3(false);
      setShow4(false);
      setShow5(false);
    }
  };
  const [show3, setShow3] = useState(false);
  const render3 = () => {
    if (show3) {
      setShow3(true);
    } else {
      setShow(false);
      setShow2(false);
      setShow3(true);
      setShow4(false);
      setShow5(false);
    }
  };
  const [show4, setShow4] = useState(false);
  const render4 = () => {
    if (show4) {
      setShow4(true);
    } else {
      setShow(false);
      setShow2(false);
      setShow3(false);
      setShow4(true);
      setShow5(false);
    }
  };
  const [show5, setShow5] = useState(false);
  const render5 = () => {
    if (show5) {
      setShow5(true);
    } else {
      setShow(false);
      setShow2(false);
      setShow3(false);
      setShow4(false);
      setShow5(true);
    }
  };

  return (
    <div
      className="flex flex-col justify-center items-center bg-center bg-no-repeat bg-[length:0%] md:bg-[length:100%] bg-none sm:bg-cover p-4"
      style={{ backgroundImage: `url(${backgroundVectorImage})` }}
    >
      <div className="flex justify-center items-center m-5">
        <h1 className="text-4xl font-bold mt-2">Our Process</h1>
      </div>
      <div className="w-full flex justify-center items-center m-5  max-md:justify-between max-md:items-center">
        <div
          onClick={render}
          className={`cursor-pointer text-white rounded-lg w-14 h-14 flex items-center justify-center m-1 mx-3 ${show ? "bg-bg_dark_primary" : "bg-primary"}`}
        >
          <FaLightbulb />
        </div>
        <div className="text-black rounded-lg w-14 h-14 flex items-center justify-center m-1 -mx-5">
          <FaLongArrowAltRight />
        </div>
        <div
          onClick={render2}
          className={`cursor-pointer text-white rounded-lg w-14 h-14 flex items-center justify-center m-1 mx-3 ${show2 ? "bg-bg_dark_primary" : "bg-primary"}`}
        >
          <PiNotePencilFill />
        </div>
        <div className="text-black rounded-lg w-14 h-14 flex items-center justify-center m-1 -mx-5">
          <FaLongArrowAltRight />
        </div>
        <div
          onClick={render3}
          className={`cursor-pointer text-white rounded-lg w-14 h-14 flex items-center justify-center m-1 mx-3 ${show3 ? "bg-bg_dark_primary" : "bg-primary"}`}
        >
          <FaCode />
        </div>
        <div className="text-black rounded-lg w-14 h-14 flex items-center justify-center m-1 -mx-5">
          <FaLongArrowAltRight />
        </div>
        <div
          onClick={render4}
          className={`cursor-pointer text-white rounded-lg w-14 h-14 flex items-center justify-center m-1 mx-3 ${show4 ? "bg-bg_dark_primary" : "bg-primary"}`}
        >
          <FaLink />
        </div>
        <div className="text-black rounded-lg w-14 h-14 flex items-center justify-center m-1 -mx-5">
          <FaLongArrowAltRight />
        </div>
        <div
          onClick={render5}
          className={`cursor-pointer text-white rounded-lg w-14 h-14 flex items-center justify-center m-1 mx-3 ${show5 ? "bg-bg_dark_primary" : "bg-primary"}`}
        >
          <GrHostMaintenance />
        </div>
      </div>
      <div className="flex justify-center items-center m-5 text-white bg-primary rounded-lg md:w-1/2 w-full">
        {show && (
          <div className="flex flex-col justify-start text-start items-center m-5 w-3/4 md:w-2/4">
            <h1 className="text-2xl font-bold mt-2">1. Consultation and Understanding</h1>
            <p className="text-lg mt-5 px-5">
              <strong>Initial Meeting:</strong> We schedule a meeting to discuss your business goals, challenges, and expectations.
              <br></br>
              <strong>Needs Assessment:</strong> We carefully analyze your specific requirements and identify areas where AI can provide value. 
              Project Scoping: We define the scope of the project, including deliverables, timelines, and budget.
            </p>
          </div>
        )}
        {show2 && (
          <div className="flex flex-col justify-start text-start items-center m-5 w-3/4 md:w-2/4">
            <h1 className="text-2xl font-bold mt-2">2. Data Collection and Preparation</h1>
            <p className="text-lg mt-5 px-5">
              <strong>Data Gathering:</strong> We collect relevant data from various sources, ensuring data quality and completeness.
              <br></br>
              <strong>Data Cleaning and Preprocessing:</strong> We clean and prepare the data for analysis, handling missing values, outliers, and inconsistencies.
            </p>
          </div>
        )}
        {show3 && (
          <div className="flex flex-col justify-start text-start items-center m-5 w-3/4 md:w-2/4">
            <h1 className="text-2xl font-bold mt-2">3. Model Selection and Development</h1>
            <p className="text-lg mt-5 px-5">
              <strong>Algorithm Selection:</strong> We choose the most appropriate machine learning algorithms based on your project's objectives and data characteristics.
              <br></br>
              <strong>Model Training:</strong> We train the selected models on your data, fine-tuning them to achieve optimal performance.
              <br></br>
              <strong>Model Evaluation:</strong> We evaluate the model's performance using appropriate metrics to ensure its accuracy and effectiveness.
            </p>
          </div>
        )}
        {show4 && (
          <div className="flex flex-col justify-start text-start items-center m-5 w-3/4 md:w-2/4">
            <h1 className="text-2xl font-bold mt-2">4. Deployment and Integration</h1>
            <p className="text-lg mt-5 px-5">
              <strong>Deployment:</strong> We deploy the trained model into your production environment, ensuring seamless integration with your existing systems.
              <br></br>
              <strong>API Development:</strong> We develop APIs to allow your applications to interact with the AI model.
            </p>
          </div>
        )}
        {show5 && (
          <div className="flex flex-col justify-start text-start items-center m-5 w-3/4 md:w-2/4">
            <h1 className="text-2xl font-bold mt-2">5. Monitoring and Optimization</h1>
            <p className="text-lg mt-5 px-5">
              <strong>Performance Monitoring:</strong> We continuously monitor the model's performance and identify areas for improvement.
              <br></br>
              <strong>Retraining and Optimization:</strong> We retrain the model as needed to maintain its accuracy and effectiveness.
              <br></br>
              <strong>Regular Updates:</strong> We stay updated on the latest AI advancements and incorporate them into your solution as appropriate.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default OurProcess;
