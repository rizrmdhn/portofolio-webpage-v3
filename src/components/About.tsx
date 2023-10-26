import TypeText from "./TypeText";

export default function About() {
  return (
    <div
      id="about"
      className="mt-5 flex w-full flex-col items-center justify-center border-b-2 border-primary"
    >
      <h1 className="mb-5 text-2xl text-primary">Hello, My Name Is Rizki</h1>
      <TypeText className="mb-5" />
      <span className="mb-5 text-center text-primary">
        Im a computer engineering graduate with a passion for web development,
        currently learning React JS, Hapi JS, React Native, AdonisJS, Flutter,
        Laravel, and Codeigniter.
      </span>
    </div>
  );
}
