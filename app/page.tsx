const CTA_LABEL = "Connect with A Santé";
const CTA_HREF = "https://www.facebook.com/ASanteFitness";

const services = [
  ["01", "Train your way", "Cardio machines, free weights and selectorized equipment across a 9,000 sq. ft. facility."],
  ["02", "Move together", "Cardio/Barre, Zumba, Yoga and Spin. Every group fitness class is included for members."],
  ["03", "Build a plan", "Personal training for individuals or buddies, plus an on-site Pilates studio."],
];

const trainers = [
  ["Nick Casini", "ISSA certified since 1988", "Advanced strength training certified and a longtime Tahoe local."],
  ["Sherie Schmidt", "ACE certified since 1997", "A 38-year Tahoe resident with 14 marathons and 8 Double Centuries behind her."],
  ["Linda Tripp", "Training at A Santé since 2001", "ISSA certified with 10 years of physical therapy assistant experience."],
  ["Seth Benson", "ISSA certified", "Former UNR lacrosse player with degrees in finance and economics."],
];

const faqs = [
  ["Do I need a long-term membership?", "No. A Santé has offered daily, weekly and monthly memberships, 10-visit punch cards and drop-in day passes."],
  ["Are classes extra?", "All group fitness classes are free for members."],
  ["What amenities are on site?", "Locker rooms, showers, a sauna and a Pilates studio complement the main training floor."],
  ["Can a trainer work with my experience level?", "The training team has worked with athletes, people returning from injury and members focused on general health."],
];

export default function Home() {
  return (
    <main>
      <nav className="nav" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="A Santé Lakeside Fitness home">
          <img src="/images/logo-6e5558e53b.gif" alt="A Santé Lakeside Fitness" />
        </a>
        <div className="navLinks">
          <a href="#fitness">Fitness</a>
          <a href="#trainers">Trainers</a>
          <a href="#story">Our story</a>
        </div>
        <a className="button buttonSmall" href={CTA_HREF} target="_blank" rel="noreferrer">{CTA_LABEL}</a>
      </nav>

      <header className="hero" id="top">
        <img className="heroImage" src="/images/entrance450x200-7f9fe30edf.jpg" alt="Entrance to A Santé Lakeside Fitness in Tahoe City" />
        <div className="heroShade" />
        <div className="heroCopy">
          <p className="eyebrow">Downtown Tahoe City · California</p>
          <h1>Work out<br />with a view.</h1>
          <p className="heroText">Your lakeside partner for getting fit, moving better and growing stronger.</p>
          <a className="button" href={CTA_HREF} target="_blank" rel="noreferrer">{CTA_LABEL}</a>
        </div>
        <div className="lakeMark" aria-hidden="true"><span>39° N</span><i /></div>
      </header>

      <section className="proofBar" aria-label="At a glance">
        <div><strong>9,000</strong><span>square feet</span></div>
        <div><strong>Lake Tahoe</strong><span>steps from the shore</span></div>
        <div><strong>Since 2008+</strong><span>documented in Tahoe</span></div>
        <div><strong>Classes included</strong><span>with membership</span></div>
      </section>

      <section className="split intro" id="fitness">
        <div className="photoFrame">
          <img src="/images/asante-39aca612a6.jpg" alt="Inside A Santé's Tahoe City fitness facility" />
          <span className="photoLabel">Tahoe City<br />training ground</span>
        </div>
        <div className="sectionCopy">
          <p className="eyebrow dark">Built for real life at altitude</p>
          <h2>Inside strength.<br /><em>Outside spirit.</em></h2>
          <p className="lead">In a town defined by movement, A Santé gives locals and visitors the space, tools and guidance to stay ready for whatever the mountain asks.</p>
          <div className="serviceList">
            {services.map(([number, title, description]) => (
              <article key={number}>
                <span>{number}</span>
                <div><h3>{title}</h3><p>{description}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="trainers" id="trainers">
        <div className="trainersHead">
          <div>
            <p className="eyebrow">Deep experience. Local perspective.</p>
            <h2>People who know<br />how to move you.</h2>
          </div>
          <img src="/images/sherrieschmidt_th-2cfe1ba29f.jpg" alt="A Santé personal trainer" />
        </div>
        <div className="trainerGrid">
          {trainers.map(([name, credential, detail], index) => (
            <article key={name}>
              <span>0{index + 1}</span>
              <h3>{name}</h3>
              <strong>{credential}</strong>
              <p>{detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="split story" id="story">
        <div className="sectionCopy">
          <p className="eyebrow dark">A Tahoe fixture</p>
          <h2>Showing up for<br /><em>the community.</em></h2>
          <p className="lead">A Santé&apos;s record stretches from at least 2008 through 2025, with 181 archived captures and a fitness blog active since 2012.</p>
          <div className="timeline">
            <div><strong>148</strong><span>community blog posts</span></div>
            <div><strong>30 days</strong><span>free monthly challenges, from anywhere</span></div>
            <div><strong>2022</strong><span>Best of North Lake Tahoe &amp; Truckee participant</span></div>
          </div>
        </div>
        <figure className="storyImage">
          <img src="/images/p1000473-640x279-3680bad21f.jpg" alt="A Santé Fitness community in Lake Tahoe" />
          <figcaption>Fitness for the place we call home.</figcaption>
        </figure>
      </section>

      <section className="faq">
        <div className="faqVisual">
          <img src="/images/asante-300x225-d4a104fa2d.jpg" alt="A closer view inside A Santé Fitness" />
          <div><span>Daily</span><span>Weekly</span><span>Monthly</span></div>
        </div>
        <div className="faqCopy">
          <p className="eyebrow dark">Good to know</p>
          <h2>Questions,<br /><em>answered.</em></h2>
          {faqs.map(([question, answer]) => (
            <details key={question}>
              <summary>{question}<span>+</span></summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="finalCta">
        <div>
          <p className="eyebrow">Your next Tahoe day starts here</p>
          <h2>Come as you are.<br /><em>Leave stronger.</em></h2>
        </div>
        <a className="button light" href={CTA_HREF} target="_blank" rel="noreferrer">{CTA_LABEL}</a>
      </section>

      <footer>
        <div className="footerBrand">A SANTÉ <span>LAKESIDE FITNESS</span></div>
        <p>Downtown Tahoe City, just behind Safeway<br />On the shores of Lake Tahoe, California</p>
        <div className="footerLinks"><a href="#fitness">Fitness</a><a href="#trainers">Trainers</a><a href="#story">Story</a></div>
        <small>Built for better days in the mountains.</small>
      </footer>

      <style>{`
        :root { --ink:#142b2d; --lake:#126f77; --ice:#dceced; --sand:#f2eee5; --orange:#e96038; --white:#fff; }
        * { box-sizing:border-box; }
        html { scroll-behavior:smooth; }
        body { margin:0; color:var(--ink); background:var(--sand); font-family:Arial, Helvetica, sans-serif; }
        a { color:inherit; text-decoration:none; }
        .nav { height:88px; padding:0 5vw; display:flex; align-items:center; justify-content:space-between; background:#fff; position:relative; z-index:5; }
        .brand img { width:170px; display:block; }
        .navLinks { display:flex; gap:34px; font-size:12px; font-weight:700; text-transform:uppercase; letter-spacing:.12em; }
        .button { display:inline-flex; align-items:center; justify-content:center; min-height:54px; padding:0 27px; background:var(--orange); color:#fff; font-size:12px; font-weight:800; letter-spacing:.11em; text-transform:uppercase; transition:transform .2s, background .2s; }
        .button:hover { transform:translateY(-2px); background:#d84d27; }
        .buttonSmall { min-height:43px; padding:0 20px; }
        .hero { height:calc(100vh - 88px); min-height:650px; position:relative; display:flex; align-items:center; overflow:hidden; background:var(--ink); }
        .heroImage { position:absolute; inset:0; width:100%; height:100%; object-fit:cover; image-rendering:auto; transform:scale(1.02); }
        .heroShade { position:absolute; inset:0; background:linear-gradient(90deg,rgba(10,31,33,.9) 0%,rgba(10,31,33,.48) 55%,rgba(10,31,33,.08) 100%),linear-gradient(0deg,rgba(10,31,33,.35),transparent 45%); }
        .heroCopy { width:90%; max-width:1240px; margin:auto; position:relative; color:#fff; }
        .eyebrow { margin:0 0 20px; font-size:11px; font-weight:800; letter-spacing:.2em; text-transform:uppercase; }
        .eyebrow:before { content:""; display:inline-block; width:36px; border-top:2px solid var(--orange); margin:0 12px 3px 0; }
        .eyebrow.dark { color:var(--lake); }
        h1,h2 { margin:0; font-family:Georgia, 'Times New Roman', serif; font-weight:400; letter-spacing:-.055em; line-height:.88; }
        h1 { font-size:clamp(70px,10.5vw,155px); }
        h2 { font-size:clamp(48px,6.2vw,92px); }
        h2 em { color:var(--lake); font-weight:400; }
        .heroText { max-width:450px; margin:30px 0; font-family:Georgia, serif; font-size:20px; line-height:1.55; }
        .lakeMark { position:absolute; right:5vw; bottom:35px; color:#fff; display:flex; align-items:center; gap:12px; font-size:10px; letter-spacing:.2em; }
        .lakeMark i { width:80px; border-top:1px solid rgba(255,255,255,.5); }
        .proofBar { display:grid; grid-template-columns:repeat(4,1fr); background:var(--lake); color:#fff; padding:26px 5vw; }
        .proofBar div { padding:5px 25px; border-right:1px solid rgba(255,255,255,.24); }
        .proofBar div:first-child { padding-left:0; }.proofBar div:last-child { border:0; }
        .proofBar strong,.proofBar span { display:block; }
        .proofBar strong { font-family:Georgia,serif; font-size:24px; font-weight:400; }
        .proofBar span { margin-top:5px; font-size:9px; letter-spacing:.16em; text-transform:uppercase; opacity:.75; }
        .split { display:grid; grid-template-columns:1fr 1fr; min-height:850px; }
        .photoFrame { position:relative; min-height:700px; background:var(--ink); overflow:hidden; }
        .photoFrame img { width:100%; height:100%; object-fit:cover; filter:saturate(.8) contrast(1.04); }
        .photoLabel { position:absolute; right:0; bottom:0; padding:24px 30px; background:var(--orange); color:#fff; font-size:11px; line-height:1.5; font-weight:800; letter-spacing:.12em; text-transform:uppercase; }
        .sectionCopy { padding:9vw 8vw; display:flex; flex-direction:column; justify-content:center; }
        .lead { max-width:580px; margin:34px 0; font-family:Georgia,serif; font-size:20px; line-height:1.6; color:#405255; }
        .serviceList article { display:grid; grid-template-columns:45px 1fr; gap:15px; padding:20px 0; border-top:1px solid #c8c8bd; }
        .serviceList article>span,.trainerGrid article>span { color:var(--orange); font-size:10px; font-weight:800; letter-spacing:.1em; }
        .serviceList h3 { margin:0 0 6px; font-family:Georgia,serif; font-size:21px; font-weight:400; }
        .serviceList p { margin:0; max-width:460px; color:#627074; font-size:13px; line-height:1.55; }
        .trainers { padding:9vw 5vw; background:var(--ink); color:#fff; }
        .trainersHead { display:grid; grid-template-columns:1fr 310px; align-items:end; max-width:1240px; margin:auto; }
        .trainersHead img { width:310px; height:230px; object-fit:cover; filter:grayscale(1); border:12px solid #fff; transform:rotate(2deg); }
        .trainerGrid { display:grid; grid-template-columns:repeat(4,1fr); max-width:1240px; margin:75px auto 0; border-top:1px solid #456063; }
        .trainerGrid article { padding:32px 28px 10px 0; border-right:1px solid #456063; min-height:240px; }
        .trainerGrid article:not(:first-child) { padding-left:28px; }
        .trainerGrid article:last-child { border:0; }
        .trainerGrid h3 { margin:35px 0 12px; font-family:Georgia,serif; font-size:28px; font-weight:400; }
        .trainerGrid strong { display:block; color:#80c3c5; font-size:10px; line-height:1.5; letter-spacing:.1em; text-transform:uppercase; }
        .trainerGrid p { color:#afc0c1; font-size:13px; line-height:1.6; }
        .story { background:#fff; }
        .timeline { display:grid; grid-template-columns:repeat(3,1fr); gap:20px; border-top:1px solid #ddd8cc; padding-top:25px; }
        .timeline strong,.timeline span { display:block; }.timeline strong { color:var(--orange); font:36px Georgia,serif; }.timeline span { margin-top:7px; font-size:10px; line-height:1.4; letter-spacing:.1em; text-transform:uppercase; }
        .storyImage { margin:0; position:relative; overflow:hidden; min-height:650px; }
        .storyImage img { width:100%; height:100%; object-fit:cover; }
        .storyImage figcaption { position:absolute; left:35px; bottom:35px; padding:15px 20px; background:#fff; font:italic 18px Georgia,serif; }
        .faq { display:grid; grid-template-columns:.85fr 1.15fr; min-height:760px; }
        .faqVisual { position:relative; background:var(--lake); padding:7vw 5vw; display:flex; flex-direction:column; justify-content:center; }
        .faqVisual img { width:100%; height:430px; object-fit:cover; box-shadow:25px 25px 0 #0d555b; }
        .faqVisual div { display:flex; justify-content:space-between; margin-top:50px; color:#fff; font:italic 26px Georgia,serif; }
        .faqCopy { padding:8vw; background:var(--sand); }
        .faqCopy h2 { margin-bottom:50px; }
        details { border-top:1px solid #c5c3bb; }
        details:last-child { border-bottom:1px solid #c5c3bb; }
        summary { list-style:none; cursor:pointer; padding:23px 0; display:flex; justify-content:space-between; gap:20px; font-family:Georgia,serif; font-size:18px; }
        summary::-webkit-details-marker { display:none; }
        summary span { color:var(--orange); font:25px Arial,sans-serif; }
        details p { margin:-8px 45px 22px 0; color:#5b696b; font-size:14px; line-height:1.6; }
        .finalCta { min-height:520px; padding:8vw 10vw; display:flex; justify-content:space-between; align-items:end; gap:50px; color:#fff; background:linear-gradient(135deg,rgba(13,78,83,.92),rgba(20,43,45,.98)),url('/images/hours-669x272-5d36cbcecc.png') center/cover; }
        .finalCta h2 em { color:#9cd5d4; }.button.light { background:#fff; color:var(--ink); flex:none; }.button.light:hover { background:var(--ice); }
        footer { padding:60px 5vw 25px; display:grid; grid-template-columns:1fr 1fr auto; gap:35px; align-items:start; background:#0b2022; color:#fff; }
        .footerBrand { font:30px Georgia,serif; }.footerBrand span { display:block; margin-top:5px; font:9px Arial,sans-serif; letter-spacing:.28em; }
        footer p { margin:0; color:#9db0b2; font-size:12px; line-height:1.8; }.footerLinks { display:flex; gap:25px; font-size:10px; font-weight:700; letter-spacing:.13em; text-transform:uppercase; }
        footer small { grid-column:1/-1; padding-top:25px; border-top:1px solid #294043; color:#617a7c; font-size:9px; letter-spacing:.14em; text-transform:uppercase; }
        @media (max-width: 800px) {
          .nav { height:72px; }.brand img { width:135px; }.navLinks { display:none; }.buttonSmall { min-height:38px; padding:0 13px; font-size:9px; }
          .hero { height:760px; min-height:0; }.heroCopy { padding-bottom:60px; }.heroImage { object-position:62% center; }.heroShade { background:linear-gradient(90deg,rgba(10,31,33,.85),rgba(10,31,33,.2)),linear-gradient(0deg,rgba(10,31,33,.6),transparent); }
          h1 { font-size:67px; }.heroText { font-size:17px; max-width:300px; }.lakeMark { display:none; }
          .proofBar { grid-template-columns:1fr 1fr; gap:20px 0; }.proofBar div:nth-child(2) { border:0; }.proofBar div:nth-child(3) { padding-left:0; }
          .split,.faq { grid-template-columns:1fr; min-height:0; }.photoFrame { min-height:520px; }.sectionCopy { padding:90px 7vw; }
          .trainers { padding:90px 7vw; }.trainersHead { grid-template-columns:1fr; gap:45px; }.trainersHead img { width:230px; height:180px; justify-self:end; }
          .trainerGrid { grid-template-columns:1fr 1fr; }.trainerGrid article:nth-child(2) { border-right:0; }.trainerGrid article:nth-child(3) { padding-left:0; }.trainerGrid article { border-bottom:1px solid #456063; }
          .storyImage { min-height:520px; grid-row:1; }.timeline { grid-template-columns:1fr; }.timeline div { border-bottom:1px solid #ddd8cc; padding-bottom:15px; }
          .faqVisual { padding:80px 7vw; }.faqVisual img { height:350px; }.faqVisual div { font-size:21px; }.faqCopy { padding:90px 7vw; }
          .finalCta { min-height:560px; padding:80px 7vw; flex-direction:column; align-items:flex-start; justify-content:center; }.finalCta .button { margin-top:20px; }
          footer { grid-template-columns:1fr; }.footerLinks { grid-row:3; }footer small { grid-column:1; }
        }
        @media (max-width: 440px) { .trainerGrid { grid-template-columns:1fr; }.trainerGrid article,.trainerGrid article:not(:first-child) { padding:28px 0; border-right:0; }.proofBar strong { font-size:19px; }.faqVisual img { height:280px; } }
      `}</style>
    </main>
  );
}
