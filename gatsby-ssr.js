import React from "react";
import "./node_modules/slick-carousel/slick/slick.css";
import "./src/assets/fonts/fontawesome-5/css/all.min.css";
import { Layout } from "./src/components/Core";
import { GlobalHeaderProvider } from "./src/context/GlobalHeaderContext";
import "./src/styles/scss/bootstrap.scss";
import "./src/styles/scss/global.scss";

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}

export const wrapRootElement = ({ element }) => (
  <GlobalHeaderProvider>{element}</GlobalHeaderProvider>
);

export const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    // <script
    //   key="./node_modules/tw-elements/dist/js/index.min.js"
    //   src="./node_modules/tw-elements/dist/js/index.min.js"
    //   crossOrigin="anonymous"
    //   defer
    // />,
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.min.js"></script>,
    <script src="https://cdn.jsdelivr.net/npm/jquery-touchswipe@1.6.18/jquery.touchSwipe.min.js"></script>,
    <script src="https://unpkg.com/masonry-layout@4/dist/masonry.pkgd.min.js"></script>,
  ]);
};
