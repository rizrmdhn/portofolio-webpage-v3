import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";

export default function Contact() {
  return (
    <div
      id="link"
      className="mb mt-5 flex w-full flex-col items-center justify-center border-b-2 border-primary"
    >
      <h1 className="mb-5 text-2xl text-primary">Contact Me</h1>
      <div className="mb-5 flex flex-row justify-between">
        <a href="https://github.com/rizrmdhn">
          <IoLogoGithub className="mr-2 text-5xl text-primary" />
        </a>
        <a href="">
          <IoLogoLinkedin className="ms-2 text-5xl text-primary" />
        </a>
      </div>
    </div>
  );
}
