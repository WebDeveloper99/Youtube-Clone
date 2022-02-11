

// ----------------------------Section-Data--------------------------------------

import Home from '../Image/icons/home.svg';
import Kesfet from "../Image/icons/kesfet.svg";
import Abon from "../Image/icons/abon.svg";
import Kitap from "../Image/icons/gicmis.svg";
import Gecmis from "../Image/icons/home.svg";
import Vedio from "../Image/icons/vedio.svg";
import Daha from "../Image/icons/daha.svg";
import Beginde from "../Image/icons/begendi.svg";


// ------------------------------Main-Data-----------------------------------------

import image1 from '../Image/imgs/images1.jpg'
import image2 from '../Image/imgs/images2.jpg'
import image3 from '../Image/imgs/images3.jpg'
import image4 from '../Image/imgs/images4.jpg'
import image5 from '../Image/imgs/images5.jpg'
import image6 from '../Image/imgs/images6.jpg'
import image7 from '../Image/imgs/images7.jpg'
import image8 from '../Image/imgs/images8.jpg'
import image9 from '../Image/imgs/images9.jpg'
import image10 from '../Image/imgs/images10.jpg'
import image11 from '../Image/imgs/images11.jpg'
import image12 from '../Image/imgs/images12.jpg'

import Avalogo1 from '../Image/icons/game-avatar.svg'

import Anasayfa from '../Components/utils/Home'
import Keshfet from '../Components/utils/About'
import Team from '../Components/utils/Team'
import MainBody from '../Components/Main/MainBody/MainBody'

export const myComp = [
    {
        id:1,
        path: '',
        comp: MainBody,
        title:'DragoN_1',
    },
    {
        id:2,
        path: 'Anasayfa',
        comp: MainBody,
        title:'DragoN_2',
    },
    {
        id:3,
        path: 'Kesfet',
        comp: Keshfet,
        title:'DragoN_3',
    },
    {
        id:4,
        path: 'pages/:id',
        comp: Team,
        title:'DragoN_4',
    },
   
]




export const ImageFullData = [
    {
        img: image1,
        avatar: Avalogo1,
        title: 'Lorem Ipsum is simply dummy text of',
        chanelName: 'SportTeam',
        date: '2345 martta tomosha qilindi 2 oy oldin',
        category: "Kino",
    },
    {
        img: image2,
        avatar: Avalogo1,
        title: 'Lorem Ipsum is simply dummy text of',
        chanelName: 'TopMuzon',
        date: '2342 martta tomosha qilindi 2 oy oldin',
        category: "Comedy",
    },
    {
        img: image3,
        avatar: Avalogo1,
        title: 'Lorem Ipsum is simply dummy text of',
        chanelName: 'WorlD',
        date: '2 oy oldin',
        category: "Futbol",
    },
    {
        img: image4,
        avatar: Avalogo1,
        title: 'Lorem Ipsum is simply dummy text of',
        chanelName: 'Global.uz',
        date: '2342 martta tomosha qilindi 2 oy oldin',
        category: 'Mix',
    },
    {
        img: image5,
        avatar: Avalogo1,
        title: 'Lorem Ipsum is simply dummy text of',
        chanelName: 'AMD',
        date: '2342 martta tomosha qilindi 2 oy oldin',
        category: "Cartons",
    },
    {
        img: image6,
        avatar: Avalogo1,
        title: 'Lorem Ipsum is simply dummy text of',
        chanelName: 'Intel',
        date: '2342 martta tomosha qilindi 2 oy oldin',
        category: "Muzik",
    },
    {
        img: image7,
        avatar: Avalogo1,
        title: 'Lorem Ipsum is simply dummy text of',
        chanelName: 'QvZ',
        date: '2342 martta tomosha qilindi 2 oy oldin',
        category: "Futbol",
    },
    {
        img: image8,
        avatar: Avalogo1,
        title: 'Lorem Ipsum is simply dummy text of',
        chanelName: 'RizaNova.uz',
        date: '2342 martta tomosha qilindi 2 oy oldin',
        category: 'Sanat',
    },
    {
        img: image9,
        avatar: Avalogo1,
        title: 'Lorem Ipsum is simply dummy text of',
        chanelName: 'Tarona.net',
        date: '2342 martta tomosha qilindi 2 oy oldin',
        category: "UX Tasarim",
    },
    {
        img: image10,
        avatar: Avalogo1,
        title: 'Lorem Ipsum is simply dummy text of',
        chanelName: 'ComedyClub',
        date: '2342 martta tomosha qilindi 2 oy oldin',
        category: "Comedy",
    },
    {
        img: image11,
        avatar: Avalogo1,
        title: 'Lorem Ipsum is simply dummy text of',
        chanelName: 'React Tutorial',
        date: '2342 martta tomosha qilindi 2 oy oldin',
        category: "Animasyon",
    },
    {
        img: image12,
        avatar: Avalogo1,
        title: 'Lorem Ipsum is simply dummy text of',
        chanelName: 'p',
        date: '2345 martta tomosha qilindi 2 oy oldin',
        category: 'Kino',
    },

]











export const MainNavbarData = [
    "Kino",
    "Comedy",
    "Futbol",
    'Mix',
    "Cartons",
    "Muzik",
    "Futbol",
    'Sanat',
    "UX Tasarim",
    "Comedy",
    "Animasyon",

]





// ----------------------------Section-Data--------------------------------------


export const LeftSectionData = {
    
    
    LeftSecHeader: [
        {
            SecHeaderOne: [
                { icon: Home,  title: "Anasayfa" },
                { icon: Kesfet, title: "Kesfet" },
                { icon: Abon, title: "Abonelikler" }
            ]
        },
        
        {
            SecHeaderTwo: [
                    { icon: Kitap, title: "Kitaplik" },
                    { icon: Gecmis, title: "Gecmis" },
                    { icon: Vedio, title: "Vediolarimiz" },
                    { icon: Daha, title: "Daha sonra izle" },
                    { icon: Beginde, title: "Begendigim videolar" }
            ]
        }
    ]
    
}





