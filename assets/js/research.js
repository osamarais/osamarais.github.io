/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
  {
    title: "FEqa: Finite element computations on quantum annealers",
    authors:
      "Osama Muhammad Raisuddin, Suvranu De",
    conferences:
      "Computer Methods in Applied Mechanics and Engineering",
    researchYr: 2022,
    citebox: "popup1",
    image: "assets/images/research-page/feqa.svg",
    citation: {
      vancouver:
        "Volume 395,\n2022,\n115014,\nISSN 0045-7825,\nhttps://doi.org/10.1016/j.cma.2022.115014.",
    },
    abstract:
      "The solution of physical problems discretized using the finite element methods using NISQ quantum hardware remains relatively unexplored. Here, we present a unified formulation (FEqa) to solve such problems using quantum annealers. FEqa is a hybrid technique in which the finite element problem is formulated on a classical computer, and the residual is minimized using a quantum annealer. The advantages of FEqa include utilizing a single qubit per degree of freedom, enforcing Dirichlet boundary conditions a priori, reaching arbitrary solution precision, and eliminating the possibility of the annealer generating invalid results. FEqa is scalable on the classical portion of the algorithm due to its Single Program Multiple Data (SPMD) nature and does not rely on ground state solutions from the annealer. The exponentially large number of collocation points used in quantum annealing are investigated for their cosine measures, and new iterative techniques are developed to exploit their properties. The quantum annealer has clear advantages in computational time over simulated annealing, for the example problems presented in this paper solved on the D-Wave machine. The presented work provides a pathway to solving physical problems using quantum annealers.",
    absbox: "absPopup1",
  },
  {
    title: "qMG: Quantum Multigrid Algorithm",
    authors: "Osama Muhammad Raisuddin, Suvranu De",
    conferences:
      "17th US National Congress on Computational Mechanics, Coupled Conference 2023, Under Review for Publication",
    researchYr: 2023,
    citebox: "popup5",
    image: "assets/images/research-page/qmg.png",
    citation: {
      vancouver:
        "",
    },
    abstract:
      "A quantum multigrid method for finite element problems is proposed as backsubstitution in a large linear system. The method can produce the entire sequence on operations with exponential advantage, albeit extraction of the final result from a quantum state is expensive.",
    absbox: "absPopup5",
  },

  {
    title: "qRLS: Quantum Relaxation for Linear Systems in Finite Elements",
    authors: "Osama Muhammad Raisuddin, Suvranu De",
    conferences:
      "SIAM-NNP 2023, Under Review for Publication",
    researchYr: 2023,
    citebox: "popup6",
    image: "assets/images/research-page/iterative.png",
    citation: {
      vancouver:
        "",
    },
    abstract:
      "Linear stationary iterations are encoded as backsubstitution in a large linear system. The linear system can be solved with exponential advantage on gate-based quantum computers. We provide results of the algorithm using the Qiskit quantum computer simulator as a demonstration.",
    absbox: "absPopup6",
  },
  {
    title:
      "Novel losses for 3D  mesh reconstruction",
    authors:
      "Osama Muhammad Raisuddin, Jean-Paul Ainam",
    conferences:
      "In Progress",
    researchYr: 2023,
    citebox: "popup4",
    image: "assets/images/research-page/mesh.png",
    citation: {
      vancouver:
        "",
    },
    abstract:
      "We propose a novel loss function for 3D mesh reconstruction. Our method is provably exact, consistent, and provides error bounds, unlike the de-facto standard point cloud losses used to train models. The loss function is also usable as a consistent metric to evaluate model performance.",
    absbox: "absPopup4",
  },


  {
    title: "Lp/Lq Sparse Regularization for deep learning and regression",
    authors:
      "Osama Muhammad Raisuddin, Jean-Paul Ainam",
    conferences:
      "",
    researchYr: 2022,
    citebox: "popup2",
    image: "assets/images/research-page/lpqo.png",
    citation: {
      vancouver:
        "",
    },
    abstract:
      "We investigate Lp/Lq regularization for sparse regression. L1 and L2 regularization schemes lead to suboptimal sparse solutions for sparse solutions since they are not scale invariant. Lp/Lq regularization can provide optimal sparse solutions and is scale invariant and differentiable, albeit non-convex. Application of Lp/Lq regularization on non-convex problems like deep learning can provide superior sparse solutions, with scale-invariance properties preventing all weights from being forced to 0.",
    absbox: "absPopup2",
  },

  {
    title:
      "Doubling multigrid convergance rates using optimal prolongation",
    authors: "Osama Muhammad Raisuddin",
    conferences:
      "In Progress",
    researchYr: 2022,
    citebox: "popup3",
    image: "assets/images/research-page/multigrid.png",
    citation: {
      vancouver:
        "",
    },
    abstract:
      "Intergrid transfer operations in standard multigrid are sub-optimal. We derive the optimal scheme for restriction in multigrid to practically double the convergence rate of the multigrid method. The scheme comes with an additional overhed of just one matrix-vector multiplication.",
    absbox: "absPopup3",
  },



  {
    title:
      "Delaying flow seperation using passive bleeding and vortex generators",
    authors: "Osama Muhammad Raisuddin, Atilay Zervent, Kayacan Kestel",
    conferences:
      "",
    researchYr: 2017,
    citebox: "popup7",
    image: "assets/images/research-page/airfoil.png",
    citation: {
      vancouver:
        "",
    },
    abstract:
      "A passive flow control scheme that bleeds aid from the pressure side of a NACA 0012 aifoil to the suction side was investigated experimentally. The scheme demonstrated an increase in the operating envelope of the airfoil by delaying flow seperation at high angles of attack. Vortex generators were also tested on the same airfoil to compare performance.",
    absbox: "absPopup7",
  },
];
AOS.init();
const fillData = () => {
  let output = "";
  research.forEach(
    ({
      image,
      title,
      authors,
      conferences,
      researchYr,
      citebox,
      citation,
      absbox,
      abstract,
    }) =>
      (output += `
            <tr data-aos="zoom-in-left">
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div class="img-div">
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="#0" class="paperTitle"> ${title} </a>
                    <div class = "authors"> ${authors} </div>

                    <div class="rConferences"> ${conferences}
                        <div class="researchY">${researchYr}</div>
                    </div>

                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                            ABSTRACT
                        </button>

                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${citebox}" aria-expanded="false" aria-controls="${citebox}">
                            CITE
                        </button>
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}
                        </div>
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${citation.vancouver}
                        </div>
                    </div>
                </td>
            </tr>`)
  );
  researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
