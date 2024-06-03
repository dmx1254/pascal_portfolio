import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const SheetBookContent = ({ title }: { title: string }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <span className="font-semibold cursor-pointer text-xs ml-1 underline">
          {title}
        </span>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="z-[1100] border-none w-full max-w-2xl h-full overflow-y-scroll px-2"
        style={{
          background: "rgb(4,7,29)",
          backgroundColor:
            "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
        }}
      >
        <section
          id="ebook"
          className="flex flex-col items-center gap-6 md:gap-10 text-gray-900 py-4 p-0 w-full rounded z-50"
        >
          <div className="py-6 rounded">
            <div className="container mx-auto flex flex-col items-start gap-10">
              {
                <div className="w-full flex justify-center">
                  <div className="relative w-full h-full">
                    <img
                      src="/pascal/ebook.jpeg"
                      alt="Couverture du livre de Pascal"
                      className="rounded-lg shadow-lg w-full h-full max-h-[700px] object-cover object-center"
                    />
                  </div>
                </div>
              }
              <div className="w-full text-white/85 h-full -mt-2">
                {/* <h3 className="text-xl font-bold mb-4">
              La route vers la richesse
            </h3> */}
                <p className="text-sm leading-relaxed mb-4">
                  Découvrez le livre{" "}
                  <span className="font-bold">
                    &ldquo;La route vers la richesse&ldquo;
                  </span>{" "}
                  par Pascal Cesar, une lecture incontournable pour
                  quiconque souhaite atteindre le succès financier.
                </p>
                <span className="text-base font-bold">Introduction</span>
                <br />
                <p className="text-sm">
                  La richesse est souvent associée à une vie luxueuse, avec des
                  biens matériels abondants et une multitude
                  d&apos;opportunités. Cependant, il existe une perspective
                  alternative sur la richesse qui peut sembler paradoxale : être
                  riche, c&apos;est avoir la vie d&apos;un pauvre, mais avec
                  plus de sécurité. Cette idée sous-entend que la richesse ne se
                  résume pas seulement à accumuler des possessions, mais plutôt
                  à jouir d&apos;une tranquillité d&apos;esprit et d&apos;une
                  stabilité financière. Dans cet article, nous explorerons cette
                  notion intrigante et examinerons comment la sécurité peut être
                  une composante essentielle de la richesse véritable.
                </p>
                <br />
                <p className="font-semibold text-sm">
                  La recherche du bonheur au-delà de la richesse matérielle :
                </p>
                <p className="text-sm mt-1">
                  Trop souvent, la richesse est considérée comme un moyen
                  d&apos;acquérir des biens matériels et de vivre une vie
                  somptueuse. Cependant, de nombreuses personnes fortunées se
                  retrouvent piégées dans un cycle de consommation sans fin,
                  cherchant toujours plus sans jamais atteindre la satisfaction.
                  Au contraire, certaines personnes ayant une situation
                  financière modeste semblent trouver une certaine forme de
                  bonheur en se contentant de peu et en valorisant les relations
                  humaines, la santé et la liberté.
                </p>
                <br />
                <div className="flex flex-col items-start">
                  <p className="text-sm">
                    Dans notre société axée sur la consommation, la richesse
                    matérielle est souvent considérée comme le principal
                    indicateur de succès et de bonheur. Cependant, de nombreuses
                    personnes réalisent que la quête incessante de biens
                    matériels ne mène pas nécessairement à la satisfaction et au
                    bonheur véritable. Au-delà de la richesse matérielle, il
                    existe une recherche du bonheur qui se concentre sur des
                    aspects plus profonds et significatifs de la vie.
                  </p>
                  <br />
                  <p className="text-sm">
                    La richesse matérielle peut apporter un certain confort et
                    des possibilités, mais elle ne garantit pas le bonheur. Les
                    études montrent que les gains financiers au-delà d&apos;un
                    certain seuil n&apos;ont qu&apos;un impact limité sur le
                    bien-être émotionnel. Une fois que nos besoins de base sont
                    satisfaits, l&apos;argent supplémentaire a moins
                    d&apos;influence sur notre bonheur global. Cela suggère que
                    d&apos;autres facteurs jouent un rôle clé dans notre quête
                    du bonheur.
                  </p>
                  <br />
                  <p className="text-sm">
                    Alors, que recherchons-nous réellement au-delà de la
                    richesse matérielle ? Plusieurs aspects se révèlent
                    essentiels :
                  </p>
                  <br />
                  <ol className="list-decimal list-inside text-left text-sm space-y-2">
                    <li className="mb-2">
                      <span className="font-semibold">
                        Relations et connexions sociales :
                      </span>{" "}
                      Les liens affectifs et les relations interpersonnelles
                      sont des sources profondes de bonheur. Des études ont
                      montré que les personnes qui entretiennent des relations
                      sociales solides et nourrissantes sont plus satisfaites de
                      leur vie. Cultiver des amitiés sincères, entretenir des
                      liens familiaux positifs et contribuer à sa communauté
                      sont des éléments clés pour trouver le bonheur au-delà des
                      biens matériels.
                    </li>
                    <li className="mb-2">
                      <span className="font-semibold">
                        Épanouissement personnel :
                      </span>{" "}
                      La poursuite de nos passions, de nos intérêts et de nos
                      talents personnels est essentielle pour trouver un sens et
                      une satisfaction profonde dans la vie. Investir du temps
                      et de l&apos;énergie dans des activités qui nous apportent
                      de la joie, de l&apos;épanouissement et un sentiment
                      d&apos;accomplissement peut être bien plus gratifiant que
                      l&apos;acquisition de biens matériels.
                    </li>
                    <li className="mb-2">
                      <span className="font-semibold">
                        Santé et bien-être :
                      </span>{" "}
                      La richesse véritable inclut également la santé physique
                      et mentale. Prendre soin de soi, adopter un mode de vie
                      sain, faire de l&apos;exercice régulièrement et prendre le
                      temps de se détendre et de se ressourcer sont des éléments
                      essentiels pour être heureux. Avoir une bonne santé nous
                      permet de profiter pleinement de la vie et de faire face
                      aux défis avec résilience.
                    </li>
                    <li>
                      <span className="font-semibold">
                        Contribution et altruisme :
                      </span>{" "}
                      Lorsque nous nous concentrons sur le bien-être des autres
                      et que nous nous engageons dans des actions altruistes,
                      cela peut nous apporter une profonde satisfaction et un
                      sentiment de connexion avec quelque chose de plus grand
                      que nous-mêmes. Faire preuve de générosité, aider les
                      autres et contribuer positivement à la société peut donner
                      un sens plus profond à notre existence.
                    </li>
                  </ol>
                  <br />
                  <p className="text-sm">
                    La richesse matérielle n&apos;est qu&apos;un aspect limité
                    de la recherche du bonheur. Au-delà des biens matériels,
                    nous cherchons des relations significatives,
                    l&apos;épanouissement personnel, la santé et le bien-être,
                    ainsi que la possibilité de contribuer au bien-être des
                    autres. En élargissant notre vision du bonheur, nous pouvons
                    trouver une richesse plus durable et épanouissante dans
                    notre vie quotidienne.
                  </p>
                  <br />
                  <p className="font-semibold text-sm">
                    La sécurité financière comme pilier de la tranquillité
                    d&apos;esprit :
                  </p>
                  <p className="text-sm mt-1">
                    Une vie de pauvreté est souvent caractérisée par
                    l&apos;incertitude, la précarité et le stress financier
                    constant. La sécurité financière est donc un atout précieux
                    pour quiconque aspire à mener une vie épanouie. Elle permet
                    de se libérer des soucis incessants liés aux besoins de base
                    et offre une base solide pour envisager l&apos;avenir avec
                    confiance. Avoir la tranquillité d&apos;esprit de savoir que
                    ses besoins essentiels sont satisfaits permet de se
                    concentrer sur d&apos;autres aspects de la vie, tels que
                    l&apos;épanouissement personnel, la famille, les passions et
                    la réalisation de ses objectifs.
                  </p>
                  <br />
                  <p className="text-sm">
                    La sécurité financière joue un rôle essentiel dans notre
                    bien-être émotionnel et notre tranquillité d&apos;esprit.
                    Lorsque nous nous sentons en sécurité sur le plan financier,
                    nous sommes en mesure de faire face aux défis de la vie avec
                    plus de sérénité et de confiance. Voici comment la sécurité
                    financière peut devenir un pilier important de notre
                    bien-être mental et émotionnel.
                  </p>
                  <br />
                  <ol className="list-decimal list-inside text-left text-sm space-y-2">
                    <li className="mb-2">
                      <span className="font-semibold">
                        Réduction du stress :
                      </span>{" "}
                      Les problèmes financiers sont l&apos;une des principales
                      sources de stress dans la vie quotidienne. Les factures
                      impayées, les dettes ou l&apos;incapacité à subvenir à nos
                      besoins essentiels peuvent entraîner une anxiété
                      constante. En ayant une sécurité financière, nous
                      réduisons le stress lié à ces préoccupations et pouvons
                      nous concentrer sur d&apos;autres aspects importants de
                      notre vie.
                    </li>
                    <li className="mb-2">
                      <span className="font-semibold">Liberté de choix :</span>{" "}
                      Lorsque nous sommes financièrement sécurisés, nous avons
                      davantage de liberté pour prendre des décisions basées sur
                      nos préférences personnelles plutôt que sur des
                      contraintes financières. Cela peut inclure la possibilité
                      de choisir une carrière qui nous passionne plutôt
                      qu&apos;un emploi simplement pour des raisons financières,
                      ou de prendre des décisions de vie importantes sans être
                      limité par des considérations strictement monétaires.
                    </li>
                    <li className="mb-2">
                      <span className="font-semibold">
                        Planification de l&apos;avenir :{" "}
                      </span>{" "}
                      La sécurité financière nous permet de planifier
                      l&apos;avenir avec confiance. Nous pouvons épargner pour
                      des objectifs à long terme tels que l&apos;achat
                      d&apos;une maison, l&apos;éducation des enfants ou la
                      retraite. Savoir que nous avons une assise financière
                      solide nous donne la tranquillité d&apos;esprit nécessaire
                      pour envisager l&apos;avenir avec optimisme.
                    </li>
                    <li className="mb-2">
                      <span className="font-semibold">
                        Résilience face aux imprévus :{" "}
                      </span>{" "}
                      La vie est ponctuée d&apos;imprévus tels que des dépenses
                      médicales imprévues, des réparations d&apos;urgence ou des
                      périodes de chômage. Lorsque nous sommes financièrement
                      sécurisés, nous sommes mieux préparés à faire face à ces
                      situations inattendues. Nous avons une réserve
                      d&apos;urgence pour nous aider à traverser ces périodes
                      difficiles sans sombrer dans le stress financier.
                    </li>
                    <li>
                      <span className="font-semibold">Qualité de vie :</span> La
                      sécurité financière contribue également à une meilleure
                      qualité de vie globale. Elle nous permet de satisfaire nos
                      besoins fondamentaux tels que l&apos;alimentation, le
                      logement et les soins de santé, ainsi que de profiter de
                      certains luxes et plaisirs de la vie. Nous pouvons
                      investir dans notre bien-être physique et mental, explorer
                      de nouvelles expériences et partager des moments précieux
                      avec nos proches.
                    </li>
                  </ol>
                  <br />
                  <p className="text-sm">
                    Il est important de noter que la sécurité financière ne
                    signifie pas nécessairement la richesse extrême. Elle se
                    réfère plutôt à une situation où nos besoins fondamentaux
                    sont satisfaits et où nous avons une certaine marge de
                    manœuvre pour faire face aux imprévus et réaliser nos
                    aspirations.
                  </p>
                  <br />
                  <p className="text-sm">
                    La sécurité financière est un élément clé pour atteindre la
                    tranquillité d&apos;esprit et le bien-être émotionnel. Elle
                    nous permet de réduire le stress financier, d&apos;avoir la
                    liberté de choix, de planifier l&apos;avenir, de faire face
                    aux imprévus et d&apos;améliorer notre qualité de vie. En
                    travaillant à la fois sur notre situation financière et
                    notre relation avec l&apos;argent, nous pouvons construire
                    une base solide pour notre bien-être global.
                  </p>
                  <br />
                  <p className="font-semibold text-sm">
                    La richesse en termes de liberté et de choix :
                  </p>

                  <p className="text-sm mt-1">
                    L&apos;argent peut apporter une forme de liberté, mais
                    celle-ci n&apos;est pas nécessairement liée à la possession
                    de biens matériels. Au lieu de cela, la vraie richesse
                    réside dans la capacité de faire des choix qui sont en
                    accord avec nos valeurs et nos aspirations. Être
                    financièrement à l&apos;aise donne la liberté de poursuivre
                    des carrières ou des projets passionnants, de prendre des
                    décisions sans être contraint par des impératifs financiers
                    et de profiter de l&apos;autonomie dans nos choix de vie.
                  </p>
                  <br />
                  <p className="text-sm">
                    La richesse véritable ne se limite pas à l&apos;accumulation
                    de biens matériels, mais repose également sur la liberté et
                    la possibilité de faire des choix alignés avec nos valeurs
                    et nos aspirations.
                  </p>
                  <br />
                  <p className="font-semibold text-sm">
                    Voici comment la richesse peut être perçue en termes de
                    liberté et de choix :
                  </p>

                  <ol className="list-decimal list-inside text-left text-sm space-y-2 mt-2">
                    <li className="mb-2">
                      <span className="font-semibold">
                        Indépendance financière :
                      </span>{" "}
                      Lorsque nous sommes financièrement stables, nous acquérons
                      une forme d&apos;indépendance qui nous permet de prendre
                      des décisions sans être contraints par des contraintes
                      financières. Nous pouvons choisir notre carrière en
                      fonction de notre passion plutôt que de rechercher
                      uniquement des revenus élevés. Nous avons également la
                      liberté de prendre des risques calculés et d&apos;explorer
                      de nouvelles opportunités sans craindre des conséquences
                      financières dévastatrices.
                    </li>
                    <li className="mb-2">
                      <span className="font-semibold">
                        Choix de style de vie :
                      </span>{" "}
                      La richesse nous offre la possibilité de choisir le style
                      de vie qui nous convient le mieux. Nous pouvons décider où
                      nous voulons vivre, quelles expériences nous souhaitons
                      avoir et comment nous voulons consacrer notre temps. Que
                      ce soit voyager, investir dans nos passions ou passer du
                      temps de qualité avec nos proches, la richesse nous donne
                      la liberté de façonner notre vie selon nos propres
                      souhaits et préférences.
                    </li>
                    <li className="mb-2">
                      <span className="font-semibold">
                        Accès à l&apos;éducation et aux opportunités :{" "}
                      </span>{" "}
                      La richesse nous offre souvent des possibilités
                      d&apos;éducation et de développement personnel. Nous
                      pouvons investir dans notre formation continue, acquérir
                      de nouvelles compétences et accéder à des opportunités
                      d&apos;apprentissage qui nous permettent d&apos;élargir
                      nos horizons et de réaliser notre plein potentiel. Cela
                      nous donne un avantage concurrentiel sur le plan
                      professionnel et nous ouvre des portes vers de nouvelles
                      opportunités.
                    </li>
                    <li className="mb-2">
                      <span className="font-semibold">
                        Engagement philanthropique :{" "}
                      </span>{" "}
                      Être riche nous donne la possibilité de soutenir des
                      causes qui nous tiennent à cœur et de faire une différence
                      dans le monde. Nous pouvons consacrer notre temps, notre
                      énergie et nos ressources financières à des initiatives
                      philanthropiques, en contribuant à des projets sociaux,
                      humanitaires ou environnementaux. Cela nous permet de
                      donner un sens plus profond à notre richesse en ayant un
                      impact positif sur la société et en apportant des
                      changements significatifs là où cela est nécessaire.
                    </li>
                    <li>
                      <span className="font-semibold">
                        Autonomie et prise de décision :
                      </span>{" "}
                      La La richesse nous offre une plus grande autonomie dans
                      nos décisions. Nous ne sommes pas limités par des
                      contraintes financières dans les choix que nous faisons
                      pour nous-mêmes et notre famille. Nous pouvons décider de
                      notre propre avenir financier, de nos investissements et
                      de nos objectifs à long terme, en prenant des décisions
                      éclairées en fonction de nos propres priorités et valeurs.
                    </li>
                  </ol>
                  <br />
                  <p className="text-sm">
                    La richesse véritable ne se réduit pas à la possession de
                    biens matériels, mais se définit par la liberté et la
                    capacité de faire des choix qui reflètent nos aspirations et
                    nos valeurs. Elle nous donne la possibilité d&apos;être
                    indépendants financièrement, de choisir notre style de vie,
                    d&apos;accéder à des opportunités et à l&apos;éducation, de
                    s&apos;engager dans des actions philanthropiques et de
                    prendre des décisions en toute autonomie.
                  </p>
                  <br />

                  <p className="font-semibold text-sm">
                    La richesse humaine et sociale :
                  </p>

                  <p className="text-sm mt-1">
                    Un aspect souvent négligé de la richesse est la qualité des
                    relations humaines et sociales. Les liens avec la famille,
                    les amis et la communauté sont inestimables et contribuent
                    grandement à notre bien-être global. Les personnes riches en
                    relations interpersonnelles nourrissantes et en soutien
                    social bénéficient d&apos;une richesse qui transcende les
                    considérations matérielles. Leur réseau social solide peut
                    leur offrir un sentiment d&apos;appartenance, de sécurité
                    émotionnelle et d&apos;épanouissement personnel.
                  </p>
                  <br />

                  <p className="text-sm">
                    La richesse véritable ne se limite pas aux aspects
                    matériels, mais englobe également la richesse humaine et
                    sociale. Elle se manifeste à travers les relations
                    significatives que nous entretenons avec les autres et la
                    contribution positive que nous apportons à la société.
                    <span className="block font-semibold">
                      Voici comment la richesse humaine et sociale peut enrichir
                      notre vie :
                    </span>
                  </p>
                  <br />
                  <ol className="list-decimal list-inside text-left text-sm space-y-2">
                    <li className="mb-2">
                      <span className="font-semibold">
                        Relations interpersonnelles :
                      </span>{" "}
                      Les relations profondes et authentiques que nous
                      entretenons avec nos proches sont une source inestimable
                      de richesse humaine. Les liens familiaux, les amitiés
                      sincères et les partenariats solides nous procurent un
                      soutien émotionnel, de l&apos;amour et un sentiment
                      d&apos;appartenance. Ces relations nous apportent joie,
                      épanouissement et un réseau de soutien précieux dans les
                      moments difficiles.
                    </li>
                    <li className="mb-2">
                      <span className="font-semibold">
                        Partage d&lsquo;expériences :
                      </span>{" "}
                      La richesse humaine découle également du partage
                      d&apos;expériences et de moments précieux avec les autres.
                      Que ce soit en voyageant, en explorant de nouvelles
                      activités ou en partageant des intérêts communs, ces
                      moments renforcent nos liens avec les autres et créent des
                      souvenirs durables. Ils enrichissent notre vie en nous
                      permettant de vivre des expériences variées et
                      d&apos;apprendre des perspectives différentes.
                    </li>
                    <li className="mb-2">
                      <span className="font-semibold">
                        Entraide et solidarité :{" "}
                      </span>{" "}
                      Contribuer au bien-être des autres et s&apos;impliquer
                      dans des actions altruistes nous apporte une richesse
                      sociale profonde. Lorsque nous aidons ceux qui sont dans
                      le besoin, nous cultivons un sentiment de satisfaction et
                      de connexion avec la communauté. L&apos;engagement dans
                      des initiatives caritatives, le bénévolat ou la
                      participation à des projets communautaires nous permettent
                      de faire une différence positive dans la vie des autres et
                      de contribuer à un monde meilleur.
                    </li>
                    <li className="mb-2">
                      <span className="font-semibold">
                        Échange de connaissances et d&apos;idées :{" "}
                      </span>{" "}
                      La richesse humaine se trouve également dans
                      l&apos;échange de connaissances, d&apos;idées et de
                      perspectives. Interagir avec des personnes ayant des
                      expériences et des expertises différentes élargit notre
                      horizon et stimule notre croissance personnelle.
                      Participer à des discussions, des débats ou des
                      collaborations nous permet d&apos;apprendre des autres, de
                      développer notre créativité et de générer de nouvelles
                      idées.
                    </li>
                    <li>
                      <span className="font-semibold">
                        Empathie et compassion :
                      </span>{" "}
                      La richesse humaine réside également dans notre capacité à
                      être empathiques et bienveillants envers les autres. La
                      compassion envers ceux qui traversent des difficultés,
                      l&apos;écoute active et le soutien émotionnel renforcent
                      nos relations et créent un environnement chaleureux et
                      positif. La capacité à se mettre à la place des autres et
                      à exprimer de l&apos;empathie nous aide à construire des
                      liens profonds et significatifs.
                    </li>
                  </ol>
                  <br />
                  <p className="text-sm">
                    la richesse humaine et sociale est une composante
                    essentielle d&apos;une vie épanouissante. Au-delà des biens
                    matériels, les relations interpersonnelles, le partage
                    d&apos;expériences, l&apos;entraide, l&apos;échange de
                    connaissances, l&apos;empathie et la compassion contribuent
                    à la richesse humaine. En cultivant ces aspects de notre
                    vie, nous pouvons créer un environnement riche en relations
                    positives et en contribution sociale, ce qui nous apporte
                    une satisfaction profonde et un sens de plénitude.
                  </p>
                  <br />
                  <p className="text-base font-bold">Conclusion :</p>
                  <p className="text-sm mt-1">
                    Être riche ne se résume pas à accumuler des biens matériels.
                    La véritable richesse réside dans la sécurité financière, la
                    tranquillité d&apos;esprit, la liberté de choix et la
                    richesse humaine. Une vie riche peut être celle d&apos;un
                    pauvre qui a la sécurité financière nécessaire pour se
                    libérer des soucis incessants et profiter pleinement des
                    opportunités qui s&apos;offrent à lui. La richesse véritable
                    se trouve dans la capacité à vivre une vie équilibrée,
                    satisfaisante et épanouissante, en accord avec ses valeurs
                    et ses aspirations profondes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </SheetContent>
    </Sheet>
  );
};

export default SheetBookContent;
