import React from "react";
import servicecfaq from "../../assets/servicecfaq.png";
import { ChakraProvider } from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

const ServicesAccordainsection = () => {
  return (
    <>
      <ChakraProvider>
        <div className="flex justify-center items-center px-14 m-16 max-md:flex-col max-md:p-2 max-md:m-2">
          <div className="w-1/2 max-md:w-auto max-md:m-5">
            <img src={servicecfaq} alt="" className="rounded-lg" />
          </div>
          <div className="w-1/2 flex flex-col justify-center items-start max-md:w-auto max-md:items-center">
            <h1 className="text-5xl font-poppins max-md:text-3xl max-md:text-center">
              Everything You Need to Know About ImmiGo
            </h1>
            <p className="text-base font-poppins text-gray-500 my-5 max-md:text-sm max-md:text-center">
              At nullam leo consectetur euismod enim. Orci donec sapien et
              semper fringilla pellentesque in diam mi. Pulvinar ante sed velit
              ac nibh. Amet duis orci nibh nullam. Phasellus suspendisse ornare
              arcu eu orci urna justo.
            </p>
            <Accordion defaultIndex={[0]}>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      className="font-poppins text-2xl"
                    >
                      Section 1 title
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  pb={4}
                  className="font-poppins text-base text-gray-500 max-md:text-center"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      className="font-poppins text-2xl"
                    >
                      Section 2 title
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  pb={4}
                  className="font-poppins text-base text-gray-500 max-md:text-center"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      className="font-poppins text-2xl"
                    >
                      Section 3 title
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  pb={4}
                  className="font-poppins text-base text-gray-500 max-md:text-center"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      className="font-poppins text-2xl"
                    >
                      Section 4 title
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  pb={4}
                  className="font-poppins text-base text-gray-500 max-md:text-center"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </ChakraProvider>
    </>
  );
};

export default ServicesAccordainsection;
