import { motion } from "motion/react";

export const Contacts = () => {
  return (
    <div className="flex flex-col items-center pt-10">
      {/* <h1 className="section-title gradient-text">Get in touch with me</h1> */}
      {/* <p className="section-desc"></p> */}
      <div
        class="flex flex-col items-center px-10 pt-5 pb-10 m-5 mx-auto rounded-lg border-2 border-dashed border-main-purple max-w-[500px]"
        style={{
          background:
            "linear-gradient(to bottom right, #261a42 0%, #1e0e3b 20%, #140534 50%, #1e0e3d 80%, #281c44 90%, #281c44 100%)",
        }}
      >
        <h2 class="gradient-text font-bold text-2xl">Get in touch</h2>
        <br />
        <form action="https://example.com/submit" class="">
          <label for="name">Name</label>
          <div class="input-wrapper">
            <input id="name" type="text" placeholder="Chan Tai Man" />
          </div>
          <br />
          <label for="email">Email</label>
          <div class="input-wrapper">
            <input id="email" type="email" placeholder="1234@example.com" />
          </div>
          <br />
          <label for="msg">Message</label>
          <div class="input-wrapper">
            <textarea
              id="msg"
              name="msg"
              rows="4"
              cols="50"
              placeholder="Write your message here"
            ></textarea>
          </div>
          <br />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            className="glowing-btn block"
            type="submit"
            class="glowing-btn block mx-auto w-full rounded-[10px]"
          >
            <div class="inner justify-center rounded-[10px]">
              Submit message
              <img src="/assets/mail.svg" alt="mail icon" />
              <img src="/assets/plane.svg" alt="plane icon" />
            </div>
          </motion.button>
        </form>
        <div className="social-medias-container">
          <a href=""><img src="/assets/social-media/facebook.png" alt="" /></a>
          <a href=""><img src="/assets/social-media/github.png" alt="" /></a>
          <a href=""><img src="/assets/social-media/linkedin.png" alt="" /></a>
        </div>
      </div>
    </div>
  );
};
