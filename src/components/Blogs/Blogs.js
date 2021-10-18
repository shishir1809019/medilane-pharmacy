import React from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {
  const blogsData = [
    {
      id: 1,
      name: "COVID-19",
      description:
        "Coronavirus disease 2019 (COVID-19) is a contagious disease caused by severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2). The first known case was identified in Wuhan, China, in December 2019.[7] The disease has since spread worldwide, leading to an ongoing pandemic.[8]",
      url: "https://www.oie.int/app/uploads/2021/04/microsoftteams-image-1.jpeg",
    },
    {
      id: 2,
      name: "Dengue fever",
      description:
        "Dengue fever is a mosquito-borne tropical disease caused by the dengue virus.[1] Symptoms typically begin three to fourteen days after infection.[2] These may include a high fever, headache, vomiting, muscle and joint pains, and a characteristic skin rash.[",
      url: "https://imgk.timesnownews.com/story/Dengues.jpg?tr=w-1200,h-900",
    },
    {
      id: 3,
      name: "Headache",
      description:
        "Headache is the symptom of pain in the face, head, or neck. It can occur as a migraine, tension-type headache, or cluster headache. There is an increased risk of depression in those with severe headaches.",
      url: "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/06/GettyImages-56970892_thumb.jpg",
    },
  ];
  return (
    <div className="container">
      <h2 className="text-center my-4">Our Recent Blogs</h2>
      {blogsData.map((blogData) => (
        <Blog blogData={blogData}></Blog>
      ))}
    </div>
  );
};

export default Blogs;
