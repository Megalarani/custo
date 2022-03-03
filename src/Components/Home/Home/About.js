const About = (props) => {
  return (
    <section id="#About">
      <div class="about container">
        <h2>About Us</h2>
        <p>{props.school.about}</p>;
      </div>
    </section>
  );
};

export default About;
