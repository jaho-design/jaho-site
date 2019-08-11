import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import chatBancExterieur from '../../static/images/jaho.gif'
import home from '../../static/images/home.png';
import shop from '../../static/images/shop.png';
import tools from '../../static/images/tools.png';
import LazyCat from "../components/lazyCat"
import GatsbyImage from "../components/image"
import cathJeanMarc from "../../static/images/catherine-jean-marc.png"
import LazyCatFlower from '../components/lazyCatFlower'


const IndexPage = () => (
    <Layout>
        <SEO title="Créer et Agencer des espaces pour les chats"/>

        <div className={"page-header home"}>
            <h1>Créer et Agencer des espaces pour nos amis les chats</h1> 
            <p>JAHO, vous accompagne pour réaliser vos projets d'aménagement d'espaces de partage<br/> pour chat, dans le respect de la nature en se mariant avec goût dans votre intérieur, votre extérieur et vos espaces pro.</p> 
            <div className={"container"}>
                    <GatsbyImage />
            </div>
        </div>

        <div className={"container"}>
            <div className={"features"}>
                <div className={"feature__item"}>
                    <div className={"row"}>
                        <div className={"col-6 first"}>
                            <div className={"thumbnail"}>
                                <img alt={"illustration de kate et jean-marc"} src={cathJeanMarc}/>
                            </div>
                        </div>

                        <div className={"col-6"}>
                            <div className={"feature__content"}>
                                <h2>Qui sommes nous ?</h2>
                                <p>Notre Amour pour les chats s'est concrétisé il y a quelques années avec l'adoption de Horus puis de Jadys deux magnifiques Maincoon dont l'activité principale est le "farniente".. Puisqu'ils ne sortent pas de nos maisons autrement  que dans la sécurité d'un lieu bien clos sur la terrasse, nous avons conçu et équipé des zones de vie extérieures qui leur permettent d'observer le jardin et tous les alentours tout en restant proches de nous et éloignés de tous les risques de la vie en liberté totale.
Les jours de pluie et surtout lorsqu'ils le souhaitent en dehors de leurs séjours en extérieur, des aménagements intérieurs proches des ouvertures complètent leurs envies d'observation sur des spots hauts situés et pleins d'autres jeux à partager...</p>
                            </div>
                            {/* <div className='top-section'>
                                <div className={"discover-more"}>
                                    <a href={"https://app.histaff.io"}>En savoir plus</a>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
                <div className={"feature__item"}>
                    <div className={"row"}>
                        
                        <div className={"col-6"}>
                            <div className={"feature__content"}>
                                <h2>Que proposons-nous ?</h2>
                                <p>Notre expertise en décoration d'intérieur respectueuse de l'environnement nous a permis de développer 
                                un concept applicable à la mise en œuvre et la décoration de lieux de vie partagés avec les chats non seulement 
                                pour l'habitat privé mais également pour des Bars à chats et des hôtels 
                                pour chats.<br/>
                                Notre premier salon de thé avec chats ouvrira bientôt avec comme but principal de partager des moments 
                                de zenitude á la japonaise. Dans ce lieu vous serez en complet échange avec la vie 
                                trépidante de tendresse de nos chats bercés par leur ronronnement et enjoués par la douceur de leur pelage 
                                si doux à caresser... Forts de cette expérience et devant les difficultés que nous avons parfois rencontrées 
                                pour faire garder Jadys et Horus, nous avons pensé et développé également un concept d'hôtel pour chats où 
                                l'équipement des chambres single ou double comportent un large espace intérieur aménagé avec goût et un accès 
                                extérieur protégé ou l'herbe à chats tient un grand rôle...</p>
                            </div>
                        </div>
                        <div className={"col-6 first"}>
                            <LazyCatFlower />
                        </div>   
                    </div>
                </div>

                <div className={"feature__item"}>
                    <div className={"row"}>
                        <div className={"col-8"}>
                            <div className={"feature__content"}>
                                <h2>Quels sont nos valeurs ?</h2>
                            <p>JAHO n'a d'autre but que d'autoriser le partage de nos convictions dans le respect de la nature, de la santé animale et même de la santé humaine dans la mesure où les moments de partage avec nos amis les chats sont réputés pour apporter joie et sérénité capables de rebooster les personnes en période de fragilité émotionnelle voire dans des extrémités comme le fameux "burnout"..
La vie moderne et trépidante, les charges professionnelles et familiales de plus en plus lourdes trouvent souvent une issue re-dynamisante auprès des félins aux attitudes si relaxantes et souvent risibles... Là aussi le pouvoir du rire provoqué par le saut d'un chat quelque peu hasardeux en réception ou le jeu d'un chaton avec une canne à plume participe à redonner goût à la vie...</p>
                            </div>
                        </div>
                        <div className={"col-4 first"}>
                            <div className={"thumbnail"}>
                                <img alt={"Team"} src={chatBancExterieur}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"feature__item"}>
                    <div className={"feature__content__center"}>
                        <h2>Qu'est ce que nous vous apportons ?</h2>
                    </div>
                    <div className={"row"}>
                        <div className={"col-12"}>
                            <div className={"feature__content"}>
                                <p>JAHO comme les deux premières lettres unifiées de JAdys et HOrus est la société qui nous permet de proposer nos services au travers de conseils, de planification et de modèles de gestion qui vous permettront vous aussi d'offrir de magnifiques cadeaux à vos propres chats ou de mettre en œuvre une activité professionnelle accessible même aux débutants et à tout âge pour peu que la passion des chats puisse être votre moteur.
Un projet personnel ou professionnel? Nous pouvons vous accompagner à toutes les étapes y compris dans le financement.</p>                           
                            </div>
                        </div>
                    </div>
                    <div className={"row"}>
                        <div className={"col-4"}>
                            <div className={"thumbnail"}>
                                <div className={'item__circle'}>
                                    <img className={'image__circle'} alt={"maison"} src={home}/>
                                </div>
                            <p>Aménagement d'intérieur et d'extérieur</p>
                            </div>
                        </div>
                        <div className={"col-4 first"}>
                            <div className={"thumbnail"}><div className={'item__circle'}>
                                    <img className={'image__circle'} alt={"outils"} src={tools}/>
                                </div>
                            <p>Meubles pour chat sur mesure</p>
                            </div>
                        </div>
                        <div className={"col-4 first"}>
                        <div className={"thumbnail"}>
                            <div className={'item__circle'}>
                                <img className={'image__circle'} alt={"magasin"} src={shop}/>
                            </div>
                            <p>espaces pro.</p>
                        </div>
                        </div>
                    </div>
                </div>

                <LazyCat className={"img-responsive"}/>
            
            </div>
        </div>

        <div className={"call-to-action"}>
            <div className={"container"}>
                <div className={"call-to-action__content"}>
                    <h2>Rejoignez-nous !</h2>
                    <p>Un simple contact sur ce site et l'aventure peut démarrer ou contactez-nous par email : jaho.contact@gmail.com</p>
                    
                </div>

                <div className={"button"}>
                    <a href="https://mailchi.mp/3d0357f4c8ac/jaho-rejoindre" target={"_blank"}>Contactez nous</a>
                </div>
            </div>
        </div>
    </Layout>
)

export default IndexPage 
