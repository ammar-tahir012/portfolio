import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { config } from "../config";
import { Link } from "react-router-dom";

import { MdArrowOutward } from "react-icons/md";

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  useEffect(() => {
    let ctx = gsap.context(() => {
      let mm = gsap.matchMedia();

      mm.add("(min-width: 769px)", () => {
        let translateX: number = 0;

        function setTranslateX() {
          const box = document.getElementsByClassName("work-box");
          if (box.length === 0) return;
          const rectLeft = document
            .querySelector(".work-container")!
            .getBoundingClientRect().left;
          const rect = box[0].getBoundingClientRect();
          const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
          let padding: number =
            parseInt(window.getComputedStyle(box[0]).padding) / 2;
          translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
        }

        setTranslateX();

        let timeline = gsap.timeline({
          scrollTrigger: {
            trigger: ".work-section",
            start: "top top",
            end: `+=${translateX}`,
            scrub: 1,
            pin: true,
            pinSpacing: true,
            anticipatePin: 1,
            id: "work",
            invalidateOnRefresh: true,
          },
        });

        timeline.to(".work-flex", {
          x: -translateX,
          ease: "none",
        });
      });
    });

    return () => {
      ctx.revert();
    };
  }, []);
  const splitTitle = (title: string) => {
    const parts = title.split(" — ");
    if (parts.length > 1) {
      return { heading: parts[0], subtitle: parts[1] };
    }
    return { heading: title, subtitle: "" };
  };

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {config.projects.map((project, index) => (
            <div
              className={`work-box${project.id === 1 ? " work-box-tall" : ""}`}
              key={project.id}
            >
              {/* 1. Header & Tools */}
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>
                  <div>
                    <h4>{splitTitle(project.title).heading}</h4>
                    <p className="work-desc-light">{splitTitle(project.title).subtitle}</p>
                  </div>
                </div>
                <div className="work-tools-header">
                  <h4>Tools and features</h4>
                  <Link
                    to={`/myworks#project-${project.id}`}
                    className="work-btn work-btn-visit slim-btn"
                    data-cursor="disable"
                  >
                    See Details <MdArrowOutward />
                  </Link>
                </div>
                <p className="work-tech">{project.technologies}</p>
              </div>

              {/* 2. Project Screenshot Image */}
              <WorkImage image={project.image} alt={project.title} />
            </div>
          ))}
          {/* See All Works Button */}
          <div className="work-box work-box-cta">
            <div className="see-all-works">
              <h3>Want to see more?</h3>
              <p>Explore all of my projects and creations</p>
              <Link to="/myworks" className="see-all-btn" data-cursor="disable">
                See All Works →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
