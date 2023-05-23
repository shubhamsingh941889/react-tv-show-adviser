import s from "./style.module.css";

export function Logo({ image, title, subtitle }) {
  console.log("sdds", image);
  return (
    <div>
      <div className={s.container}>
        <img className={s.img} src={image} alt="logo" />
        <span className={s.title}>{title}</span>
      </div>
      <span className={s.subtitle}>{subtitle}</span>
    </div>
  );
}
