import { atom } from 'recoil';


import img2 from "../../Assests/Projects/AdoptMe/adoptme.png"
import img2$1 from "../../Assests/Projects/AdoptMe/ad2.png"
import img2$2 from "../../Assests/Projects/AdoptMe/ad3.png"
import img2$4 from "../../Assests/Projects/AdoptMe/ad4.png"
import img2$5 from "../../Assests/Projects/AdoptMe/ad5.png"
import img2$6 from "../../Assests/Projects/AdoptMe/ad6.png"
import img2$7 from "../../Assests/Projects/AdoptMe/d7.png"
  

import img3 from "../../Assests/Projects/Booking-system/b1.png"
import img3$1 from "../../Assests/Projects/Booking-system/b2.png"
import img3$2 from "../../Assests/Projects/Booking-system/b3.png"
import img3$3 from "../../Assests/Projects/Booking-system/b4.png"
import img3$4 from "../../Assests/Projects/Booking-system/b5.png"
import img3$5 from "../../Assests/Projects/Booking-system/b6.png"

import img4 from "../../Assests/Projects/Ecommerce/e1.png"
import img4$1 from "../../Assests/Projects/Ecommerce/e2.png"
import img4$2 from "../../Assests/Projects/Ecommerce/e3.png"
import img4$3 from "../../Assests/Projects/Ecommerce/e4.png"
import img4$4 from "../../Assests/Projects/Ecommerce/e5.png"
import img4$5 from "../../Assests/Projects/Ecommerce/e6.png"
import img4$6 from "../../Assests/Projects/Ecommerce/e7.png"

   
import img5 from "../../Assests/Projects/materialUi/mt1.png"
import img5$1 from "../../Assests/Projects/materialUi/mt2.png"
import img5$2 from "../../Assests/Projects/materialUi/mt3.png"
import img5$3 from "../../Assests/Projects/materialUi/mt4.png"
import img5$4 from "../../Assests/Projects/materialUi/mt5.png"
import img5$5 from "../../Assests/Projects/materialUi/mt6.png"
 
  
import img6 from "../../Assests/Projects/CRUD/1.png"
import img6$1 from "../../Assests/Projects/CRUD/2.png"
import img6$2 from "../../Assests/Projects/CRUD/3.png"
import img6$3 from "../../Assests/Projects/CRUD/4.png"
import img6$4 from "../../Assests/Projects/CRUD/5.png"


import img7 from "../../Assests/Projects/finalDesign/u.png"
import img7$1 from "../../Assests/Projects/finalDesign/2.png"
import img7$2 from "../../Assests/Projects/finalDesign/3.png"
import img7$3 from "../../Assests/Projects/finalDesign/4.png"
import img7$4 from "../../Assests/Projects/finalDesign/5.png"
import img7$5 from "../../Assests/Projects/finalDesign/6.png"
import img7$6 from "../../Assests/Projects/finalDesign/7.png"
import img7$7 from "../../Assests/Projects/finalDesign/8.png"
import img7$8 from "../../Assests/Projects/finalDesign/9.png"

import img8 from "../../Assests/Projects/responsive/r1.png"
import img8$1 from "../../Assests/Projects/responsive/k.png"
import img8$2 from "../../Assests/Projects/responsive/h.png"
 

import img9 from "../../Assests/Projects/FetchNext/m1.png"
import img9$1 from "../../Assests/Projects/FetchNext/m2.png"
import img9$2 from "../../Assests/Projects/FetchNext/m3b.png"
 
 

import img10 from "../../Assests/Projects/generatedCard/gc1.png"
import img10$1 from "../../Assests/Projects/generatedCard/gc2.png"
import img10$2 from "../../Assests/Projects/generatedCard/gc1.png"
 

import img11 from "../../Assests/Projects/EditStylingApp/es1.png"
import img11$1 from "../../Assests/Projects/EditStylingApp/es2.png"
import img11$2 from "../../Assests/Projects/EditStylingApp/es3.png"
import img11$3 from "../../Assests/Projects/EditStylingApp/es4.png"

  
import img12 from "../../Assests/Projects/NewHeroSection/hero1.png"
import img12$1 from "../../Assests/Projects/NewHeroSection/hero2.png"
 
 
import img13 from "../../Assests/Projects/jqueryGallery/j2.png"
import img13$1 from "../../Assests/Projects/jqueryGallery/j1.png"
import img13$2 from "../../Assests/Projects/jqueryGallery/j3.png"



export const myProjects = atom({
    key: 'myProjects', 
    default: [


             {id:1 , title : "Booking System" , category : "next" , description : "Using HTML5 , CSS3 , Font Awesome ,    Firebase(fireStore)    , Tailwind , JavaScript ,   Next JS" ,
            images : {
                cover:img3, p1:img3$1,p2:img3$2,p3:img3$3,p4:img3$4,p5:img3$5
            }
             ,demo : "https://booking-system-kappa-navy.vercel.app/" , github : "https://github.com/Fadi-Maher/Booking-system" , icon : "fa-solid fa-hotel"
            }


        ,{id:2 , title : "Adopt Me" , category : "react" , description : "Using HTML5 , CSS3 , Font Awesome , Ajax(API) , Bootstrap , JavaScript , React JS" ,
         images : {
            cover:img2, p1:img2$1,p2:img2$2,p3:img2$4,p4:img2$5,p6:img2$6,p7:img2$7 
        }
            ,demo : "https://fadi-maher.github.io/Adopt-me-React-Js/" , github : "https://github.com/Fadi-Maher/Adopt-me-React-Js" , icon : "fa-solid fa-dog" 
        }


       
        

        ,{id:3 , title : "Fresh Cart" , category : "react" , description : "Using HTML5 , CSS3 , Font Awesome , Ajax(API) , Tailwind , JavaScript , React JS" ,
        images : {
            cover:img4, p1:img4$1,p2:img4$2,p3:img4$3,p4:img4$4,p5:img4$5,p6:img4$6
        }
          ,demo : "https://clevermarket.netlify.app" , github : "https://github.com/Fadi-Maher/E-commerce-React" , icon : "fa-solid fa-shop " 
        }

 

        ,{id:4 , title : "Landing page mui " , category : "react" , description : "Using HTML5 , CSS 3 , JavaScript , React JS , Font Awesome,  context, Material UI " ,
         images : {
            cover:img5, p1:img5$1,p2:img5$2, p3:img5$3 , p4:img5$4 ,p5:img5$5
        }
            ,demo : " " , github : " https://github.com/Fadi-Maher/Responsive-Landing-Page-with-React-Material-UI.git" , icon : "fa-brands fa-magento" 
        }


 

        
        , {id:5 , title : "Crud-Operation" , category : "js" , description : "Using HTML5 , CSS 3 , JavaScript , Bootstrap" ,
         images : {
            cover:img6, p1:img6$1,p2:img6$2, p3:img6$3 , p4:img6$4   
        }
            ,demo : " " , github : " https://github.com/Fadi-Maher/Crud-operation-javaScript" , icon : "fa-brands fa-magento" 
        }


 
        
        ,{id:6 , title : "Final Design" , category : "css" , description : "Using HTML5 , CSS3(flexBox , GridSystem) , Font Awesome ,   " ,
        images : {
            cover:img7, p1:img7$1,p2:img7$2,p3:img7$3,p4:img7$4,p5:img7$5,p6:img7$6,p7:img7$6,p8:img7$7, p9:img7$8,
        }
         ,demo : "" , github : "https://github.com/Fadi-Maher/Design-tasks-.git" , icon : "fa-brands fa-codepen" 
        }
        

 

        
       ,{id:7 , title : "Responsive design" , category : "css" , description : "Using HTML5 , CSS3 (flex box ), Font Awesome , Bootstrap , " ,
        images : {
            cover:img8, p1:img8$1, p2:img8$2, 
        }
         ,demo : " " , github : "https://github.com/Fadi-Maher/Responsive-Design-task-bootstrap-.git " , icon : "fa-brands fa-figma" }


 

        
         ,{id: 8, title : "Fetch Movies" , category : "next" , description : "Using HTML5 , CSS3 ,    Tailwind , JavaScrip , Fetch APIs , Next Router , nextJS " ,
        images : {
            cover:img9, p1:img9$1, p2:img9$2, 
        }
         ,demo : "https://66ef5fda1b621dfdb1a7c896--nextmoviess.netlify.app/" , github : "https://github.com/Fadi-Maher/NextJs-Routing---Fetch-data--Responsive-Design" , icon : "fa-solid fa-film" }


 
        
       ,{id: 9, title : "Generated Card" , category : "js" , description : "Using HTML5 , CSS3 ,     JavaScript   " ,
        images : {
            cover:img10, p1:img10$1 ,p2:img10$2 
        }
         ,demo : " " , github : " https://github.com/Fadi-Maher/Generate-Card-JavaScript" , icon : "fa-regular fa-image" }



 

        
         ,{id: 10, title : "Edit Styling App" , category : "js" , description : "Using HTML5 , CSS3 ,     JavaScript   " ,
        images : {
            cover:img11, p1:img11$1 ,p2:img11$2 ,p3:img11$3 
        }
         ,demo : " " , github : " https://github.com/Fadi-Maher/Edit-Styling-App-JavaScript" , icon : "fa-regular fa-image" }


 
         
        ,{id: 11, title : "animated  Section" , category : "css" , description : "Using HTML5 , CSS3    " ,
        images : {
            cover:img12 , p1:img12$1
        }
         ,demo : " " , github : " https://github.com/Fadi-Maher/Design-tasks-" , icon : "fa-solid fa-section" }



 
            
          ,{id: 12, title : "Kids Gallery" , category : "jQuery" , description : "Using HTML5 , CSS3 ,Jquery , JavaScript   " ,
        images : {
            cover:img13, p1:img13$1, p2:img13$2
        }
         ,demo : " " , github : "https://github.com/Fadi-Maher/Kids-Gallery--Jquery" , icon : " fa-solid fa-camera" }
      
    ]
  });