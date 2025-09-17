import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import cvat from './CVAT.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import android_icon from './android-studio-icon.png';
import jupyter_notebook_icon from './jupyter-notebook-icon.png';
import pytorch_icon from './pytorch-icon.png';
import tensorflow_icon from './tensorflow-icon.png';
import kuet_icon from './KUET.png';
import kngc_icon from './Kabi-Nazrul-Government-College.png';
import  jisc_icon from './Jatrabari-Ideal-School-&-College.png';
import fb_icon from './facebook-icon.png';
import fb_icon_dark from './facebook-icon-dark.png';
import instra_icon from './instragram-icon.png';
import instra_icon_dark from './instragram-icon-dark.png';
import ostad_logo from './Ostad.png';
import transformsAI_logo from './TransformsAI.png';
import cognifyz_logo from './Cognifyz.png';
import bitfest_logo from './Bitfest.png';




export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    cvat,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark,
    android_icon,
    pytorch_icon,
    tensorflow_icon,
    jupyter_notebook_icon,
    kuet_icon,
    kngc_icon,
    jisc_icon,
    fb_icon,  
    fb_icon_dark ,
    instra_icon  ,
    instra_icon_dark,
    ostad_logo,
    transformsAI_logo,
    cognifyz_logo,
    bitfest_logo,
};

export const workData = [
    {
        title: 'Vechicle Rental App',
        description: ' Andriod App ',
        bgImage: '/work-2.png',
        link:'https://github.com/Elin-powS/Vehicle_Rental_App' ,
    },
    {
        title: 'MoodRythm ',
        description: 'iOS App',
        bgImage: '/work-1.png',
        link: 'https://github.com/Elin-powS/MoodRythm',
    },
    {
        title: 'Edu Scan',
        description: 'App with ML and preprocessing',
        bgImage: '/work-4.png',
        link:'https://github.com/Elin-powS/System-Project-EduScan_Pro' ,
    },
    {
        title: 'Vechicle Rental website',
        description: 'A website using Laravel',
        bgImage: '/work-3.png',
        link: 'https://github.com/Elin-powS/Vehicle_Rental_Website',
    },
]

export const experienceData = [
    { 
        icon: assets.transformsAI_logo, 
        title: 'TransformsAI', 
        description: 'Junior AI/ML Engineer - Computer Vision.\nApril 2025 – Present', 
        link: '' 
    },
    { 
        icon: assets.ostad_logo, 
        title: 'Ostad', 
        description: 'Teaching Assistant - AI Agent Development with No Code Tool for Non-Coders.\n August 2025 – Present', 
        link: '' 
    },
    { 
        icon: assets.cognifyz_logo, 
        title: 'Cognifyz Technologies', 
        description: 'AI/ML Intern. Worked on various ML assignments, with a focus on AI and data processing.\nFeb 2025 – April 2025', 
        link: '' 
    },
    { 
        icon: assets.kuet_icon, 
        title: 'Class Representative', 
        description: 'Served as the Class Representative during my first and final years of academic life. \n2020-2021 and 2024-2025',
        link: '' 
    },
    {
        icon: assets.bitfest_logo, 
        title: 'Senior Executive Member, Bitfest 2025', 
        description: 'Played a key role as a Senior Executive Member in KUET CSE’s largest event, Bitfest 2025.',
        link: '' 
    }
];

export const educationData =[
    {
        icon: assets.kuet_icon,
        title: 'Khulna University of Engineering & Technology',
        description: 'BSc in Computer Science and Engineering',
        more_description:' 2020 to 2025 '
      },
    {
      icon: assets.kngc_icon,
      title: 'Kabi Nazrul Government College',
      description: 'HSC-Science',
      more_description:'2017 to 2019'
    },
    {
      icon: assets.jisc_icon,
      title: 'Jatrabari Ideal school and college',
      description: 'SSC-Science',
      more_description:'2015 to 2017'
    }
  ];

export const infoList = [
    {
        icon: assets.edu_icon,
        iconDark: assets.edu_icon_dark,
        title: 'Education',
        description: 'BSc in Computer Science and Engineering. ',
        more_description:' Khulna University of Engineering and Technology. '
      },
      {
        icon: assets.code_icon,
        iconDark: assets.code_icon_dark,
        title: 'Languages and Tools',
        description: 'C, C++, Python, Java, HTML, CSS, JavaScript',
        more_description: 'TensorFlow, PyTorch, Scikit-learn, Pandas, NumPy, Matplotlib,Android Studio,  React.js, Next.js, Laravel, Bootstrap, Tailwind CSS, PHP, Xcode, MySQL, Firebase, Oracle, PL/SQL, Git'
    },
    {
      icon: assets.project_icon,
      iconDark: assets.project_icon_dark,
      title: 'Junior ML/AI Engineer at TransformsAI',
      description: '',
      more_description:'As a Junior ML/AI Engineer, I develop computer vision models for real-time video analytics, including person detection, tracking, and facial recognition, while improving performance and integrating AI systems.'

    }
  ];

export const achievementsData = [
{
  icon: assets.edu_icon,
  iconDark: assets.edu_icon_dark,
  backgroundImage: '/Python-Certificate-1.pdf', 
  title: 'Programming for Everybody',
  description: 'Getting Started with Python. Learn the basics about Python.',
  more_description: '22.07.2020 - Completed the Coursera course "Programming for Everybody" which introduced me to the fundamentals of Python, including basic operations, variables, loops, and functions. This course helped me develop a solid foundation in Python programming.',
  skills_gained: 'Acquired foundational knowledge in Python programming, covering basic operations, variables, loops, and functions.'
},
{
  icon: assets.edu_icon,
  iconDark: assets.edu_icon_dark,
  backgroundImage: '/Python-Certificate-2.pdf', 
  title: 'Python Data Structures',
  description: 'Completed Python Data Structures course on Coursera.',
  more_description: '29.07.2020 - Successfully completed the Python Data Structures course where I learned how to use various data structures such as lists, tuples, dictionaries, and sets. This course strengthened my problem-solving skills and allowed me to handle data more efficiently.',
  skills_gained: 'Learned about essential data structures such as lists, tuples, dictionaries, and sets. Gained proficiency in handling and processing data efficiently.'
},
{
  icon: assets.edu_icon,
  iconDark: assets.edu_icon_dark,
  backgroundImage: "/CR_Certificate.pdf",
  title: "Class Representative for Department",
  description: "Awarded for serving as the Class Representative of my Department.",
  more_description: "Represented the class in academic matters, communicating between faculty and students and addressing student concerns. Additionally, I coordinated departmental events, which helped me develop skills in leadership, organization, and communication.",
  skills_gained: "Developed strong leadership, communication, and time management skills. Enhanced my ability to manage tasks and communicate effectively in an academic setting."
},
{
  icon: assets.edu_icon,
  iconDark: assets.edu_icon_dark,
  backgroundImage: "/Bitfest_Certificate.pdf",
  title: "Senior Executive Member, Bitfest 2025",
  description: "Recognized for my role as a Senior Executive Member in KUET CSE’s largest event, Bitfest 2025.",
  more_description: "Contributed to the success of the Datathon event, held for the first time in KUET. I was actively involved in organizing event logistics, overseeing the food committee, and ensuring a smooth operation during the event. This experience taught me event management, collaboration, and leadership in a dynamic environment.",
  skills_gained: "Gained experience in event management, teamwork, and strategic planning. Enhanced my organizational skills and problem-solving ability through hands-on participation in a high-scale event."
},
{
  icon: assets.edu_icon,
  iconDark: assets.edu_icon_dark,
  backgroundImage: '/DataHead.pdf', 
  title: 'Certificate - Team DataHead (4th Place)',
  description: 'Awarded for teamwork in Synergy 2024 Datathon.',
  more_description: '23.11.2024 - Participated in Synergy 2024 Datathon as a team member of DataHead. We successfully secured 4th place and learned essential data engineering and analysis techniques while solving real-world problems. This competition sparked my passion for data analysis and further solidified my career interest in data engineering.',
  skills_gained: "Learned key data engineering and data analysis techniques. Developed an understanding of real-world data challenges and the importance of teamwork and strategic thinking in problem-solving."
},
{
  icon: assets.edu_icon,
  iconDark: assets.edu_icon_dark,
  backgroundImage: '/Intern.pdf', 
  title: 'Cognifyz Technologies Internship Offer',
  description: 'Machine Learning internship offer at Cognifyz Technologies.',
  more_description: '27.01.2025 - Received an internship offer from Cognifyz Technologies to work in machine learning. This opportunity enabled me to work on assignments related to AI, machine learning models, and data processing, offering hands-on experience in real-world projects. I gained deeper insights into industry-level problems and further honed my coding and machine learning skills.',
  skills_gained: "Completed various assignments focused on machine learning, deepened knowledge in AI and data science, and gained practical experience working on industry-level problems. Further honed skills in coding, data processing, and model evaluation."
}
];


export const toolsData = [
    assets.vscode, assets.firebase,assets.android_icon,assets.pytorch_icon,assets.tensorflow_icon,assets.jupyter_notebook_icon , assets.figma, assets.git,assets.cvat, assets.mongodb
];