import resume from "@/public/resume.png"

const PROJECTDATA = [
    {
        id: 1,
        title: "Here Bio",
        description: `A Biology related website used to {analyse} or {visualise} some tools of concepts. It covers various {algorithm}  based concepts of Biology. It is available on {windows} as well as on {mobile}.`,
        stack: ["Next.js", "netlify", "HTML", "CSS", "JavaScript", "Material UI", "React-Router"],
        github: "https://github.com/nightfury-crypto/herebionext",
        demo: "https://herebionext.netlify.app/",
        image: "https://github.com/nightfury-crypto/herebio/blob/main/public/private/homepage.png?raw=true"
    },

    {
        id: 2,
        title: "Resume Builder",
        description: `A Resume Builder website used to build resume. It helps to create different types of resumes according to the {company} or {job type}. And can {download} the resume in {pdf format}.`,
        stack: ["React", "firebase", "HTML", "CSS", "JavaScript", "Material UI", "React-Router"],
        github: "https://github.com/nightfury-crypto/resume-builder-io-new",
        demo: "https://resume-builderio.netlify.app/",
        image: resume.src
    },

]


export default PROJECTDATA;