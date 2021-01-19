import { useEffect, useState } from "react";

/*
NOTE FOR : origineMarginElement 
there is a number restriction between 0 and 100

where 0 corresponds when the element reaches the top edges or the element is fully visible

and 100 correspond so when the element arrives at the bottom is not yet visible



*/
const origineMarginElement = 85;

function ContentIsVisible(idOrClassNameElement: string, marginElement: number = origineMarginElement): boolean {
  const [isVisible, setisVisible] = useState(false)
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    document.addEventListener("scroll", () => setisVisible(isInViewport()));
    return () => {
      document.removeEventListener("scroll", () => setisVisible(isInViewport()));
    };
  });

  useEffect(() => {
    function reportWindowSize() {
      setWindowHeight(window.innerHeight)
    }
    window.addEventListener('resize', reportWindowSize)
    return () => window.removeEventListener('resize', reportWindowSize)
  }, [])

  const isInViewport = (): boolean => {
    const element = document.getElementById(idOrClassNameElement)
    const offsetOrfalse = element ? element.getBoundingClientRect().top : false;
    if (offsetOrfalse !== false) {
      return ((offsetOrfalse / windowHeight) * 100) <= marginElement;
    } return false;
  };
  return isVisible
}
export default ContentIsVisible;
