import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';
 
const PROJECTS = [
   {
       id: 1,
       title: 'Example React Application',
       description: 'A React App that I built, involving JS and core web dev concepts.',
       link: 'https://github.com/OwenShuaiLiu/portfolio-v',
       image: project1
   },
   {
       id: 2,
       title: 'My API',
       description: 'A REST API that I built from scratch with GET and POST requests.',
       link: 'https://github.com/OwenShuaiLiu/Boomerang_Back_End',
       image: project2
   },
   {
       id: 3,
       title: 'Analytics Project',
       description: 'An ML-based demand forecasting project for my graduate capstone.',
       link: 'https://github.com/OwenShuaiLiu/capstone_demand_modeling',
       image: project3
   }
];
 
export default PROJECTS;
