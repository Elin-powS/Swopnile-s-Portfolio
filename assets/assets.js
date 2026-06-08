import user_image from "./user-image.png";
import code_icon from "./code-icon.png";
import code_icon_dark from "./code-icon-dark.png";
import edu_icon from "./edu-icon.png";
import edu_icon_dark from "./edu-icon-dark.png";
import project_icon from "./project-icon.png";
import project_icon_dark from "./project-icon-dark.png";
import vscode from "./vscode.png";
import firebase from "./firebase.png";
import figma from "./figma.png";
import git from "./git.png";
import mongodb from "./mongodb.png";
import cvat from "./CVAT.png";
import right_arrow_white from "./right-arrow-white.png";
import logo from "./logo.png";
import logo_dark from "./logo_dark.png";
import mail_icon from "./mail_icon.png";
import mail_icon_dark from "./mail_icon_dark.png";
import profile_img from "./profile-img.png";
import download_icon from "./download-icon.png";
import hand_icon from "./hand-icon.png";
import header_bg_color from "./header-bg-color.png";
import moon_icon from "./moon_icon.png";
import sun_icon from "./sun_icon.png";
import arrow_icon from "./arrow-icon.png";
import arrow_icon_dark from "./arrow-icon-dark.png";
import menu_black from "./menu-black.png";
import menu_white from "./menu-white.png";
import close_black from "./close-black.png";
import close_white from "./close-white.png";
import ui_icon from "./ui-icon.png";
import graphics_icon from "./graphics-icon.png";
import right_arrow from "./right-arrow.png";
import send_icon from "./send-icon.png";
import right_arrow_bold from "./right-arrow-bold.png";
import right_arrow_bold_dark from "./right-arrow-bold-dark.png";
import android_icon from "./android-studio-icon.png";
import jupyter_notebook_icon from "./jupyter-notebook-icon.png";
import pytorch_icon from "./pytorch-icon.png";
import tensorflow_icon from "./tensorflow-icon.png";
import kuet_icon from "./KUET.png";
import kngc_icon from "./Kabi-Nazrul-Government-College.png";
import jisc_icon from "./Jatrabari-Ideal-School-&-College.png";
import fb_icon from "./facebook-icon.png";
import fb_icon_dark from "./facebook-icon-dark.png";
import instra_icon from "./instragram-icon.png";
import instra_icon_dark from "./instragram-icon-dark.png";
import ostad_logo from "./Ostad.png";
import transformsAI_logo from "./TransformsAI.png";
import cognifyz_logo from "./Cognifyz.png";
import bitfest_logo from "./Bitfest.png";
import sofof_tech_logo from "./SOFOF-TECH.png";
import upskill_logo from "./Upskill-Consultancy.png";

// ────────────────────────────────────────────────────────────────────────────────────
//  Images and icons can be added here in the same format as above.
// ────────────────────────────────────────────────────────────────────────────────────

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
  fb_icon_dark,
  instra_icon,
  instra_icon_dark,
  ostad_logo,
  transformsAI_logo,
  cognifyz_logo,
  bitfest_logo,
  sofof_tech_logo,
  upskill_logo,
};

// ────────────────────────────────────────────────────────────────────────────────────
//  All Project Information can be added here in the same format as above.
// ────────────────────────────────────────────────────────────────────────────────────

export const workData = [
  {
    title: "Email Automation Using Trigger.dev ",
    description:
      "Email Automation Using Trigger.dev is an AI-powered automation system that generates personalized user-specific email content and sends automated alerts for abandoned carts and product views. It analyzes user activity to create dynamic, behavior-based campaigns that improve engagement, retention, and conversions.",
    bgImage: "Trigger_Dev/Dash_Board.png",
    images: ["Trigger_Dev/Dash_Board.png",
      "Trigger_Dev/Execution_Automation.png",
      "Trigger_Dev/Event_Based_Execution.png",
      "Trigger_Dev/Automation_Details.png",
      "Trigger_Dev/Email_Template_Abandoned_Cart.png",
      "Trigger_Dev/Email_Template_Product_Promotion.png",
    ],
    category: "Automation",
    tech: [
      "Trigger.dev v3",
      "Node.js",
      "TypeScript",
      "OpenAI",
      "Groq",
      "Llama",
      "Resend ",
      "HTML/CSS",
    ],
    link: "https://github.com/Elin-powS/Email-Automation-Using-Trigger.dev.git",
    demo: "./Dummy_Video.mp4",
  },
  {
    title: "ElinpowS — AI Codebase Chat Assistant",
    description:
      "A dual-app, RAG-powered codebase intelligence interface built using LangGraph and Qdrant for seamless, contextual interactions with entire repositories. The decoupled architecture pairs a high-speed semantic indexing tool with a sleek, dark-themed Gradio chat UI, leveraging Groq for ultra-fast inference and complex architectural troubleshooting. The system includes robust multi-session management and persistent conversation memory to maintain context across separate user sessions. ",
    bgImage: "./ElinpowS_AI_Codebase_Chat_Assistant/ElinpowS_Chat_6.png",
    images: [
      "/ElinpowS_AI_Codebase_Chat_Assistant/ElinpowS_Chat_6.png",
      "/ElinpowS_AI_Codebase_Chat_Assistant/ElinpowS_Chat_1.png",
      "/ElinpowS_AI_Codebase_Chat_Assistant/ElinpowS_Chat_2.png",
      "/ElinpowS_AI_Codebase_Chat_Assistant/ElinpowS_Chat_3.png",
      "/ElinpowS_AI_Codebase_Chat_Assistant/ElinpowS_Chat_4.png",
      "/ElinpowS_AI_Codebase_Chat_Assistant/ElinpowS_Chat_5.png",
      "/ElinpowS_AI_Codebase_Chat_Assistant/ElinpowS_Chat_7.png",
    ],
    category: "AI / ML",
    tech: [
      "Python",
      "Gradio",
      "RAG",
      "LangChain",
      "LangGraph",
      "Qdrant",
      "BAAI/bge-base-en-v1.5",
      "OpenAI",
      "Groq",
    ],
    link: "https://github.com/Elin-powS/ElinpowS_AI_Codebase_Chat_Assistant.git",
    demo: "./Dummy_Video.mp4",
  },
  {
    title: "N8N based Social Media Automation",
    description:
      "An end-to-end AI social media pipeline built with n8n that automates content production from web research to multi-platform publishing. It leverages OpenRouter/Gemini for copywriting and FLUX.1-schnell for image generation, requiring explicit admin content approval via a secure webhook and Gmail API workflow before cross-posting to 5 major platforms.",
    bgImage: "/N8N_Social_Media_Automation/Input_Form.png",
    images: [
      "/N8N_Social_Media_Automation/Input_Form.png",
      "/N8N_Social_Media_Automation/Research_and_Source_Verification.png",
      "/N8N_Social_Media_Automation/Verify_Email.png",

      "/N8N_Social_Media_Automation/Facebook_Post.png",
      "/N8N_Social_Media_Automation/Instagram_Post.png",
      "/N8N_Social_Media_Automation/LinkedIn_Post.png",
      "/N8N_Social_Media_Automation/Twitter_Post.png",
      "/N8N_Social_Media_Automation/Medium_Post.png",
      "/N8N_Social_Media_Automation/Slack_Post.png",

      "/N8N_Social_Media_Automation/Research_and_Source_Verification.png",
    ],
    category: "Automation",
    tech: [
      "n8n",
      "OpenRouter",
      "Gemini API",
      "HuggingFace",
      "JavaScript",
      "Gmail API",
      "Webhooks",
    ],
    link: "https://github.com/Elin-powS/N8N-Social-Media-Automation.git",
    demo: "./Dummy_Video.mp4",
  },
  {
    title: "Personal Portfolio Website",
    description:
      "A modern, high-performance developer portfolio built with Next.js and Tailwind CSS. Features an interactive project showcase, optimized App Router architecture, and a serverless contact system integrated with Web3Forms for secure, zero-config email automation.",
    bgImage: "/Porfolio_Screenshot/Home_Light.png",
    images: ["/Porfolio_Screenshot/Home_Light.png",
      "/Porfolio_Screenshot/Home_Dark.png",
      
      "/Porfolio_Screenshot/About_Light.png",
      "/Porfolio_Screenshot/About_Dark.png",
      
      "/Porfolio_Screenshot/Edu_Light.png",
      "/Porfolio_Screenshot/Edu_Dark.png",
      
      "/Porfolio_Screenshot/Project_Dark.png",
      "/Porfolio_Screenshot/Demo_Project_img.png",
      "/Porfolio_Screenshot/Demo_Project_video.png",
      
      "/Porfolio_Screenshot/Publication_Img.png",
      "/Porfolio_Screenshot/Achievements.png",
      "/Porfolio_Screenshot/Experience.png",
      "/Porfolio_Screenshot/Contact.png",
      
      "/Porfolio_Screenshot/Home_Mobile_Light.png",
      "/Porfolio_Screenshot/Home_Navbar_Light.png",
      "/Porfolio_Screenshot/Footer_Mobile_Dark.png"
    ],
    category: "Web",
    tech: ["Next.js", "React", "Tailwind CSS", "Web3Forms", "Vercel"],
    link: "https://github.com/Elin-powS/Swopnile-s-Portfolio.git",
    demo: "./Dummy_Video.mp4",
  },
  {
    title: "Vehicle Rental App",
    description:
      "A feature-rich Android car rental application that allows users to rent vehicles for inter-city and outer-city travel. Includes secure authentication, vehicle browsing, reservation management with accept/decline tracking, user profile management, fare calculation, and an admin panel — all backed by Firebase.",

    bgImage: "/Vehicle_Rental_App/splash_screen.jpg",
    images: [
      "/Vehicle_Rental_App/splash_screen.jpg",
      "/Vehicle_Rental_App/login.jpg",
      "/Vehicle_Rental_App/sign_up.jpg",
      "/Vehicle_Rental_App/forget_password.jpg",

      "/Vehicle_Rental_App/main_activity.jpg",
      "/Vehicle_Rental_App/user_profile.jpg",
      "/Vehicle_Rental_App/edit_profile.jpg",

      "/Vehicle_Rental_App/reservation.jpg",
      "/Vehicle_Rental_App/fare.jpg",
      "/Vehicle_Rental_App/accepted_reservation.jpg",
      "/Vehicle_Rental_App/decline_reservation.jpg",
      "/Vehicle_Rental_App/pending.jpg",

      "/Vehicle_Rental_App/admin.jpg",
      "/Vehicle_Rental_App/user_admin.jpg",
      "/Vehicle_Rental_App/reservation_rec.jpg",
      "/Vehicle_Rental_App/A_or_D.jpg",
    ],
    category: "Mobile",
    tech: [
      "Android",
      "Java",
      "Firebase Authentication",
      "Firebase Realtime Database",
      "Material Design",
    ],
    github: "https://github.com/Elin-powS/Vehicle_Rental_App",
    demo: "./Dummy_Video.mp4",
  },
  {
    title: "MoodRhythm",
    description:
      "An iOS app that curates personalized music playlists based on real-time weather conditions. By blending live weather tracking with intelligent music recommendations, MoodRhythm creates a dynamic soundtrack that matches the atmospheric vibe of your day — whether it's a rainy afternoon or a sunny morning.",
    bgImage: "/MoodRythm/main_page.png",
    images: [
      "/MoodRythm/main_page.png",
      "/MoodRythm/login.png",
      "/MoodRythm/register.png",
      "/MoodRythm/playlist.png",
      "/MoodRythm/music_player.png",
      "/MoodRythm/weather_view.png",
    ],
    category: "iOS",
    tech: ["Swift", "Xcode", "Weather API", "Spotify API"],
    link: "https://github.com/Elin-powS/MoodRythm",
    demo: "./Dummy_Video.mp4",
  },
  {
    title: "Edu Scan",
    description:
      "Smart document scanner for students with ML-powered text extraction and preprocessing pipeline.",
    bgImage: "/work-4.png",
    images: ["/work-4.png"],
    category: "ML",
    tech: ["Python", "OpenCV", "TensorFlow"],
    link: "https://github.com/Elin-powS/System-Project-EduScan_Pro",
    demo: "./Dummy_Video.mp4",
  },
  {
    title: "Vehicle Rental Website",
    description:
      "Full-stack vehicle rental platform built with Laravel featuring bookings, admin dashboard, and payments.",
    bgImage: "/work-3.png",
    images: ["/work-3.png", "/work-2.png"],
    category: "Web",
    tech: ["Laravel", "PHP", "MySQL", "Bootstrap"],
    link: "https://github.com/Elin-powS/Vehicle_Rental_Website",
    demo: "./Dummy_Video.mp4",
  },
];

// ────────────────────────────────────────────────────────────────────────────────────
//  Work data can be added here in the same format as above.
// ────────────────────────────────────────────────────────────────────────────────────
export const experienceData = [
  {
    icon: assets.sofof_tech_logo,
    title: "SOFOF TECH",
    description: "AI Engineer.\nMay 2025 – Present",
    link: "",
  },
  {
    icon: assets.upskill_logo,
    title: "Upskill Consultancy",
    description:
      "Lead Teacher - Prompt Engineering and AI Automation with no code tools(n8n).\nFebruary 2026 – Present",
    link: "",
  },
  {
    icon: assets.transformsAI_logo,
    title: "Transforms AI",
    description:
      "Junior AI/ML Engineer - Computer Vision.\nApril 2025 – September 2025",
    link: "",
  },
  {
    icon: assets.ostad_logo,
    title: "Ostad",
    description:
      "Teaching Assistant - AI Agent Development with No Code Tool for Non-Coders.\n August 2025 – April 2026",
    link: "",
  },
  {
    icon: assets.cognifyz_logo,
    title: "Cognifyz Technologies",
    description:
      "AI/ML Intern. Worked on various ML assignments, with a focus on AI and data processing.\nFeb 2025 – April 2025",
    link: "",
  },
  {
    icon: assets.kuet_icon,
    title: "Class Representative",
    description:
      "Served as the Class Representative during my first and final years of academic life. \n2020-2021 and 2024-2025",
    link: "",
  },
  {
    icon: assets.bitfest_logo,
    title: "Senior Executive Member, Bitfest 2025",
    description:
      "Played a key role as a Senior Executive Member in KUET CSE’s largest event, Bitfest 2025.",
    link: "",
  },
];

// ────────────────────────────────────────────────────────────────────────────────────
//  Educational Qualification Information
// ────────────────────────────────────────────────────────────────────────────────────
export const educationData = [
  {
    icon: assets.kuet_icon,
    title: "Khulna University of Engineering & Technology",
    description: "BSc in Computer Science and Engineering",
    more_description: " 2020 to 2025 ",
  },
  {
    icon: assets.kngc_icon,
    title: "Kabi Nazrul Government College",
    description: "HSC-Science",
    more_description: "2017 to 2019",
  },
  {
    icon: assets.jisc_icon,
    title: "Jatrabari Ideal school and college",
    description: "SSC-Science",
    more_description: "2015 to 2017",
  },
];

// ────────────────────────────────────────────────────────────────────────────────────
//  Educational Information, Expertise and Tools Information , Current Job and Position.
// ────────────────────────────────────────────────────────────────────────────────────

export const infoList = [
  {
    icon: assets.edu_icon,
    iconDark: assets.edu_icon_dark,
    title: "Education",
    description: "BSc in Computer Science and Engineering. ",
    more_description: " Khulna University of Engineering and Technology. ",
  },
  {
    icon: assets.code_icon,
    iconDark: assets.code_icon_dark,
    title: "Languages and Tools",
    description: "C, C++, Python, Java, HTML, CSS, JavaScript",
    more_description:
      "TensorFlow, PyTorch, Scikit-learn, Pandas, NumPy, Matplotlib, LangChain, LangGraph, Trigger.dev, Android Studio, React.js, Next.js, Laravel, Bootstrap, Tailwind CSS, PHP, Xcode, MySQL, Firebase, Oracle, PL/SQL, Git",
  },
  {
    icon: assets.project_icon,
    iconDark: assets.project_icon_dark,
    title: "AI Engineer at SOFOF TECH",
    description: "",
    more_description:
      "As an AI Engineer at SOFOF TECH, I develop machine learning models, AI automation systems, and data-driven solutions for real-world applications. My work includes building intelligent workflows, automating business processes, developing AI-powered systems, and working with data scraping and processing pipelines to improve efficiency and scalability.",
  },
];

// ────────────────────────────────────────────────────────────────────────────────────
//  Achievements data can be added here in the same format as above.
// ────────────────────────────────────────────────────────────────────────────────────

export const achievementsData = [
  {
    icon: assets.edu_icon,
    iconDark: assets.edu_icon_dark,
    backgroundImage: "/1701_AuthorCertificate.pdf",
    title: "ICCIT 2025 Presenter & Author",
    description:
      "Peer-reviewed research presentation on Bayesian neural network selection.",
    more_description:
      "December 2025 - Published and presented a comparative research study evaluating Reversible Jump Markov Chain Monte Carlo (RJMCMC) against traditional information criteria (AIC, BIC, HQIC) for optimal neural network architecture selection at the 28th International Conference on Computer and Information Technology (ICCIT 2025).",
    skills_gained:
      "Acquired advanced knowledge in Bayesian trans-dimensional sampling, model uncertainty handling, and neural network architecture optimization.",
  },
  {
    icon: assets.edu_icon,
    iconDark: assets.edu_icon_dark,
    backgroundImage: "/Python-Certificate-1.pdf",
    title: "Programming for Everybody",
    description: "Getting Started with Python. Learn the basics about Python.",
    more_description:
      '22.07.2020 - Completed the Coursera course "Programming for Everybody" which introduced me to the fundamentals of Python, including basic operations, variables, loops, and functions. This course helped me develop a solid foundation in Python programming.',
    skills_gained:
      "Acquired foundational knowledge in Python programming, covering basic operations, variables, loops, and functions.",
  },
  {
    icon: assets.edu_icon,
    iconDark: assets.edu_icon_dark,
    backgroundImage: "/Python-Certificate-2.pdf",
    title: "Python Data Structures",
    description: "Completed Python Data Structures course on Coursera.",
    more_description:
      "29.07.2020 - Successfully completed the Python Data Structures course where I learned how to use various data structures such as lists, tuples, dictionaries, and sets. This course strengthened my problem-solving skills and allowed me to handle data more efficiently.",
    skills_gained:
      "Learned about essential data structures such as lists, tuples, dictionaries, and sets. Gained proficiency in handling and processing data efficiently.",
  },
  {
    icon: assets.edu_icon,
    iconDark: assets.edu_icon_dark,
    backgroundImage: "/CR_Certificate.pdf",
    title: "Class Representative for Department",
    description:
      "Awarded for serving as the Class Representative of my Department.",
    more_description:
      "Represented the class in academic matters, communicating between faculty and students and addressing student concerns. Additionally, I coordinated departmental events, which helped me develop skills in leadership, organization, and communication.",
    skills_gained:
      "Developed strong leadership, communication, and time management skills. Enhanced my ability to manage tasks and communicate effectively in an academic setting.",
  },
  {
    icon: assets.edu_icon,
    iconDark: assets.edu_icon_dark,
    backgroundImage: "/Bitfest_Certificate.pdf",
    title: "Senior Executive Member, Bitfest 2025",
    description:
      "Recognized for my role as a Senior Executive Member in KUET CSE’s largest event, Bitfest 2025.",
    more_description:
      "Contributed to the success of the Datathon event, held for the first time in KUET. I was actively involved in organizing event logistics, overseeing the food committee, and ensuring a smooth operation during the event. This experience taught me event management, collaboration, and leadership in a dynamic environment.",
    skills_gained:
      "Gained experience in event management, teamwork, and strategic planning. Enhanced my organizational skills and problem-solving ability through hands-on participation in a high-scale event.",
  },
  {
    icon: assets.edu_icon,
    iconDark: assets.edu_icon_dark,
    backgroundImage: "/DataHead.pdf",
    title: "Certificate - Team DataHead (4th Place)",
    description: "Awarded for teamwork in Synergy 2024 Datathon.",
    more_description:
      "23.11.2024 - Participated in Synergy 2024 Datathon as a team member of DataHead. We successfully secured 4th place and learned essential data engineering and analysis techniques while solving real-world problems. This competition sparked my passion for data analysis and further solidified my career interest in data engineering.",
    skills_gained:
      "Learned key data engineering and data analysis techniques. Developed an understanding of real-world data challenges and the importance of teamwork and strategic thinking in problem-solving.",
  },
  {
    icon: assets.edu_icon,
    iconDark: assets.edu_icon_dark,
    backgroundImage: "/Intern.pdf",
    title: "Cognifyz Technologies Internship Offer",
    description: "Machine Learning internship offer at Cognifyz Technologies.",
    more_description:
      "27.01.2025 - Received an internship offer from Cognifyz Technologies to work in machine learning. This opportunity enabled me to work on assignments related to AI, machine learning models, and data processing, offering hands-on experience in real-world projects. I gained deeper insights into industry-level problems and further honed my coding and machine learning skills.",
    skills_gained:
      "Completed various assignments focused on machine learning, deepened knowledge in AI and data science, and gained practical experience working on industry-level problems. Further honed skills in coding, data processing, and model evaluation.",
  },
];

// ────────────────────────────────────────────────────────────────────────────────────
//  Publications data and tools data can be added here in the same format as above.
// ────────────────────────────────────────────────────────────────────────────────────

export const publicationsData = [
  {
    title:
      "Reversible Jump MCMC for Neural Network Selection: A Comparative Study Against Information Criteria",
    publisher:
      "2025 28th International Conference on Computer and Information Technology (ICCIT), IEEE",
    issueDate: "2025",
    volume: null,
    pages: "pp. 4272–4277",
    doi: "https://doi.org/10.1109/ICCIT68739.2025.11491545",
    abstract:
      "This paper presents a comparative study of Reversible Jump Markov Chain Monte Carlo (RJMCMC) for neural network model selection against traditional information criteria such as AIC and BIC. The study evaluates the effectiveness of Bayesian model selection techniques in determining optimal neural network architectures while quantifying uncertainty in regression tasks.",
    tags: [
      "Machine Learning",
      "Bayesian Neural Networks",
      "RJMCMC",
      "Model Selection",
      "AIC",
      "BIC",
      "Regression",
    ],
    status: "Published",
  },
];

// ────────────────────────────────────────────────────────────────────────────────────
//  Tools Information can be added here in the same format as above.
// ────────────────────────────────────────────────────────────────────────────────────

export const toolsData = [
  assets.vscode,
  assets.firebase,
  assets.android_icon,
  assets.pytorch_icon,
  assets.tensorflow_icon,
  assets.jupyter_notebook_icon,
  assets.figma,
  assets.git,
  assets.cvat,
  assets.mongodb,
];
