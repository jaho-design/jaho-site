/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import {StaticQuery, graphql, Link} from "gatsby"

import Header from "./header"
import "../../static/styles/main.scss"
import logo from "../../static/images/hd-logo.png"

const Layout = ({children}) => (
    <StaticQuery query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `} render={data => (
        <>
            <Header siteTitle={data.site.siteMetadata.title}/>
            <main>{children}</main>
            <footer>
                <div className={"container"}>
                                <div className={"logo"}>
                                    <Link to="/" title={"jaho"}>
                                        <img alt={"Logo"} src={logo}/>
                                    </Link>
                                </div>
                    <div className={"row"}>
                        <div className={"col-7"}>
                            <div className={"widget__item"}>

                                <div className={"about"}>
                                    <p>L'univers des Chats est un modèle de partage d'Amour de la nature et de passion pour les animaux en général  ce qui n'exclue pas,  bien sûr, l'amour des hommes. Ne dit on pas qu'un "homme qui aime les chats ne peut pas être foncièrement méchant envers les êtres humains... ". 
Même apprivoisés depuis des siècles les chats sont extraordinairement proches de la vie sauvage et leur instinct de chasse en est la preuve.
Leur offrir des lieux d'observation de leur proies potentielles et de partage de leur tendresse et de leur curiosité naturelle avec l'homme est une motivation fédératrice que nous souhaitons partager avec vous.</p>
                                </div>
                            </div>
                        </div>

                        {/* <div className={"col-2"}>
                            <div className={"widget__item"}>
                                <ul className={"links"}>
                                    <h4>Jaho</h4>
                                    <ul>
                                        <li><Link to="/about" title={"About Us"}>à propos de nous</Link></li>
                                        <li><a href={""}>Blog</a></li>
                                        <li><a className={"links__special"} href={""} target={"_blank"} title={""}>Feedback</a></li> 
                                    </ul>
                                </ul>
                            </div>
                        </div> */}

                        <div className={"col-5"}>
                            <div className={"widget__item"}>
                                <div className={"links"}>
                                    <h4>Partenaires</h4>
                                    <ul>
                                        <li><a href="https://www.askwood.fr/" target={"_blank"} title={"askwood"}>Askwood - Menuisière</a>                                        </li>
                                        <li><a href="https://www.osteopathie-animale-bordeaux.fr/" target={"_blank"} title={"askwood"}>Agathe Lescout - Ostéopathe animalier</a>                                        </li>
                                        <li><a href="http://musicalarue.com" target={"_blank"} title={"musicalarue"}>Musicalarue - Festival de musique</a>                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* <div className={"col-3"}>
                            <div className={"widget__item"}>
                                <div className={"social"}>
                                    <a href="http://musicalarue.com" target={"_blank"} title={"musicalarue"}>Musicalarue</a>
                                    <a href="https://www.linkedin.com/company/histaff/" target={"_blank"} title={"LinkedIn"}><img alt={"LinkedIn"} src={iconLinkedin}/></a>
                                    <a href="https://github.com/histaff" target={"_blank"} title={"GitHub"}><img alt={"GitHub"} src={iconGitHub}/></a>
                                    <a href="https://www.instagram.com/histaff.io/" target={"_blank"} title={"Instagram"}><img alt={"Instagram"} src={iconInstagram}/></a>
                                </div>
                            </div>
                        </div> */}
                    </div>

                    <div className={"copyright"}>
                        <p>Copyright {new Date().getFullYear()}, {` `} JAHO. Tous droits réservés.</p>
                    </div>
                </div>
            </footer>
        </>
    )}/>
)

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
