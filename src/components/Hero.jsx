const Hero = () => {
  return (
    <section id="hero">
      <div>
        <h1>Mac Book Pro</h1>
        <img src="/title.png" alt="title" className="select-none" />
      </div>
      <video src="/videos/hero.mp4" autoPlay muted playsInline></video>
      <button>Buy</button>
      <p>From $1500 or $130/mo for 12 months</p>
    </section>
  );
};

export default Hero;
