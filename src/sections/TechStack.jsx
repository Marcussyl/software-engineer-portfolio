import { TechStackItem } from "../components/TechStackItem"
import { useEffect } from "react";
import { motion } from "motion/react";

export const TechStackSection = () => {
  return (
    <div className="flex gap-10 px-5 py-7 justify-around">
      <div class="main-wrapper relative flex-1 w-fit">
        <div class="grid-wrapper grid grid-cols-4 grid-rows-4 gap-4 w-fit m-5 z-20 cursor-pointer">
          <div class="grid-item col-start-1 row-start-1">1</div>
          <div class="grid-item col-start-2 row-start-1">2</div>
          <div class="grid-item col-start-3 row-start-1">3</div>

          <div class="grid-item col-start-1 row-start-2">4</div>
          <div class="grid-item col-start-2 row-start-2">5</div>
          <div class="grid-item col-start-3 row-start-2">6</div>
          <div class="grid-item col-start-4 row-start-2">7</div>

          <div class="grid-item col-start-1 row-start-3">8</div>
          <div class="grid-item col-start-2 row-start-3">9</div>
          <div class="grid-item col-start-3 row-start-3">10</div>
          <div class="grid-item col-start-4 row-start-3">11</div>

          <div class="grid-item col-start-2 row-start-4">12</div>
          <div class="grid-item col-start-3 row-start-4">13</div>
          <div class="grid-item col-start-4 row-start-4">14</div>
        </div>
        <div class="flex flex-wrapper w-full m-5 justify-evenly items-center absolute top-0 left-0 bottom-0 z-10">
          <div class="flex-item relative -left-[3px]"></div>
          <div class="flex-item"></div>
          <div class="flex-item relative left-[3px]"></div>
        </div>
        <div class="flex flex-wrapper flex-col w-full m-5 justify-evenly items-center absolute top-0 left-0 bottom-0 z-10">
          <div class="flex-item-row relative -top-[13px]"></div>
          <div class="flex-item-row"></div>
          <div class="flex-item-row relative top-[13px]"></div>
        </div>
      </div>
      <div className="flex flex-col gap-5 items-center flex-1">
        <div className="tag">
          <p className="whitespace-nowrap">Tech Stack</p>
          <img src="/software-engineer-portfolio/assets/tag-icons/tech-stack.png" alt="icon" className="" />
        </div>
        <h2 className="gradient-text section-title">
          Technologies I Used
        </h2>
        <p className="section-desc">
          I've worked with a variety of technologies and frameworks over the
          years, and I'm always eager to learn new ones. Here are some of the
          technologies I've used:
        </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ea corrupti nulla vero modi reiciendis quibusdam minus quidem deserunt qui blanditiis minima odit quos nam perspiciatis, praesentium soluta suscipit at!</p>
        {/* <div className="flex gap-10 text-[#B5B2BA] w-full justify-center items-center">
          <div className="tech-stack-col">
            <p className="tech-stack-col-title">Frontend</p>
            <ul>
              <li>React</li>
              <li>Redux</li>
              <li>Vue</li>
              <li>Typescript</li>
              <li>Tailwind</li>
              <li>Sass</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </div>
          <div className="divider"></div>
          <div className="tech-stack-col">
            <p className="tech-stack-col-title">Backend</p>
            <ul>
              <li>Nodejs</li>
              <li>Express</li>
              <li>MongoDB</li>
              <li>PostgreSQL</li>
              <li>MySQL</li>
              <li>SQL</li>
            </ul>
          </div>
          <div className="divider"></div>
          <div className="tech-stack-col">
            <p className="tech-stack-col-title">Infrastructure</p>
            <ul>
              <li>Docker</li>
              <li>Kubernetes</li>
              <li>AWS</li>
              <li>Azure</li>
            </ul>
          </div>
        </div> */}
      </div>
    </div>
  );
}