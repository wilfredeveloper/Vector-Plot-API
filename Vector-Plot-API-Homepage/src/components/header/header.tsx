import profileURL from "/profile.png"
import HeaderStyles from "./header.module.css"
import twitterLogo from "/twitter-logo.png"
import GitHubLogo from "/Github-logo.png"

export default function Header() {
    return (
        <header className={HeaderStyles.header}>
            <div className={HeaderStyles.profile_pane}>
                <div className={HeaderStyles.profile_photo_wrapper}>
                    <img className={HeaderStyles.profile_photo} src={profileURL} alt="Profile Photo" />
                </div>
                <div className={HeaderStyles.profile_details}>
                    <div className={HeaderStyles.profile_details_group}>
                        <p className={HeaderStyles.name}>
                            Victor Wilfred
                        </p>
                        <p className={HeaderStyles.tags}>
                            UI/UX Designer, Frontend Developer
                        </p>
                    </div>
                    <div className={HeaderStyles.profile_details_group}>
                        <p className={HeaderStyles.socials_header}>
                            Social Profiles
                        </p>
                        <div className={HeaderStyles.profile_detail_socials}>
                            <img src={twitterLogo} alt="twitter handle" className={HeaderStyles.social_logo} />
                            <img src={GitHubLogo} alt="Github handle" className={HeaderStyles.social_logo}/>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    
    );}