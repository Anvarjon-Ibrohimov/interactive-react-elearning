// import Images
import react1 from "./images/react1.jpg";
import react2 from "./images/react2.png";
import js1 from "./images/js1.jpeg";
import js2 from "./images/js2.png";
import soon1 from "./images/soon1.png";
import soon2 from "./images/soon2.jpg";

export const CourseState = () => {
  return [
    {
      title: "Interactive React and Redux",
      mainImg: react1,
      secondaryImg: react2,
      url: "/courses/react",
      awards: [
        {
          title: "lorem ipsum dolor",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, hic!",
        },
        {
          title: "lorem ipsum dolor",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, hic!",
        },
        {
          title: "lorem ipsum dolor",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, hic!",
        },
      ],
    },
    {
      title: "Interactive Javascript",
      mainImg: js1,
      secondaryImg: js2,
      url: "/courses/javascript",
      awards: [
        {
          title: "lorem ipsum dolor",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, hic!",
        },
        {
          title: "lorem ipsum dolor",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, hic!",
        },
        {
          title: "lorem ipsum dolor",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, hic!",
        },
      ],
    },
    {
      title: "Soon...",
      mainImg: soon1,
      secondaryImg: soon2,
      url: "/courses/soon",
      awards: [
        {
          title: "lorem ipsum dolor",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, hic!",
        },
        {
          title: "lorem ipsum dolor",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, hic!",
        },
        {
          title: "lorem ipsum dolor",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, hic!",
        },
      ],
    },
  ];
};
