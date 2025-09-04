// // hooks/useAnimeSquareEdges.ts
// "use client";

// import { useEffect } from "react";
// import { animate } from "animejs";

// export function useAnimeSquareEdges(padding: number = 20) {
//   useEffect(() => {
//     const container = document.querySelector(".container") as HTMLElement | null;
//     const square = document.querySelector(".square") as HTMLElement | null;
//     if (!container || !square) return;

//     let animation: any;

//     const runAnimation = () => {
//       const right = container.clientWidth - square.clientWidth - padding;
//       const bottom = container.clientHeight - square.clientHeight - padding;

//       if (animation) animation.cancel();

//       animation = animate(square, {
//         keyframes: [
//           { translateX: padding, translateY: padding },
//           { translateX: right,   translateY: padding },
//           { translateX: right,   translateY: bottom },
//           { translateX: padding, translateY: bottom },
//           { translateX: padding, translateY: padding },
//           { translateX: padding-20, translateY: padding-20 },
//         ],
//         duration: 5000,
//         rotate: { to: 360, ease: 'linear' },
//         ease: 'inOut',
//         loop: true,
//       });
//     };

//     const resizeObserver = new ResizeObserver(() => {
//       runAnimation();
//     });

//     resizeObserver.observe(container);
//     runAnimation();

//     return () => {
//       resizeObserver.disconnect();
//       if (animation) animation.cancel();
//     };
//   }, [padding]);
// }
