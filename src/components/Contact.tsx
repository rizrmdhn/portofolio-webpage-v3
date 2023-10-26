import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";

export default function Contact() {
  return (
    <div
      id="link"
      className="mt-5 flex w-full flex-col items-center justify-center border-b-2 border-primary"
    >
      <h1 className="mb-5 text-2xl text-primary">Social</h1>
      <div className="mb-5 flex flex-row justify-between">
        <a href="https://github.com/rizrmdhn" target="_blank">
          <IoLogoGithub className="mr-2 text-5xl text-primary duration-300 hover:scale-125" />
        </a>
        <a
          href="https://www.linkedin.com/in/noor-rizki-ramadhan-036aaa24b/"
          target="_blank"
        >
          <IoLogoLinkedin className="ms-2 text-5xl text-primary duration-300 hover:scale-125" />
        </a>
      </div>
    </div>
  );
}
