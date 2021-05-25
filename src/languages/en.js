import blogImg from "../assets/blog.png";
import blogDeskImg from "../assets/blogDesk.png";


export const en = {
  currentLanguage: "english",
  bio: {
    name: "Nestor Monroy",
    info: [
      "Full Stack Developer passionate about new technologies and digital content creation.",
    ],
    love:"I love to make an attractive UI and efficient code.",
    always:"Always seeking to developing and sharpen my skillsets."
  },
  webDevelopment: {
    title: "Web development",
    content: [
      {
        imgfront: blogImg,
        imgDesk: blogDeskImg,
        goTo: 'https://nestorblog.com/',
        text: {
          title: "Simple-Blog Website",
          paragraph: [
            "Fully responsive blog application with a functioning add, save, update, and update and create tags for admin user."
          ],
          details: [
            [
              "Technologies used:",
              "Docker, Django, PostgreSQL, JavaScript",
            ],
          ],
          gitHubLink: "GitHub repository",
        },
        link: "https://github.com/NestorMonroy/docker-django-blog",
      },
    ],
  },
  menu: ["Home", "Projects", "Contact"],
};
