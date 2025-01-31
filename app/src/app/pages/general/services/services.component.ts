import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  description: string = '';
  title: string = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Récupérer le paramètre "indice" depuis l'URL
    const indice = this.route.snapshot.paramMap.get('indice');

    // Gérer les textes en fonction de la valeur de "indice"
    switch (indice) {
      case 'interieur':
        this.description = `
        Nous assurons le <strong>nettoyage intérieur</strong> de votre véhicule, que ce soit un <strong>tracteur</strong>, une <strong>voiture</strong>, un <strong>utilitaire</strong>, un <strong>camping-car</strong>, une <strong>moto</strong>, un <strong>camion</strong> ou encore une <strong>voiture ancienne</strong>.
        <br><br>
        <strong>Cleanplus</strong> s'occupe de tout pour que vous retrouviez un véhicule <strong>comme neuf</strong>.
        <br><br>
        Que vous soyez un <strong>particulier</strong> ou un <strong>professionnel</strong>, qu’il s’agisse d’une <strong>flotte de véhicules</strong> ou de votre véhicule personnel, <strong>Cleanplus auto</strong> vous propose des solutions de <strong>nettoyage adaptées</strong>.
        <br><br>
        Restez concentré sur votre activité, pendant que <strong>Cleanplus auto</strong> s'occupe de votre véhicule.
        <br><br>
        Au-delà du nettoyage, nous proposons également des prestations de :
        <br>
        - <strong>Polissage - lustrage</strong>  
        - <strong>Rénovation d’optiques de phares</strong>  
        - <strong>Réparation de tissus et de cuir auto</strong>  
        - <strong>Destickage publicitaire</strong>  
        - <strong>Nettoyage vapeur</strong>  
        - <strong>Traitement protection de carrosserie longue durée</strong>  
    `.trim();
        this.title = "NETTOYAGE INTERIEUR VEHICULE"
        break;
      case 'exterieur':
        this.description = `
        Nous assurons le <strong>nettoyage extérieur</strong> de votre véhicule, que ce soit un <strong>tracteur</strong>, une <strong>voiture</strong>, un <strong>utilitaire</strong>, un <strong>camping-car</strong>, une <strong>moto</strong>, un <strong>camion</strong> ou encore une <strong>voiture ancienne</strong>.
        <br><br>
        <strong>Cleanplus</strong> s'occupe de tout pour que vous retrouviez un véhicule <strong>comme neuf</strong>.
        <br><br>
        Que vous soyez un <strong>particulier</strong> ou un <strong>professionnel</strong>, qu’il s’agisse d’une <strong>flotte de véhicules</strong> ou de votre véhicule personnel, <strong>Cleanplus auto</strong> vous propose des solutions de <strong>nettoyage adaptées</strong>.
        <br><br>
        Restez concentré sur votre activité pendant que <strong>Cleanplus auto</strong> s'occupe de votre véhicule.
        <br><br>
        Au-delà du nettoyage, nous proposons également des prestations de :
        <br>
        - <strong>Polissage - lustrage</strong>  
        - <strong>Rénovation d’optiques de phares</strong>  
        - <strong>Réparation de tissus et de cuir auto</strong>  
        - <strong>Destickage publicitaire</strong>  
        - <strong>Nettoyage vapeur</strong>  
        - <strong>Traitement protection de carrosserie longue durée</strong>  
    `.trim();
            this.title = "NETTOYAGE EXTERIEUR VEHICULE"
        break;
      case 'vapeur':
        this.description = `
        Nous assurons le <strong>nettoyage vapeur</strong> de votre véhicule, aussi bien à l'<strong>intérieur</strong> qu'à l'<strong>extérieur</strong>.
        <br><br>
        Que ce soit un <strong>tracteur</strong>, une <strong>voiture</strong>, un <strong>utilitaire</strong>, un <strong>camping-car</strong>, une <strong>moto</strong>, un <strong>camion</strong> ou encore une <strong>voiture ancienne</strong>, <strong>Cleanplus</strong> s'occupe de tout pour que vous retrouviez un véhicule <strong>comme neuf</strong>.
        <br><br>
        Que vous soyez un <strong>particulier</strong> ou un <strong>professionnel</strong>, qu’il s’agisse d’une <strong>flotte de véhicules</strong> ou de votre véhicule personnel, <strong>Cleanplus auto</strong> vous propose des solutions de <strong>nettoyage adaptées</strong>.
        <br><br>
        Restez concentré sur votre activité pendant que <strong>Cleanplus auto</strong> s'occupe de votre véhicule.
        <br><br>
        Au-delà du nettoyage, nous proposons également des prestations de :
        <br>
        - <strong>Polissage - lustrage</strong>  
        - <strong>Rénovation d’optiques de phares</strong>  
        - <strong>Réparation de tissus et de cuir auto</strong>  
        - <strong>Destickage publicitaire</strong>  
        - <strong>Nettoyage vapeur</strong>  
        - <strong>Traitement protection de carrosserie longue durée</strong>  
    `.trim();
            this.title = "NETTOYAGE VAPEUR"
        break;
      case 'phares':
        this.description = `
        Nous assurons la <strong>rénovation de vos optiques de phares</strong>, qui, avec le temps, sous l'effet des <strong>U.V</strong> et des <strong>micro-rayures de lavage</strong>, se ternissent et perdent en efficacité en blanchissant ou en jaunissant.
        <br><br>
        L'<strong>opacité des feux</strong> est un motif de <strong>contre-visite au contrôle technique</strong>.
        <br><br>
        Comme <strong>voir et être vu</strong> reste essentiel, <strong>Cleanplus</strong> propose une <strong>rénovation des optiques de phares</strong> pour <strong>tous types de véhicules</strong>.
        <br><br>
        Que vous soyez un <strong>particulier</strong> ou un <strong>professionnel</strong>, nous apportons le plus grand soin à nos prestations.
        <br><br>
        <strong>Cleanplus auto</strong> est basé dans les <strong>Côtes d'Armor (22)</strong> et est spécialisé dans le <strong>nettoyage automobile</strong> ainsi que dans le <strong>nettoyage de matériel agricole</strong>.
    `.trim();
            this.title = "RENOVATION OPTIQUE DE PHARES"
        break;
      case 'tissus':
        this.description = `
        Nous assurons la <strong>rénovation des tissus</strong> de votre habitacle, tant que les dégâts restent réparables.
        <br><br>
        Pour éviter qu'un petit trou ne s'étende et vous oblige à changer tout le siège, <strong>Cleanplus</strong> vous propose une <strong>remise à neuf</strong> et vous assure un résultat parfait avec une <strong>couleur la plus proche possible</strong>.
        <br><br>
        Nous travaillons nos réparations avec une <strong>colorimétrie</strong> avancée pour vous garantir un résultat <strong>comme neuf</strong>.
        <br><br>
        Que ce soit un <strong>tracteur</strong>, une <strong>voiture</strong>, un <strong>camping-car</strong>, une <strong>moto</strong>, un <strong>camion</strong>, une <strong>voiture ancienne</strong> ou même un <strong>petit bolide</strong>, nous prenons soin de chaque véhicule avec la plus grande attention.
        <br><br>
        Que vous soyez un <strong>particulier</strong> ou un <strong>professionnel</strong>, nous mettons un point d'honneur à assurer des prestations de qualité.
        <br><br>
        <strong>Cleanplus</strong> s'occupe de votre véhicule et, au-delà des réparations de tissus, nous vous proposons également :
        <br>
        - <strong>Polissage - lustrage</strong>  
        - <strong>Rénovation d’optiques de phares</strong>  
        - <strong>Destickage publicitaire</strong>  
        - <strong>Nettoyage vapeur</strong>  
        - <strong>Traitement protection de carrosserie longue durée</strong>  
    `.trim();
            this.title = "Rénovation des tissus"
        break;
      case 'pub':
        this.description = `
        Nous assurons le <strong>destickage publicitaire</strong>, du simple <strong>lettrage autocollant</strong> au <strong>total covering</strong>.
        <br><br>
        Vous souhaitez <strong>remplacer votre publicité</strong> suite à un changement de charte graphique ? <strong>Cleanplus</strong> se déplace sur site pour retirer votre ancienne publicité.
        <br><br>
        Vous retrouverez une carrosserie <strong>comme neuve</strong>.
        <br><br>
        Vous souhaitez vendre votre véhicule ou votre <strong>crédit-bail</strong> / <strong>LLD</strong> arrive à son terme et vous devez retirer votre stickage publicitaire ?  
        <strong>Cleanplus</strong> se déplace sur site, contactez-nous pour convenir d'un rendez-vous.
        <br><br>
        <strong>Pensez au polissage - lustrage</strong> qui redonnera un <strong>aspect neuf</strong> à votre carrosserie...
        <br><br>
        <strong>Cleanplus auto</strong> est basé dans les <strong>Côtes d'Armor (22)</strong> et est spécialisé dans le <strong>nettoyage automobile</strong> ainsi que dans le <strong>nettoyage de matériel agricole</strong>.
        <br><br>
        Fort d'une solide <strong>expérience</strong> et d'un <strong>savoir-faire reconnu</strong> depuis de nombreuses années, nous assurons une <strong>prestation de qualité</strong> effectuée avec du <strong>matériel professionnel</strong> pour effacer toutes traces après avoir retiré vos anciens <strong>stickers, autocollants ou total covering</strong>.
    `.trim();
            this.title = "Destockage publicitaire"
        break;
      case 'lustrage':
        this.description = `
            Vous voulez remettre votre véhicule à neuf, Cleanplus auto vous propose un service de <strong>polissage - lustrage de carrosserie</strong> qui :
            <br><br>
            <ul>
                <li>Élimine les <strong>micro-rayures</strong></li>
                <li>Assure une <strong>protection déperlante</strong> de plus d’un an</li>
            </ul>
            <br>
            <strong>La décontamination ou dépollution carrosserie :</strong>
            <br><br>
            <ul>
                <li><strong>Dépollution</strong> de votre carrosserie</li>
                <li>Élimine <strong>99% de la pollution</strong> sur la carrosserie</li>
                <li>Assure une <strong>bonne tenue</strong> du lustrage dans le temps</li>
            </ul>
            <br>
            <strong>Le polissage :</strong>
            <br><br>
            <ul>
                <li>Équivalent à une <strong>remise à neuf</strong> de votre carrosserie</li>
                <li>Élimine <strong>99% des micro-rayures</strong> du véhicule</li>
                <li>Assure une <strong>vraie tenue</strong> dans le temps</li>
                <li>Assure une <strong>protection déperlante</strong> de plus d'un an</li>
            </ul>
            <br>
            <strong>Le lustrage :</strong>
            <br><br>
            <ul>
                <li>Redonne tout le <strong>brillant</strong> à votre carrosserie</li>
                <li>Assure une <strong>protection contre la rouille</strong></li>
                <li>Assure un <strong>aspect neuf longue durée</strong></li>
            </ul>
            <br>
            <strong>Cleanplus auto</strong> est basé dans les <strong>Côtes d'Armor (22)</strong> et est spécialisé dans le nettoyage automobile ainsi que le nettoyage de matériel agricole. 
            <br><br>
            Fort d'une solide <strong>expérience</strong> et d'un <strong>savoir-faire reconnu</strong> depuis de nombreuses années, nous assurons une <strong>prestation de qualité</strong> effectuée avec du <strong>matériel professionnel</strong> pour redonner à votre carrosserie tout l'éclat du neuf.
        `.trim();
        this.title = "Polissage et lustrage"
        break;
      case 'ceramique':
        this.description = `
          <strong>Cleanplus</strong> vous propose un service de <strong>protection longue durée</strong> pour votre carrosserie avec le traitement <strong>Ceramic Guard</strong>. 
          <br><br>
          Avec ce <strong>produit révolutionnaire</strong>, il est désormais possible d'appliquer en une seule étape un <strong>revêtement protecteur</strong> très lisse, brillant et durable.
          <br><br>
          <strong>Ceramic Guard</strong> est un <strong>revêtement nano-céramique</strong> qui :
          <ul>
              <li><strong>Renforce</strong> et <strong>augmente la dureté</strong> de la laque</li>
              <li>Améliore considérablement la <strong>résistance aux rayures</strong> et à la fragilité</li>
              <li>Apporte une <strong>brillance et une couleur plus profonde</strong></li>
              <li>Offre un <strong>effet "facile à nettoyer"</strong> et une <strong>forte couche hydrofuge</strong></li>
          </ul>
          <br>
          Une fois qu'un véhicule a été traité avec <strong>Cartec Ceramic Guard</strong>, il bénéficie de :
          <ul>
              <li>Une <strong>surface anti-insectes</strong> (les insectes ne collent plus)</li>
              <li>Une <strong>protection contre la saleté, les sels et les rayons UV</strong></li>
              <li>Une <strong>résistance aux produits chimiques agressifs</strong> et aux <strong>pluies acides</strong></li>
              <li>Une <strong>conservation du brillant</strong> et de l'éclat de la peinture</li>
          </ul>
          <br>
          <strong>Ceramic Guard doit être appliqué par un spécialiste.</strong>
          <br><br>
          <strong>Les avantages de Ceramic Guard :</strong>
          <ul>
              <li><strong>Brillance</strong> et couleur plus profonde</li>
              <li><strong>Effet "facile à nettoyer"</strong></li>
              <li><strong>Protection longue durée</strong></li>
              <li><strong>Garantie 3 ans</strong></li>
          </ul>
          <br>
          <strong>Cleanplus auto</strong> est basé dans les <strong>Côtes d'Armor (22)</strong> et est spécialisé dans le <strong>nettoyage automobile</strong> ainsi que dans le <strong>nettoyage de matériel agricole</strong>. 
          <br><br>
          Fort d'une solide <strong>expérience</strong> et d'un <strong>savoir-faire reconnu</strong> depuis de nombreuses années, nous assurons une <strong>prestation de qualité</strong> effectuée avec du <strong>matériel professionnel</strong> pour redonner à votre carrosserie tout l'éclat du neuf.
      `.trim();

        this.title = "TRAITEMENT CERAMIQUE CARROSSERIE"
        break;
      case 'habitacle':
        this.title = "Traitement bactéricide habitacle"
        this.description = `
    Votre habitacle ne sent pas le <strong>frais</strong> malgré vos efforts de nettoyage ? 
    <br>
    Vous voulez <strong>enlever les odeurs de tabac</strong> ? 
    <br><br>
    Nous assurons le <strong>nettoyage bactéricide</strong> de votre habitacle contre les <strong>mauvaises odeurs</strong>.
    <br><br>
    <strong>Que vous possédiez :</strong>
    <ul>
        <li>Un <strong>tracteur</strong></li>
        <li>Une <strong>voiture</strong></li>
        <li>Un <strong>camping-car</strong></li>
        <li>Une <strong>moto</strong></li>
        <li>Un <strong>camion</strong></li>
        <li>Une <strong>voiture ancienne</strong></li>
    </ul>
    <br>
    <strong>Que vous soyez :</strong>
    <ul>
        <li><strong>Particulier</strong></li>
        <li><strong>Professionnel</strong></li>
    </ul>
    <br>
    Nous apportons le plus grand soin à nos prestations.
    <br><br>
    <strong>Cleanplus auto</strong> est basé dans les <strong>Côtes d'Armor (22)</strong> et est spécialisé dans le <strong>nettoyage automobile</strong> ainsi que le <strong>nettoyage de matériel agricole</strong>.
    <br><br>
    <strong>Vous voulez des informations complémentaires ou prendre un rendez-vous ?</strong>
    <br>
    <strong>Contactez-nous !</strong>
`.trim();
        break;
    case 'agricole-peinture':
      this.title = "NETTOYAGE LUSTRAGE TRACTEUR"
      this.description = `
    Votre matériel a fait la saison et vous voulez lui redonner un <strong>coup de propre</strong> ? 
    <br>
    Vous souhaitez <strong>enlever la boue</strong>, la <strong>poussière</strong> de votre habitacle, nettoyer vos <strong>commandes</strong> et votre <strong>tableau de bord</strong> ?
    <br><br>
    Nous assurons le <strong>nettoyage intérieur</strong> des cabines de :
    <ul>
        <li><strong>Tracteurs</strong></li>
        <li><strong>Moissonneuses-batteuses</strong></li>
        <li><strong>Ensileuses</strong></li>
        <li>Et bien plus encore...</li>
    </ul>
    <br>
    Nous assurons également <strong>l'entretien des carrosseries</strong>.  
    <br>
    <strong>Cleanplus auto</strong> vous propose un service de <strong>polissage - lustrage</strong> de carrosserie qui :
    <ul>
        <li>Élimine les <strong>micro-rayures</strong></li>
        <li>Assure une <strong>protection déperlante</strong> de plus d’un an</li>
        <li>Permet de conserver un <strong>état neuf</strong> de votre carrosserie</li>
    </ul>
    <br>
    <strong>Le polissage :</strong>
    <ul>
        <li>Équivalent à une <strong>remise à neuf</strong> de votre carrosserie</li>
        <li>Élimine <strong>99% des micro-rayures</strong> du véhicule</li>
        <li>Assure une <strong>vraie tenue</strong> dans le temps</li>
        <li>Assure une <strong>protection déperlante</strong> de plus d'un an</li>
    </ul>
    <br>
    <strong>Le lustrage :</strong>
    <ul>
        <li>Redonne tout le <strong>brillant</strong> à votre carrosserie</li>
        <li>Assure une <strong>protection contre la rouille</strong></li>
        <li>Assure un <strong>aspect neuf longue durée</strong></li>
    </ul>
    <br>
    <strong>Cleanplus auto</strong> est basé dans les <strong>Côtes d'Armor (22)</strong> et est spécialisé dans le <strong>nettoyage et l'entretien</strong> de vos machines agricoles.
    <br><br>
    Fort d'une solide <strong>expérience</strong> et d'un <strong>savoir-faire reconnu</strong> depuis de nombreuses années, nous assurons une <strong>prestation de qualité</strong> effectuée avec du <strong>matériel professionnel</strong> pour redonner à votre matériel agricole tout l'éclat du neuf.
`.trim();
      break;
    case 'agricole-ensileuse':
      this.title = "NETTOYAGE LUSTRAGE ENSILEUSE"
      this.description = `
    <strong>Cleanplus auto</strong> vous propose le <strong>nettoyage des extérieurs</strong>, mais aussi des <strong>cabines de tracteurs</strong>, moissonneuses et ensileuses. 
    <br>
    Nous réalisons également le <strong>polissage et le lustrage</strong> des carrosseries de vos machines agricoles.
    <br><br>
    Votre matériel a fait la saison et vous voulez lui redonner un <strong>coup de propre</strong> ?  
    <br>
    Vous souhaitez <strong>enlever la boue</strong>, la <strong>poussière</strong> de votre habitacle, nettoyer vos <strong>commandes</strong> et votre <strong>tableau de bord</strong> ?
    <br><br>
    Nous assurons le <strong>nettoyage intérieur</strong> des cabines de :
    <ul>
        <li><strong>Tracteurs</strong></li>
        <li><strong>Moissonneuses-batteuses</strong></li>
        <li><strong>Ensileuses</strong></li>
        <li>Et bien plus encore...</li>
    </ul>
    <br>
    Nous assurons également <strong>l'entretien des carrosseries</strong>.  
    <br>
    <strong>Cleanplus auto</strong> vous propose un service de <strong>polissage - lustrage</strong> de carrosserie qui :
    <ul>
        <li>Élimine les <strong>micro-rayures</strong></li>
        <li>Assure une <strong>protection déperlante</strong> de plus d’un an</li>
        <li>Permet de conserver un <strong>état neuf</strong> de votre carrosserie</li>
    </ul>
    <br>
    <strong>Le polissage :</strong>
    <ul>
        <li>Équivalent à une <strong>remise à neuf</strong> de votre carrosserie</li>
        <li>Élimine <strong>99% des micro-rayures</strong> du véhicule</li>
        <li>Assure une <strong>vraie tenue</strong> dans le temps</li>
        <li>Assure une <strong>protection déperlante</strong> de plus d'un an</li>
    </ul>
    <br>
    <strong>Le lustrage :</strong>
    <ul>
        <li>Redonne tout le <strong>brillant</strong> à votre carrosserie</li>
        <li>Assure une <strong>protection contre la rouille</strong></li>
        <li>Assure un <strong>aspect neuf longue durée</strong></li>
    </ul>
    <br>
    <strong>Cleanplus auto</strong> est basé dans les <strong>Côtes d'Armor (22)</strong> et est spécialisé dans le <strong>nettoyage et l'entretien</strong> de vos machines agricoles.
    <br><br>
    Fort d'une solide <strong>expérience</strong> et d'un <strong>savoir-faire reconnu</strong> depuis de nombreuses années, nous assurons une <strong>prestation de qualité</strong> effectuée avec du <strong>matériel professionnel</strong> pour redonner à votre matériel agricole tout l'éclat du neuf.
`.trim();
break;
case 'agricole-moissonneuse':
  this.title = "NETTOYAGE LUSTRAGE MOISSONNEUSE"
  this.description = `
    Votre matériel a fait la saison et vous voulez lui redonner un <strong>coup de propre</strong> ?  
    <br>
    Vous souhaitez <strong>enlever la boue</strong>, la <strong>poussière</strong> de votre habitacle, nettoyer vos <strong>commandes</strong> et votre <strong>tableau de bord</strong> ?
    <br><br>
    Nous assurons le <strong>nettoyage intérieur</strong> des cabines de :
    <ul>
        <li><strong>Tracteurs</strong></li>
        <li><strong>Moissonneuses-batteuses</strong></li>
        <li><strong>Ensileuses</strong></li>
        <li>Et bien plus encore...</li>
    </ul>
    <br>
    Nous assurons également <strong>l'entretien des carrosseries</strong>.  
    <br>
    <strong>Cleanplus auto</strong> vous propose un service de <strong>polissage - lustrage</strong> de carrosserie qui :
    <ul>
        <li>Élimine les <strong>micro-rayures</strong></li>
        <li>Assure une <strong>protection déperlante</strong> de plus d’un an</li>
        <li>Permet de conserver un <strong>état neuf</strong> de votre carrosserie</li>
    </ul>
    <br>
    <strong>Le polissage :</strong>
    <ul>
        <li>Équivalent à une <strong>remise à neuf</strong> de votre carrosserie</li>
        <li>Élimine <strong>99% des micro-rayures</strong> du véhicule</li>
        <li>Assure une <strong>vraie tenue</strong> dans le temps</li>
        <li>Assure une <strong>protection déperlante</strong> de plus d'un an</li>
    </ul>
    <br>
    <strong>Le lustrage :</strong>
    <ul>
        <li>Redonne tout le <strong>brillant</strong> à votre carrosserie</li>
        <li>Assure une <strong>protection contre la rouille</strong></li>
        <li>Assure un <strong>aspect neuf longue durée</strong></li>
    </ul>
    <br>
    <strong>Cleanplus auto</strong> est basé dans les <strong>Côtes d'Armor (22)</strong> et est spécialisé dans le <strong>nettoyage et l'entretien</strong> de vos machines agricoles.
    <br><br>
    Fort d'une solide <strong>expérience</strong> et d'un <strong>savoir-faire reconnu</strong> depuis de nombreuses années, nous assurons une <strong>prestation de qualité</strong> effectuée avec du <strong>matériel professionnel</strong> pour redonner à votre matériel agricole tout l'éclat du neuf.
`.trim();
      break;
      case 'agricole-chassis':
        this.title = "RENOVATION TRACTEUR CHASSIS"
        this.description = `
    Votre matériel a fait la saison et vous voulez lui redonner un <strong>coup de propre</strong> ?  
    <br>
    Vous souhaitez <strong>enlever la boue</strong>, la <strong>poussière</strong> de votre habitacle, nettoyer vos <strong>commandes</strong> et votre <strong>tableau de bord</strong> ?
    <br><br>
    Nous assurons le <strong>nettoyage intérieur</strong> des cabines de :
    <ul>
        <li><strong>Tracteurs</strong></li>
        <li><strong>Moissonneuses-batteuses</strong></li>
        <li><strong>Ensileuses</strong></li>
        <li>Et bien plus encore...</li>
    </ul>
    <br>
    Nous assurons également la <strong>rénovation complète des engins agricoles</strong>.  
    <br>
    <strong>Cleanplus auto</strong> vous propose un service de <strong>rénovation</strong> pour retrouver un matériel comme neuf.
    <br><br>
    <strong>Rénovation intérieure :</strong>
    <ul>
        <li>Équivalent à une <strong>remise à neuf</strong> de votre cabine</li>
        <li><strong>Nettoyage en profondeur</strong> de l'habitacle</li>
        <li><strong>Rénovation des sièges</strong></li>
        <li>Assure une <strong>protection optimale</strong></li>
    </ul>
    <br>
    <strong>Rénovation carrosserie :</strong>
    <ul>
        <li><strong>Élimination de la rouille</strong> et reprise carrosserie</li>
        <li>Assure une <strong>vraie tenue</strong> dans le temps</li>
        <li>Assure une <strong>protection optimale</strong></li>
    </ul>
    <br>
    <strong>Peinture châssis - jantes - etc. :</strong>
    <ul>
        <li>Équivalent à une <strong>remise à neuf</strong> des éléments</li>
        <li>Assure une <strong>protection contre la rouille</strong></li>
        <li>Assure un <strong>aspect neuf longue durée</strong></li>
    </ul>
    <br>
    <strong>Polissage - lustrage :</strong>
    <ul>
        <li>Élimine <strong>99% des micro-rayures</strong></li>
        <li>Assure une <strong>vraie tenue</strong> dans le temps</li>
        <li>Assure une <strong>protection contre la rouille</strong></li>
        <li>Assure un <strong>aspect neuf longue durée</strong></li>
    </ul>
    <br>
    <strong>Cleanplus auto</strong> est basé dans les <strong>Côtes d'Armor (22)</strong> et est spécialisé dans le <strong>nettoyage et l'entretien</strong> de vos machines agricoles.
    <br><br>
    Fort d'une solide <strong>expérience</strong> et d'un <strong>savoir-faire reconnu</strong> depuis de nombreuses années, nous assurons une <strong>prestation de qualité</strong> effectuée avec du <strong>matériel professionnel</strong> pour redonner à votre matériel agricole tout l'éclat du neuf.
`.trim();
        break;
        case 'agricole-jantes':
          this.title = "RENOVATION TRACTEUR JANTES"
          this.description = `
    Votre matériel a fait la saison et vous voulez lui redonner un <strong>coup de propre</strong> ?  
    <br>
    Vous souhaitez <strong>enlever la boue</strong>, la <strong>poussière</strong> de votre habitacle, nettoyer vos <strong>commandes</strong> et votre <strong>tableau de bord</strong> ?
    <br><br>
    Nous assurons le <strong>nettoyage intérieur</strong> des cabines de :
    <ul>
        <li><strong>Tracteurs</strong></li>
        <li><strong>Moissonneuses-batteuses</strong></li>
        <li><strong>Ensileuses</strong></li>
        <li>Et bien plus encore...</li>
    </ul>
    <br>
    Nous assurons également la <strong>rénovation complète</strong> de vos engins agricoles.  
    <br>
    <strong>Cleanplus auto</strong> vous propose un service de <strong>rénovation</strong> pour retrouver un matériel comme neuf.
    <br><br>
    <strong>Rénovation intérieure :</strong>
    <ul>
        <li>Équivalent à une <strong>remise à neuf</strong> de votre cabine</li>
        <li><strong>Nettoyage en profondeur</strong> de l'habitacle</li>
        <li><strong>Rénovation des sièges</strong></li>
        <li>Assure une <strong>protection optimale</strong></li>
    </ul>
    <br>
    <strong>Rénovation carrosserie :</strong>
    <ul>
        <li><strong>Élimination de la rouille</strong> et reprise carrosserie</li>
        <li>Assure une <strong>vraie tenue</strong> dans le temps</li>
        <li>Assure une <strong>protection optimale</strong></li>
    </ul>
    <br>
    <strong>Peinture châssis - jantes - etc. :</strong>
    <ul>
        <li>Équivalent à une <strong>remise à neuf</strong> des éléments</li>
        <li>Assure une <strong>protection contre la rouille</strong></li>
        <li>Assure un <strong>aspect neuf longue durée</strong></li>
    </ul>
    <br>
    <strong>Polissage - lustrage :</strong>
    <ul>
        <li>Élimine <strong>99% des micro-rayures</strong></li>
        <li>Assure une <strong>vraie tenue</strong> dans le temps</li>
        <li>Assure une <strong>protection contre la rouille</strong></li>
        <li>Assure un <strong>aspect neuf longue durée</strong></li>
    </ul>
    <br>
    <strong>Cleanplus auto</strong> est basé dans les <strong>Côtes d'Armor (22)</strong> et est spécialisé dans le <strong>nettoyage et l'entretien</strong> de vos machines agricoles.
    <br><br>
    Fort d'une solide <strong>expérience</strong> et d'un <strong>savoir-faire reconnu</strong> depuis de nombreuses années, nous assurons une <strong>prestation de qualité</strong> effectuée avec du <strong>matériel professionnel</strong> pour redonner à votre matériel agricole tout l'éclat du neuf.
`.trim();
      break;
      default:
        this.description = "Nous assurons la rénovation de vos optiques de phares qui avec le temps, sous l'effet des U.V, des micros rayures de lavage, se ternissent et perdent en efficacité en blanchissant ou en jaunissant. L'opacité des feux est un motif de contre visite au contrôle technique. Comme voir et être vu reste essentiel, Cleanplus propose une rénovation des optiques des phares pour tous types de véhicules. Que vous soyez un particulier ou un professionnel nous apportons le plus grand soin à nos prestations. Cleanplus auto est basé dans les Côtes d'Armor (22) et est spécialisé dans le nettoyage automobile ainsi que le nettoyage de matériel agricole."
        this.title = "RENOVATION OPTIQUE DE PHARES"
        break;
    }
  }
}
