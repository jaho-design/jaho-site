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


const IndexPage = () => (
    <Layout>
        <SEO title="Un moment de convivialité avec vos chats"/>

        <div className={"page-header home"}>
            <h1>Créer et Agencer des espaces pour vos chats</h1> 
            <p>JAHO, vous accompagne pour réaliser vos projets d'aménagement d'espaces de partage<br/> pour les chats, dans le respect de la nature en s'agencent avec goût dans votre intérieur et extérieur.</p> 
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
                                <p>Catherine et Jean-marc, amoureux des chats et propriétaires de deux magnifiques Maincoon dont l'activité principale est le farniente et l'observation... Nous sommes aussi passionné de décoration et d'architecture. 
                                C'est pourquoi nous avons décidé de concevoir des espaces intérieurs et exterieurs sécurisé afin de pouvoir partager des moments avec nos chats sans inquiétude.</p>
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
                        <div className={"col-8"}>
                            <div className={"feature__content"}>
                                <h2>Quels sont nos valeurs ?</h2>
                            <p>Nous sommes convaincu que les lieux d'échange entre félin et humain peuvent apporter bien être, santé et relaxation. Les moments de partage avec nos amis les chats 
                            sont réputés pour apporter joie et sérénité, capables de rebooster les personnes en période de fragilité émotionnelle... <br/>
                            La vie moderne et trépidante, les charges professionnelles et familiales de plus en plus lourdes 
trouvent souvent une issue re-dynamisante auprès des félins aux attitudes si relaxantes et souvent risibles. Là aussi le pouvoir du rire 
provoqué par le saut d'un chat quelque peu hasardeux en réception ou le jeu d'un chaton avec une canne à plume participe à embellir la vie.</p>
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
                                <p>JAHO comme les deux premières lettres unifiées de <bold>JA</bold>dys et <bold>HO</bold>rus, nos chats, est la société qui nous permet 
                                de proposer nos services au travers de conseils, de planification et de modèles de gestion qui vous 
                                permettront vous aussi d'offrir de magnifiques cadeaux à vos propres chats ou de mettre en œuvre une 
                                activité professionnelle accessible même aux débutants et à tout âge pour peu que la passion des 
                                chats puisse être votre moteur.<br/>
                                <br/>
                                Un projet personnel ou professionnel? Nous pouvons vous accompagner à toutes les étapes y compris 
                                dans le financement.</p>                           
                            </div>
                        </div>
                    </div>
                    <div className={"row"}>
                        <div className={"col-4"}>
                            <div className={"thumbnail"}>
                                <div className={'item__circle'}>
                                    <img className={'image__circle'} alt={"maison"} src={home}/>
                                </div>
                            <p>Aménagement d'intérieur</p>
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
                            <p>Homestaging</p>
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
                    <p>Inscrivez-vous à notre newsletter, pour être les premiers à découvrir JAHO ou contactez-nous par email : jaho.contact@gmail.com</p>
                    
                </div>

                <div className={"button"}>
                    <a href="https://mailchi.mp/3d0357f4c8ac/jaho-rejoindre" target={"_blank"}>Contactez nous</a>
                </div>
            </div>
        </div>
    </Layout>
)

export default IndexPage
