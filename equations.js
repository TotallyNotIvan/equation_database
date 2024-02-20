const MathJax = {
  tex: {
    inlineMath: [['$','$'],['\\(', '\\)']]
  },
  svg: {
    fontCache: 'global'
  }
};
const data =
[
    {
      "name": "Quadratic Formula",
      "formula": "$$x = {-b \pm \sqrt{b^2-4ac} \over 2a}$$",
      "extra": "x	=	Unknown<br>a, b, c	=	Constant",
      "variables": ["x", "Constants"],
      "subjects": ["Algebra", "Geometry"]
    },
    {
      "name": "Pressure-Volume Work",
      "formula": "$$W=-P \\nabla V$$",
      "extra": "W = Work<br>P = Pressure<br>V = Volume",
      "variables": ["Work", "Pressure", "Volume"],
      "subjects": ["Thermodynamics", "Chemistry"]
    }
];

// const variables = 
// [
//     "Constants",
//     "Pressure",
//     "Volume",
//     "Work",
//     "x",
// ];
// const subjects = 
// [
//     "Algebra",
//     "Chemistry",
//     "Geometry",
//     "Thermodynamics",
// ];


// const data = [
//   {
//     name: "Quadratic Formula",
//     formula: "$$x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}$$",
//     extra: "<span>x = Unknown</span> <span>a, b, c = Constants</span>",
//     variables: ["x", "Constants"],
//     subjects: ["Algebra", "Geometry"]
//   },
//   {
//     name: "Pressure-Volume Work",
//     formula: "$$W=-P \\nabla V$$",
//     extra: "<span>W = Work</span> <span>P = Pressure</span> <span>V = Volume</span>",
//     variables: ["Work", "Pressure", "Volume"],
//     subjects: ["Thermodynamics", "Chemistry"]
//   }
// ];

// export default data;