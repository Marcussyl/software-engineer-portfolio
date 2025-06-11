import { motion, useSpring, useTransform, useMotionValue } from "motion/react";
import emailjs from '@emailjs/browser';
import { useRef } from "react";

export const Contacts = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  }

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  }

  const form = useRef();
  const sendEmail = (e) => {
    console.log("sending email...");
    e.preventDefault();

    emailjs
    .sendForm('service_j34e6op', 'template_qdwmjme', form.current, {
      publicKey: 'Ppd8kmEE1F2BBcDZv',
    })
    .then(
      () => {
        console.log('SUCCESS!');
      },
      (error) => {
        console.log('FAILED...', error.text);
      },
    );
  }

  return (
    <div className="flex flex-col items-center pt-10 m-5 relative">
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="transform-3d flex flex-col items-center px-10 pt-5 pb-10 mx-auto rounded-lg border-2 border-dashed border-main-purple max-w-[500px]"
        style={{
          rotateX,
          rotateY,
          background:
            "linear-gradient(to bottom right, #261a42 0%, #1e0e3b 20%, #140534 50%, #1e0e3d 80%, #281c44 90%, #281c44 100%)",
        }}
      >
        <div className="inner transform-3d translate-z-[75px]">
          <h2 className="gradient-text font-bold text-2xl text-center">
            Get in touch
          </h2>
          <br />
          <form onSubmit={sendEmail} ref={form}>
            <label htmlFor="name">Name</label>
            <div className="input-wrapper">
              <input name='name' type="text" placeholder="Chan Tai Man" />
            </div>
            <br />
            <label htmlFor="email">Email</label>
            <div className="input-wrapper">
              <input name='email' type="email" placeholder="1234@example.com" />
            </div>
            <br />
            <label htmlFor="subject">Subject</label>
            <div className="input-wrapper">
              <input name='subject' type="text" placeholder="Enter your subject here" />
            </div>
            <br />
            <label htmlFor="msg">Message</label>
            <div className="input-wrapper">
              <textarea
                name="message"
                rows="4"
                cols="50"
                placeholder="Write your message here"
              ></textarea>
            </div>
            <br />
            <button
              className="block mx-auto w-full"
              type="submit"
              value={"Send"}
            >
              <div className="inner justify-center rounded-[10px] !cursor-pointer flex gap-2 items-center border-2 border-dashed border-main-purple p-2">
                Submit
                <img src="/software-engineer-portfolio/assets/mail.svg" alt="mail icon" />
                <img src="/software-engineer-portfolio/assets/plane.svg" alt="plane icon" />
              </div>
            </button>
          </form>
          <div className="social-medias-container">
            <a href="">
              <img src="/software-engineer-portfolio/assets/social-media/facebook.png" alt="" />
            </a>
            <a href="">
              <img src="/software-engineer-portfolio/assets/social-media/github.png" alt="" />
            </a>
            <a href="">
              <img src="/software-engineer-portfolio/assets/social-media/linkedin.png" alt="" />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
