// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-research",
          title: "research",
          description: "Check out our main research topics",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-people",
          title: "people",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "Find here a list of our publications in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "news-the-mates-lab-website-is-now-up-rocket-stay-tuned-for-more-content",
          title: 'The MatES-Lab website is now up :rocket:. Stay tuned for more content!',
          description: "",
          section: "News",},{id: "projects-2d-nanomaterials",
          title: '2D nanomaterials',
          description: "for green energy storage and beyond",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2d-nanomaterials.html";
            },},{id: "projects-architected-carbon-lattices",
          title: 'Architected carbon lattices',
          description: "via 3D printing and pyrolysis",
          section: "Projects",handler: () => {
              window.location.href = "/projects/carbon-microlattices.html";
            },},{id: "projects-catalytic-graphitization",
          title: 'Catalytic graphitization',
          description: "to produce more sustainable graphite",
          section: "Projects",handler: () => {
              window.location.href = "/projects/catalytic-graphitization.html";
            },},{id: "projects-beyond-li-batteries",
          title: 'Beyond Li-batteries',
          description: "Electro-active materials and their interfaces",
          section: "Projects",handler: () => {
              window.location.href = "/projects/electro-active-materials.html";
            },},{id: "projects-radioactive-waste-management",
          title: 'Radioactive Waste Management',
          description: "through advanced materials",
          section: "Projects",handler: () => {
              window.location.href = "/projects/nuclear-waste.html";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
