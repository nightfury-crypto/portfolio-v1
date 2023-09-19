import styles from "./Card.module.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

function Card({ project }) {
  const handlehighlight = (description) => {
    let str = description;
    while (str.includes("{")) {
      let content = str.slice(str.indexOf("{") + 1, str.indexOf("}"));
      str = str.replace(content, "");
      str = str.replace("{}", `<span>${content}</span>`);
    }
    return str;
  };

  return (
    <div className={styles.card}>
      <img src={project?.image} alt={project?.title} className={styles.bgimg} />
      <div className={styles.card__info}>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: "8px",
            marginBottom: "10px",
          }}
        >
          {/* <StarIcon className={styles.star}/> */}
          <p className={styles.card__heading}>Featured Project</p>
        </div>
        <h1 className={styles.card__title}>{project?.title}</h1>

        <h4
          className={styles.card__description}
          id="description"
          dangerouslySetInnerHTML={{
            __html: handlehighlight(project?.description),
          }}
        ></h4>
        <ul className={styles.card__stack}>
          {project?.stack?.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <div className={styles.card__links}>
          <a
            href={project?.github}
            className={styles.card__link}
            target="_blank"
          >
            <GitHubIcon className={styles.btnicon} />
          </a>
          <p style={{ color: "#fff", fontSize: "16px" }}>|</p>
          <a href={project?.demo} className={styles.card__link} target="_blank">
            <ArrowOutwardIcon className={styles.btnicon} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
