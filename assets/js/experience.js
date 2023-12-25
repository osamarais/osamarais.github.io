AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Research Scientist",
    cardImage: "assets/images/experience-page/Rensselaer_Seal.png",
    place: "RPI, SCoREC Troy NY",
    time: "(January, 2023 - Present)",
    desp: "<li>Novel algorithms and applications for quantum computing.</li>",
  },
  {
    title: "Research Assistant",
    cardImage: "assets/images/experience-page/Rensselaer_Seal.png",
    place: "RPI, CeMSIM Troy NY",
    time: "(August, 2019 - December, 2023)",
    desp: "<li>Academic literature survey on quantum computing for scientific/engineering computation.</li> <li>Implemented algorithms and codes from research journals and books in Python and C.</li> <li>Created algorithms for quantum computers with implementation in  Qiskit, Cirq and Ocean.</li><li>Published papers in top journals and presented at conferences.</li><li>Investigated novel loss functions for machine learning.</li>",
  },
  {
    title: "Teaching Assistant",
    cardImage: "assets/images/experience-page/Rensselaer_Polytechnic_Institute_coat_of_arms.png",
    place: "RPI, Troy NY",
    time: "(January, 2019 - August, 2019)",
    desp: "<li>Taught CAD on Siemens NX as lead TA of 3 teams.</li><li>Prepared and graded exams and homeowrks for Thermodynamics and Fluid Mechanics.</li>",
  },
  {
    title: "Undergraduate Researcher",
    cardImage: "assets/images/experience-page/metu_logo.png",
    place: "METU, Ankara Turkey",
    time: "(September, 2017 - June, 2018)",
    desp: "<li>Wind tunnel experiments using PIV, LDA, and HWA.</li><li>Design of a remote controlled state to position PIV cameras.</li>",
  },
  {
    title: "Part-time Consultant",
    cardImage: "assets/images/experience-page/yapi destek.jpeg",
    place: "Yapi Destek, Ankara Turkey",
    time: "(September, 2016 - January, 2017)",
    desp: "<li>Programmed microcontrollers to synchronously collect and transmit accelerometer data for structural health monitoring of buildings.</li>",
  },
  {
    title: "Mechanical Engineering Intern",
    cardImage: "assets/images/experience-page/rfsens.webp",
    place: "RF-Sens, Ankara Turkey",
    time: "(August, 2016 - September, 2016)",
    desp: "<li>Designed a syringe pump to deliver samples to a MEMS RF water quality sensor.</li><li>Conducted experiments on prototype sensors developed in the lab.</li>",
  },
  {
    title: "Mechatronics Intern",
    cardImage: "assets/images/experience-page/scirobot2.jpeg",
    place: "SciRobot, Ankara Turkey",
    time: "(June, 2016 - August, 2016)",
    desp: "<li>Collaborated with industrial designers to create a facial expression software library and hardware setup using LED Matrices.</li><li>Created a bills of materials for prototypes.</li>",
  },
  {
    title: "Manufacturing Intern",
    cardImage: "assets/images/experience-page/ktdmc.jpeg",
    place: "Karachi Tools, Dies, & Manufacturing Center, Karachi Pakistan",
    time: "(July, 2015 - September, 2015)",
    desp: "<li>Learned about state-of-the art manufacturing and quality control processes including CNC, EDM, CMM, and 3D Scanning .</li><li>Prepared a report on factory layout and material flow.</li>",
  },
  {
    title: "Intern",
    cardImage: "assets/images/experience-page/kiak-2.jpeg",
    place: "Kawther Ibrahim Abdulkadir & Partners, Jeddah KSA",
    time: "(December, 2014 - January, 2015)",
    desp: "<li>Learned about the laboratory equipment industry and associated services.</li><li>Assisted engineers with calibration of metrology equipment for various laboratory applications.</li>",
  },
  {
    title: "Manager",
    cardImage: "assets/images/experience-page/universal_autos.jpeg",
    place: "Universal Autos, Karachi Pakistan",
    time: "(July, 2010 - September, 2010)",
    desp: "<li>Managed sales, inventory, and bookkeeping.</li><li>Managed labor and ensured smooth operations and customer satisfaction.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400">
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Programming, Coding, Software, Algorithms",
    cardImage: "assets/images/experience-page/code.jpeg",
    description:
      "Experience programming a variety of architectures: from Quantum Computers and Supercomputers to Microcontrollers and Assembly Language.",
  },
  {
    title: "Scientific and Engineering Computation",
    cardImage: "assets/images/experience-page/scientific_computing.png",
    description:
      "Implemented codes for various scientific and engineering applications from descriptions in academic papers to novel research, ranging from Finite Element Analysis and Robotic Controls to Image Processing.",
  },
  {
    title: "Machine Learning and Artificial Intelligence",
    cardImage: "assets/images/experience-page/machine_learning.jpg",
    description:
      "Experience applying deep learning using standard libraries and testing out new ideas to improve learning.",
  },
  {
    title: "Management, Leadership, and Teamwork",
    cardImage: "assets/images/experience-page/management_leadership_teamwork.png",
    description:
      "Successfully led teams of engineers, peers, and labor to complete tasks and projects.",
  },
  {
    title: "Communication",
    cardImage: "assets/images/experience-page/communication.png",
    description:
      "Presented research findings in academic environments and market surveys in pitches.",
  },
  {
    title: "Research",
    cardImage: "assets/images/experience-page/research.png",
    description:
      "Cutting edge research for scientific computing & deep learning and customer discovery for lean startups.",
  },
  {
    title: "Engineering and Analytical Skills",
    cardImage: "assets/images/experience-page/engineering.png",
    description:
      "Experienced with design, manufaturing, prototyping, and root-cause analysis of mechanical, electrical, and computer systems.",
  },
  {
    title: "Mechatronics",
    cardImage: "assets/images/experience-page/mechatronics.png",
    description:
      "Worked on a variety of projects including omniwheel robots and turbine flowmeters.",
  },
  {
    title: "Hands-on Work",
    cardImage: "assets/images/experience-page/hand.png",
    description:
      "Highly proficient and experienced with working on and diagnosing mechanical and electrical systems.",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">

      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>

      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "Belsky Award for Computational Sciences and Engineering",
    subtitle: "Winner",
    image: "assets/images/experience-page/belsky_award.jpeg",
    desp: "Award given to graduate students with outstanding contributions to computational science and engineering.",
    href: "https://giving.rpi.edu/belsky-award/",
  },
  {
    title: "Change the World Challenge",
    subtitle: "Winner",
    image: "assets/images/experience-page/change_the_world_challenge.jpeg",
    desp: "Customer discovery for speech-to-speech machine learning solutions using the lean startup method. Interviewed consumers to identify a product-market fit.",
    href: "https://news.rpi.edu/content/2023/04/20/students-take-change-world-challenge-and-some-head-new-york-business-plan",
  },
  {
    title: "Rensselaer Founders Award of Excellence",
    subtitle: "Awardee",
    image: "assets/images/experience-page/founders_award.jpeg",
    desp: "Highest award at the Honors Convocation to recognize students who embody the qualities of creativity, discovery, and leadership, and the values of pride and responsibility at Rensselaer.",
    href: "https://mane.rpi.edu/graduate/meet-our-students",
  },
  {
    title: "R.J. Melosh Medal",
    subtitle: "Finalist",
    image: "assets/images/experience-page/melosh.jpeg",
    desp: "The R.J. Melosh Medal is the most prestigious award for Ph.D. research in computational mechanics, with six finalists selected yearly around the globe.",
    href: "https://cee.duke.edu/about/awards-honors/melosh-medal",
  },
  {
    title: "Arcelik Innovative Design Challenge",
    subtitle: "Runner-Up",
    image: "assets/images/experience-page/arcelik.jpg",
    desp: "Competed to prepare the best layout for a floor plan and material flow in a factory and provide practical solutions to issues in manufacturing processes and efficiency and presented findings to Executives and Upper Management at Arcelik, a Koc holding company.",
    href: "https://www.arcelikglobal.com/en/",
  },
  {
    title: "Rensselaer Travel Award",
    subtitle: "Recipient",
    image: "assets/images/experience-page/Rensselaer_Seal.png",
    desp: "Travel awards from the MANE department and Office of Graduate education to present research work.",
    href: "",
  },
  {
    title: "SIAM Travel Award",
    subtitle: "Recipient",
    image: "assets/images/experience-page/siam.jpg",
    desp: "Travel awards from the SIAM New York-New Jersey-Pennsylvania Section to present my research work on Quantum Relaxation for Linear Systems.",
    href: "https://www.siam.org/conferences/cm/conference/nnp23",
  },
  {
    title: "USACM Travel Award",
    subtitle: "Awardee",
    image: "assets/images/experience-page/usacm.png",
    desp: "Travel award from the US Association for Computational Mechanics to present my research on Quantum Multigrid Methods at USNCCM17 in Albuquerque, New Mexico.",
    href: "https://17.usnccm.org",
  },
  {
    title: "IACM Travel Award",
    subtitle: "Awardee",
    image: "assets/images/experience-page/iacm.png",
    desp: "Travel award from the International Association for Computational Mechanics to present my research on FEqa: Finite Element Computations on Quantum Annealers.",
    href: "https://www.wccm2022.org",
  },
  {
    title: "NSF I-Corps Regional Funding Award",
    subtitle: "Entrepreneur",
    image: "assets/images/experience-page/nsf icorps.jpeg",
    desp: "Funding provided upon successful completion of the NSF I-Corps Regional program to initiate prototyping my novel hinge design for foldable devices and travel to Display Week 2023 to meet key players in the market and conduct customer discovery.",
    href: "https://new.nsf.gov/funding/initiatives/i-corps",
  },
  {
    title: "IonQ & Microsoft Quantum Research Credits Award",
    subtitle: "Researcher",
    image: "assets/images/experience-page/ionq.jpeg",
    desp: "Research credits to access the latest quantum computers for algorithm development and validation.",
    href: "https://ionq.com/programs/research-credits",
  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp, href }) =>
      (output += `
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="${href}" class="blog-slider__button">Read More</a>
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
