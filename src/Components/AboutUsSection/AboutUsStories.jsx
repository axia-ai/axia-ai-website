import React from "react";
import AboutUsStoryCard from "./AbourUsStoryCard";

function AboutUsStory() {
  return (
    <div className="flex flex-col items-center bg-blue-50 px-6 py-8">
      <div className="max-w-5xl w-full text-center mb-10">
        <h2 className="text-3xl font-bold mt-2">Meet Our Team</h2>
        <p className="text-gray-600 mt-4">
          Posuere sed eu proin elementum nulla. Sed non blandit auctor consequat
          sit orci sem. Ultrices adipiscing dictumst purus convallis.
        </p>
      </div>
      <div className="max-w-6xl w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AboutUsStoryCard
          year={"2015"}
          title={"Shreyas Karanjkar"}
          description={
            "In fames accumsan proin elit nec blandit. Lectus est elit eleifend amet dictum nibh. Cursus dui sit fames."
          }
        />
        <AboutUsStoryCard
          year={"2015"}
          title={"Akash Nagarkar"}
          description={
            "In fames accumsan proin elit nec blandit. Lectus est elit eleifend amet dictum nibh. Cursus dui sit fames."
          }
        />
        <AboutUsStoryCard
          year={"2015"}
          title={"Siddharth Khonde"}
          description={
            "In fames accumsan proin elit nec blandit. Lectus est elit eleifend amet dictum nibh. Cursus dui sit fames."
          }
        />
      </div>
    </div>
  );
}

export default AboutUsStory;
