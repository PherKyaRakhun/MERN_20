import React from "react";
import("./License.css");

const License = () => {
  return (
    <div className="licenses">
      <h1>Licenses</h1>
      <p>
        All graphical assets in this template are licensed for personal and
        commercial use. If you'd like to use a specific asset, please check the
        license below.
      </p>
      <div className="license-section">
        <div className="license-card">
          <h3>Photography</h3>
          <p>
            Photographs are sourced from
            <a href="#">Unsplash</a> and
            <a href="#">Pexels</a>. View
            <a href="#">Unsplash License</a>, and
            <a href="#">Pexels License</a>.
          </p>
          <p>
            Unsplash:
            <a href="#">Image 1</a>,<a href="#">Image 2</a>,
            <a href="#">Image 3</a>,<a href="#">Image 4</a>,
            <a href="#">Image 5</a>,<a href="#">Image 6</a>
          </p>
          <p>
            Pexels:
            <a href="#">Image 1</a>,<a href="#">Image 2</a>,
            <a href="#">Image 3</a>
          </p>
          <p>
            Product images are created by
            <a href="#">Salmon Pixel</a>, you are free to use them for personal
            and commercial purposes.
          </p>
        </div>
        <div className="license-card">
          <h3>Icons</h3>
          <p>
            Icons are sourced from
            <a href="#">Iconoir</a> and
            <a href="#">Remix Icon</a>. View
            <a href="#">Iconoir License</a> and
            <a href="#">Remix Icon License</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default License;
