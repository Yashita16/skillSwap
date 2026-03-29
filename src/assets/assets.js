import favicon from './favicon.png';
import intro_background from './intro_background.png';
import dummy_picture_1 from './dummy_picture_1.jpg'
import dummy_picture_2 from './dummy_picture_2.jpg'
import dummy_picture_3 from './dummy_picture_3.jpg'




const assets ={
  logo: favicon,
  intro_background: intro_background
}

export const people = [
    {
      name:"Rahul Sharma",
      icon: dummy_picture_1,
      bio:'Passionate Learner Who Loves Building projects',
      offers: ["React"],
      wants: ["UI/UX" ,"Adobe" , "PhotoShop"]


    } ,
     {
      name:"Monika Barala",
      icon: dummy_picture_2,
      bio:'Passionate Dancer Who Loves to Dance',
      offers: ["Dance"],
      wants: ["C++" ,"Web Development" , "Dsa"]


    } ,
     {
      name:"Aman Agarwal",
      icon: dummy_picture_3,
      bio:'Passionate Trader Who Loves to Trade',
      offers: ["Trade"],
      wants: ["Singing" ,"Guitar" , "Yoga"]


    } 
];




export default assets;
