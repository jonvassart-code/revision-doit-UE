import { useState } from "react";

const chapters = [
  {
    id: 0,
    title: "Introduction Générale",
    subtitle: "Contexte géopolitique",
    color: "#2563eb",
    icon: "🌍",
    points: [
      {
        title: "Nature de l'UE",
        content: "L'UE est une organisation supranationale/d'intégration, pas une organisation classique (OTAN, NU). Elle fait disparaître collectivement pour ne plus que former une seule entité. L'intégration ≠ coopération."
      },
      {
        title: "Droit omniprésent",
        content: "Le droit de l'UE est omniprésent dans toutes les matières. Le droit matériel de l'UE = sont les normes qu'elle produit. Les normes produites proviennent de tous les États membres."
      },
      {
        title: "Service public commun",
        content: "L'UE est un service public commun aux 27 États membres."
      },
      {
        title: "Contexte actuel",
        content: "Depuis quelques années, conjonction de phénomènes géopolitiques : guerre en Ukraine, menaces de l'est, augmentation de la défense. Le lendemain de la 2nde GM, l'objectif était d'assurer la paix sur le continent."
      }
    ]
  },
  {
    id: 1,
    title: "Chapitre I",
    subtitle: "Historique de la construction européenne",
    color: "#7c3aed",
    icon: "📜",
    points: [
      {
        title: "Déclaration Schuman (9 mai 1950)",
        content: "Premiers fondements de l'UE. Solidarité de faits entre 6 États fondateurs. Le plus important : solidarité entre l'Allemagne et la France. Idée de Haute Autorité commune pour charbon et acier."
      },
      {
        title: "CECA (1951) — Traité de Paris",
        content: "Communauté Européenne du Charbon et de l'Acier. Haute Autorité gère la production commune."
      },
      {
        title: "CEE & CEEA (1957) — Traités de Rome",
        content: "Création de la CEE (Communauté Économique Européenne) et de la CEEA (Énergie Atomique). Objectif : intégration économique plus large → Marché Commun (6 membres fondateurs)."
      },
      {
        title: "Élargissements successifs",
        content: "1973 : UK, Irlande, Danemark · 1981 : Grèce · 1985 : Schengen · 1986 : Espagne, Portugal + Acte Unique Européen · 1995 : Autriche, Finlande, Suède · 2004 : 10 nouveaux (grand élargissement) · 2007 : Roumanie, Bulgarie · 2013 : Croatie."
      },
      {
        title: "Traité de Maastricht (1992)",
        content: "Naissance de l'U.E. Structure sur 3 piliers : (1) Communautés européennes (CEE, CECA, CEEA) ; (2) PESC ; (3) JAI (coopération judiciaire pénale et policière). Citoyenneté européenne, monnaie unique (euro depuis 2002)."
      },
      {
        title: "Traité de Lisbonne (2007)",
        content: "Dernier traité en vigueur. Fusionne les piliers. Deux traités : TUE et TFUE. Donne personnalité juridique à l'UE. Charte des droits fondamentaux acquiert force contraignante."
      },
      {
        title: "Modèle communautaire vs intergouvernemental",
        content: "Pilier communautaire : initiative législative = monopole de la CE, décision par Conseil + Parlement. Pilier intergouvernemental : Conseil décide seul, pas de contrôle juridictionnel complet."
      }
    ]
  },
  {
    id: 2,
    title: "Chapitre II",
    subtitle: "Participation à l'Union Européenne",
    color: "#059669",
    icon: "🤝",
    points: [
      {
        title: "Conditions d'adhésion (art. 49 TUE)",
        content: "4 conditions : être un État, être européen, respecter les valeurs de l'art. 2 TUE (dignité, liberté, démocratie, État de droit, droits de l'Homme), satisfaire aux critères de Copenhague (économiques, politiques, acquis de l'Union)."
      },
      {
        title: "Procédure d'adhésion",
        content: "Demande → pays candidat reconnu par Conseil européen → négociations → accord d'adhésion (traité international) → ratification par tous les 27 + État candidat → « feu vert » final du Conseil à l'unanimité + consultation Commission et Parlement."
      },
      {
        title: "Retrait (art. 50 TUE) — Brexit",
        content: "Tout État peut décider de se retirer conformément à ses règles constitutionnelles. Notification au Conseil européen → négociation d'un accord de retrait (max 2 ans, prolongeable). Exemple : Brexit effectif le 31 janvier 2020."
      },
      {
        title: "Exclusion ?",
        content: "Pas de mécanisme d'exclusion dans les traités. Seule la suspension de certains droits est possible (art. 7 TUE)."
      },
      {
        title: "Valeurs fondamentales (art. 2 TUE)",
        content: "Dignité humaine, liberté, démocratie, égalité, État de droit, droits de l'Homme. Caractère constitutionnel selon la CJUE. Ordre constitutionnel de l'UE."
      },
      {
        title: "Sanctions — Art. 7 TUE",
        content: "§2 : Constater l'existence d'une violation grave et persistante (unanimité du Conseil européen). §3 : Suspendre certains droits (vote au Conseil). §1er : Constater un risque clair de violation grave (majorité 4/5). Ajouté par Amsterdam (1997) et Nice (2001)."
      },
      {
        title: "Coopération renforcée (art. 20 TUE)",
        content: "Minimum 9 États membres peuvent avancer ensemble dans un domaine. Ouverte à tous. Exemples : brevet unitaire, taxe sur transactions financières. Ne peut porter atteinte au marché intérieur."
      },
      {
        title: "Citoyenneté européenne (art. 20-25 TFUE)",
        content: "Complète la citoyenneté nationale. Droits : libre circulation, séjour, vote et éligibilité aux élections PE et municipales, protection diplomatique, pétition au PE, initiative citoyenne européenne (1 million de signatures, 7 États)."
      }
    ]
  },
  {
    id: 3,
    title: "Chapitre III",
    subtitle: "Institutions",
    color: "#dc2626",
    icon: "🏛️",
    points: [
      {
        title: "Principes directeurs",
        content: "Démocratie représentative (art. 10 TUE) : citoyens représentés au PE, États au Conseil européen et Conseil. Équilibre institutionnel (art. 13 TUE) : coopération loyale entre institutions, chacune agit dans les limites de ses attributions."
      },
      {
        title: "Parlement européen",
        content: "Élu au suffrage universel direct depuis 1979 (avant : délégations). Maximum 750 + président. Mandat de 5 ans. Belgique : 22 députés. Quotas par population (min 6, max 96). Pouvoirs : co-législateur (procédure législative ordinaire), budget, contrôle politique (motion de censure), approbation de la Commission."
      },
      {
        title: "Conseil européen (art. 15 TUE)",
        content: "Chefs d'État/gouvernement + président du CE + président de la Commission. Président élu pour 2,5 ans renouvelable 1 fois (majorité qualifiée). Fonctions : impulsions politiques, orientations générales, représentation extérieure (PESC). NE légifère PAS."
      },
      {
        title: "Conseil de l'UE (« Conseil »)",
        content: "1 représentant ministériel par État. Formations variables selon les matières (Affaires générales, ECOFIN, Agriculture, etc.). Présidence tournante par semestre (sauf Affaires étrangères). Co-législateur avec le PE. Vote : unanimité ou majorité qualifiée (55% des États = 15/27 représentant 65% de la population)."
      },
      {
        title: "Commission européenne",
        content: "1 commissaire par État (27 → Lisbonne prévoyait réduction, jamais appliquée). Nommés pour 5 ans. Indépendante des gouvernements. Pouvoirs : initiative législative (monopole sauf PESC), gardienne des traités (recours en manquement), exécution des actes, représentation extérieure."
      },
      {
        title: "Désignation de la Commission",
        content: "Conseil européen propose le président (majorité qualifiée, tenant compte des élections PE → Spitzenkandidat). PE approuve à la majorité. Président compose son équipe avec les États. PE vote sur l'ensemble (investiture). Responsabilité politique devant le PE (motion de censure = majorité 2/3 des votes, majorité des membres)."
      },
      {
        title: "Cour de Justice de l'UE (CJUE)",
        content: "Composée de : la Cour de justice (27 juges + 11 avocats généraux, mandat 6 ans renouvelable) et les tribunaux spécialisés. Rôle : interprétation et application uniforme du droit de l'UE. Indépendance et impartialité des juges."
      },
      {
        title: "Autres organes",
        content: "Banque Centrale Européenne (art. 282-283 TFUE) : politique monétaire zone euro. Cour des comptes (art. 285 TFUE) : contrôle financier. Organes consultatifs (art. 300 TFUE) : Comité économique et social européen (CESE) et Comité des régions."
      },
      {
        title: "Haut représentant pour les affaires étrangères",
        content: "Vice-président de la Commission. Préside le Conseil des affaires étrangères. Conduit la PESC. Nommé par le Conseil européen avec accord du président de la Commission."
      }
    ]
  },
  {
    id: 4,
    title: "Chapitre IV",
    subtitle: "Les Compétences de l'UE",
    color: "#ea580c",
    icon: "⚖️",
    points: [
      {
        title: "Principe d'attribution (art. 4-5 TUE)",
        content: "L'UE n'a PAS la plénitude des compétences. Elle agit uniquement dans les limites des compétences attribuées par les traités. Toute compétence non attribuée reste aux États membres. Contrôle de la CJUE sur le respect de ce principe."
      },
      {
        title: "Base juridique",
        content: "Pour chaque acte, l'UE doit s'appuyer sur une base juridique dans les traités qui précise l'existence et l'étendue de la compétence. Sans base juridique identifiable → annulation par la CJUE."
      },
      {
        title: "Compétences exclusives (art. 3 TFUE)",
        content: "Seule l'Union peut légiférer et adopter des actes contraignants. États ne peuvent agir que s'ils y sont habilités par l'Union. Liste : union douanière, règles de concurrence (marché intérieur), politique monétaire (zone euro), conservation des ressources biologiques de la mer, politique commerciale commune."
      },
      {
        title: "Compétences partagées (art. 4 TFUE)",
        content: "Union ET États peuvent légiférer. Droit de préemption : l'Union a priorité. Si l'Union légifère, les États ne peuvent plus légiférer dans cette matière (sauf si l'Union cesse de l'occuper). Exemples : marché intérieur, environnement, protection des consommateurs, transports, énergie, ELSJ."
      },
      {
        title: "Compétences d'appui (art. 6 TFUE)",
        content: "L'Union soutient, coordonne ou complète l'action des États. Pas d'harmonisation possible. Exemples : tourisme, culture, éducation, sport, protection civile, industrie."
      },
      {
        title: "Clause de flexibilité (art. 352 TFUE)",
        content: "Si l'action de l'UE est nécessaire mais qu'aucune compétence n'est prévue par les traités, le Conseil (unanimité) sur proposition de la Commission avec approbation du PE peut adopter des mesures. Usage strict, interprété restrictivement."
      },
      {
        title: "Principes de subsidiarité et proportionnalité",
        content: "Subsidiarité (art. 5§3 TUE) : dans les compétences non exclusives, l'UE n'agit que si les objectifs ne peuvent être atteints par les États seuls. Proportionnalité (art. 5§4 TUE) : le contenu et la forme de l'action ne dépassent pas ce qui est nécessaire."
      },
      {
        title: "Herren der Verträge",
        content: "Les États restent les « maîtres des traités ». Ce sont eux qui délimitent les compétences de l'UE. Cependant, il y a des réserves de compétences via le principe de l'effet utile."
      }
    ]
  },
  {
    id: 5,
    title: "Chapitre V",
    subtitle: "Sources du droit de l'UE",
    color: "#0891b2",
    icon: "📚",
    points: [
      {
        title: "Hiérarchie des sources",
        content: "Droit primaire (traités) → Principes généraux du droit → Accords internationaux → Droit dérivé (règlements, directives, décisions). Les protocoles et annexes ont la même valeur que les traités (art. 51 TUE)."
      },
      {
        title: "Droit primaire — Traités fondateurs",
        content: "TUE + TFUE + Charte des droits fondamentaux + protocoles + annexes. Traités d'adhésion sont aussi du droit primaire. Application territoriale : 27 États membres (art. 52 TUE, art. 355 TFUE) + régions ultrapériphériques + exceptions pour territoires d'outre-mer."
      },
      {
        title: "Principes généraux du droit",
        content: "Même rang que le droit primaire dans la hiérarchie. 3 catégories : (1) principes communs aux droits nationaux (droits fondamentaux) ; (2) principes inhérents à la structure de l'UE (primauté, coopération loyale, équilibre institutionnel) ; (3) principes du droit international (bonne foi)."
      },
      {
        title: "Accords internationaux",
        content: "Supérieurs au droit dérivé, inférieurs au droit primaire. L'UE peut conclure des accords avec des États tiers ou organisations internationales. Contrôle de compatibilité par la CJUE (avis préalable, art. 218§11 TFUE)."
      },
      {
        title: "Droit dérivé — Règlement (art. 288 TFUE)",
        content: "Portée générale, obligatoire dans tous ses éléments, directement applicable dans tout État membre sans transposition. S'applique à des catégories de personnes de manière abstraite."
      },
      {
        title: "Droit dérivé — Directive (art. 288 TFUE)",
        content: "Lie tout État membre destinataire quant au résultat à atteindre, mais laisse le choix des formes et moyens (transposition). Flexibilité = respect de l'identité constitutionnelle. Toujours accompagnée d'un règlement. Délai de transposition."
      },
      {
        title: "Droit dérivé — Décision (art. 288 TFUE)",
        content: "Obligatoire dans tous ses éléments. Si elle désigne des destinataires, elle n'est obligatoire que pour eux. Peut être individuelle ou sans destinataire spécifié."
      },
      {
        title: "Publicité des actes (art. 297 TFUE)",
        content: "Publication au Journal Officiel de l'UE (JOUE) — série L (législation) et C (communications). Entrée en vigueur : 20 jours après publication (principe), sauf date spécifique prévue. Notification individuelle pour les décisions."
      }
    ]
  },
  {
    id: 6,
    title: "Chapitre VI",
    subtitle: "Procédures d'adoption des actes",
    color: "#be185d",
    icon: "📋",
    points: [
      {
        title: "Accords internationaux (art. 218 TFUE)",
        content: "Le Conseil domine la procédure. Étapes : Conseil autorise l'ouverture → mandat de négociation → Commission/Haut représentant négocie → Conseil autorise la signature → Conseil conclut (après consultation ou approbation du PE). Ratification = décision du Conseil seul."
      },
      {
        title: "Accords mixtes",
        content: "Lorsque l'accord relève de compétences partagées, les États membres doivent aussi ratifier selon leurs procédures constitutionnelles respectives. Les États sont impliqués dès la négociation."
      },
      {
        title: "Actes législatifs — 3 caractéristiques communes",
        content: "(1) Monopole d'initiative législative de la Commission (art. 17§2 TUE). (2) Décision prise soit par le Conseil, soit par le PE, soit par les deux. (3) Procédures législatives inapplicables dans le domaine de la PESC."
      },
      {
        title: "Initiative de la Commission — Monopole",
        content: "Seule la Commission peut proposer un acte législatif (sauf exceptions : traités, initiative d'un groupe d'États, PE, Cour de justice, BCE). Justification : indépendance, intérêt général (art. 17 TUE). Le Conseil ne peut pas modifier sans retourner à la Commission."
      },
      {
        title: "Procédure législative ordinaire (PLO) — art. 294 TFUE",
        content: "Co-décision Conseil + PE. 1re lecture → 2e lecture → Comité de conciliation (si désaccord) → 3e lecture. Majorité qualifiée au Conseil + majorité simple au PE en 1re lecture. Majorité absolue au PE en 2e lecture. Si pas d'accord après conciliation → acte non adopté."
      },
      {
        title: "Procédures législatives spéciales",
        content: "Consultation : PE donne un avis (non contraignant) mais consultation obligatoire. Approbation : PE doit approuver (droit de veto, pas d'amendement). Conseil statue souvent à l'unanimité dans les PLS."
      },
      {
        title: "Actes non-législatifs",
        content: "Actes délégués (art. 290 TFUE) : la Commission complète/modifie des éléments non essentiels d'un acte législatif, sous contrôle du PE et du Conseil. Actes d'exécution (art. 291 TFUE) : conditions uniformes d'exécution, sous contrôle des États (comitologie)."
      },
      {
        title: "Clauses passerelles (art. 48§7 TUE)",
        content: "Permettent de passer de l'unanimité à la majorité qualifiée, ou d'une procédure spéciale à la PLO, sans révision formelle des traités. Décision du Conseil européen à l'unanimité + droit de veto des parlements nationaux."
      }
    ]
  },
  {
    id: 7,
    title: "Chapitre VII",
    subtitle: "Rapports entre ordres juridiques",
    color: "#4f46e5",
    icon: "🔗",
    points: [
      {
        title: "Primauté — Arrêt Costa c. ENEL (1964)",
        content: "Le droit de l'UE prime sur les droits nationaux des États membres, y compris les constitutions. Fondée sur la spécificité de la construction européenne : un système juridique propre qui s'impose aux juridictions nationales. Le juge national doit écarter toute norme nationale contraire."
      },
      {
        title: "Originalité de la primauté",
        content: "Ce n'est pas un critère chronologique (lex posterior) ni hiérarchique classique du droit international. C'est une primauté fondée sur l'originalité du traité CEE qui a instauré un système juridique propre. Arrêt Ski (Belgique) : la Cour de cassation belge a reconnu la primauté."
      },
      {
        title: "Interprétation conforme du droit national",
        content: "Le juge national doit interpréter le droit national conformément au droit de l'UE, dans la mesure du possible. Obligation de résultat. Limite : ne peut pas aller contra legem (contre le texte clair de la loi nationale)."
      },
      {
        title: "Effet direct — Arrêt Van Gend & Loos (1963)",
        content: "Les normes de droit européen peuvent créer directement des droits et obligations pour les particuliers, invocables devant les juridictions nationales, sans besoin de transposition. Conditions : norme claire, précise, inconditionnelle. Les traités, règlements, décisions ont un effet direct."
      },
      {
        title: "Effet direct des directives",
        content: "Effet direct vertical uniquement (particulier vs État) quand le délai de transposition est expiré et la directive non/mal transposée. Pas d'effet direct horizontal (particulier vs particulier). Jurisprudence : l'État ne peut pas tirer avantage de sa propre défaillance."
      },
      {
        title: "Responsabilité des États (Arrêt Francovich, 1991)",
        content: "Si un État membre viole le droit de l'UE et cause un préjudice à un particulier → obligation de réparation. Conditions : (1) la norme violée confère des droits aux particuliers, (2) la violation est suffisamment caractérisée, (3) lien de causalité direct. Fondé sur art. 4§3 TUE (coopération loyale)."
      },
      {
        title: "Renvoi préjudiciel (art. 267 TFUE)",
        content: "Mécanisme clé de coopération entre juridictions nationales et CJUE. Toute juridiction nationale peut (doit si elle statue en dernier ressort) poser une question préjudicielle à la CJUE sur l'interprétation ou la validité du droit de l'UE. L'arrêt de la CJUE lie le juge national."
      }
    ]
  },
  {
    id: 8,
    title: "Chapitre VIII",
    subtitle: "Introduction au droit matériel",
    color: "#16a34a",
    icon: "🏪",
    points: [
      {
        title: "Libre circulation des marchandises",
        content: "Liberté fondamentale du marché intérieur. Espace sans frontières intérieures où la libre circulation est garantie. Champ d'application : toute marchandise = tout produit appréciable en argent susceptible de transaction commerciale (arrêt Commission c. Italie, 1968)."
      },
      {
        title: "Union douanière (art. 30 TFUE)",
        content: "Interdiction des droits de douane et taxes d'effet équivalent (TEE) entre États membres. Tarif douanier commun aux frontières extérieures. TEE = toute charge pécuniaire, quelle que soit sa dénomination, imposée unilatéralement sur des marchandises franchissant une frontière (arrêt Orgacom, 2014). Exceptions : rémunération d'un service rendu, redevance fondée sur le droit de l'Union."
      },
      {
        title: "Interdiction des restrictions quantitatives (art. 34-36 TFUE)",
        content: "Art. 34 : Interdiction des restrictions quantitatives à l'importation et des MEERQ. Positif : harmoniser les législations nationales. Négatif : supprimer les entraves judiciaires. Art. 36 : Exceptions justifiées (ordre public, santé publique, protection de la propriété industrielle), non discriminatoires et proportionnées."
      },
      {
        title: "Formule Dassonville (1974)",
        content: "MEERQ = toute réglementation commerciale des États membres susceptible d'entraver directement ou indirectement, actuellement ou potentiellement, le commerce intracommunautaire. Interprétation très large."
      },
      {
        title: "Droit de la concurrence (art. 101-108 TFUE)",
        content: "Compétence exclusive de l'UE. (1) Interdiction des ententes (art. 101) : accords/pratiques concertées faussant la concurrence. (2) Abus de position dominante (art. 102) : exploitation abusive d'une position de marché. (3) Contrôle des concentrations : fusions/acquisitions notifiées à la Commission. (4) Aides d'État (art. 107-108) : interdites sauf exceptions autorisées."
      },
      {
        title: "ELSJ (Espace de liberté, sécurité et justice)",
        content: "Coopération judiciaire en matière civile et pénale, coopération policière, politique d'asile et d'immigration. Ancien 3e pilier (Maastricht), communautarisé par Lisbonne."
      },
      {
        title: "Droits fondamentaux",
        content: "Charte des droits fondamentaux : force juridique contraignante depuis Lisbonne. S'applique aux institutions de l'UE et aux États membres lorsqu'ils mettent en œuvre le droit de l'UE. CEDH : l'UE n'y a pas encore adhéré (Avis 2/13 CJUE). Principes généraux du droit."
      }
    ]
  },
  {
    id: 9,
    title: "Chapitre IX",
    subtitle: "La PESC",
    color: "#b45309",
    icon: "🛡️",
    points: [
      {
        title: "Nature de la PESC",
        content: "Politique étrangère et de sécurité commune. Ancêtre = la coopération politique européenne (CPE) dans les années 70. Officialisée par Maastricht (1992) comme 2e pilier. Régime intergouvernemental : les États gardent le contrôle. Rôle limité du PE et de la Commission. Contrôle juridictionnel limité de la CJUE."
      },
      {
        title: "Objectifs (art. 21-24 TUE)",
        content: "Promouvoir la paix, la démocratie, l'État de droit, les droits de l'Homme dans les relations extérieures. Préserver la sécurité de l'Union. La PESC s'inscrit dans l'action extérieure de l'Union (art. 21 TUE)."
      },
      {
        title: "Domaines (art. 24 TUE)",
        content: "Couvre tous les domaines de la politique étrangère et les questions relatives à la sécurité de l'Union, y compris la définition progressive d'une politique de défense commune (PSDC). Art. 42 TUE : défense collective et clause de solidarité."
      },
      {
        title: "Instruments (art. 25 TUE)",
        content: "Orientations générales (Conseil européen). Décisions du Conseil : définissent actions, positions, modalités de mise en œuvre. Pas de règlements ni de directives dans la PESC. Coopération systématique entre États (art. 32 TUE)."
      },
      {
        title: "Processus décisionnel",
        content: "Règle : UNANIMITÉ au Conseil (art. 31 TUE). Exception : majorité qualifiée quand le Conseil met en œuvre une décision du Conseil européen ou sur proposition du Haut représentant. Abstention constructive : un État peut s'abstenir sans bloquer la décision."
      },
      {
        title: "PSDC (Politique de sécurité et de défense commune)",
        content: "Missions civiles et militaires hors de l'Union (maintien de la paix, prévention de conflits, gestion de crises). Coopération structurée permanente (art. 42§6, 46 TUE) : certains États peuvent avancer ensemble en matière de défense. Lien avec l'OTAN (art. 42§7 TUE)."
      },
      {
        title: "Mesures restrictives (art. 215 TFUE)",
        content: "Sanctions (embargo, gel des avoirs, interdictions de voyage) décidées par le Conseil sur proposition conjointe du Haut représentant et de la Commission. Exemples : sanctions contre la Russie (depuis 2014/2022). Contrôlées par la CJUE pour les droits fondamentaux des personnes visées."
      },
      {
        title: "Haut représentant — Rôle central",
        content: "Conduit la PESC. Préside le Conseil des affaires étrangères. Vice-président de la Commission. Assisté par le Service européen pour l'action extérieure (SEAE). Représente l'Union pour les matières PESC."
      }
    ]
  },
  {
    id: 10,
    title: "Chapitre X",
    subtitle: "Les contentieux",
    color: "#6d28d9",
    icon: "⚔️",
    points: [
      {
        title: "L'UE : une Union de droit",
        content: "Les institutions sont soumises à la norme et la Cour de justice assure le contrôle juridictionnel pour faire respecter le droit de l'Union. Arrêt Les Verts (1986) : le Parlement pouvait attaquer des actes du Parlement européen devant la Cour, car l'Union est une « communauté de droit » où aucun acte n'échappe au contrôle juridictionnel."
      },
      {
        title: "Compétences de la Cour de justice",
        content: "Compétente dans le cadre de la PESC uniquement pour : le domaine de la PESC (art. 40 TUE), la légalité des mesures restrictives (art. 275 TFUE). Compétente pour l'ELSJ (art. 276 TFUE) sauf opérations de police/maintien de l'ordre. Compétente pour vérifier la proportionnalité et la validité des actes, les déficits excessifs (art. 126§10 TFUE, max 3% du PIB)."
      },
      {
        title: "Cour de justice vs Tribunal — Attributions",
        content: "La CJUE comprend la Cour de justice (1re et dernière instance pour certains recours) et le Tribunal (créé par l'AUE pour désengorger la Cour). Le Tribunal traite la plupart des affaires en 1re instance. La Cour statue en 1re et dernière instance pour les recours entre institutions et les renvois préjudiciels. L'art. 256 TFUE répartit les compétences pour 6 domaines."
      },
      {
        title: "Questions préjudicielles (art. 267 TFUE)",
        content: "La Cour a historiquement eu le monopole des questions préjudicielles. L'art. 256§3 TFUE permet au Tribunal de connaître certaines questions préjudicielles dans des matières spécifiques, avec possibilité de renvoi à la Cour si l'unité ou la cohérence du droit de l'UE est en jeu. Le 50ter des Statuts a été modifié en 2024."
      },
      {
        title: "Recours en manquement (art. 258-260 TFUE)",
        content: "La Commission (ou exceptionnellement un État membre, art. 259) agit contre un État membre qui viole ses obligations du droit de l'UE. Le manquement = notion objective (action ou omission). Phase précontentieuse : avis motivé de la Commission → mise en demeure → délai. Phase contentieuse : arrêt de la Cour constatant le manquement → l'État doit exécuter. Art. 260 : sanctions financières (somme forfaitaire et/ou astreinte) en cas de non-exécution."
      },
      {
        title: "Procédure du recours en manquement",
        content: "Initiative : Commission (pouvoir discrétionnaire, pas d'obligation d'agir, outil « EU Pilot » 80% réglés avant la Cour). Phase précontentieuse : lettre de mise en demeure → avis motivé (art. 258) → délai à l'État. Phase contentieuse : saisine de la Cour. Art. 260§2 : si l'État n'exécute pas l'arrêt, la Commission peut saisir à nouveau (astreinte/somme forfaitaire). Art. 260§3 : sanctions dès le premier arrêt pour non-transposition de directives."
      },
      {
        title: "Recours en annulation (art. 263-264 TFUE)",
        content: "Contrôle de la légalité des actes des institutions. Actes susceptibles : actes juridiquement obligatoires produisant des effets de droit (pas les avis, recommandations, ni actes préparatoires). 4 moyens d'annulation : incompétence, violation des formes substantielles, violation des traités/règles de droit, détournement de pouvoir. Délai : 2 mois à compter de la publication ou notification."
      },
      {
        title: "Requérants en annulation (art. 263 TFUE)",
        content: "Privilégiés (al. 2) : États membres, PE, Conseil, Commission — accès direct sans intérêt à démontrer. Semi-privilégiés (al. 3) : Cour des comptes, BCE, Comité des régions — défense de leurs prérogatives. Non-privilégiés (al. 4, particuliers) : 3 hypothèses — (a) acte dont ils sont destinataires, (b) acte qui les concerne directement et individuellement, (c) acte réglementaire les concernant directement sans mesure d'exécution. Formule Plaumann : individuellement = touché par l'acte en raison de qualités particulières."
      },
      {
        title: "Recours en carence (art. 265 TFUE)",
        content: "Miroir du recours en annulation : sanctionne l'omission (inaction) d'une institution. Il faut d'abord inviter l'institution à agir → délai de 2 mois → si elle n'agit pas, saisine de la Cour. L'institution a un pouvoir discrétionnaire : elle peut refuser sans commettre de carence si elle n'a pas de marge de manœuvre. Requérants : États membres, institutions (al. 1) et particuliers (al. 3) si un acte leur était destiné."
      },
      {
        title: "Responsabilité extracontractuelle (art. 340 TFUE)",
        content: "L'Union doit réparer les dommages causés par ses institutions ou agents. Régime aligné sur les principes généraux communs aux droits des États membres. Conditions : violation suffisamment caractérisée d'une règle conférant des droits aux particuliers, dommage réel, lien causal direct. Prescription : 5 ans. Le Tribunal est compétent en 1re instance."
      },
      {
        title: "Renvoi préjudiciel (art. 267 TFUE)",
        content: "Dialogue de juge à juge : le juge national pose une question à la CJUE sur l'interprétation ou la validité du droit de l'UE. But : assurer l'uniformité d'application dans tous les États membres. La Cour interprète, le juge national applique. Coopération loyale. Des milliers d'arrêts préjudiciels constituent l'essentiel de la jurisprudence de la Cour."
      },
      {
        title: "Juridiction nationale — Notion autonome",
        content: "La CJUE a défini la notion de « juridiction » (art. 267 TFUE) : critères = créée par la loi, permanente, compétence obligatoire, applique le droit, indépendante, procédure contradictoire. Un tribunal arbitral n'en est pas une. Faculté de renvoi pour toute juridiction ; obligation de renvoi pour les juridictions de dernier ressort (sauf acte clair / acte éclairé)."
      },
      {
        title: "Objet de la question préjudicielle",
        content: "Interprétation : porte sur tout le droit de l'Union (droit primaire et dérivé). Arrêt Van Gend & Loos : interprétation de l'art. 12 du traité. Validité : uniquement les actes des institutions (pas les traités). Le juge national ne peut jamais prononcer l'invalidité d'un acte de l'UE lui-même ; il doit saisir la Cour (arrêt Foto-Frost). 3e volet = contrôle de légalité incident parallèle au recours en annulation."
      }
    ]
  }
];

const parcoeur = [
  {
    ch: "Intro", title: "Introduction Generale", color: "#2563eb", icon: "\u{1F30D}",
    items: [
      { label: "Integration vs Cooperation", text: "Integration = fait disparaitre collectivement pour ne plus former qu'une seule entite. Cooperation = organisation internationale classique (OTAN, ONU) ou chaque Etat garde sa pleine souverainete." },
      { label: "Droit materiel de l'UE", text: "Ce sont les normes que l'UE produit. Ces normes sont les normes de tous les Etats membres. Le droit de l'UE est omnipresent dans toutes les matieres." },
      { label: "Ouvrage obligatoire", text: "C. Briere et M. Dony, Droit de l'Union Europeenne, 9e edition." },
    ]
  },
  {
    ch: "Ch.I", title: "Historique - Dates et faits", color: "#7c3aed", icon: "\u{1F4DC}",
    items: [
      { label: "Chronologie complete", text: "1945 : ONU / 1948 : OCDE (plan Marshall) / 1949 : OTAN + Conseil de l'Europe / 1950 : CEDH + Declaration Schuman (9 mai, Robert Schuman et Jean Monnet) / 1951 : CECA (Traite de Paris) / 1952 : Echec CED / 1955 : Conference de Messines (Spaak) / 1957 : CEE + CEEA (Traites de Rome, 25 mars) / 1973 : UK, Irlande, Danemark / 1981 : Grece / 1985 : Schengen / 1986 : Espagne, Portugal + AUE / 1992 : Maastricht / 1995 : Autriche, Finlande, Suede / 1997 : Amsterdam / 2001 : Nice / 2002 : Euro / 2004 : 10 nouveaux / 2007 : Roumanie, Bulgarie + Lisbonne / 2009 : Entree en vigueur Lisbonne / 2013 : Croatie / 2020 : Brexit (31 janvier)" },
      { label: "6 Etats fondateurs CECA", text: "France, Allemagne, Italie, Belgique, Pays-Bas, Luxembourg" },
      { label: "Idee Schuman", text: "Solidarite de faits entre Etats. Le plus important = solidarite France-Allemagne. Haute Autorite commune pour charbon et acier. Construire par des faits concrets, pas en un coup." },
      { label: "3 piliers Maastricht", text: "Pilier 1 : Communautes europeennes (methode communautaire). Pilier 2 : PESC (intergouvernemental). Pilier 3 : JAI (intergouvernemental). Lisbonne fusionne les 3 mais PESC garde un regime special." },
      { label: "Communautaire vs intergouvernemental", text: "Communautaire : monopole initiative Commission, co-decision PE+Conseil, majorite qualifiee, controle CJUE complet. Intergouvernemental : unanimite, role PE limite, pas de monopole Commission, controle CJUE restreint." },
      { label: "COREPER", text: "Comite des Representants Permanents. 27 ambassadeurs. Prepare les travaux du Conseil. Points A (adoptes sans debat, 75%) et Points B (debat). Se reunit 2-3 fois/semaine." },
    ]
  },
  {
    ch: "Ch.II", title: "Participation - Concepts cles", color: "#059669", icon: "\u{1F91D}",
    items: [
      { label: "Criteres de Copenhague (1993)", text: "Politiques : democratie stable, Etat de droit, droits de l'Homme, minorites. Economiques : economie de marche viable, capacite concurrentielle. Acquis : capacite a reprendre tout le droit de l'UE." },
      { label: "Arret Wightman (C-621/18, 10 dec. 2018)", text: "Le retrait est un droit souverain, revocable unilateralement tant que l'accord de retrait n'est pas entre en vigueur." },
      { label: "Arret Miller (2017, Cour Supreme UK)", text: "Le Brexit devait passer par le Parlement britannique, pas seulement par le gouvernement." },
      { label: "Brexit - Chronologie", text: "Juin 2016 : referendum / Mars 2017 : notification art. 50 / 31 janvier 2020 : retrait effectif / Periode transitoire jusqu'au 31 decembre 2020 / Accord de commerce depuis 1er janvier 2021" },
      { label: "Art. 7 - Cas concrets", text: "Pologne (2017) : procedure lancee par la Commission. Hongrie (2018) : lancee par le PE. Aucune n'a abouti au stade 2 (unanimite requise au Conseil europeen)." },
      { label: "Cooperation renforcee - exemples", text: "Brevet unitaire europeen / Divorce transfrontalier (Rome III) / Parquet europeen / Taxe transactions financieres (jamais abouti)" },
      { label: "Initiative citoyenne", text: "1 million de signatures, minimum 7 EM. La Commission n'est PAS obligee de proposer un acte, elle doit juste expliquer sa position." },
    ]
  },
  {
    ch: "Ch.III", title: "Institutions - Chiffres et details", color: "#dc2626", icon: "\u{1F3DB}\u{FE0F}",
    items: [
      { label: "Parlement - Chiffres cles", text: "750 + 1 president. Election directe depuis 1979 (avant : delegations). Mandat 5 ans. Min 6 deputes (Malte, Chypre, Luxembourg). Max 96 (Allemagne). Belgique = 22. 1er president elu : Simone Veil (1979). Sieges : Strasbourg (pleniere), Bruxelles (commissions), Luxembourg (secretariat)." },
      { label: "Majorite qualifiee - Formule", text: "55% des EM (minimum 15 sur 27) representant 65% de la population. Minorite de blocage : 4 Etats + plus de 35% population. Compromis de Ioannina : report si minorite proche du seuil le demande." },
      { label: "Motion de censure - Seuils", text: "Majorite 2/3 des suffrages exprimes ET majorite des membres du PE = 360 voix sur 720. Jamais adoptee dans l'histoire. Si adoptee : Commission demissionne en bloc." },
      { label: "Spitzenkandidat", text: "Pratique non prevue par les traites : le candidat a la presidence de la Commission est la tete de liste du parti gagnant. Von der Leyen elue 2019 sans etre Spitzenkandidat." },
      { label: "CJUE - Composition", text: "Cour de justice : 27 juges + 11 avocats generaux, mandat 6 ans renouvelable. Tribunal : 54 juges (2 par EM depuis 2019), pas d'AG. Siege : Luxembourg." },
      { label: "Arret Tchernobyl (C-70/88, 22 mai 1990)", text: "Le PE peut agir en annulation pour defendre ses prerogatives, meme si le traite ne le prevoyait pas. Fondement : equilibre institutionnel. Comble une lacune du traite." },
      { label: "Conseil des aff. etrangeres", text: "Seule formation du Conseil qui n'est PAS sous presidence tournante. Presidee par le Haut representant." },
    ]
  },
  {
    ch: "Ch.IV", title: "Competences - Concepts doctrinaux", color: "#ea580c", icon: "\u{2696}\u{FE0F}",
    items: [
      { label: "Herren der Vertrage", text: "Les Maitres des Traites. Les EM restent souverains pour delimiter les competences de l'UE. Toute modification des traites passe par eux." },
      { label: "Preemption", text: "Competences partagees : quand l'UE occupe un domaine, les EM ne peuvent plus legiferer. Si l'UE cesse de l'occuper, les EM retrouvent leur competence." },
      { label: "Exclusives vs partagees vs appui", text: "Exclusives : les EM ne peuvent JAMAIS legiferer. Partagees : les EM peuvent TANT QUE l'UE n'a pas occupe le terrain. Appui : l'UE ne peut JAMAIS harmoniser." },
      { label: "Carton jaune / orange", text: "Carton jaune : 1/3 des parlements nationaux s'opposent = Commission doit reexaminer. Carton orange (PLO) : majorite simple parlements + 55% Conseil ou majorite PE = proposition retiree. Rarement utilise en pratique." },
    ]
  },
  {
    ch: "Ch.V", title: "Sources - Distinctions", color: "#0891b2", icon: "\u{1F4DA}",
    items: [
      { label: "Reglement vs Directive", text: "Reglement = directement applicable, pas de transposition, s'impose tel quel (comme une loi federale). Directive = obligation de resultat, l'Etat choisit les moyens, necessite transposition dans un delai." },
      { label: "Portee generale vs individuelle", text: "Reglement = portee generale (categories abstraites). Decision avec destinataire = individuelle. Decision sans destinataire = peut etre generale." },
      { label: "JOUE", text: "Journal Officiel de l'Union Europeenne. Serie L = Legislation. Serie C = Communications. Publication electronique depuis 2013. Entree en vigueur : date fixee ou 20 jours apres publication." },
      { label: "Avis 2/13 CJUE (2014)", text: "La CJUE a refuse le projet d'adhesion de l'UE a la CEDH. Atteinte a l'autonomie du droit de l'UE, au renvoi prejudiciel, aux competences de la CJUE. L'adhesion est prevue par les traites mais n'a toujours pas eu lieu." },
      { label: "Protocoles et annexes", text: "Meme valeur juridique que les traites. C'est du droit PRIMAIRE, pas du droit secondaire." },
      { label: "Hierarchie des normes", text: "Droit primaire + principes generaux (sommet) puis accords internationaux puis droit derive (reglements, directives, decisions) puis actes non contraignants (recommandations, avis)." },
    ]
  },
  {
    ch: "Ch.VI", title: "Procedures - Mecanismes pratiques", color: "#be185d", icon: "\u{1F4CB}",
    items: [
      { label: "Trilogue", text: "Negociations informelles entre PE, Conseil et Commission. Non prevu par les traites mais devenu la norme : 90% des actes adoptes en 1re lecture grace aux trilogues. Critique : manque de transparence." },
      { label: "Comite de conciliation", text: "Paritaire PE/Conseil. Delai : 6 semaines. Si pas d'accord : acte mort. 3e lecture = 6 semaines supplementaires." },
      { label: "CETA et parlement wallon (2016)", text: "Le parlement wallon a bloque temporairement la signature du CETA (accord UE-Canada). Illustration du probleme des accords mixtes : un seul parlement national/regional peut bloquer." },
      { label: "Comitologie", text: "Comites de representants des EM qui controlent l'exercice des competences d'execution de la Commission. Procedures : examen et consultation." },
      { label: "Consultation obligatoire du PE", text: "Meme si l'avis n'est pas contraignant, il DOIT etre requis. Sinon = vice de forme = annulation par la CJUE." },
      { label: "Accords mixtes", text: "Quand l'accord releve de competences UE + EM. Les EM doivent aussi ratifier. Probleme : un seul parlement national peut bloquer tout l'accord." },
    ]
  },
  {
    ch: "Ch.VII", title: "Rapports - Arrets fondateurs", color: "#4f46e5", icon: "\u{1F517}",
    items: [
      { label: "Costa c. ENEL (6/64, 15 juil. 1964)", text: "PRIMAUTE. Le droit UE prime sur les droits nationaux, y compris les constitutions. Fondement : ordre juridique propre, transfert irreversible de competences. Le juge national doit ecarter toute norme nationale contraire." },
      { label: "Van Gend en Loos (26/62, 5 fev. 1963)", text: "EFFET DIRECT. Le traite cree des droits pour les particuliers invocables devant les juges nationaux. Conditions : norme claire, precise, inconditionnelle. Nouvel ordre juridique dont les sujets sont aussi les ressortissants." },
      { label: "Francovich (C-6/90 et C-9/90, 19 nov. 1991)", text: "RESPONSABILITE DE L'ETAT. 3 conditions : norme confere des droits, violation suffisamment caracterisee, lien causal direct. Fonde sur la cooperation loyale." },
      { label: "Foto-Frost (314/85, 22 oct. 1987)", text: "MONOPOLE D'INVALIDATION. Seule la CJUE peut declarer un acte UE invalide. Le juge national ne peut JAMAIS prononcer l'invalidite, il doit saisir la CJUE." },
      { label: "Arret Ski (Cass. belge, 27 mai 1971)", text: "Premiere juridiction supreme nationale reconnaissant la primaute du droit europeen sur le droit national, meme posterieur." },
      { label: "CILFIT (283/81, 6 oct. 1982)", text: "3 exceptions a l'obligation de renvoi pour juridictions de dernier ressort : question non pertinente, acte eclaire (deja interprete par la CJUE), acte clair (aucun doute raisonnable)." },
      { label: "Effet direct vertical vs horizontal", text: "Vertical : particulier contre ETAT. Horizontal : particulier contre PARTICULIER. Directives : JAMAIS d'effet direct horizontal. Reglements et traites : vertical ET horizontal." },
      { label: "L'Etat ne peut invoquer sa propre defaillance", text: "Si un Etat n'a pas transpose une directive, il ne peut pas s'en prevaloir pour refuser l'effet direct vertical." },
      { label: "Interpretation conforme - Limite", text: "Le juge doit interpreter le droit national a la lumiere du droit UE. Mais il ne peut PAS aller contra legem. Si impossible : reste la responsabilite Francovich." },
    ]
  },
  {
    ch: "Ch.VIII", title: "Droit materiel - Arrets cles", color: "#16a34a", icon: "\u{1F3EA}",
    items: [
      { label: "Commission c. Italie (7/68, 10 dec. 1968)", text: "DEFINITION DE MARCHANDISE. Tout produit appreciable en argent et susceptible de transaction commerciale." },
      { label: "Formule Dassonville (8/74, 11 juil. 1974)", text: "MEERQ = toute reglementation susceptible d'entraver directement ou indirectement, actuellement ou potentiellement, le commerce intracommunautaire." },
      { label: "Cassis de Dijon (120/78, 20 fev. 1979)", text: "RECONNAISSANCE MUTUELLE. Un produit legal dans un EM doit pouvoir etre commercialise partout. + EXIGENCES IMPERATIVES : protection des consommateurs, loyaute des transactions, sante publique, environnement." },
      { label: "Keck (C-267/91, 24 nov. 1993)", text: "Les MODALITES DE VENTE ne sont PAS des MEERQ si elles s'appliquent a tous les operateurs et affectent de la meme maniere produits nationaux et importes. Limite a Dassonville." },
      { label: "Orgacom (C-254/13, 2014)", text: "Precise la TEE : toute charge au passage de la frontiere, quelle que soit sa denomination." },
      { label: "TEE - 2 exceptions", text: "1) Remuneration d'un service effectivement rendu (proportionnelle). 2) Redevance fondee sur le droit de l'Union (ex : controle veterinaire impose par un reglement)." },
      { label: "Notion d'entreprise (concurrence)", text: "Toute entite exercant une activite economique, peu importe son statut juridique. Un hopital public peut en etre une. Un organisme de securite sociale non (solidarite)." },
      { label: "Position dominante", text: "N'est PAS interdite en soi. C'est l'ABUS qui est interdit. = Capacite de se comporter independamment des concurrents et consommateurs." },
      { label: "Kadi (C-402/05 P, 3 sept. 2008)", text: "La CJUE controle les sanctions UE meme si elles mettent en oeuvre des resolutions du Conseil de securite ONU. Les droits fondamentaux UE priment." },
    ]
  },
  {
    ch: "Ch.IX", title: "PESC - Specificites", color: "#b45309", icon: "\u{1F6E1}\u{FE0F}",
    items: [
      { label: "Abstention constructive", text: "Un Etat peut s'abstenir sans bloquer la decision a l'unanimite. Il n'est pas tenu d'appliquer la decision. Si plus d'1/3 des EM s'abstiennent : decision non adoptee." },
      { label: "Pas de reglements/directives en PESC", text: "Uniquement des decisions. Pas de monopole d'initiative de la Commission. Le PE ne co-decide PAS." },
      { label: "Defense mutuelle vs solidarite", text: "Art. 42 par. 7 TUE : agression armee = aide et assistance (sans prejudice OTAN). Art. 222 TFUE : attaque terroriste ou catastrophe = assistance mutuelle." },
      { label: "Sanctions - Exemples majeurs", text: "Russie (2014 Crimee + 2022 invasion Ukraine). Iran (nucleaire). Syrie, Bielorussie, Mali. Types : gel des avoirs, embargo armes, interdictions de voyage, restrictions commerciales." },
    ]
  },
  {
    ch: "Ch.X", title: "Contentieux - Arrets et formules", color: "#6d28d9", icon: "\u{2694}\u{FE0F}",
    items: [
      { label: "Les Verts (294/83, 23 avril 1986)", text: "COMMUNAUTE DE DROIT. Aucun acte des institutions n'echappe au controle juridictionnel. Le PE peut agir en annulation." },
      { label: "Formule Plaumann (25/62, 15 juil. 1963)", text: "AFFECTATION INDIVIDUELLE. Atteint en raison de qualites particulieres ou d'une situation de fait qui la caracterise par rapport a toute autre personne. Interpretation tres restrictive." },
      { label: "EU Pilot", text: "Outil informatique pour dialogue Commission/EM AVANT la phase formelle du manquement. Resout 80% des dossiers. Non prevu par les traites." },
      { label: "Manquement = notion objective", text: "Action ou omission. Peu importe la gravite. La Commission a un pouvoir discretionnaire pour poursuivre ou non." },
      { label: "Sanctions financieres", text: "Somme forfaitaire (sanctionner le passe) et/ou astreinte (montant par jour pour l'avenir). La Commission propose, la Cour decide. Art. 260 par. 3 : sanctions possibles des le 1er arret pour non-transposition de directives (depuis Lisbonne)." },
      { label: "Delais a retenir", text: "Annulation : 2 mois. Carence : 2 mois pour l'institution + 2 mois pour saisir la Cour. Responsabilite : prescription 5 ans." },
      { label: "Carence = miroir de l'annulation", text: "Annulation sanctionne un acte illegal. Carence sanctionne une absence illegale d'acte. Meme objectif : respect de la legalite." },
      { label: "Renvoi prejudiciel - Dialogue", text: "La Cour ne tranche PAS le litige national. Elle repond a la question de droit UE. Le juge national applique ensuite. Des milliers d'arrets prejudiciels = socle de la jurisprudence." },
      { label: "6 criteres de juridiction (art. 267)", text: "Creee par la loi / Permanente / Competence obligatoire / Applique le droit / Independante / Procedure contradictoire. Notion AUTONOME. Tribunal arbitral = PAS une juridiction." },
      { label: "Interpretation vs validite", text: "Interpretation : tout le droit UE (traites + droit derive). Validite : uniquement actes des institutions (jamais les traites). Le juge national ne peut JAMAIS invalider lui-meme (Foto-Frost)." },
    ]
  },
];

const questions = [
  { ch: "Intro", q: "Qu'est-ce qui distingue l'UE d'une organisation internationale classique comme l'OTAN ou l'ONU ?", a: "L'UE est une organisation supranationale/d'intégration, pas de simple coopération. L'intégration vise à faire disparaître les entités séparées pour former une seule entité. L'UE produit des normes obligatoires directement applicables, possède une personnalité juridique propre, et ses institutions (Commission, CJUE) sont indépendantes des États. Contrairement à l'OTAN ou l'ONU, les États transfèrent des compétences souveraines à l'UE." },
  { ch: "Intro", q: "Pourquoi dit-on que le droit de l'UE est « omniprésent » ?", a: "Le droit matériel de l'UE (les normes qu'elle produit) touche presque toutes les matières du droit national. L'UE est un service public commun aux 27 États membres dont les normes sont les normes de tous les États membres. Qu'il s'agisse d'environnement, de concurrence, de protection des consommateurs ou de libre circulation, le droit de l'UE est partout dans l'ordre juridique interne." },
  { ch: "Ch.I", q: "Expliquez la Déclaration Schuman du 9 mai 1950 et sa portée historique.", a: "Robert Schuman, ministre français des affaires étrangères, propose de placer la production de charbon et d'acier franco-allemande sous une Haute Autorité commune, ouverte aux autres pays européens. L'idée fondatrice : créer une solidarité de faits entre les 6 États fondateurs (France, Allemagne, Italie, Benelux) rendant la guerre matériellement impossible. Cela mène à la création de la CECA en 1951 par le Traité de Paris. C'est l'acte fondateur de la construction européenne, basé sur la réconciliation franco-allemande." },
  { ch: "Ch.I", q: "Quelles sont les grandes étapes de la construction européenne, de la CECA au Traité de Lisbonne ?", a: "1951 : CECA (Traité de Paris). 1957 : CEE + CEEA (Traités de Rome) → Marché Commun. 1986 : Acte Unique Européen → relance du marché intérieur, harmonisation des réglementations via directives. 1992 : Traité de Maastricht → naissance de l'U.E., structure en 3 piliers, citoyenneté européenne, monnaie unique. 1997 : Amsterdam. 2001 : Nice. 2007 : Traité de Lisbonne → fusion des piliers, personnalité juridique de l'UE, Charte des droits fondamentaux contraignante, deux traités (TUE + TFUE)." },
  { ch: "Ch.I", q: "Expliquez la structure en trois piliers introduite par le Traité de Maastricht et ce qu'elle est devenue.", a: "Maastricht (1992) crée 3 piliers : (1) Pilier communautaire (CEE, CECA, CEEA) avec méthode communautaire (monopole d'initiative de la Commission, co-décision, contrôle CJUE) ; (2) PESC (politique étrangère, méthode intergouvernementale, unanimité) ; (3) JAI (coopération judiciaire pénale et policière, intergouvernemental). Le Traité de Lisbonne (2007) a fusionné les piliers, communautarisant le 3e pilier (ELSJ) tout en maintenant un régime spécifique pour la PESC." },
  { ch: "Ch.I", q: "Quelle est la différence entre le modèle communautaire et le modèle intergouvernemental ?", a: "Communautaire : la Commission a le monopole de l'initiative législative, le PE co-décide, le Conseil vote souvent à la majorité qualifiée, et la CJUE exerce un contrôle juridictionnel complet. Intergouvernemental : les États gardent le contrôle via le Conseil (unanimité), le PE a un rôle limité (consultation), la Commission n'a pas de monopole d'initiative, et le contrôle de la CJUE est restreint. La PESC reste largement intergouvernementale." },
  { ch: "Ch.II", q: "Quelles sont les conditions pour adhérer à l'Union Européenne (art. 49 TUE) ?", a: "4 conditions cumulatives : (1) être un État, (2) être un État européen, (3) respecter les valeurs de l'art. 2 TUE (dignité humaine, liberté, démocratie, égalité, État de droit, droits de l'Homme), (4) satisfaire aux critères d'éligibilité européens, dits critères de Copenhague : critères économiques (économie de marché viable), critères politiques (institutions démocratiques stables), et critères de l'acquis de l'Union (capacité d'absorber l'acquis communautaire)." },
  { ch: "Ch.II", q: "Décrivez la procédure de retrait de l'UE (art. 50 TUE) en l'illustrant par le Brexit.", a: "Art. 50 TUE : tout État membre peut décider de se retirer conformément à ses règles constitutionnelles. Procédure : notification au Conseil européen → négociation d'un accord de retrait (max 2 ans, prolongeable à l'unanimité) → accord approuvé par le Conseil (majorité qualifiée) après approbation du PE. Brexit : référendum UK en juin 2016, notification en mars 2017, négociations complexes, plusieurs prolongations, retrait effectif le 31 janvier 2020." },
  { ch: "Ch.II", q: "Expliquez le mécanisme de l'article 7 TUE et ses différentes étapes.", a: "Art. 7 protège les valeurs de l'art. 2 TUE. 3 étapes progressives : §1er (Amsterdam/Nice) : le Conseil (majorité 4/5) peut constater un risque clair de violation grave des valeurs, sur proposition d'1/3 des EM, du PE ou de la Commission. §2 : le Conseil européen (unanimité, sauf l'État concerné) constate l'existence d'une violation grave et persistante. §3 : le Conseil (majorité qualifiée) peut suspendre certains droits de l'État, y compris le droit de vote au Conseil. Exemples : procédures engagées contre la Pologne et la Hongrie." },
  { ch: "Ch.II", q: "Qu'est-ce que la citoyenneté européenne et quels droits confère-t-elle ?", a: "Art. 20-25 TFUE. Toute personne ayant la nationalité d'un État membre est citoyen de l'Union. Elle complète (ne remplace pas) la citoyenneté nationale. Droits : libre circulation et séjour dans tout État membre, droit de vote et d'éligibilité aux élections du PE et municipales dans l'État de résidence, protection diplomatique par tout État membre dans un pays tiers, droit de pétition au PE, droit de saisir le Médiateur européen, initiative citoyenne européenne (1 million de signatures, 7 États minimum)." },
  { ch: "Ch.II", q: "Qu'est-ce que la coopération renforcée (art. 20 TUE) et à quelles conditions peut-elle être mise en œuvre ?", a: "La coopération renforcée permet à minimum 9 États membres d'avancer ensemble dans un domaine où l'unanimité au Conseil bloque. Conditions : dernier recours (objectifs non atteignables par l'Union dans son ensemble), ne peut porter atteinte au marché intérieur ni à la cohésion économique/sociale, doit rester ouverte à tous les États qui souhaitent rejoindre ultérieurement, autorisée par le Conseil. Exemples : brevet unitaire européen, taxe sur les transactions financières." },
  { ch: "Ch.III", q: "Expliquez le principe d'équilibre institutionnel (art. 13 TUE) et illustrez-le.", a: "Chaque institution agit dans les limites des attributions qui lui sont conférées par les traités. Aucune institution ne peut empiéter sur les compétences d'une autre. Elles doivent pratiquer une coopération loyale entre elles. Illustration : l'arrêt Tchernobyl (1990) où la Cour a reconnu au PE le droit d'agir en annulation pour défendre ses prérogatives, même si le traité ne le prévoyait pas explicitement à l'époque, car l'équilibre institutionnel l'exigeait." },
  { ch: "Ch.III", q: "Décrivez la composition et les pouvoirs du Parlement européen.", a: "Composition : max 750 + président, élus au suffrage universel direct (depuis 1979) pour 5 ans. Quota par État (min 6, max 96 députés) proportionnel à la population. Pouvoirs : (1) co-législateur avec le Conseil (PLO), (2) pouvoir budgétaire (co-autorité budgétaire), (3) contrôle politique : investiture de la Commission, motion de censure (majorité 2/3 des votants + majorité des membres), questions orales/écrites, commissions d'enquête. (4) Approbation d'accords internationaux." },
  { ch: "Ch.III", q: "Distinguez le Conseil européen et le Conseil de l'UE : composition, fonctions, mode de décision.", a: "Conseil européen (art. 15 TUE) : chefs d'État/gouvernement + président (élu 2,5 ans, renouvelable 1 fois) + président de la Commission. Donne les impulsions politiques, les orientations générales. Ne légifère PAS. Consensus. Conseil de l'UE : 1 ministre par État (formations variables : Affaires générales, ECOFIN, etc.). CO-LÉGISLATEUR avec le PE. Vote : unanimité ou majorité qualifiée (55% des États = min 15, représentant 65% de la population). Présidence tournante par semestre." },
  { ch: "Ch.III", q: "Comment la Commission européenne est-elle désignée et quelle est sa responsabilité politique ?", a: "Désignation : le Conseil européen propose le président (majorité qualifiée, tenant compte des élections PE → Spitzenkandidat). Le PE approuve à la majorité. Le président compose son équipe avec les États. Auditions individuelles des commissaires par le PE. Vote d'investiture sur l'ensemble du collège. Responsabilité politique : la Commission est collectivement responsable devant le PE. Motion de censure = majorité 2/3 des votes exprimés ET majorité des membres. Si adoptée, la Commission démissionne en bloc." },
  { ch: "Ch.III", q: "Quels sont les principaux pouvoirs de la Commission européenne ?", a: "4 grandes fonctions : (1) Initiative législative : monopole de proposition des actes législatifs (art. 17§2 TUE), sauf exceptions (PESC, initiative citoyenne). (2) Gardienne des traités : veille au respect du droit de l'UE par les États, peut introduire un recours en manquement devant la CJUE. (3) Exécution : rôle d'exécution des actes de l'Union, gestion des programmes et fonds. (4) Représentation extérieure : représente l'UE (sauf PESC où c'est le Haut représentant)." },
  { ch: "Ch.III", q: "Présentez la composition et le rôle de la Cour de Justice de l'Union Européenne.", a: "La CJUE comprend la Cour de justice (27 juges + 11 avocats généraux, mandat 6 ans renouvelable, nommés d'un commun accord des gouvernements) et le Tribunal. L'avocat général présente des conclusions publiquement et en toute indépendance. Rôle : assurer l'interprétation et l'application uniformes du droit de l'UE. Compétences : renvoi préjudiciel (art. 267), recours en manquement (258-260), recours en annulation (263), recours en carence (265), responsabilité extracontractuelle (340)." },
  { ch: "Ch.IV", q: "Expliquez le principe d'attribution des compétences et ses conséquences.", a: "Art. 4-5 TUE : l'UE n'est pas un État souverain, elle n'a pas la plénitude des compétences. Elle ne peut agir que dans les limites des compétences que les traités lui attribuent. Toute compétence non attribuée appartient aux États (art. 4§1 TUE, art. 5§2 TUE). Conséquence : chaque acte de l'UE doit reposer sur une base juridique identifiable dans les traités, qui définit la compétence, sa portée et la procédure. En l'absence de base juridique → annulation par la CJUE." },
  { ch: "Ch.IV", q: "Distinguez compétences exclusives, partagées et d'appui avec des exemples.", a: "Exclusives (art. 3 TFUE) : seule l'UE peut légiférer. Ex : union douanière, politique commerciale commune, politique monétaire (zone euro), concurrence, conservation des ressources biologiques de la mer. Partagées (art. 4 TFUE) : UE et États peuvent légiférer, mais droit de préemption de l'UE. Ex : marché intérieur, environnement, transports, ELSJ, protection des consommateurs. D'appui (art. 6 TFUE) : l'UE soutient sans harmoniser. Ex : tourisme, culture, éducation, sport, industrie." },
  { ch: "Ch.IV", q: "Expliquez les principes de subsidiarité et de proportionnalité.", a: "Subsidiarité (art. 5§3 TUE) : dans les domaines de compétence non exclusive, l'UE n'intervient que si les objectifs ne peuvent être atteints de manière suffisante par les États membres et peuvent être mieux atteints au niveau de l'Union. Contrôle ex ante par les parlements nationaux (protocole n°2 : carton jaune/orange). Proportionnalité (art. 5§4 TUE) : le contenu et la forme de l'action de l'UE n'excèdent pas ce qui est nécessaire pour atteindre les objectifs des traités. S'applique à toutes les compétences." },
  { ch: "Ch.IV", q: "Qu'est-ce que la clause de flexibilité (art. 352 TFUE) et quelles sont ses limites ?", a: "Si une action de l'UE paraît nécessaire pour atteindre un objectif des traités mais qu'aucune base juridique spécifique n'est prévue, le Conseil peut adopter des mesures à l'unanimité, sur proposition de la Commission, avec approbation du PE. Limites : ne peut pas servir à harmoniser dans les domaines où les traités l'excluent, ne peut pas modifier les traités, interprétation stricte par la CJUE, les parlements nationaux sont informés (contrôle de subsidiarité)." },
  { ch: "Ch.V", q: "Décrivez la hiérarchie des sources du droit de l'Union Européenne.", a: "Du sommet à la base : (1) Droit primaire : TUE, TFUE, Charte des droits fondamentaux, protocoles et annexes, traités d'adhésion. (2) Principes généraux du droit : même rang que le droit primaire (droits fondamentaux, primauté, coopération loyale, proportionnalité). (3) Accords internationaux : supérieurs au droit dérivé, inférieurs au droit primaire. (4) Droit dérivé : règlements, directives, décisions (obligatoires) + recommandations et avis (non contraignants)." },
  { ch: "Ch.V", q: "Distinguez règlement, directive et décision en droit dérivé de l'UE (art. 288 TFUE).", a: "Règlement : portée générale, obligatoire dans tous ses éléments, directement applicable dans tout État membre sans transposition. Il s'adresse à des catégories abstraites de personnes. Directive : lie l'État destinataire quant au résultat à atteindre, laisse le choix des formes et moyens (transposition nécessaire dans un délai). Flexibilité pour respecter l'identité constitutionnelle. Décision : obligatoire dans tous ses éléments ; si elle désigne des destinataires, obligatoire uniquement pour eux. Peut être individuelle ou générale." },
  { ch: "Ch.V", q: "Que sont les principes généraux du droit de l'UE ? Donnez des exemples et des catégories.", a: "Ce sont des normes non écrites, dégagées par la CJUE, ayant valeur de droit primaire. 3 catégories : (1) Principes communs aux droits nationaux : droits fondamentaux (avant la Charte), principe de bonne administration, sécurité juridique, confiance légitime, proportionnalité, non-rétroactivité. (2) Principes inhérents à la structure de l'UE : primauté, coopération loyale (art. 4§3 TUE), équilibre institutionnel, interdiction de se faire justice à soi-même. (3) Principes du droit international : bonne foi, pacta sunt servanda." },
  { ch: "Ch.VI", q: "Décrivez la procédure législative ordinaire (art. 294 TFUE).", a: "Co-décision PE + Conseil. La Commission propose. 1re lecture : PE adopte sa position → Conseil approuve (acte adopté) ou adopte sa propre position. 2e lecture : PE a 3 mois pour approuver, rejeter (majorité absolue → acte rejeté) ou amender (majorité absolue). Conseil a 3 mois pour accepter tous les amendements ou non. Si désaccord → Comité de conciliation (6 semaines, 28 membres PE + 28 Conseil) → projet commun. 3e lecture : PE (majorité simple) + Conseil (majorité qualifiée) approuvent ou l'acte n'est pas adopté." },
  { ch: "Ch.VI", q: "Pourquoi la Commission a-t-elle le monopole de l'initiative législative et quelles sont les exceptions ?", a: "La Commission est une institution indépendante représentant l'intérêt général européen (art. 17 TUE). Son monopole garantit que les propositions reflètent l'intérêt général et non les intérêts particuliers des États. Exceptions prévues par les traités : initiative d'un groupe d'États membres (ELSJ, art. 76 TFUE), initiative du PE (art. 225 TFUE, droit de demander à la Commission de proposer), initiative de la Cour de justice, de la BCE. Initiative citoyenne européenne (1 million de signatures). La PESC n'a pas de monopole de la Commission." },
  { ch: "Ch.VI", q: "Quelle est la différence entre actes délégués (art. 290 TFUE) et actes d'exécution (art. 291 TFUE) ?", a: "Actes délégués : la Commission peut compléter ou modifier des éléments non essentiels d'un acte législatif. Délégation encadrée : le PE et le Conseil peuvent révoquer la délégation ou émettre des objections. Actes d'exécution : lorsque des conditions uniformes d'exécution sont nécessaires, la Commission (ou exceptionnellement le Conseil) adopte les mesures d'exécution. Contrôle par les États membres via la comitologie (comités composés de représentants des États). La distinction porte sur le but : compléter/modifier la norme (délégué) vs appliquer uniformément (exécution)." },
  { ch: "Ch.VI", q: "Comment sont conclus les accords internationaux par l'UE (art. 218 TFUE) ?", a: "Le Conseil domine la procédure. Étapes : (1) le Conseil autorise l'ouverture des négociations et fixe le mandat, (2) la Commission ou le Haut représentant (PESC) négocie, (3) le Conseil autorise la signature, (4) le Conseil conclut l'accord (après consultation ou approbation du PE selon les cas). Accords mixtes : si l'accord relève de compétences partagées, les États membres doivent aussi ratifier selon leurs procédures constitutionnelles. Le PE doit être informé et peut bloquer via l'approbation." },
  { ch: "Ch.VII", q: "Expliquez le principe de primauté du droit de l'UE en vous appuyant sur l'arrêt Costa c. ENEL (1964).", a: "Dans Costa c. ENEL (6/64), la CJUE a établi que le droit de l'UE prime sur les droits nationaux, y compris les constitutions. Fondement : le traité CEE a créé un ordre juridique propre, intégré aux systèmes juridiques nationaux. Les États ont transféré des compétences souveraines, créant un corps de droit applicable à leurs ressortissants et à eux-mêmes. Le juge national doit écarter toute norme nationale contraire au droit de l'UE, même postérieure. Ce n'est pas un critère chronologique (lex posterior) mais une primauté fondée sur l'originalité et la spécificité de la construction européenne." },
  { ch: "Ch.VII", q: "Qu'est-ce que l'effet direct et quelles conditions une norme doit-elle remplir pour en bénéficier ?", a: "L'effet direct (arrêt Van Gend & Loos, 1963) signifie qu'une norme de droit de l'UE crée directement des droits et obligations pour les particuliers, invocables devant les juridictions nationales sans transposition. Conditions : la norme doit être claire, précise et inconditionnelle (ne nécessitant aucune mesure complémentaire). Les traités, règlements et décisions peuvent avoir un effet direct. Les directives n'ont qu'un effet direct vertical (particulier vs État) après expiration du délai de transposition si elles sont non/mal transposées. Jamais d'effet direct horizontal des directives." },
  { ch: "Ch.VII", q: "Expliquez l'obligation d'interprétation conforme du droit national au droit de l'UE.", a: "Le juge national doit interpréter son droit national à la lumière du texte et de la finalité du droit de l'UE, afin d'atteindre le résultat voulu par la directive. C'est une obligation de résultat qui s'applique à tout le droit national, pas seulement à la loi de transposition. Limite : le juge ne peut pas aller contra legem, c'est-à-dire interpréter contre le texte clair de la loi nationale. Cette obligation permet de compenser l'absence d'effet direct horizontal des directives." },
  { ch: "Ch.VII", q: "Présentez le principe de responsabilité des États membres pour violation du droit de l'UE (arrêt Francovich, 1991).", a: "Arrêt Francovich (C-6/90 et C-9/90) : si un État membre viole le droit de l'UE et cause un préjudice à un particulier, il doit le réparer. 3 conditions cumulatives : (1) la norme violée confère des droits aux particuliers, (2) la violation est suffisamment caractérisée (méconnaissance manifeste et grave des limites du pouvoir d'appréciation), (3) lien de causalité direct entre la violation et le dommage. Fondement : principe de coopération loyale (art. 4§3 TUE) et effectivité du droit de l'UE. S'applique à toute violation (non-transposition, mauvaise application, décision judiciaire — arrêt Köbler)." },
  { ch: "Ch.VIII", q: "Qu'est-ce que la libre circulation des marchandises et comment s'articule-t-elle avec l'union douanière ?", a: "La libre circulation des marchandises est une liberté fondamentale du marché intérieur (art. 26 TFUE) : espace sans frontières intérieures. Elle repose sur l'union douanière (art. 30 TFUE) : suppression des droits de douane et taxes d'effet équivalent (TEE) entre États membres + tarif extérieur commun. Marchandise = tout produit appréciable en argent susceptible de transaction commerciale (arrêt Commission c. Italie 1968). Complétée par l'interdiction des restrictions quantitatives et MEERQ (art. 34 TFUE, formule Dassonville)." },
  { ch: "Ch.VIII", q: "Expliquez la formule Dassonville et son importance pour le marché intérieur.", a: "Arrêt Dassonville (8/74, 1974) : constitue une MEERQ (mesure d'effet équivalent à une restriction quantitative) « toute réglementation commerciale des États membres susceptible d'entraver directement ou indirectement, actuellement ou potentiellement, le commerce intracommunautaire ». Interprétation extrêmement large qui a permis à la CJUE de contrôler une multitude de réglementations nationales entravant le commerce. Complétée par les exceptions de l'art. 36 TFUE (ordre public, santé publique) et les exigences impératives (arrêt Cassis de Dijon)." },
  { ch: "Ch.VIII", q: "Présentez les grandes règles du droit de la concurrence de l'UE.", a: "Compétence exclusive de l'UE (art. 101-108 TFUE). 4 piliers : (1) Interdiction des ententes (art. 101) : accords ou pratiques concertées entre entreprises faussant la concurrence sur le marché, sauf exemptions (§3). (2) Abus de position dominante (art. 102) : exploitation abusive d'une position de pouvoir économique. (3) Contrôle des concentrations : fusions/acquisitions notifiées à la Commission. (4) Aides d'État (art. 107-108) : interdites car faussent la concurrence, sauf exceptions autorisées par la Commission (PME, R&D, régions défavorisées)." },
  { ch: "Ch.VIII", q: "Qu'est-ce qu'une taxe d'effet équivalent (TEE) et comment la distingue-t-on d'une imposition intérieure ?", a: "TEE = toute charge pécuniaire, quelle que soit sa dénomination ou sa taille, imposée unilatéralement sur des marchandises en raison du franchissement d'une frontière (arrêt Orgacom). Interdite par l'art. 30 TFUE. Exceptions admises : rémunération d'un service effectivement rendu au redevable, redevance fondée sur le droit de l'Union (ex : contrôle vétérinaire obligatoire). À distinguer de l'imposition intérieure (art. 110 TFUE) : taxe qui frappe aussi les produits nationaux similaires, permise si non discriminatoire." },
  { ch: "Ch.IX", q: "Pourquoi la PESC a-t-elle un régime juridique distinct des autres politiques de l'UE ?", a: "La PESC est héritière du 2e pilier (Maastricht), de nature intergouvernementale. Les États conservent le contrôle car la politique étrangère et la défense touchent au cœur de la souveraineté nationale. Conséquences : décisions à l'unanimité (art. 31 TUE, sauf exceptions), pas de règlements ni de directives (seulement des décisions), rôle limité du PE (informé/consulté, pas co-décisionnaire), initiative partagée (pas de monopole de la Commission), contrôle juridictionnel très limité de la CJUE (art. 24 TUE, art. 275 TFUE)." },
  { ch: "Ch.IX", q: "Qu'est-ce que la PSDC et comment fonctionne-t-elle ?", a: "La Politique de Sécurité et de Défense Commune (art. 42-46 TUE) fait partie de la PESC. Elle permet des missions civiles et militaires hors de l'Union (maintien de la paix, prévention de conflits, gestion de crises). Instruments : la coopération structurée permanente (CSP, art. 42§6, 46 TUE) permet à certains États d'avancer ensemble en matière de défense. Clause de défense mutuelle (art. 42§7). Lien avec l'OTAN (art. 42§7, art. 5 du Traité OTAN). Depuis l'invasion de l'Ukraine (2022), relance massive de la PSDC." },
  { ch: "Ch.IX", q: "Comment fonctionnent les mesures restrictives (sanctions) de l'UE ?", a: "Art. 215 TFUE. Le Conseil européen définit les orientations, puis le Conseil adopte des décisions PESC définissant les sanctions. Pour les sanctions économiques, le Conseil adopte un règlement sur proposition conjointe du Haut représentant et de la Commission. Types : embargos sur les armes, gel des avoirs, interdictions de voyage, restrictions commerciales. Contrôle juridictionnel par la CJUE pour protéger les droits fondamentaux des personnes visées (arrêt Kadi). Exemples majeurs : sanctions contre la Russie depuis 2014, renforcées massivement depuis 2022." },
  { ch: "Ch.X", q: "Pourquoi dit-on que l'UE est une « Union de droit » ?", a: "Expression consacrée par l'arrêt Les Verts (1986). Les institutions de l'UE sont soumises au respect du droit et la Cour de justice assure le contrôle juridictionnel de leurs actes. Aucun acte produisant des effets juridiques ne peut échapper au contrôle de la Cour. Les institutions doivent respecter les traités comme norme suprême. Le contrôle juridictionnel est une garantie fondamentale de l'État de droit au niveau européen, comparable au contrôle de constitutionnalité dans les ordres nationaux." },
  { ch: "Ch.X", q: "Décrivez le recours en manquement (art. 258-260 TFUE) : objet, procédure et sanctions.", a: "Objet : la Commission (ou un État, art. 259) agit contre un État qui viole ses obligations du droit de l'UE (action ou omission). Manquement = notion objective. Procédure en 2 phases : (1) Phase précontentieuse : mise en demeure → avis motivé → délai (outil EU Pilot résout 80% des cas). (2) Phase contentieuse : saisine de la Cour → arrêt constatant le manquement → l'État doit exécuter (art. 260§1). Sanctions si non-exécution (art. 260§2) : somme forfaitaire et/ou astreinte. Art. 260§3 : sanctions possibles dès le 1er arrêt pour non-transposition de directives." },
  { ch: "Ch.X", q: "Quels sont les actes susceptibles de recours en annulation et quels sont les moyens d'annulation ?", a: "Actes susceptibles (art. 263 TFUE) : tous les actes des institutions produisant des effets juridiques obligatoires (pas les avis, recommandations, actes préparatoires, actes confirmatifs). 4 moyens d'annulation : (1) incompétence de l'institution auteur, (2) violation des formes substantielles (consultation obligatoire omise, motivation insuffisante), (3) violation des traités ou de toute règle de droit relative à leur application, (4) détournement de pouvoir (utilisation d'une compétence dans un but autre que celui prévu). Délai : 2 mois." },
  { ch: "Ch.X", q: "Distinguez les trois catégories de requérants en recours en annulation (art. 263 TFUE).", a: "Privilégiés (al. 2) : États membres, PE, Conseil, Commission → accès direct, pas besoin de démontrer un intérêt. Semi-privilégiés (al. 3) : Cour des comptes, BCE, Comité des régions → uniquement pour défendre leurs prérogatives. Non-privilégiés/particuliers (al. 4) : personnes physiques ou morales, 3 cas — (a) acte dont ils sont destinataires, (b) acte qui les concerne directement et individuellement (formule Plaumann : qualités particulières qui les distinguent de toute autre personne), (c) acte réglementaire les concernant directement sans mesure d'exécution." },
  { ch: "Ch.X", q: "Qu'est-ce que le recours en carence (art. 265 TFUE) et en quoi est-il le « miroir » du recours en annulation ?", a: "Le recours en carence sanctionne l'inaction (omission) illégale d'une institution, alors que l'annulation sanctionne un acte illégal. C'est le miroir car les deux visent le respect de la légalité. Procédure : d'abord inviter l'institution à agir → délai de 2 mois pour se prononcer → si elle reste inactive, saisine de la Cour dans un nouveau délai de 2 mois. Requérants : États membres et institutions (al. 1), particuliers (al. 3) si un acte leur était destiné. L'institution doit être sanctionnée identiquement qu'elle ait adopté un acte illégal ou illégalement omis d'agir." },
  { ch: "Ch.X", q: "Expliquez le mécanisme du renvoi préjudiciel (art. 267 TFUE) et son importance.", a: "Dialogue de juge à juge : un juge national pose une question à la CJUE sur l'interprétation ou la validité du droit de l'UE. But : assurer l'uniformité d'interprétation et d'application dans tous les États. La Cour interprète, le juge national applique. Faculté de renvoi pour toute juridiction ; obligation pour les juridictions de dernier ressort (sauf acte clair/éclairé — CILFIT). Des milliers d'arrêts préjudiciels (Van Gend & Loos, Costa, Francovich...) constituent le socle de la jurisprudence. Arrêt Foto-Frost : seule la CJUE peut déclarer un acte de l'UE invalide, jamais le juge national." },
  { ch: "Ch.X", q: "Qu'est-ce qu'une « juridiction nationale » au sens de l'art. 267 TFUE ?", a: "Notion autonome du droit de l'UE définie par la jurisprudence de la CJUE. Critères cumulatifs : (1) créée par la loi, (2) permanente, (3) juridiction obligatoire (pas facultative), (4) applique des règles de droit, (5) indépendante, (6) procédure contradictoire. Un tribunal arbitral établi par contrat entre parties n'est pas une juridiction au sens de l'art. 267. Conséquence : seuls les organes remplissant ces critères peuvent saisir la CJUE par voie préjudicielle." },
  { ch: "Ch.X", q: "Décrivez la responsabilité extracontractuelle de l'UE (art. 340 TFUE).", a: "L'Union doit réparer les dommages causés par ses institutions ou agents dans l'exercice de leurs fonctions. Régime défini par les principes généraux communs aux droits des États membres (art. 340 al. 2). Conditions : (1) violation suffisamment caractérisée d'une règle conférant des droits aux particuliers, (2) dommage réel et certain, (3) lien de causalité direct. Prescription : 5 ans à partir de l'apparition du dommage. Le Tribunal est compétent en 1re instance. Le défendeur = l'institution responsable, représentée devant le Tribunal/la Cour." },
  { ch: "Ch.V", q: "Quelle est la valeur juridique de la Charte des droits fondamentaux de l'UE depuis Lisbonne ?", a: "Depuis le Traité de Lisbonne (2009), la Charte des droits fondamentaux a la même valeur juridique que les traités (art. 6§1 TUE), c'est-à-dire force juridique contraignante de droit primaire. Elle s'applique aux institutions de l'UE et aux États membres uniquement lorsqu'ils mettent en œuvre le droit de l'UE (art. 51 Charte). Elle ne crée pas de nouvelles compétences pour l'UE. Protocole n°30 : UK et Pologne avaient obtenu des dérogations (opt-out). La Charte codifie des droits déjà reconnus comme principes généraux par la CJUE." },
  { ch: "Ch.VI", q: "Que sont les clauses passerelles (art. 48§7 TUE) et quel est leur intérêt ?", a: "Les clauses passerelles permettent de modifier les règles de vote ou la procédure législative sans révision formelle des traités. Deux types : (1) passer de l'unanimité à la majorité qualifiée au Conseil, (2) passer d'une procédure législative spéciale à la procédure législative ordinaire. Décidées par le Conseil européen à l'unanimité, après approbation du PE. Garde-fou : chaque parlement national dispose d'un droit de veto (6 mois pour s'y opposer). Intérêt : débloquer des domaines où l'unanimité paralyse la prise de décision, sans la lourdeur d'une révision des traités." },
  { ch: "Ch.II", q: "Qu'entend-on par « critères de Copenhague » ?", a: "Critères définis lors du Conseil européen de Copenhague (1993) pour l'adhésion à l'UE. 3 volets : (1) Critères politiques : institutions stables garantissant la démocratie, l'État de droit, les droits de l'Homme, le respect et la protection des minorités. (2) Critères économiques : économie de marché viable, capacité à faire face à la concurrence et aux forces du marché intérieur. (3) Critère de l'acquis : capacité d'assumer les obligations découlant de l'adhésion (reprendre tout le droit de l'UE existant = l'acquis). L'art. 49 TUE ne dit pas « Copenhague » mais y renvoie implicitement." },
  { ch: "Ch.III", q: "Comment fonctionne la majorité qualifiée au Conseil et pourquoi est-ce important ?", a: "Depuis Lisbonne : double majorité = 55% des États membres (minimum 15 sur 27) représentant au moins 65% de la population de l'UE. Minorité de blocage : au moins 4 États membres représentant plus de 35% de la population. C'est le mode de vote par défaut pour la PLO. Importance : évite qu'un seul État bloque (contrairement à l'unanimité), tout en protégeant les petits États (critère du nombre d'États) et les grands États (critère de population). Compromis de Ioannina : mécanisme permettant de retarder un vote si une minorité proche du seuil de blocage le demande." },
  { ch: "Ch.VII", q: "Un particulier peut-il invoquer une directive non transposée devant un juge national ? Dans quelles conditions ?", a: "Oui, mais uniquement par effet direct vertical (contre l'État, jamais contre un autre particulier). Conditions : (1) le délai de transposition doit être expiré, (2) la directive n'a pas été transposée ou a été mal transposée, (3) les dispositions invoquées sont claires, précises et inconditionnelles. Justification : l'État ne peut pas tirer avantage de sa propre défaillance (estoppel). Le particulier peut invoquer la directive devant tout organe de l'État (administration, juridiction, établissement public). Si l'effet direct n'est pas possible → interprétation conforme ou responsabilité de l'État (Francovich)." },
  { ch: "Ch.VIII", q: "Quelles sont les exceptions à la libre circulation des marchandises prévues par l'art. 36 TFUE ?", a: "L'art. 36 TFUE permet des restrictions justifiées par : l'ordre public, la sécurité publique, la moralité publique, la protection de la santé et de la vie des personnes et des animaux, la préservation des végétaux, la protection des trésors nationaux ayant une valeur artistique/historique/archéologique, la protection de la propriété industrielle et commerciale. Conditions strictes : les restrictions ne peuvent constituer ni un moyen de discrimination arbitraire, ni une restriction déguisée du commerce. Interprétation stricte par la CJUE + test de proportionnalité." },
  { ch: "Ch.X", q: "Quand le juge national est-il obligé de poser une question préjudicielle et quelles sont les exceptions ?", a: "Obligation : les juridictions statuant en dernier ressort (dont les décisions ne sont pas susceptibles de recours) DOIVENT saisir la CJUE lorsqu'une question d'interprétation ou de validité du droit de l'UE est soulevée. Exceptions jurisprudentielles (arrêt CILFIT, 1982) : (1) la question n'est pas pertinente pour la solution du litige, (2) acte éclairé : la CJUE a déjà répondu à la même question, (3) acte clair : l'application correcte du droit de l'UE s'impose avec une telle évidence qu'elle ne laisse place à aucun doute raisonnable. Pour la validité : le juge ne peut JAMAIS déclarer un acte invalide lui-même (Foto-Frost), il doit saisir la CJUE." },
  { ch: "Ch.X", q: "Comment la Commission utilise-t-elle son pouvoir discrétionnaire dans le recours en manquement ?", a: "La Commission n'est pas obligée d'ouvrir une procédure en manquement, même si elle constate une violation. Elle dispose d'un pouvoir discrétionnaire tant dans la phase précontentieuse (décision d'envoyer un avis motivé ou non) que contentieuse (décision de saisir la Cour). Elle peut considérer un manquement moins grave qu'un autre et ne pas poursuivre. Ce pouvoir n'est pas sans limites : la Commission est la gardienne des traités (art. 17 TUE) et doit exercer cette fonction. L'outil EU Pilot permet un dialogue informel avec l'État avant la mise en demeure formelle, ce qui résout environ 80% des cas." },
];

export default function RevisionDroitUE() {
  const [activeChapter, setActiveChapter] = useState(null);
  const [expandedPoints, setExpandedPoints] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [tab, setTab] = useState("fiches");
  const [revealedAnswers, setRevealedAnswers] = useState({});
  const [qFilter, setQFilter] = useState("Tous");

  const togglePoint = (chapterId, pointIdx) => {
    const key = `${chapterId}-${pointIdx}`;
    setExpandedPoints(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const expandAllInChapter = (chapterId) => {
    const chapter = chapters.find(c => c.id === chapterId);
    const newExpanded = { ...expandedPoints };
    const allExpanded = chapter.points.every((_, i) => expandedPoints[`${chapterId}-${i}`]);
    chapter.points.forEach((_, i) => {
      newExpanded[`${chapterId}-${i}`] = !allExpanded;
    });
    setExpandedPoints(newExpanded);
  };

  const toggleAnswer = (idx) => {
    setRevealedAnswers(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  const revealAll = () => {
    const allRevealed = questions.every((_, i) => revealedAnswers[i]);
    const next = {};
    questions.forEach((_, i) => { next[i] = !allRevealed; });
    setRevealedAnswers(next);
  };

  const filteredChapters = searchTerm
    ? chapters.map(ch => ({
        ...ch,
        points: ch.points.filter(
          p =>
            p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            p.content.toLowerCase().includes(searchTerm.toLowerCase())
        )
      })).filter(ch => ch.points.length > 0)
    : chapters;

  const displayChapters = activeChapter !== null
    ? filteredChapters.filter(c => c.id === activeChapter)
    : filteredChapters;

  const qChapters = ["Tous", ...new Set(questions.map(q => q.ch))];
  const filteredQuestions = qFilter === "Tous" ? questions : questions.filter(q => q.ch === qFilter);

  const chColorMap = {};
  chapters.forEach(c => { chColorMap[c.id === 0 ? "Intro" : `Ch.${c.id}`] = c.color; });

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(145deg, #f8fafc 0%, #eef2ff 30%, #faf5ff 60%, #fff7ed 100%)",
      fontFamily: "'Newsreader', 'Georgia', serif",
      padding: "0",
    }}>
      {/* Header */}
      <div style={{
        background: "linear-gradient(135deg, #1e3a5f 0%, #2d5a87 50%, #1e3a5f 100%)",
        padding: "32px 24px 16px",
        borderBottom: "4px solid #c9a84c",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
          background: "radial-gradient(circle at 20% 50%, rgba(201,168,76,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(201,168,76,0.1) 0%, transparent 50%)",
        }} />
        <div style={{ position: "relative", maxWidth: 900, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
            <span style={{ fontSize: 14, color: "#c9a84c", letterSpacing: 3, textTransform: "uppercase", fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>
              UCLouvain · 2025-2026
            </span>
          </div>
          <h1 style={{ fontSize: 32, fontWeight: 700, color: "#ffffff", margin: "0 0 6px", textShadow: "0 2px 8px rgba(0,0,0,0.3)", letterSpacing: -0.5 }}>
            🇪🇺 Droit de l'Union Européenne
          </h1>
          <p style={{ color: "#c9d4e8", margin: "0 0 18px", fontSize: 15, fontFamily: "'Inter', sans-serif" }}>
            F. Dopagne · {chapters.length} chapitres · {chapters.reduce((a, c) => a + c.points.length, 0)} points · {questions.length} questions · {parcoeur.reduce((a, s) => a + s.items.length, 0)} essentiels
          </p>

          {/* Tabs */}
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
            {[["fiches", "📝 Fiches"], ["questions", "🎤 Questions d'oral"], ["parcoeur", "🧠 Par cœur"]].map(([key, label]) => (
              <button key={key} onClick={() => setTab(key)} style={{
                padding: "10px 20px", borderRadius: "12px 12px 0 0", border: "none",
                background: tab === key ? "#ffffff" : "rgba(255,255,255,0.15)",
                color: tab === key ? "#1e3a5f" : "#c9d4e8",
                fontSize: 14, fontWeight: 700, cursor: "pointer",
                fontFamily: "'Inter', sans-serif",
                transition: "all 0.2s",
                borderBottom: tab === key ? "3px solid #c9a84c" : "3px solid transparent",
              }}>
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {tab === "fiches" ? (
        <>
          {/* Search + Navigation */}
          <div style={{ maxWidth: 900, margin: "0 auto", padding: "20px 24px 0" }}>
            <input
              type="text"
              placeholder="🔍  Rechercher un concept, article, arrêt..."
              value={searchTerm}
              onChange={e => { setSearchTerm(e.target.value); setActiveChapter(null); }}
              style={{
                width: "100%", boxSizing: "border-box",
                padding: "14px 18px", fontSize: 15, borderRadius: 12,
                border: "2px solid #e2e8f0", background: "#ffffff",
                outline: "none", fontFamily: "'Inter', sans-serif",
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                transition: "border-color 0.2s",
              }}
              onFocus={e => e.target.style.borderColor = "#6366f1"}
              onBlur={e => e.target.style.borderColor = "#e2e8f0"}
            />
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 16 }}>
              <button onClick={() => setActiveChapter(null)} style={{
                padding: "8px 16px", borderRadius: 20, border: "none",
                background: activeChapter === null ? "#1e3a5f" : "#ffffff",
                color: activeChapter === null ? "#fff" : "#475569",
                fontSize: 13, fontWeight: 600, cursor: "pointer",
                fontFamily: "'Inter', sans-serif", boxShadow: "0 1px 3px rgba(0,0,0,0.08)", transition: "all 0.2s",
              }}>Tous</button>
              {chapters.map(ch => (
                <button key={ch.id} onClick={() => setActiveChapter(activeChapter === ch.id ? null : ch.id)} style={{
                  padding: "8px 14px", borderRadius: 20, border: "none",
                  background: activeChapter === ch.id ? ch.color : "#ffffff",
                  color: activeChapter === ch.id ? "#fff" : "#475569",
                  fontSize: 13, fontWeight: 500, cursor: "pointer",
                  fontFamily: "'Inter', sans-serif", boxShadow: "0 1px 3px rgba(0,0,0,0.08)", transition: "all 0.2s", whiteSpace: "nowrap",
                }}>{ch.icon} {ch.id === 0 ? "Intro" : `Ch.${ch.id}`}</button>
              ))}
            </div>
          </div>

          {/* Chapter cards */}
          <div style={{ maxWidth: 900, margin: "0 auto", padding: "24px 24px 60px" }}>
            {displayChapters.map(chapter => (
              <div key={chapter.id} style={{
                marginBottom: 28, background: "#ffffff", borderRadius: 16,
                boxShadow: "0 4px 24px rgba(0,0,0,0.06), 0 1px 4px rgba(0,0,0,0.04)",
                overflow: "hidden", border: "1px solid #f1f5f9",
              }}>
                <div style={{
                  padding: "20px 24px",
                  background: `linear-gradient(135deg, ${chapter.color}10 0%, ${chapter.color}05 100%)`,
                  borderBottom: `3px solid ${chapter.color}`,
                  display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer",
                }} onClick={() => expandAllInChapter(chapter.id)}>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 700, color: chapter.color, textTransform: "uppercase", letterSpacing: 1.5, fontFamily: "'Inter', sans-serif", marginBottom: 4 }}>
                      {chapter.icon}  {chapter.title}
                    </div>
                    <div style={{ fontSize: 20, fontWeight: 700, color: "#1e293b", lineHeight: 1.3 }}>{chapter.subtitle}</div>
                  </div>
                  <div style={{ background: chapter.color, color: "#fff", borderRadius: 10, padding: "6px 14px", fontSize: 13, fontWeight: 700, fontFamily: "'Inter', sans-serif", whiteSpace: "nowrap" }}>
                    {chapter.points.length} points
                  </div>
                </div>
                <div style={{ padding: "8px 16px 16px" }}>
                  {chapter.points.map((point, idx) => {
                    const key = `${chapter.id}-${idx}`;
                    const isExpanded = expandedPoints[key];
                    return (
                      <div key={idx} onClick={() => togglePoint(chapter.id, idx)} style={{
                        padding: "14px 16px", margin: "6px 0", borderRadius: 12, cursor: "pointer",
                        background: isExpanded ? `${chapter.color}08` : "#fafbfc",
                        border: isExpanded ? `1.5px solid ${chapter.color}30` : "1.5px solid transparent",
                        transition: "all 0.25s ease",
                      }}>
                        <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                          <div style={{
                            width: 28, height: 28, minWidth: 28, borderRadius: 8,
                            background: isExpanded ? chapter.color : "#e2e8f0",
                            color: isExpanded ? "#fff" : "#64748b",
                            display: "flex", alignItems: "center", justifyContent: "center",
                            fontSize: 13, fontWeight: 700, fontFamily: "'Inter', sans-serif", transition: "all 0.25s", marginTop: 1,
                          }}>{idx + 1}</div>
                          <div style={{ flex: 1 }}>
                            <div style={{ fontWeight: 700, fontSize: 15.5, color: "#1e293b", lineHeight: 1.4, fontFamily: "'Inter', sans-serif" }}>
                              {point.title}
                              <span style={{ marginLeft: 8, fontSize: 14, color: "#94a3b8", transition: "transform 0.2s", display: "inline-block", transform: isExpanded ? "rotate(90deg)" : "rotate(0deg)" }}>›</span>
                            </div>
                            {isExpanded && (
                              <div style={{ marginTop: 10, fontSize: 14.5, lineHeight: 1.7, color: "#374151", fontFamily: "'Newsreader', 'Georgia', serif", animation: "fadeIn 0.3s ease", paddingRight: 8 }}>
                                {point.content}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
            {displayChapters.length === 0 && (
              <div style={{ textAlign: "center", padding: 60, color: "#94a3b8", fontSize: 16, fontFamily: "'Inter', sans-serif" }}>
                Aucun résultat pour « {searchTerm} »
              </div>
            )}
          </div>
        </>
      ) : tab === "questions" ? (
        /* QUESTIONS TAB */
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "20px 24px 60px" }}>
          {/* Filter pills + Reveal all */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 20, alignItems: "center" }}>
            {qChapters.map(ch => (
              <button key={ch} onClick={() => setQFilter(ch)} style={{
                padding: "8px 14px", borderRadius: 20, border: "none",
                background: qFilter === ch ? (ch === "Tous" ? "#1e3a5f" : (chColorMap[ch] || "#6366f1")) : "#ffffff",
                color: qFilter === ch ? "#fff" : "#475569",
                fontSize: 13, fontWeight: 600, cursor: "pointer",
                fontFamily: "'Inter', sans-serif", boxShadow: "0 1px 3px rgba(0,0,0,0.08)", transition: "all 0.2s",
              }}>{ch}</button>
            ))}
            <button onClick={revealAll} style={{
              marginLeft: "auto", padding: "8px 16px", borderRadius: 20, border: "2px solid #c9a84c",
              background: "transparent", color: "#c9a84c", fontSize: 13, fontWeight: 700, cursor: "pointer",
              fontFamily: "'Inter', sans-serif", transition: "all 0.2s",
            }}>
              {questions.every((_, i) => revealedAnswers[i]) ? "🙈 Masquer tout" : "👁 Révéler tout"}
            </button>
          </div>

          <div style={{ fontSize: 14, color: "#64748b", fontFamily: "'Inter', sans-serif", marginBottom: 16 }}>
            {filteredQuestions.length} question{filteredQuestions.length > 1 ? "s" : ""} · Cliquez sur « Voir la réponse » pour dévoiler
          </div>

          {filteredQuestions.map((item, idx) => {
            const globalIdx = questions.indexOf(item);
            const isRevealed = revealedAnswers[globalIdx];
            const color = chColorMap[item.ch] || "#6366f1";
            return (
              <div key={globalIdx} style={{
                marginBottom: 16, background: "#ffffff", borderRadius: 16,
                boxShadow: "0 2px 12px rgba(0,0,0,0.05)", overflow: "hidden",
                border: "1px solid #f1f5f9",
              }}>
                <div style={{ padding: "18px 20px" }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                    <div style={{
                      width: 36, height: 36, minWidth: 36, borderRadius: 10,
                      background: `linear-gradient(135deg, ${color}, ${color}cc)`,
                      color: "#fff", display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 15, fontWeight: 800, fontFamily: "'Inter', sans-serif", marginTop: 2,
                    }}>
                      {idx + 1}
                    </div>
                    <div style={{ flex: 1 }}>
                      <span style={{
                        display: "inline-block", padding: "3px 10px", borderRadius: 6,
                        background: `${color}15`, color: color,
                        fontSize: 11, fontWeight: 700, fontFamily: "'Inter', sans-serif",
                        marginBottom: 8, letterSpacing: 0.5,
                      }}>{item.ch}</span>
                      <div style={{
                        fontSize: 16, fontWeight: 700, color: "#1e293b", lineHeight: 1.5,
                        fontFamily: "'Inter', sans-serif",
                      }}>
                        {item.q}
                      </div>

                      {!isRevealed ? (
                        <button onClick={(e) => { e.stopPropagation(); toggleAnswer(globalIdx); }} style={{
                          marginTop: 14, padding: "10px 20px", borderRadius: 10,
                          border: `2px solid ${color}`, background: "transparent",
                          color: color, fontSize: 13, fontWeight: 700, cursor: "pointer",
                          fontFamily: "'Inter', sans-serif", transition: "all 0.2s",
                          display: "flex", alignItems: "center", gap: 6,
                        }}>
                          👁 Voir la réponse
                        </button>
                      ) : (
                        <div style={{
                          marginTop: 14, padding: "16px 18px", borderRadius: 12,
                          background: `linear-gradient(135deg, ${color}08, ${color}04)`,
                          borderLeft: `4px solid ${color}`,
                          animation: "fadeIn 0.35s ease",
                        }}>
                          <div style={{
                            fontSize: 14.5, lineHeight: 1.75, color: "#374151",
                            fontFamily: "'Newsreader', 'Georgia', serif",
                          }}>
                            {item.a}
                          </div>
                          <button onClick={(e) => { e.stopPropagation(); toggleAnswer(globalIdx); }} style={{
                            marginTop: 10, padding: "6px 14px", borderRadius: 8,
                            border: "none", background: "#f1f5f9",
                            color: "#64748b", fontSize: 12, fontWeight: 600, cursor: "pointer",
                            fontFamily: "'Inter', sans-serif",
                          }}>
                            🙈 Masquer
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : tab === "parcoeur" ? (
        /* PAR COEUR TAB */
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "20px 24px 60px" }}>
          <div style={{
            padding: "16px 20px", borderRadius: 14, marginBottom: 24,
            background: "linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)",
            border: "2px solid #f59e0b",
          }}>
            <div style={{ fontSize: 15, fontWeight: 700, color: "#92400e", fontFamily: "'Inter', sans-serif", marginBottom: 4 }}>
              🧠 À connaître par cœur
            </div>
            <div style={{ fontSize: 13.5, color: "#78350f", fontFamily: "'Inter', sans-serif", lineHeight: 1.5 }}>
              Articles de traités, arrêts fondateurs avec dates, chiffres clés, listes de compétences, conditions de recours, seuils de vote... Tout ce que le prof peut te demander de citer précisément à l'oral.
            </div>
          </div>

          {parcoeur.map((section, sIdx) => (
            <div key={sIdx} style={{
              marginBottom: 24, background: "#ffffff", borderRadius: 16,
              boxShadow: "0 4px 24px rgba(0,0,0,0.06)", overflow: "hidden",
              border: "1px solid #f1f5f9",
            }}>
              <div style={{
                padding: "16px 20px",
                background: `linear-gradient(135deg, ${section.color}12 0%, ${section.color}06 100%)`,
                borderBottom: `3px solid ${section.color}`,
                display: "flex", alignItems: "center", gap: 10,
              }}>
                <span style={{ fontSize: 20 }}>{section.icon}</span>
                <div>
                  <div style={{ fontSize: 12, fontWeight: 700, color: section.color, textTransform: "uppercase", letterSpacing: 1.5, fontFamily: "'Inter', sans-serif" }}>{section.ch}</div>
                  <div style={{ fontSize: 17, fontWeight: 700, color: "#1e293b", fontFamily: "'Inter', sans-serif" }}>{section.title}</div>
                </div>
                <div style={{ marginLeft: "auto", background: section.color, color: "#fff", borderRadius: 8, padding: "4px 12px", fontSize: 12, fontWeight: 700, fontFamily: "'Inter', sans-serif" }}>
                  {section.items.length}
                </div>
              </div>
              <div style={{ padding: "10px 16px 16px" }}>
                {section.items.map((item, iIdx) => (
                  <div key={iIdx} style={{
                    padding: "12px 14px", margin: "6px 0", borderRadius: 10,
                    background: "#fafbfc", borderLeft: `4px solid ${section.color}40`,
                  }}>
                    <div style={{
                      fontSize: 13, fontWeight: 800, color: section.color,
                      fontFamily: "'Inter', sans-serif", marginBottom: 5,
                      textTransform: "uppercase", letterSpacing: 0.5,
                    }}>
                      {item.label}
                    </div>
                    <div style={{
                      fontSize: 14, lineHeight: 1.7, color: "#1e293b",
                      fontFamily: "'Newsreader', 'Georgia', serif",
                    }}>
                      {item.text}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : null}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Newsreader:ital,wght@0,400;0,600;0,700;1,400&display=swap');
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-4px); }
          to { opacity: 1; transform: translateY(0); }
        }
        * { box-sizing: border-box; }
        button:hover { filter: brightness(0.95); transform: translateY(-1px); }
      `}</style>
    </div>
  );
}
