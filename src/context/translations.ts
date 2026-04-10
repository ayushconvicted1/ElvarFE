"use client";

export type Language = 'en' | 'fr';

export const translations = {
  meta: {
    home: {
      title: {
        en: "ENCLAIRE | Private Access",
        fr: "ENCLAIRE | Accès Privé"
      },
      description: {
        en: "Curated for the few. Exclusive luxury concierge services with unparalleled access and absolute discretion.",
        fr: "Réservé à quelques privilégiés. Services de conciergerie de luxe exclusifs avec un accès inégalé et une discrétion absolue."
      }
    },
    about: {
      title: {
        en: "About Us | ENCLAIRE Private",
        fr: "À Propos | ENCLAIRE Privé"
      },
      description: {
        en: "Discover ENCLAIRE Private - redefining modern luxury with seamless access to exceptional services and privileges.",
        fr: "Découvrez ENCLAIRE Privé - redéfinir le luxe moderne avec un accès fluide à des services et privilèges exceptionnels."
      }
    },
    services: {
      title: {
        en: "Services | ENCLAIRE Private",
        fr: "Services | ENCLAIRE Privé"
      },
      description: {
        en: "Explore our seven pillars of service - from private aviation to luxury assets, curated exclusively for you.",
        fr: "Découvrez nos sept piliers de service - de l'aviation privée aux actifs de luxe, exclusivement pour vous."
      }
    },
    login: {
      title: {
        en: "Login | ENCLAIRE Private",
        fr: "Connexion | ENCLAIRE Privé"
      },
      description: {
        en: "Access your ENCLAIRE Private member account.",
        fr: "Accédez à votre compte membre ENCLAIRE Privé."
      }
    },
    newsMedia: {
      title: {
        en: "News & Media | ENCLAIRE Private",
        fr: "Actualités & Médias | ENCLAIRE Privé"
      },
      description: {
        en: "Stay updated with the latest news and updates from ENCLAIRE Private.",
        fr: "Restez informé des dernières nouvelles et mises à jour d'ENCLAIRE Privé."
      }
    }
  },

  // ===================
  // NAVIGATION
  // ===================
  nav: {
    home: { en: "Home", fr: "Accueil" },
    about: { en: "About", fr: "À Propos" },
    services: { en: "Services", fr: "Services" },
    membership: { en: "Membership", fr: "Adhésion" },
    newsMedia: { en: "News & Media", fr: "Actualités & Médias" },
    login: { en: "Log In", fr: "Connexion" },
    becomeAVendor: { en: "Become a Vendor", fr: "Devenir Partenaire" },
    destinations: { en: "Destinations", fr: "Destinations" },
    experiences: { en: "Experiences", fr: "Expériences" },
    assets: { en: "Assets", fr: "Actifs" },
    privacy: { en: "Privacy", fr: "Confidentialité" }
  },

  // ===================
  // HERO SECTION
  // ===================
  hero: {
    scrollToExplore: {
      en: "Scroll to Explore",
      fr: "Faire Défiler pour Explorer"
    }
  },
  features: {
    heading: {
      en: "CURATED FOR THE FEW",
      fr: "RÉSERVÉ À QUELQUES PRIVILÉGIÉS"
    },
    description: {
      en: "Enclaire Private operates on the principles of absolute discretion, unparalleled access, and unwavering reliability.",
      fr: "Enclaire Privé opère sur les principes de discrétion absolue, d'accès inégalé et de fiabilité sans faille."
    },
    items: [
      {
        title: { en: "Unrivaled Access", fr: "Accès Inégalé" },
        desc: {
          en: "Gain entry to exclusive events, private clubs, and sought-after destinations.",
          fr: "Accédez à des événements exclusifs, des clubs privés et des destinations prisées."
        }
      },
      {
        title: { en: "Curated Access", fr: "Accès Sur Mesure" },
        desc: {
          en: "Every request is met with tailored solutions, anticipating your needs.",
          fr: "Chaque demande est satisfaite avec des solutions sur mesure, anticipant vos besoins."
        }
      },
      {
        title: { en: "Discreet & Private", fr: "Discret & Privé" },
        desc: {
          en: "Your privacy is paramount. We operate with the utmost confidentiality.",
          fr: "Votre confidentialité est primordiale. Nous opérons avec la plus grande discrétion."
        }
      }
    ]
  },

  // ===================
  // SERVICES SECTION (Home page carousel)
  // ===================
  services: {
    items: [
      { en: "Luxury & Sports Cars", fr: "Voitures de Luxe & de Sport" },
      { en: "Fine Dining & Omakase Experiences", fr: "Gastronomie Fine & Expériences Omakase" },
      { en: "Private Aviation", fr: "Aviation Privée" },
      { en: "Yachts & Maritime Access", fr: "Yachts & Accès Maritime" },
      { en: "Residences & Global Living", fr: "Résidences & Vie Internationale" },
      { en: "Destinations & Travel Design", fr: "Destinations & Conception de Voyages" },
      { en: "Experiences & Curated Moments", fr: "Expériences & Moments Sur Mesure" },
      { en: "Assets & Acquisition", fr: "Actifs & Acquisition" },
      { en: "Wellness & Personal Care", fr: "Bien-être & Soins Personnels" }
    ]
  },

  // ===================
  // SECURITY SECTION
  // ===================
  security: {
    heading: {
      en: "Your life remains yours",
      fr: "Votre vie reste la vôtre"
    },
    description: {
      en: "In a world where data is everywhere, Enclaire Private is committed to protecting yours.",
      fr: "Dans un monde où les données sont partout, Enclaire Privé s'engage à protéger les vôtres."
    },
    items: [
      { en: "Bank-Grade\nEncryption", fr: "Chiffrement\nBancaire" },
      { en: "Strict\nConfidentiality", fr: "Confidentialité\nStricte" },
      { en: "Secure Data\nStorage", fr: "Stockage de\nDonnées Sécurisé" }
    ],
    requestInvitation: { en: "Request Invitation", fr: "Demander une Invitation" }
  },

  // ===================
  // OUR LOCATIONS
  // ===================
  ourLocations: {
    heading: { en: "Our locations", fr: "Nos emplacements" },
    description: {
      en: "In a world where data is everywhere, Enclaire Private is committed to protecting yours. We understand that your lifestyle demands the highest levels of confidentiality.",
      fr: "Dans un monde où les données sont partout, Enclaire Privé s'engage à protéger les vôtres. Nous comprenons que votre style de vie exige les plus hauts niveaux de confidentialité."
    }
  },

  // ===================
  // CONTACT FORM / FAQ
  // ===================
  contact: {
    faqHeading: { en: "Frequently asked questions", fr: "Questions fréquemment posées" },
    faqs: [
      {
        question: {
          en: "How does ENCLAIRE differ from traditional luxury concierge services?",
          fr: "En quoi ENCLAIRE diffère-t-il des services de conciergerie de luxe traditionnels ?"
        },
        answer: {
          en: "ENCLAIRE does not operate as a visible service provider. We function as a private access orchestration layer—quietly aligning trusted partners to deliver outcomes without attribution, exposure, or unnecessary interaction.",
          fr: "ENCLAIRE ne fonctionne pas comme un prestataire de services visible. Nous agissons comme une couche d'orchestration d'accès privé—alignant discrètement des partenaires de confiance pour obtenir des résultats sans attribution, exposition ou interaction inutile."
        }
      },
      {
        question: {
          en: "How is membership granted?",
          fr: "Comment l'adhésion est-elle accordée ?"
        },
        answer: {
          en: "Membership is strictly invitation-only. Prospective members are admitted through private referral and internal alignment processes. ENCLAIRE is not applied to—it is extended.",
          fr: "L'adhésion se fait strictement sur invitation. Les membres potentiels sont admis par parrainage privé et processus d'alignement interne. On ne postule pas à ENCLAIRE—on y est convié."
        }
      },
      {
        question: {
          en: "How does ENCLAIRE protect member privacy?",
          fr: "Comment ENCLAIRE protège-t-il la vie privée des membres ?"
        },
        answer: {
          en: "Privacy is embedded at every level of operation. We practice data minimization, compartmentalized execution, and strict confidentiality agreements across our ecosystem. Information exists only where absolutely required.",
          fr: "La confidentialité est intégrée à chaque niveau d'opération. Nous pratiquons la minimisation des données, l'exécution cloisonnée et des accords de confidentialité stricts dans tout notre écosystème. L'information n'existe que là où elle est absolument nécessaire."
        }
      },
      {
        question: {
          en: "What type of individuals does ENCLAIRE serve?",
          fr: "Quel type de personnes ENCLAIRE sert-il ?"
        },
        answer: {
          en: "ENCLAIRE serves individuals whose lives, movements, and decisions require separation from public systems. Our members value control, discretion, and reliability over recognition or display.",
          fr: "ENCLAIRE sert des individus dont les vies, les déplacements et les décisions nécessitent une séparation des systèmes publics. Nos membres valorisent le contrôle, la discrétion et la fiabilité plutôt que la reconnaissance ou l'ostentation."
        }
      }
    ],
    formHeading: { en: "Request Invitation", fr: "Demander une Invitation" },
    formDescription: {
      en: "Complete the form below and our membership team will be in touch within 48 hours.",
      fr: "Remplissez le formulaire ci-dessous et notre équipe d'adhésion vous contactera dans les 48 heures."
    },
    firstName: { en: "First Name", fr: "Prénom" },
    lastName: { en: "Last Name", fr: "Nom" },
    emailId: { en: "Email ID", fr: "Adresse Email" },
    phoneNo: { en: "Phone No.", fr: "N° de Téléphone" },
    tellUsAbout: { en: "Tell us about yourself", fr: "Parlez-nous de vous" },
    submit: { en: "Submit", fr: "Envoyer" }
  },

  // ===================
  // BECOME A VENDOR FORM (single-step registration)
  // ===================
  vendorContact: {
    formHeading: { en: "Become a Vendor", fr: "Devenir Partenaire" },
    formDescription: {
      en: "Complete the form below to create your vendor account. Your account will be pending admin approval; you will receive an email once approved.",
      fr: "Remplissez le formulaire ci-dessous pour créer votre compte partenaire. Votre compte sera en attente d'approbation ; vous recevrez un email une fois approuvé."
    },
    firstName: { en: "First Name", fr: "Prénom" },
    lastName: { en: "Last Name", fr: "Nom" },
    emailId: { en: "Email ID", fr: "Adresse Email" },
    phoneNo: { en: "Phone No.", fr: "N° de Téléphone" },
    message: { en: "Tell us about your business or services", fr: "Parlez-nous de votre entreprise ou de vos services" },
    password: { en: "Password", fr: "Mot de passe" },
    confirmPassword: { en: "Confirm Password", fr: "Confirmer le mot de passe" },
    companyName: { en: "Company / Business Name", fr: "Nom de l'entreprise" },
    commissionRate: { en: "Commission Rate (%)", fr: "Taux de commission (%)" },
    services: { en: "Service categories", fr: "Catégories de services" },
    servicesHint: { en: "Select at least one category you offer (max 20).", fr: "Sélectionnez au moins une catégorie que vous proposez (max 20)." },
    submit: { en: "Create vendor account", fr: "Créer le compte partenaire" },
    submitSuccess: {
      en: "Your vendor account has been created successfully. It is pending admin verification. You will receive an email once approved.",
      fr: "Votre compte partenaire a été créé avec succès. Il est en attente de vérification. Vous recevrez un email une fois approuvé."
    },
    submitError: {
      en: "Something went wrong. Please try again.",
      fr: "Une erreur s'est produite. Veuillez réessayer."
    },
    backToHome: { en: "Back to Home", fr: "Retour à l'accueil" }
  },

  // ===================
  // FOOTER
  // ===================
  footer: {
    terms: { en: "Terms", fr: "Conditions" },
    privacyPolicy: { en: "Privacy Policy", fr: "Politique de Confidentialité" },
    nda: { en: "NDA", fr: "Accord de Confidentialité" },
    compliance: { en: "Compliance", fr: "Conformité" },
    legal: { en: "Legal", fr: "Mentions Légales" },
    copyright: { en: "All Copyright Reserved @2026", fr: "Tous Droits Réservés @2026" }
  },

  // ===================
  // ABOUT PAGE
  // ===================
  about: {
    heading: { en: "About us", fr: "À propos de nous" },
    content: [
      {
        en: "Enclaire Private is dedicated to redefining the experience of modern luxury. We curate seamless access to the world's most exceptional services and privileges—spanning private travel, maritime journeys, bespoke wellness, curated experiences, and high-value asset management.",
        fr: "Enclaire Privé se consacre à redéfinir l'expérience du luxe moderne. Nous organisons un accès fluide aux services et privilèges les plus exceptionnels du monde—voyages privés, croisières maritimes, bien-être sur mesure, expériences exclusives et gestion d'actifs de grande valeur."
      },
      {
        en: "Our integrated approach ensures that every aspect of your lifestyle is managed with absolute precision, complete discretion, and uncompromising excellence.",
        fr: "Notre approche intégrée garantit que chaque aspect de votre style de vie est géré avec une précision absolue, une discrétion totale et une excellence sans compromis."
      },
      {
        en: "At Enclaire Private, luxury is not a service—it is a standard we uphold in everything we do.",
        fr: "Chez Enclaire Privé, le luxe n'est pas un service—c'est une norme que nous maintenons dans tout ce que nous faisons."
      }
    ]
  },

  // ===================
  // SERVICES PAGE
  // ===================
  servicesPage: {
    heading: { en: "Seven Pillars of Service", fr: "Sept Piliers de Service" },
    description: {
      en: "Discover a world of exclusive experiences, curated just for you. From luxury travel to bespoke acquisitions, we bring your vision to life.",
      fr: "Découvrez un monde d'expériences exclusives, conçu spécialement pour vous. Des voyages de luxe aux acquisitions sur mesure, nous donnons vie à votre vision."
    },
    requestService: { en: "REQUEST INVITATION", fr: "DEMANDER UNE INVITATION" },
    items: [
      {
        title: { en: "Private Aviation", fr: "Aviation Privée" },
        description: {
          en: "From charter coordination to last-minute re-routing, we handle every aspect of private air travel with precision and discretion.",
          fr: "De la coordination des vols charter à la redirection de dernière minute, nous gérons chaque aspect des voyages aériens privés avec précision et discrétion."
        }
      },
      {
        title: { en: "Yachts & Maritime", fr: "Yachts & Maritime" },
        description: {
          en: "Whether Mediterranean summers or Caribbean winters, we curate yacht experiences that balance privacy, comfort, and discovery.",
          fr: "Que ce soit pour les étés méditerranéens ou les hivers caribéens, nous créons des expériences de yacht qui équilibrent intimité, confort et découverte."
        }
      },
      {
        title: { en: "Residences & Living", fr: "Résidences & Habitat" },
        description: {
          en: "We secure luxury residences globally and ensure they're ready when you arrive—staffed, stocked, and seamless.",
          fr: "Nous sécurisons des résidences de luxe à travers le monde et nous assurons qu'elles sont prêtes à votre arrivée—personnel, provisions et service impeccable."
        }
      },
      {
        title: { en: "Travel & Destinations", fr: "Voyages & Destinations" },
        description: {
          en: "From alpine retreats to island sanctuaries, we design journeys that respect your time, privacy, and preferences.",
          fr: "Des retraites alpines aux sanctuaires insulaires, nous concevons des voyages qui respectent votre temps, votre vie privée et vos préférences."
        }
      },
      {
        title: { en: "Curated Experiences", fr: "Expériences Sur Mesure" },
        description: {
          en: "Private tastings, closed-door access, and bespoke celebrations—experiences designed for those who value uniqueness.",
          fr: "Dégustations privées, accès exclusifs et célébrations sur mesure—des expériences conçues pour ceux qui valorisent l'unicité."
        }
      },
      {
        title: { en: "Luxury Assets", fr: "Actifs de Luxe" },
        description: {
          en: "From rare timepieces to blue-chip art, we coordinate acquisition, authentication, storage, and resale with trusted specialists.",
          fr: "Des montres rares aux œuvres d'art de premier ordre, nous coordonnons l'acquisition, l'authentification, le stockage et la revente avec des spécialistes de confiance."
        }
      },
      {
        title: { en: "Wellness & Longevity", fr: "Bien-être & Longévité" },
        description: {
          en: "Proactive health optimization through private retreats, executive physicals, and access to world-class specialists.",
          fr: "Optimisation proactive de la santé grâce à des retraites privées, des bilans de santé exécutifs et l'accès à des spécialistes de renommée mondiale."
        }
      }
    ]
  },

  // ===================
  // HOW WE WORK
  // ===================
  howWeWork: {
    heading: { en: "How we work", fr: "Comment nous travaillons" },
    steps: [
      {
        title: { en: "You brief us", fr: "Vous nous informez" },
        description: {
          en: "Share your requirements via secure channels. We confirm scope, timeline, and any special considerations.",
          fr: "Partagez vos exigences via des canaux sécurisés. Nous confirmons la portée, le calendrier et toutes les considérations spéciales."
        }
      },
      {
        title: { en: "We execute", fr: "Nous exécutons" },
        description: {
          en: "Our team coordinates all logistics, vetting, and preparation—keeping you informed at key milestones.",
          fr: "Notre équipe coordonne toute la logistique, la vérification et la préparation—vous tenant informé aux étapes clés."
        }
      },
      {
        title: { en: "You experience", fr: "Vous vivez l'expérience" },
        description: {
          en: "Everything is ready when you arrive. If something changes, we adapt in real-time—no friction, no delays.",
          fr: "Tout est prêt à votre arrivée. Si quelque chose change, nous nous adaptons en temps réel—sans friction, sans délai."
        }
      }
    ]
  },

  // ===================
  // LOGIN PAGE
  // ===================
  login: {
    emailId: { en: "Email ID", fr: "Adresse Email" },
    password: { en: "Password", fr: "Mot de Passe" },
    forgotPassword: { en: "Forgot password ?", fr: "Mot de passe oublié ?" },
    logIn: { en: "Log In", fr: "Connexion" },
    notAMember: { en: "Not an", fr: "Pas un membre" },
    privateMember: { en: "private member?", fr: "privé ?" },
    requestInvitation: { en: "Request Invitation", fr: "Demander une Invitation" }
  },

  // ===================
  // NEWS & MEDIA
  // ===================
  newsMedia: {
    heading: { en: "News & Media", fr: "Actualités & Médias" },
    comingSoon: {
      en: "Stay tuned for upcoming updates and features.",
      fr: "Restez à l'écoute pour les prochaines mises à jour et fonctionnalités."
    }
  },

  // ===================
  // MEMBERSHIP PAGE
  // ===================
  membership: {
    heading: { en: "Membership", fr: "Adhésion" },
    description: {
      en: "Membership at Enclaire Private is an invitation into a world designed for those who value precision, privacy, and exceptional living. It is more than a service—it is a personal concierge, a global network, and a lifestyle partner committed to elevating every dimension of your life.",
      fr: "L'adhésion à Enclaire Privé est une invitation dans un monde conçu pour ceux qui valorisent la précision, la confidentialité et un mode de vie exceptionnel. C'est plus qu'un service—c'est un concierge personnel, un réseau mondial et un partenaire de vie engagé à élever chaque dimension de votre vie."
    },
    requestInvitation: { en: "REQUEST INVITATION", fr: "DEMANDER UNE INVITATION" },
    tiers: [
      {
        name: { en: "L'ESSENTIEL", fr: "L'ESSENTIEL" },
        features: [
          {
            en: "Priority reservations and access across dining, travel, and mobility",
            fr: "Réservations prioritaires et accès pour la restauration, les voyages et la mobilité"
          },
          {
            en: "Secure traditional and alternative payment methods",
            fr: "Méthodes de paiement traditionnelles et alternatives sécurisées"
          },
          {
            en: "Discreet request handling with defined response windows",
            fr: "Traitement discret des demandes avec des délais de réponse définis"
          },
          {
            en: "Lifestyle coordination across key global cities",
            fr: "Coordination du style de vie dans les principales villes mondiales"
          },
          {
            en: "Confidentiality-first execution standards",
            fr: "Normes d'exécution axées sur la confidentialité"
          }
        ]
      },
      {
        name: { en: "LA SIGNATURE", fr: "LA SIGNATURE" },
        features: [
          {
            en: "Dedicated senior concierge oversight",
            fr: "Supervision dédiée par un concierge senior"
          },
          {
            en: "Priority access to members-only environments and experiences",
            fr: "Accès prioritaire aux environnements et expériences réservés aux membres"
          },
          {
            en: "Advanced travel and destination design",
            fr: "Conception avancée de voyages et de destinations"
          },
          {
            en: "Enhanced privacy protocols and request compartmentalization",
            fr: "Protocoles de confidentialité renforcés et cloisonnement des demandes"
          },
          {
            en: "Expanded crypto-native transaction flexibility",
            fr: "Flexibilité élargie des transactions crypto-natives"
          }
        ]
      },
      {
        name: { en: "LE CERCLE PRIVÉ", fr: "LE CERCLE PRIVÉ" },
        features: [
          {
            en: "White-glove, always-on concierge cell",
            fr: "Cellule de conciergerie haut de gamme, disponible en permanence"
          },
          {
            en: "Ultra-priority execution with anticipatory handling",
            fr: "Exécution ultra-prioritaire avec gestion anticipative"
          },
          {
            en: "Private aviation, maritime, and residence coordination",
            fr: "Coordination de l'aviation privée, du maritime et des résidences"
          },
          {
            en: "Highest-level confidentiality architecture",
            fr: "Architecture de confidentialité de plus haut niveau"
          },
          {
            en: "Access to ENCLAIRE's most restricted partner network",
            fr: "Accès au réseau de partenaires le plus restreint d'ENCLAIRE"
          }
        ]
      }
    ]
  },

  legal: {
    lastUpdated: { en: "Last Updated", fr: "Dernière mise à jour" },
    effectiveDate: { en: "January 1, 2026", fr: "1er janvier 2026" },

    // Terms of Service
    terms: {
      heading: { en: "Terms of Service", fr: "Conditions d'Utilisation" },
      intro: {
        en: "Welcome to ENCLAIRE Private. By accessing or using our services, you agree to be bound by these Terms of Service. Please read them carefully before proceeding.",
        fr: "Bienvenue chez ENCLAIRE Privé. En accédant ou en utilisant nos services, vous acceptez d'être lié par ces Conditions d'Utilisation. Veuillez les lire attentivement avant de continuer."
      },
      sections: [
        {
          title: { en: "1. Acceptance of Terms", fr: "1. Acceptation des Conditions" },
          content: {
            en: "By accessing and using ENCLAIRE Private services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree to these terms, you may not access or use our services.",
            fr: "En accédant et en utilisant les services d'ENCLAIRE Privé, vous reconnaissez avoir lu, compris et accepté d'être lié par ces Conditions d'Utilisation. Si vous n'acceptez pas ces conditions, vous ne pouvez pas accéder ou utiliser nos services."
          }
        },
        {
          title: { en: "2. Membership Eligibility", fr: "2. Éligibilité à l'Adhésion" },
          content: {
            en: "ENCLAIRE Private membership is strictly invitation-only. Prospective members must be at least 18 years of age and meet our internal eligibility criteria. We reserve the right to accept or decline any membership application at our sole discretion.",
            fr: "L'adhésion à ENCLAIRE Privé se fait strictement sur invitation. Les membres potentiels doivent avoir au moins 18 ans et répondre à nos critères d'éligibilité internes. Nous nous réservons le droit d'accepter ou de refuser toute demande d'adhésion à notre seule discrétion."
          }
        },
        {
          title: { en: "3. Services Description", fr: "3. Description des Services" },
          content: {
            en: "ENCLAIRE Private provides luxury concierge services including but not limited to: private aviation coordination, yacht and maritime access, luxury residence management, travel design, curated experiences, and asset acquisition assistance. Service availability may vary based on membership tier.",
            fr: "ENCLAIRE Privé fournit des services de conciergerie de luxe incluant mais non limités à : coordination d'aviation privée, accès aux yachts et services maritimes, gestion de résidences de luxe, conception de voyages, expériences sur mesure et assistance à l'acquisition d'actifs. La disponibilité des services peut varier selon le niveau d'adhésion."
          }
        },
        {
          title: { en: "4. User Obligations", fr: "4. Obligations de l'Utilisateur" },
          content: {
            en: "Members agree to provide accurate information, maintain the confidentiality of their account credentials, use services only for lawful purposes, and comply with all applicable laws and regulations in their jurisdiction.",
            fr: "Les membres s'engagent à fournir des informations exactes, à maintenir la confidentialité de leurs identifiants de compte, à utiliser les services uniquement à des fins légales et à se conformer à toutes les lois et réglementations applicables dans leur juridiction."
          }
        },
        {
          title: { en: "5. Limitation of Liability", fr: "5. Limitation de Responsabilité" },
          content: {
            en: "ENCLAIRE Private shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services. Our total liability shall not exceed the fees paid by you in the twelve months preceding the claim.",
            fr: "ENCLAIRE Privé ne sera pas responsable des dommages indirects, accessoires, spéciaux, consécutifs ou punitifs découlant de votre utilisation de nos services. Notre responsabilité totale ne dépassera pas les frais que vous avez payés au cours des douze mois précédant la réclamation."
          }
        }
      ]
    },

    // Privacy Policy
    privacy: {
      heading: { en: "Privacy Policy", fr: "Politique de Confidentialité" },
      intro: {
        en: "At ENCLAIRE Private, your privacy is paramount. This Privacy Policy explains how we collect, use, protect, and handle your personal information when you use our services.",
        fr: "Chez ENCLAIRE Privé, votre vie privée est primordiale. Cette Politique de Confidentialité explique comment nous collectons, utilisons, protégeons et gérons vos informations personnelles lorsque vous utilisez nos services."
      },
      sections: [
        {
          title: { en: "1. Information We Collect", fr: "1. Informations Que Nous Collectons" },
          content: {
            en: "We collect information you provide directly, including name, contact details, payment information, and service preferences. We also collect technical data such as device information and usage patterns to improve our services.",
            fr: "Nous collectons les informations que vous fournissez directement, y compris le nom, les coordonnées, les informations de paiement et les préférences de service. Nous collectons également des données techniques telles que les informations sur l'appareil et les modèles d'utilisation pour améliorer nos services."
          }
        },
        {
          title: { en: "2. How We Use Your Information", fr: "2. Comment Nous Utilisons Vos Informations" },
          content: {
            en: "Your information is used to provide and personalize our services, process transactions, communicate with you, ensure security, and comply with legal obligations. We never sell your personal information to third parties.",
            fr: "Vos informations sont utilisées pour fournir et personnaliser nos services, traiter les transactions, communiquer avec vous, assurer la sécurité et respecter les obligations légales. Nous ne vendons jamais vos informations personnelles à des tiers."
          }
        },
        {
          title: { en: "3. Data Security", fr: "3. Sécurité des Données" },
          content: {
            en: "We implement bank-grade encryption and advanced security measures to protect your data. Access to personal information is strictly limited to authorized personnel who require it to perform their duties.",
            fr: "Nous mettons en œuvre un chiffrement de niveau bancaire et des mesures de sécurité avancées pour protéger vos données. L'accès aux informations personnelles est strictement limité au personnel autorisé qui en a besoin pour accomplir ses fonctions."
          }
        },
        {
          title: { en: "4. Data Retention", fr: "4. Conservation des Données" },
          content: {
            en: "We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected, comply with legal obligations, resolve disputes, and enforce our agreements.",
            fr: "Nous conservons vos informations personnelles uniquement aussi longtemps que nécessaire pour atteindre les objectifs pour lesquels elles ont été collectées, respecter les obligations légales, résoudre les litiges et faire respecter nos accords."
          }
        },
        {
          title: { en: "5. Your Rights", fr: "5. Vos Droits" },
          content: {
            en: "You have the right to access, correct, delete, or port your personal data. You may also object to certain processing activities. To exercise these rights, please contact our privacy team.",
            fr: "Vous avez le droit d'accéder, de corriger, de supprimer ou de transférer vos données personnelles. Vous pouvez également vous opposer à certaines activités de traitement. Pour exercer ces droits, veuillez contacter notre équipe de confidentialité."
          }
        }
      ]
    },

    // NDA
    nda: {
      heading: { en: "Non-Disclosure Agreement", fr: "Accord de Non-Divulgation" },
      intro: {
        en: "This Non-Disclosure Agreement governs the confidential relationship between ENCLAIRE Private and its members. All members are bound by these confidentiality obligations upon acceptance of membership.",
        fr: "Cet Accord de Non-Divulgation régit la relation confidentielle entre ENCLAIRE Privé et ses membres. Tous les membres sont liés par ces obligations de confidentialité dès l'acceptation de leur adhésion."
      },
      sections: [
        {
          title: { en: "1. Definition of Confidential Information", fr: "1. Définition des Informations Confidentielles" },
          content: {
            en: "Confidential Information includes all non-public information about ENCLAIRE Private's operations, member identities, service methodologies, partner networks, pricing structures, and any information designated as confidential.",
            fr: "Les Informations Confidentielles comprennent toutes les informations non publiques sur les opérations d'ENCLAIRE Privé, l'identité des membres, les méthodologies de service, les réseaux de partenaires, les structures tarifaires et toute information désignée comme confidentielle."
          }
        },
        {
          title: { en: "2. Obligations of Confidentiality", fr: "2. Obligations de Confidentialité" },
          content: {
            en: "Members agree to maintain strict confidentiality of all Confidential Information, use such information only for authorized purposes, and not disclose it to any third party without prior written consent from ENCLAIRE Private.",
            fr: "Les membres s'engagent à maintenir une stricte confidentialité de toutes les Informations Confidentielles, à n'utiliser ces informations qu'à des fins autorisées et à ne pas les divulguer à des tiers sans le consentement écrit préalable d'ENCLAIRE Privé."
          }
        },
        {
          title: { en: "3. Duration", fr: "3. Durée" },
          content: {
            en: "Confidentiality obligations remain in effect during membership and for a period of five (5) years following the termination of membership, regardless of the reason for termination.",
            fr: "Les obligations de confidentialité restent en vigueur pendant l'adhésion et pendant une période de cinq (5) ans suivant la résiliation de l'adhésion, quelle que soit la raison de la résiliation."
          }
        },
        {
          title: { en: "4. Permitted Disclosures", fr: "4. Divulgations Autorisées" },
          content: {
            en: "Disclosure may be permitted if required by law, court order, or governmental authority, provided that the disclosing party gives prompt notice to ENCLAIRE Private and cooperates in seeking protective measures.",
            fr: "La divulgation peut être autorisée si elle est requise par la loi, une décision de justice ou une autorité gouvernementale, à condition que la partie divulgatrice donne un préavis rapide à ENCLAIRE Privé et coopère dans la recherche de mesures de protection."
          }
        },
        {
          title: { en: "5. Remedies", fr: "5. Recours" },
          content: {
            en: "Any breach of this Agreement may result in immediate termination of membership and legal action. The non-breaching party shall be entitled to seek injunctive relief and damages.",
            fr: "Toute violation de cet Accord peut entraîner la résiliation immédiate de l'adhésion et des poursuites judiciaires. La partie non fautive aura le droit de demander une injonction et des dommages-intérêts."
          }
        }
      ]
    },

    // Compliance
    compliance: {
      heading: { en: "Compliance", fr: "Conformité" },
      intro: {
        en: "ENCLAIRE Private is committed to maintaining the highest standards of legal and regulatory compliance. This page outlines our commitment to ethical operations and regulatory adherence.",
        fr: "ENCLAIRE Privé s'engage à maintenir les plus hauts standards de conformité légale et réglementaire. Cette page décrit notre engagement envers des opérations éthiques et le respect des réglementations."
      },
      sections: [
        {
          title: { en: "1. Regulatory Framework", fr: "1. Cadre Réglementaire" },
          content: {
            en: "ENCLAIRE Private operates in compliance with all applicable laws and regulations in the jurisdictions where we provide services. We maintain appropriate licenses and registrations as required by local authorities.",
            fr: "ENCLAIRE Privé opère en conformité avec toutes les lois et réglementations applicables dans les juridictions où nous fournissons des services. Nous maintenons les licences et enregistrements appropriés requis par les autorités locales."
          }
        },
        {
          title: { en: "2. Anti-Money Laundering (AML)", fr: "2. Lutte Contre le Blanchiment d'Argent" },
          content: {
            en: "We implement robust AML policies and procedures, including customer due diligence, transaction monitoring, and suspicious activity reporting. All members undergo verification procedures in accordance with applicable regulations.",
            fr: "Nous mettons en œuvre des politiques et procédures robustes de lutte contre le blanchiment d'argent, incluant la diligence raisonnable envers les clients, la surveillance des transactions et le signalement des activités suspectes. Tous les membres sont soumis à des procédures de vérification conformément aux réglementations applicables."
          }
        },
        {
          title: { en: "3. Know Your Customer (KYC)", fr: "3. Connaissance du Client (KYC)" },
          content: {
            en: "Our KYC procedures ensure we understand who our members are and the nature of their activities. This includes identity verification, source of funds documentation, and ongoing monitoring of member relationships.",
            fr: "Nos procédures KYC garantissent que nous comprenons qui sont nos membres et la nature de leurs activités. Cela comprend la vérification d'identité, la documentation sur l'origine des fonds et la surveillance continue des relations avec les membres."
          }
        },
        {
          title: { en: "4. Data Protection", fr: "4. Protection des Données" },
          content: {
            en: "We comply with applicable data protection regulations including GDPR where applicable. Our data handling practices are designed to protect member privacy while meeting regulatory requirements.",
            fr: "Nous nous conformons aux réglementations applicables en matière de protection des données, y compris le RGPD le cas échéant. Nos pratiques de gestion des données sont conçues pour protéger la vie privée des membres tout en répondant aux exigences réglementaires."
          }
        },
        {
          title: { en: "5. Reporting & Transparency", fr: "5. Rapports et Transparence" },
          content: {
            en: "We maintain comprehensive records and reporting mechanisms to demonstrate compliance with applicable regulations. Our compliance team conducts regular audits and assessments to ensure ongoing adherence to requirements.",
            fr: "Nous maintenons des dossiers complets et des mécanismes de rapport pour démontrer notre conformité aux réglementations applicables. Notre équipe de conformité effectue des audits et des évaluations réguliers pour assurer le respect continu des exigences."
          }
        }
      ]
    }
  }
};

// Helper type for translation keys
export type TranslationKey = keyof typeof translations;


