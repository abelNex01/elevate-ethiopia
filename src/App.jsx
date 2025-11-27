import React, { useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import Home from "./page/Home.jsx";
import About from "./page/About.jsx"
import FAQ from "./page/FAQ.jsx"
import Blog from "./page/Blog.jsx"
import Appointment from "./page/Appointment.jsx"
import CustomCursor from "./components/CustomCursor.jsx";
import Footer from "./components/Footer.jsx";
import ScrollButton from './components/ScrollButton.jsx'

// /**
//  * Replace the root container content with an overlay
//  */
// function enableDevtoolsProtection(rootContainerId = "root") {
//   const rootEl = document.getElementById(rootContainerId);

//   // If you have the React root instance saved somewhere, call root.unmount() there.
//   // Fallback: remove children so React can't re-render into it.
//   if (rootEl) {
//     try {
//       while (rootEl.firstChild) rootEl.removeChild(rootEl.firstChild);
//     } catch (err) {
//       // ignore
//     }
//   }

//   // Create overlay
//   const overlay = document.createElement("div");
//   Object.assign(overlay.style, {
//     position: "fixed",
//     top: "0",
//     left: "0",
//     right: "0",
//     bottom: "0",
//     zIndex: "999999",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     background: "#0a0a0a",
//     color: "#fff",
//     fontSize: "20px",
//     fontFamily: "sans-serif",
//     textAlign: "center",
//     padding: "20px",
//   });
//   overlay.innerText = "Access Restricted — DevTools detected.";
//   document.body.appendChild(overlay);

//   // Block interactions with the rest of the page
//   document.body.style.pointerEvents = "none";
//   overlay.style.pointerEvents = "auto"; // let overlay be clickable (if you want)
// }

// /**
//  * Heuristic detector: dimension differences and timing work
//  */
// function createDevtoolsDetector(onDetect) {
//   const threshold = 160;
//   let lastOpen = false;

//   function checkByDimensions() {
//     const widthDiff = window.outerWidth - window.innerWidth;
//     const heightDiff = window.outerHeight - window.innerHeight;
//     return widthDiff > threshold || heightDiff > threshold;
//   }

//   function checkByDebugger() {
//     const start = performance.now();
//     // small CPU loop to detect slowdown (heuristic)
//     for (let i = 0; i < 100000; i++) {
//       // trivial math
//       Math.sqrt(i);
//     }
//     const end = performance.now();
//     return end - start > 40;
//   }

//   function poll() {
//     let open = false;
//     try {
//       open = checkByDimensions() || checkByDebugger();
//     } catch (err) {
//       open = checkByDimensions();
//     }

//     if (open && !lastOpen) {
//       lastOpen = true;
//       onDetect();
//     } else if (!open && lastOpen) {
//       lastOpen = false;
//       // optional: handle close
//     }
//   }

//   const id = setInterval(poll, 700);
//   return () => clearInterval(id);
// }

/* Main App */
function App() {
  // useEffect(() => {
  //   // ---- 1) Right-click disable ----
  //   const handleContextMenu = (e) => e.preventDefault();
  //   document.addEventListener("contextmenu", handleContextMenu);

  //   // ---- 2) Disable dragging of images ----
  //   const handleDragStart = (e) => {
  //     if (e.target && e.target.tagName === "IMG") e.preventDefault();
  //   };
  //   document.addEventListener("dragstart", handleDragStart);

  //   // Also set existing and future <img> draggable=false and disable contextmenu on them
  //   function setImagesNonDraggable(root = document) {
  //     const imgs = root.querySelectorAll && root.querySelectorAll("img");
  //     if (imgs && imgs.length) {
  //       imgs.forEach((img) => {
  //         img.setAttribute("draggable", "false");
  //         // also disable contextmenu on images specifically (extra)
  //         img.addEventListener("contextmenu", (ev) => ev.preventDefault());
  //       });
  //     }
  //   }
  //   setImagesNonDraggable();

  //   // MutationObserver to catch images added after mount
  //   const observer = new MutationObserver((mutations) => {
  //     for (const m of mutations) {
  //       if (m.addedNodes && m.addedNodes.length) {
  //         m.addedNodes.forEach((node) => {
  //           if (node.nodeType === 1) {
  //             if (node.tagName === "IMG") {
  //               node.setAttribute("draggable", "false");
  //               node.addEventListener("contextmenu", (ev) =>
  //                 ev.preventDefault()
  //               );
  //             } else {
  //               // if some subtree contains images
  //               setImagesNonDraggable(node);
  //             }
  //           }
  //         });
  //       }
  //     }
  //   });
  //   observer.observe(document.body, { childList: true, subtree: true });

  //   // ---- 3) Block common inspect/view-source keyboard shortcuts ----
  //   const handleKeyDown = (e) => {
  //     // F12
  //     if (e.key === "F12") {
  //       e.preventDefault();
  //       e.stopPropagation();
  //       return;
  //     }

  //     // Ctrl+Shift+I / J / C  (inspect / console / element)
  //     if (e.ctrlKey && e.shiftKey) {
  //       const k = (e.key || "").toLowerCase();
  //       if (k === "i" || k === "j" || k === "c") {
  //         // FIXED: Added || operators
  //         e.preventDefault();
  //         e.stopPropagation();
  //         return;
  //       }
  //     }

  //     // Ctrl+U (view-source)
  //     if (e.ctrlKey && (e.key || "").toLowerCase() === "u") {
  //       e.preventDefault();
  //       e.stopPropagation();
  //       return;
  //     }

  //     // Mac Cmd+Option+I / J / C
  //     if (e.metaKey && e.altKey) {
  //       const k = (e.key || "").toLowerCase();
  //       if (k === "i" || k === "j" || k === "c") {
  //         e.preventDefault();
  //         e.stopPropagation();
  //         return;
  //       }
  //     }
  //   };
  //   document.addEventListener("keydown", handleKeyDown);

  //   // ---- 4) DevTools detector ----
  //   const stopDetector = createDevtoolsDetector(() => {
  //     // On detection: run the protection
  //     enableDevtoolsProtection("root");
  //     // Additionally remove listeners so our protection stays consistent
  //     document.removeEventListener("contextmenu", handleContextMenu);
  //     document.removeEventListener("dragstart", handleDragStart);
  //     document.removeEventListener("keydown", handleKeyDown);
  //     observer.disconnect();
  //   });

  //   // Cleanup on unmount
  //   return () => {
  //     document.removeEventListener("contextmenu", handleContextMenu);
  //     document.removeEventListener("dragstart", handleDragStart);
  //     document.removeEventListener("keydown", handleKeyDown);
  //     observer.disconnect();
  //     stopDetector();
  //   };
  // }, []);

  return (
    <>
    <ScrollButton/>
      <CustomCursor />
      <Navbar />
      <Home/>
      <About/>
      <FAQ/>
      <Blog/>
      <Appointment/>
      <Footer />
      
    </>
  );
}

export default App;
