import {
  FacebookIcon,
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from "../assets/Icons";
import { SocialMediaIcon } from "./SocialMediaIcon";
import PablouxPic from "/pabloux.jpg";

export const Footer = () => {
  return (
    <footer className="overflow-auto bg-brand-gray text-brand-white py-12">
      <article className="flex flex-col gap-6 justify-center items-center md:flex-row">
        <img
          src={PablouxPic}
          alt="Logo de Pabloux Darkmind"
          className="w-36 h-36 rounded-full border-4 border-solid border-brand-white shadow-lg shadow-black"
        />
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-semibold">
            Powered by Pabloux Darkmind
          </h2>
          <p className="text-base">
            Pueden seguirme por mis redes sociales, pero no por la calle :v
          </p>
          <div className="mt-3 flex gap-3 justify-center md:justify-start">
            <SocialMediaIcon
              MediaIcon={InstagramIcon}
              href="https://www.instagram.com/pabloux_darkmind/"
            />
            <SocialMediaIcon
              MediaIcon={FacebookIcon}
              href="https://www.facebook.com/PablouxDarkmind"
            />
            <SocialMediaIcon
              MediaIcon={XIcon}
              href="https://twitter.com/PablouxDarkmind"
            />
            <SocialMediaIcon
              MediaIcon={LinkedInIcon}
              href="https://www.linkedin.com/in/pablopardoalcocer/"
            />
            <SocialMediaIcon
              MediaIcon={GitHubIcon}
              href="https://github.com/ProfessorByte"
            />
          </div>
        </div>
      </article>
    </footer>
  );
};
