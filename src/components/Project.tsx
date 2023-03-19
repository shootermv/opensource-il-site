import Image from "next/image";

type ProjectProps = {
  name: string;
  url: string;
  image: string;
  description: string;
};

export default function Project(props: ProjectProps) {
  return (
    <div className="projectBlock">
      <img
        width={320}
        height={160}
        className="projectPreview"
        src={props.image}
        alt={props.name}
      />
      <div className="projectName">{props.name}</div>
    </div>
  );
}
