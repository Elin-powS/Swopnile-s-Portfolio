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
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
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
import assesment_icon from './assesment-icon-3.png';
import ml_icon from './ML-icon.png';
import kuet_icon from './KUET.png';
import kngc_icon from './Kabi-Nazrul-Government-College.png';
import  jisc_icon from './Jatrabari-Ideal-School-&-College.png';
import fb_icon from './facebook-icon.png';
import fb_icon_dark from './facebook-icon-dark.png';
import instra_icon from './instragram-icon.png';
import instra_icon_dark from './instragram-icon-dark.png';




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
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark,
    android_icon,
    assesment_icon,
    pytorch_icon,
    tensorflow_icon,
    jupyter_notebook_icon,
    ml_icon,
    kuet_icon,
    kngc_icon,
    jisc_icon,
    fb_icon,  
    fb_icon_dark ,
    instra_icon  ,
    instra_icon_dark,
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

export const serviceData = [
    { icon: assets.web_icon, title: 'Web design', description: 'Web development is the process of building, programming...', link: '' },
    { icon: assets.mobile_icon, title: 'Mobile app', description: 'Mobile app development involves creating software for mobile devices...', link: '' },
    { icon: assets.ml_icon, title: 'UI/UX design', description: 'UI/UX design focuses on creating a seamless user experience...', link: '' },
    { icon: assets.assesment_icon, title: 'Assesment Project', description: 'Creative design solutions to enhance visual communication...', link: '' },
]
export const educationData =[
    {
        icon: assets.kuet_icon,
        title: 'Khulna University of Engineering & Technology',
        description: 'BSc in Computer Science and Engineering',
        more_description:' 2020 to Present '
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
      description: 'C++, Python, Jave, HTML, CSS, JavaScript',
      more_description:'React Js, Next Js, Laravel'
    },
    {
      icon: assets.project_icon,
      iconDark: assets.project_icon_dark,
      title: 'AI/ML intern Cognifyz Technologies',
      description: '',
      more_description:'As an ML Intern, I optimized models for predicting ratings, classifying cuisines, and geographical analysis, honing skills in data preprocessing and model development.'

    }
  ];

/*
public/Intern.pdf;
*/

  export const achievementsData =[
    {
        icon: assets.edu_icon,
        iconDark: assets.edu_icon_dark,
        backgroundImage: './Python-Certificate-1.pdf',
        title: 'Programming for Everybody',
        description: 'Getting Started with Python.Learn the Basic about python.',
        more_description:'22.07.2020 '
      },
    {
      icon: assets.edu_icon,
      iconDark: assets.edu_icon_dark,
      backgroundImage: './Python-Certificate-2.pdf' ,
      title: ' Python Data Structures',
      description: 'Completed the Python Data Structures course on Coursera, focusing on organizing and handling data efficiently.',
      more_description:'29.07.2020'
    },
    {
      icon: assets.edu_icon,
      iconDark: assets.edu_icon_dark,
      backgroundImage: './DataHead.pdf' ,
      title: 'Certificate - Team DataHead (4th Place)',
      description: 'Awarded for exceptional teamwork and contribution in securing 4th place in tackling complex data challenges as a member of Team DataHead during Synergy 2024.',
      more_description:'23.11.2024'
    },
    {
      icon: assets.edu_icon,
      iconDark: assets.edu_icon_dark,
      backgroundImage: './Intern.pdf' ,
      title: 'Cognifyz Technologies Internship Offer',
      description: 'Offered a Machine Learning internship at Cognifyz Technologies to work on data analysis and machine learning projects',
      more_description:'27.01.2025'
    }
  ];
    

export const toolsData = [
    assets.vscode, assets.firebase,assets.android_icon,assets.pytorch_icon,assets.tensorflow_icon,assets.jupyter_notebook_icon , assets.figma, assets.git
];