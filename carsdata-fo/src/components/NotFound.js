import styles from "../css/notfound.module.css"
import {Link} from "react-router-dom";

export default function NotFound() {
    return (
        <section className={styles.page_404}>
            <div className="container-md">
                <div className="row">
                    <div className={styles["col-sm-12"]}>
                        <div className={`${styles["col-sm-10"]} ${styles["col-sm-offset-1"]}  ${styles["text-center"]}`}>
                            <div className={styles.four_zero_four_bg}>
                                <h1 className={styles["text-center"]}>404</h1>


                            </div>

                            <div className={styles.contant_box_404}>
                                <h3 className="h2">
                                    Look like you're lost
                                </h3>

                                <p>the page you are looking for not avaible!</p>

                                <Link to={"/"} className={styles.link_404}>Go to Home</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}