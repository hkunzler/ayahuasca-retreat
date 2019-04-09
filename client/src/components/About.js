import React from "react";
import "./../about.css";

const About = () => {
  return (
    <div id="about">
      <h4>About</h4>
      <div className="brianna" />
      <h5>Brianna C Rose</h5>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora, ipsum
        voluptatem necessitatibus corrupti assumenda sint aut hic ex atque
        laborum illum voluptate sed odio qui a earum id. Possimus, maiores.
      </p>
      <div className="shaman-grid">
        <div className="shaman-flex">
          <div className="sara" />
          <h5>Sara</h5>
        </div>
        <div className="shaman-flex">
          <div className="elias" />
          <h5>Elias</h5>
        </div>
      </div>
      <p>
        Meet Sara and Elias, I am so very grateful to have them at our retreat.
        They are Shipibo shamans. They have 30+ years working with Ayahuasca and
        Plant Diets. They were born in the village of Santa Rosa De Dinamarca.
        They became shamans because they were born into it after their
        grandparents. They met and began to teach eachother more about plant
        medicine. Shipibo shamans date back more than 2,000 years.
      </p>
      <div className="shaman-grid">
        <div className="two-people" />
        <div className="one-person" />
      </div>
      <p>
        In the Shipibo culture, shamans called curanderos work as plant-based
        healers of physical, mental, and spiritual ailments. Their knowledge is
        said to come from plants themselves; this means that shamans recognize
        another person’s metaphysical blockages through the use of ayahuasca and
        understand the healing nature of other medicinal plants through a strict
        diet. Sometimes shamans are called on to use their traditional plant
        healing knowledge to treat illnesses like fevers or common ailments.
        Other times they work on a more psycho-spiritual level with ayahuasca as
        their central tool. Shipibo shamans consider ayahuasca to have
        divinatory properties, helping them to observe people across distances,
        uncover clues about mysterious circumstances, and commune directly with
        the spirits of nature.
      </p>
    </div>
  );
};

export default About;
