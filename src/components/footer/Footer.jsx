import { BiLogoGmail } from 'react-icons/bi'
import { BsFacebook, BsGithub } from 'react-icons/bs'
import { SiVisualstudiocode } from 'react-icons/si'
const Footer = () => {
  return (
    <footer className="p-10 bg-neutral text-neutral-content">
      <div className="footer  container mx-auto">
        <div>
          <SiVisualstudiocode size={48} />
          <p>
            StudyVerse
            <br />
            Copyright 2023
          </p>
        </div>
        <div>
          <span className="footer-title">Social</span>
          <div className="grid grid-flow-col gap-4">
            <a href="mailto:a4arpon@gmail.com" target="_blank">
              <BiLogoGmail size={24} />
            </a>
            <a href="https://www.facebook.com/a4arpon" target="_blank">
              <BsFacebook size={24} />
            </a>
            <a href="https://github.com/a4arpon" target="_blank">
              <BsGithub size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
