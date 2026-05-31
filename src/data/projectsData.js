import { Project } from "../models/Project";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img1.jpg";
import projImg6 from "../assets/img/project-img2.jpg";
import projImg7 from "../assets/img/project-img5.png";
import projImg8 from "../assets/img/project-img6.png";
import projImg9 from "../assets/img/project-img7.png";
import projImg10_1 from "../assets/img/project-img8-1.jpg";
import projImg10_2 from "../assets/img/project-img8-2.jpg";
import projImg10_3 from "../assets/img/project-img8-3.jpg";

/**
 * Encapsulates the collection of projects.
 */
export class ProjectsRepository {
  /**
   * Retrieve all projects in the portfolio.
   * @returns {Project[]} List of projects.
   */
  static getAll() {
    return [
      new Project({
        title: "RPG Game Topdown Survival",
        description: "Survival RPG with top-down view where players fight enemies and manage resources.",
        category: "Game Design & Development",
        imgUrl: projImg1,
        videoUrl: "https://www.youtube.com/embed/nf9i2Hxb5Mk",
        githubUrl: "https://github.com/dodao123/RPG-Indie-2D-Game",
      }),
      new Project({
        title: "Gesture Racing Car Monitoring",
        description: "Racing game controlled using hand gestures, combining Python with Unity.",
        category: "Game Design & Development",
        imgUrl: projImg2,
        videoUrl: "/ProjectVideo/video2.mp4",
        githubUrl: "https://github.com/yourname/project2",
      }),
      new Project({
        title: "Edu WarriorWarrior",
        description: "Educational adventure game where players solve questions to progress.",
        category: "Game Design & Development",
        imgUrl: projImg5,
        videoUrl: "/ProjectVideo/video4.mp4",
        githubUrl: "https://github.com/dodao123/EduWarriorGamee",
      }),
      new Project({
        title: "Runner & Fighting with Monsters Game",
        description: "Endless runner game with combat features, fighting monsters and avoiding obstacles.",
        category: "Game Design & Development",
        imgUrl: projImg3,
        videoUrl: "/ProjectVideo/video3.mp4",
        githubUrl: "https://github.com/yourname/project4",
      }),
      new Project({
        title: "Introduction Math CLB Website",
        description: "A clean and informative website for the Math Club.",
        category: "Web Design & Development",
        imgUrl: projImg4,
        githubUrl: "https://loptoancoxuan.vercel.app/",
      }),
      new Project({
        title: "TSA Test Exam Website",
        description: "A clean and informative website for the TSA exam with clear resources.",
        category: "Web Design & Development",
        imgUrl: projImg6,
        githubUrl: "http://tsatest.id.vn/",
      }),
      new Project({
        title: "Manga Reading Mobile APP",
        description: "Mobile App offering online manga reading with bookmarking and offline reading.",
        category: "Web Design & Development",
        imgUrl: projImg7,
        videoUrl: "/ProjectVideo/video5.mp4",
        githubUrl: "https://github.com/dodao123/MangaReaderApp",
      }),
      new Project({
        title: "Watch Film Website",
        description: "Website for watching films online, featuring search and detail pages.",
        category: "Web Design & Development",
        imgUrl: projImg8,
        videoUrl: "",
        githubUrl: "https://movietrailerbydodao.vercel.app/#",
      }),
      new Project({
        title: "Slide Album App",
        description: "Mobile application designed to display photo albums with smooth slider transitions.",
        category: "Web Design & Development",
        imgUrl: projImg9,
        githubUrl: "https://bnjhab.com/",
      }),
      new Project({
        title: "Mobile E-Commerce App",
        description: "Mobile shopping platform with product categories and product gallery.",
        category: "Web Design & Development",
        imgUrl: projImg10_1,
        images: [projImg10_1, projImg10_2, projImg10_3],
        githubUrl: "https://github.com/dodd-maindev/e-commerce-app",
      }),
    ];
  }
}
