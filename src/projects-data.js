const projectsData = [
    {
        id: 1,
        name: 'Todo App',
        descr: `The classic Todo app. This app includes a dark/light theme toggle and drag & drop reordering.`,
        code: 'https://github.com/Umlen/todo-app',
        demo: 'https://todo-app-tau-livid.vercel.app/',
        mobileImg: '../images/projects/todo-app-mobile.png',
        desktopImg: '/images/projects/todo-app-desktop.png',
        madeWith: 'HTML5 CSS3 SCSS JavaScript'
    },
    {
        id: 2,
        name: 'Password Generator',
        descr: `The simple Password Generator app. 
                This app has a password length option and toggle options for "symbols" and "numbers". 
                Also it has a "click to copy" feature.`,
        code: 'https://github.com/Umlen/solo-project-password-generator',
        demo: 'https://euphonious-creponne-ac6f32.netlify.app/',
        mobileImg: '/images/projects/password-generator-mobile.png',
        desktopImg: '/images/projects/password-generator-desktop.png',
        madeWith: 'HTML5 CSS3 JavaScript'
    },
    {
        id: 3,
        name: 'Restaurant Ordering App',
        descr: `This single page app renders the menu items using JavaScript. 
                It has a payment modal form. After payment, users can rate the app.`,
        code: 'https://github.com/Umlen/restaurant-ordering-app-solo-project',
        demo: 'https://astounding-melba-d6c85a.netlify.app/',
        mobileImg: '/images/projects/restaurant-ordering-app-mobile.png',
        desktopImg: '/images/projects/restaurant-ordering-app-desktop.png',
        madeWith: 'HTML5 CSS3 SCSS JavaScript'
    },
    {
        id: 4,
        name: 'Color Scheme Generator',
        descr: `This app was made with a mobile first approach. 
                Users are able to choose the seed color, count of colors and the scheme mode. 
                The app takes all these options and makes an api request to get the color scheme. 
                This app also has "get random scheme" and "click to copy" features.`,
        code: 'https://github.com/Umlen/solo-project-color-scheme-generator',
        demo: 'https://stupendous-lily-197b40.netlify.app/',
        mobileImg: '/images/projects/color-scheme-generator-mobile.png',
        desktopImg: '/images/projects/color-scheme-generator-desktop.png',
        madeWith: 'HTML5 CSS3 SCSS JavaScript API'
    },
    {
        id: 5,
        name: 'Travel Journal',
        descr: `This is the simple React app. This app was made only for practicing React.js. 
                It takes data from a separate data.js file and renders components using props.`,
        code: 'https://github.com/Umlen/travel-journal-solo-project',
        demo: 'https://profound-eclair-3df2ee.netlify.app/',
        mobileImg: '/images/projects/travel-journal-mobile.png',
        desktopImg: '/images/projects/travel-journal-desktop.png',
        madeWith: 'HTML5 CSS3 ReactJS'
    },  
    {
        id: 6,
        name: 'Movie Watchlist',
        descr: `This app includes two pages: home page and user's watchlist. 
                Users type a movie name in the input field and the app makes an api request to find this movie. 
                Users are able to add or remove movies from their watchlist. 
                The app uses LocalStorage to save the user's watchlist.`,
        code: 'https://github.com/Umlen/solo-project-movie-watchlist',
        demo: 'https://dulcet-kitsune-4568ad.netlify.app/',
        mobileImg: '/images/projects/movie-watchlist-mobile.png',
        desktopImg: '/images/projects/movie-watchlist-desktop.png',
        madeWith: 'HTML5 CSS3 SCSS JavaScript API'
    }, 
    {
        id: 7,
        name: 'PayAPI website',
        descr: `This 4-page website was made with a mobile first approach. 
                It uses JavaScript for custom styling invalid form fields`,
        code: 'https://github.com/Umlen/payapi-multi-page-website',
        demo: 'https://guileless-daffodil-72a363.netlify.app/',
        mobileImg: '/images/projects/pay-api-website-mobile.png',
        desktopImg: '/images/projects/pay-api-website-desktop.png',
        madeWith: 'HTML5 CSS3 SCSS JavaScript'
    },
    {
        id: 8,
        name: 'Photosnap Website',
        descr: `This is the multi-page website. This website was made with a mobile first approach. 
                It uses JavaScript for rendering users' stories and for toggle monthly/yearly pay plans.`,
        code: 'https://github.com/Umlen/photosnap-multi-page-website',
        demo: 'https://chimerical-narwhal-04b2a7.netlify.app/',
        mobileImg: '/images/projects/photosnap-website-mobile.png',
        desktopImg: '/images/projects/photosnap-website-desktop.png',
        madeWith: 'HTML5 CSS3 SCSS JavaScript'
    }, 
    {
        id: 9,
        name: 'Quizzical App',
        descr: `This Quizzical app was made using ReactJS. 
                Users are able to choose the category and difficulty of the questions. 
                App makes an api request and renders a quiz. Users select answers and push the check button. 
                The app lights right/wrong answers, counts the user's right answers and suggests to play again.`,
        code: 'https://github.com/Umlen/quizzical-app-solo-project',
        demo: 'https://lovely-unicorn-4b8be9.netlify.app/',
        mobileImg: '/images/projects/quizzical-app-mobile.png',
        desktopImg: '/images/projects/quizzical-app-desktop.png',
        madeWith: 'HTML5 CSS3 ReactJS JavaScript API'
    },
    {
        id: 10,
        name: 'My Portfolio',
        descr: `This fully responsive website was made with a mobile first approach, 
                using ReactJS and React Router. `,
        code: 'https://github.com/Umlen/new-portfolio',
        demo: 'https://viktorpatrin.com/',
        mobileImg: '/images/projects/my-portfolio-mobile.png',
        desktopImg: '/images/projects/my-portfolio-desktop.png',
        madeWith: 'HTML5 CSS3 ReactJS ReactRouter JavaScript'
    },
];

export default projectsData;
