const services = {
    "fr": [
      {
        "title": "Audit et conseil en automatisation",
        "items": [
          "Évaluation des processus d’affaires et identification des goulots d’étranglement.",
          "Recommandations sur les technologies et outils les plus adaptés (RPA, scripts sur mesure, intégrations API, etc.).",
          "Élaboration d’une feuille de route stratégique pour la transformation numérique à court, moyen et long terme."
        ]
      },
      {
        "title": "Développement de solutions d’automatisation sur mesure",
        "items": [
          "Conception et programmation d’applications personnalisées pour automatiser des tâches répétitives.",
          "Mise en place de workflows intelligents pour optimiser la collaboration entre différentes équipes.",
          "Création de tableaux de bord et de rapports automatisés pour un suivi en temps réel des indicateurs de performance."
        ]
      },
      {
        "title": "Intégration et orchestration de systèmes d’information",
        "items": [
          "Connexion d’applications existantes (ERP, CRM, bases de données) afin de réduire les manipulations manuelles.",
          "Centralisation des données pour améliorer la visibilité et la prise de décision.",
          "Coordination et automatisation des flux de travail entre différents outils pour garantir la cohérence de l’information."
        ]
      },
      {
        "title": "Robotisation des processus (RPA) et intelligence artificielle",
        "items": [
          "Conception et déploiement de robots logiciels pour gérer des tâches administratives et répétitives.",
          "Utilisation de l’intelligence artificielle et du machine learning pour l’analyse prédictive et la détection d’anomalies.",
          "Optimisation continue des processus automatisés grâce à la collecte et l’analyse de données de performance."
        ]
      },
      {
        "title": "Optimisation et accélération de processus techniques",
        "items": [
          "Mise en place de scripts et d’outils destinés à accélérer la compilation, les tests et le déploiement logiciels.",
          "Automatisation d’actions techniques complexes (analyses de logs, monitoring, alerting, etc.).",
          "Formation des équipes pour prendre rapidement en main les solutions déployées et garantir leur adoption."
        ]
      },
      {
        "title": "Services de migration et modernisation d’infrastructures",
        "items": [
          "Migration de systèmes hérités vers des solutions plus flexibles et évolutives (cloud, containers, microservices).",
          "Mise en place de systèmes gratuits lorsque disponibles.",
          "Modernisation d’infrastructures existantes afin de réduire les coûts de maintenance et de favoriser l’évolutivité.",
          "Sécurisation des données et mise en conformité avec les normes et règlements en vigueur."
        ]
      },
      {
        "title": "Accompagnement et support post-déploiement garantis",
        "items": [
          "Formation continue des équipes internes pour assurer la pérennité des solutions mises en place.",
          "Support technique et maintenance évolutive pour ajuster les automatisations en fonction des changements organisationnels.",
          "Service de veille technologique pour identifier régulièrement de nouvelles opportunités d’amélioration."
        ]
      }
    ],
    "en": [
      {
        "title": "Audit and Consulting in Automation",
        "items": [
          "Evaluation of business processes and identification of bottlenecks.",
          "Recommendations on the most suitable technologies and tools (RPA, custom scripts, API integrations, etc.).",
          "Development of a strategic roadmap for short-, medium-, and long-term digital transformation."
        ]
      },
      {
        "title": "Custom Automation Solutions Development",
        "items": [
          "Design and programming of tailored applications to automate repetitive tasks.",
          "Implementation of intelligent workflows to optimize collaboration among different teams.",
          "Creation of dashboards and automated reports for real-time monitoring of performance metrics."
        ]
      },
      {
        "title": "Systems Integration and Orchestration",
        "items": [
          "Connection of existing applications (ERP, CRM, databases) to reduce manual interventions.",
          "Data centralization to improve visibility and decision-making.",
          "Coordination and automation of workflows between different tools to ensure consistent information."
        ]
      },
      {
        "title": "Process Robotization (RPA) and Artificial Intelligence",
        "items": [
          "Design and deployment of software robots to handle administrative and repetitive tasks.",
          "Use of artificial intelligence and machine learning for predictive analytics and anomaly detection.",
          "Continuous optimization of automated processes through data collection and performance analysis."
        ]
      },
      {
        "title": "Technical Process Optimization and Acceleration",
        "items": [
          "Implementation of scripts and tools to speed up software compilation, testing, and deployment.",
          "Automation of complex technical actions (log analysis, monitoring, alerting, etc.).",
          "Team training to quickly master deployed solutions and ensure adoption."
        ]
      },
      {
        "title": "Infrastructure Migration and Modernization Services",
        "items": [
          "Migration of legacy systems to more flexible and scalable solutions (cloud, containers, microservices).",
          "Implementation of free systems when available.",
          "Modernization of existing infrastructures to reduce maintenance costs and foster scalability.",
          "Data security and compliance with applicable standards and regulations."
        ]
      },
      {
        "title": "Comprehensive Post-Deployment Support and Guidance",
        "items": [
          "Ongoing training for internal teams to ensure the sustainability of implemented solutions.",
          "Technical support and evolutionary maintenance to adjust automations according to organizational changes.",
          "Technology watch service to regularly identify new improvement opportunities."
        ]
      }
    ]
  }

  const why = [
    {
        "fr": "Imaginez une transformation technologique qui ne vous oblige pas à céder une partie de votre entreprise. Avec notre approche, vous gardez la totalité de votre capital, de vos décisions et de vos opérations. Nous intervenons avec des solutions d’automatisation et d’optimisation parfaitement adaptées à vos besoins, puis nous vous laissons en pleine possession de votre structure – enrichie, modernisée et prête à se développer davantage. Finis les partenariats coûteux ou la perte de contrôle: vous demeurez l’unique maître à bord, avec la puissance d’outils performants pour booster votre croissance.",
        "en": "Imagine a technological transformation that doesn’t require you to give up part of your business. With our approach, you retain full ownership of your capital, decisions, and operations. We provide automation and optimization solutions perfectly tailored to your needs, then leave you in full control of your structure—enriched, modernized, and ready to grow further. No more costly partnerships or loss of control: you remain the sole master on board, with powerful tools to boost your growth."
    },
    {
        "fr": "Beaucoup surfent sur la vague de l'IA, mais peu maîtrisent vraiment son potentiel. De notre côté, nous utilisons l’intelligence artificielle comme une expertise au service de votre croissance et sommes les artisans de nos solutions. Nous analysons en profondeur vos besoins pour déployer des solutions IA ciblées, robustes, concrètes. Avec nous, vous misez sur une technologie éprouvée et un savoir-faire véritable, pas seulement sur un effet d’annonce.",
        "en": "Many are riding the AI wave, but few truly master its potential. We harness artificial intelligence as real experts dedicated to fueling your growth. Our approach is thorough: we dive deep into your needs to deliver targeted, robust, and genuinely impactful solutions. With us, you’re investing in proven technology and authentic expertise—not just another buzzword."
    },
  ];

function getServices(lang) {
    return services[lang] || services["en"];
}

// Build a list of divs that contains sub divs for each service
let serviceInterval;
function buildServicesDivs(lang) {
    if (serviceInterval) {
        clearInterval(serviceInterval);
    }
    document.querySelectorAll(".service").forEach(service => {
        service.remove();
    });
    const services = getServices(lang);
    const servicesDivs = services.map(service => {
        const serviceDiv = document.createElement("div");
        serviceDiv.classList.add("service");
        const title = document.createElement("h3");
        title.textContent = service.title;
        const items = document.createElement("ul");
        service.items.forEach(item => {
            const li = document.createElement("li");
            li.textContent = item;
            items.appendChild(li);
        });
        serviceDiv.appendChild(title);
        serviceDiv.appendChild(items);
        serviceDiv.style.display = 'none';
        return serviceDiv;
    });

    const servicesContainer = document.querySelector(".services-content");
    servicesDivs[0].style.display = 'block';
    servicesDivs.forEach(serviceDiv => {
        servicesContainer.appendChild(serviceDiv);
    });

    // Rotate through service div visibility
    serviceInterval = setInterval(() => {
        let visibleService = document.querySelector('.service[style="display: block;"]');
        let nextService = visibleService.nextElementSibling;
        if (!nextService) {
            nextService = servicesContainer.firstElementChild;
        }
        visibleService.style.display = 'none';
        nextService.style.display = 'block';
    }, 5000);
}

const quotes = [
{
    fr: "Vos meilleurs talents se trouvent déjà dans votre équipe",
    en: "Your best talents are already in your team"
},
{
    fr: "Et si vous pouviez doubler votre productivité sans recruter un seul employé supplémentaire?",
    en: "What if you could double your productivity without hiring a single additional employee?"
},
{
    fr: "Transformez chaque tâche répétitive en opportunité de croissance.",
    en: "Turn every repetitive task into a growth opportunity."
},
{
    fr: "Votre équipe déjà existante pourrait créer davantage de valeur: libérez leur potentiel!",
    en: "Your existing team could create even more value—unlock their full potential!"
},
{
    fr: "Économisez temps et argent: l’automatisation vous offre un retour sur investissement garanti.",
    en: "Save time and money: automation guarantees a solid return on investment."
},
{
    fr: "Atteignez l’excellence opérationnelle et laissez la concurrence loin derrière.",
    en: "Achieve operational excellence and leave the competition behind."
},
{
    fr: "Maximisez chaque minute de travail: passez en mode pilotage automatique.",
    en: "Maximize every working minute: switch to autopilot mode."
},
{
    fr: "Optez pour l’intelligence automatisée et concentrez-vous sur l’innovation.",
    en: "Opt for automated intelligence and focus on innovation."
},
{
    fr: "Déverrouillez la puissance des données pour prendre chaque décision avec précision.",
    en: "Unleash the power of data to make every decision with precision."
},
{
    fr: "Mettez fin aux tâches chronophages: gagnez en clarté et en efficacité.",
    en: "Put an end to time-consuming tasks: gain clarity and efficiency."
},
{
    fr: "Modernisez, propulsez, innovez: l’automatisation est la clé de votre compétitivité.",
    en: "Modernize, propel, innovate: automation is the key to staying competitive."
},
{
    fr: "Faites grandir votre entreprise sans complexifier l’organisation.",
    en: "Grow your business without adding complexity."
},
{
    fr: "Passez moins de temps à gérer et plus de temps à grandir.",
    en: "Spend less time managing and more time scaling."
},
{
    fr: "Réduisez les coûts de maintenance, boostez l’agilité de vos équipes.",
    en: "Reduce maintenance costs, boost your team’s agility."
},
{
    fr: "Prenez une longueur d’avance: implémentez des solutions qui anticipent l’avenir.",
    en: "Get ahead: implement solutions that anticipate the future."
},
{
    fr: "Résultats mesurables, progrès tangible: l’automatisation transforme chaque aspect de votre entreprise.",
    en: "Measurable results, tangible progress: automation transforms every aspect of your business."
}
];

function getQuote(lang) {
    return quotes[Math.floor(Math.random() * quotes.length)][lang];
}

function setBlockQuote() {
    const lang = getLang();
    const quote = getQuote(lang);
    document.querySelector('.styled-quote').textContent = quote;
}