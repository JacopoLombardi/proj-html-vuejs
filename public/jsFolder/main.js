

//////////////////  Main_jumbotron  //////////////////////


// array del titolo e testo
export const titleAndTextArray = [
   {
      title: 'start investing in you',
      text: 'With over 1200 courses in 18 subjects, you\'re guaranteed to find something that\'s right for you.',
      textBtn: 'join for free'
   }
];




// array di oggetti della composizione dell'immagine
export const imageCompositionArray = [
   {
      class: 'img_base',
      src: '/img/base.png',
      alt: 'immagine base'
   },
   {
      class: 'img_book1',
      src: '/img/book1.png',
      alt: 'immagine libro 1'
   },
   {
      class: 'img_book2',
      src: '/img/book2.png',
      alt: 'immagine libro 2'
   },
   {
      class: 'img_lens',
      src: '/img/magnifier.png',
      alt: 'immagine lente d\'ingrandimento'
   },
   {
      class: 'img_bubblespeech',
      src: '/img/bubblespeech.png',
      alt: 'immagine discorso in bolla'
   }
];




// array di oggetti delle cards
export const cardsArray = [
   {
      class: 'fa-globe',
      title: 'Worldwide Recognize',
      text: 'Our online course certificates can be used around the world and also in most popular universities and companies'
   },
   {
      class: 'fa-desktop',
      title: 'Mostly Online Learning (sd)',
      text: 'Masterstudy online certificates can be obtained in a range of specialized areas and typically take about a year to complete'
   },
   {
      class: 'fa-calendar-days',
      title: 'Graduate in as little as 1 Year',
      text: 'Online post-graduate certificates are a popular way to develop your professional qualifications of Masterstudy'
   }
];








//////////////////  Main_photo_dashboard  //////////////////////


export const photoDashboardArray = {

   bigPhoto: [
      {
         src: '/img/cat_1-1540x750.jpg',
         alt: 'developer',
         title: 'software development',
         text: '5 courses'
      }
   ],

   rightToBigPhoto: [
      {
         src: '/img/cat_2-740x310.jpg',
         alt: 'art',
         title: 'art',
         text: '8 courses'
      },
      {
         src: '/img/cat_3-740x310.jpg',
         alt: 'pc',
         title: 'material design',
         text: '5 courses'
      }
   ],
   
   downPhoto: [
      {
         src: '/img/cat_4-740x310.jpg',
         alt: 'exercise',
         title: 'exercise',
         text: '5 courses'
      },
      {
         src: '/img/cat_5-740x310.jpg',
         alt: 'music',
         title: 'music',
         text: '7 courses'
      },
      {
         src: '/img/cat_6-740x310.jpg',
         alt: 'photography',
         title: 'photography',
         text: '4 courses'
      }
   ]
};









//////////////////  Main_limitless  //////////////////////


export const limitlesTextArray = [
   {
      title: 'Limitless learning, more possibilities',
      text: 'Online courses open the opportunity for learning to almost anyone, regardless of their sheduling commitments.',
      textBtn: 'read more'
   }
];









/////////////////  Main_recent_courses  ////////////////////


export const recentCoursesArray = {

   menu: [
      'all categories',
      'art',
      'exercise',
      'material design',
      'music',
      'photography',
      'software development',
   ],



   cards: [
      {
         src: '/img/photo-1461749280684-dccba630e2f6-544x322.jpeg',
         alt: 'code',
         type: 'apache',
         text: 'Web Coding and Apache Basics',
         timeOrStars: 
            {
               courseLength: '6 hours',
               iconClock: '<i class="fa-regular fa-clock"></i>',
               stars: false
            },
         priceAndDiscount:
            {
               price: 'Free',
               discount: false
            }
      },
      {
         src: '/img/cat_2-544x322.jpg',
         alt: 'art',
         type: 'art',
         text: 'Real Things Art Painting by Jason Ni',
         timeOrStars: 
            {
               courseLength: '6 hours',
               iconClock: '<i class="fa-regular fa-clock"></i>',
               stars: false
            },
         priceAndDiscount:
            {
               price: '45',
               discount: '60'
            }
      },
      {
         src: '/img/course-preview-544x322.jpg',
         alt: 'masterstudy',
         type: 'software development',
         text: 'Basics of Masterstudy',
         timeOrStars: 
            {
               courseLength: false,
               iconClock: false,
               stars: true
            },
         priceAndDiscount:
            {
               price: 'Free',
               discount: false
            }
      },
      {
         src: '/img/photo-1496307042754-b4aa456c4a2d-544x322.jpeg',
         alt: 'music',
         type: 'electronic',
         text: 'How to be a DJ? Make Electronic Music',
         timeOrStars: 
            {
               courseLength: false,
               iconClock: false,
               stars: true
            },
         priceAndDiscount:
            {
               price: '49',
               discount: '59'
            }
      },
      {
         src: '/img/photo-1416339134316-0e91dc9ded92-scaled-544x322.jpeg',
         alt: 'design',
         type: 'communication',
         text: 'Design Instrument for Communication',
         timeOrStars: 
            {
               courseLength: '6 hours',
               iconClock: '<i class="fa-regular fa-clock"></i>',
               stars: false
            },
         priceAndDiscount:
            {
               price: false,
               discount: false
            }
      },
      {
         src: '/img/cathryn-lavery-67852-unsplash-544x322.jpg',
         alt: 'book',
         type: 'art',
         text: 'Make your Concept Right and Beautiful',
         timeOrStars: 
            {
               courseLength: '6 hours',
               iconClock: '<i class="fa-regular fa-clock"></i>',
               stars: false
            },
         priceAndDiscount:
            {
               price: '70',
               discount: false
            }
      },
      {
         src: '/img/photo-1475452779376-caebfb988090-544x322.jpeg',
         alt: 'bike',
         type: 'bicycling',
         text: 'Road Bike Manual or How to Be a Champion',
         timeOrStars: 
            {
               courseLength: '6 hours',
               iconClock: '<i class="fa-regular fa-clock"></i>',
               stars: false
            },
         priceAndDiscount:
            {
               price: '20',
               discount: false
            }
      },
      {
         src: '/img/cristian-grecu-762012-unsplash-min-scaled-544x322.jpg',
         alt: 'mountain',
         type: 'documentary',
         text: 'How to Make Beautiful Landscape photos?',
         timeOrStars: 
            {
               courseLength: '6 hours',
               iconClock: '<i class="fa-regular fa-clock"></i>',
               stars: false
            },
         priceAndDiscount:
            {
               price: '60',
               discount: false
            }
      },
      {
         src: '/img/landscape-544x322.jpg',
         alt: 'paint',
         type: 'art',
         text: 'Let\'s paint van Gogh\'s Starry Night',
         timeOrStars: 
            {
               courseLength: '6 hours',
               iconClock: '<i class="fa-regular fa-clock"></i>',
               stars: false
            },
         priceAndDiscount:
            {
               price: '79',
               discount: false
            }
      },
      {
         src: '/img/12345-1-544x322.png',
         alt: 'unreal',
         type: 'nvidia',
         text: 'Nvidia and UE4 Technologies Practise',
         timeOrStars: 
            {
               courseLength: false,
               iconClock: false,
               stars: true
            },
         priceAndDiscount:
            {
               price: 'Free',
               discount: false
            }
      },
      {
         src: '/img/jakob-owens-198234-unsplash-min-1-544x322.png',
         alt: 'camera',
         type: 'art',
         text: 'How to Work with Legendary RED camera?',
         timeOrStars: 
            {
               courseLength: '6 hours',
               iconClock: '<i class="fa-regular fa-clock"></i>',
               stars: false
            },
         priceAndDiscount:
            {
               price: 'Free',
               discount: false
            }
      },
      {
         src: '/img/promo_tf-544x322.jpg',
         alt: 'promo',
         type: 'software development',
         text: 'MasterStudy Mobile LMS App',
         timeOrStars: 
            {
               courseLength: '2 hours',
               iconClock: '<i class="fa-regular fa-clock"></i>',
               stars: false
            },
         priceAndDiscount:
            {
               price: 'Free',
               discount: false
            }
      },
   ]
};










/////////////////  Main_proud  ////////////////////


export const proudArray = [
   {
      number: '2000',
      type: 'students'
   },
   {
      number: '950',
      type: 'courses'
   },
   {
      number: '1600',
      type: 'hours video'
   },
   {
      number: '150',
      type: 'countries reached'
   },
];








/////////////////  Main_become  ////////////////////


export const becomeArray = [
   {
      src: '/img/image_box_1-221x231.png',
      alt: 'become',
      title:'Become an instructor',
      text: 'Teach what you love. MasterStudy gives you the tools to create a course.',
      btnText: 'start teaching'
   },
   {
      src: '/img/image_box_2-234x231.png',
      alt: 'setup',
      title:'Setup For Business',
      text: 'Get unlimited access to 2,500 of Udemy\'s top courses for your team.',
      btnText: 'doing business'
   }
];










/////////////////  Main_come  ////////////////////


export const comeArray = [
   {
      titlePrincipal: 'Come as you are',
      textPrincipal: 'MasterStudy used is an excellent workshop whether you come as a counselor, advisor, administrator, or faculty member. I am going home empowered. i am looking forward to attending the On Course MasterStudy and the MasterStudy national Conference next year and facilitating the user of this excellent retention/student success course at my college.',
      titleScondary: 'tim sab',
      textSecondary: 'generale developer, stylemix themes'
   }
];