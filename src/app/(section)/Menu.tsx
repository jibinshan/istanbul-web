'use client'
import { Icons } from "@/components/Icon";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Lenis from "lenis";
import { useEffect } from "react";
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type';

const Menu = ({ }) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.to('.title', {
      scrollTrigger: {
        trigger: ".title",
        toggleActions: 'restart none none none',
        // start: "top 80%", // When the top of the .title enters 80% of the viewport
        // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
        // scrub: true
      },
      x: 52,
      duration: 1.5

    })
    const splitType = document.querySelectorAll(".head")
    splitType.forEach((char, i) => {
      if (char instanceof HTMLElement) {
        const text = new SplitType(char, { types: "chars" })
        gsap.from(text.chars, {
          scrollTrigger: {
            trigger: char,
            start: 'top 80%',
            end: 'top 20%',
            scrub: true,
            markers: false
          },
          opacity: 0.2,
          stagger: 0.2
        })
      }
    })

    gsap.to('.menu-description', {
      scrollTrigger: {
        trigger: ".menu-description",
        toggleActions: "restart none none none"
      },
      y: -50,
      duration: 1.5
    }
    )
    gsap.to('.menu-button', {
      scrollTrigger: {
        trigger: ".menu-button",
        toggleActions: "restart none none none"
      },
      y: -50,
      duration: 1.5
    }
    )
    // const lenis = new Lenis();

    // lenis.on("scroll", (e) => {
    //   console.log(e, "===e");
    // })

    // const raf = (time: number) => {
    //   lenis.raf(time)
    //   requestAnimationFrame(raf)
    // }
    // requestAnimationFrame(raf)

    // return () => {
    //   lenis.destroy(); // Cleanup Lenis instance to avoid memory leaks
    // };
  }, [])
  return (
    <section className="relative flex h-full w-full items-center justify-center overflow-hidden py-12 pl-0 lg:pr-8">
      <div
        className="absolute left-0 z-10 h-full w-full"
        style={{
          // background: "linear-gradient(to bottom, black, rgba(0, 0, 0, 0.5), black)",
          background:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7))",
          // background: "background: linear-gradient(90deg, rgba(7, 7, 7, 0.00) 0.02%, rgba(7, 7, 7, 0.78) 37.14%, #070707 99.98%);"
        }}
      ></div>
      <div className="absolute left-5 z-10 flex h-full w-full flex-col items-start justify-center gap-5 lg:left-44 lg:pr-16">
        <h3 className="title font-oswald uppercase -ml-[50px]">Explore menu</h3>
        <h1 className="head max-w-[500px] font-oswald text-6xl font-bold sm:text-7xl md:text-start">
          Istanbul
          <br />
          <span className="text-primary">Menu</span>
        </h1>
        <p className="menu-description max-w-[300px] font-light leading-[160%] text-white md:text-start lg:max-w-[500px] mt-[50px]">
          Our Istanbul menu is crafted from a deep passion for Turkish flavors,
          with a focus on authenticity and quality. Every dish celebrates the
          rich culinary heritage of Turkey, prepared by skilled chefs who
          carefully select fresh, local ingredients. We invite you to experience
          the vibrant tastes of Istanbul, where each meal is a true labor of
          love.
        </p>
        <Link href="/menu">
          <Button className="menu-button flex items-center justify-center gap-3 rounded-none bg-primary px-6 py-7 font-oswald font-bold text-[#282828] mt-[50]">
            View Menu{" "}
            <Icons.rightArrow className="text-[#282828] duration-300 ease-in-out group-hover:translate-x-1 group-hover:text-primary-foreground" />
          </Button>
        </Link>
      </div>
      <div className="flex w-full gap-2 lg:gap-4">
        <div
          className="h-[598px] w-1/3 rounded-3xl"
          style={{
            backgroundImage: "url(/images/home/image.png)",
            backgroundPosition: "center",
            backgroundSize: "cover", // Ensures the image covers the container while maintaining aspect ratio
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div
          className="h-[598px] w-1/3 rounded-3xl"
          style={{
            backgroundImage: "url(/images/home/image1.png)",
            backgroundPosition: "center",
            backgroundSize: "cover", // Ensures the image covers the container while maintaining aspect ratio
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div
          className="h-[598px] w-1/3 rounded-3xl"
          style={{
            backgroundImage: "url(/images/home/image3.png)",
            backgroundPosition: "center",
            backgroundSize: "cover", // Ensures the image covers the container while maintaining aspect ratio
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>
    </section>
  );
};

export default Menu;
