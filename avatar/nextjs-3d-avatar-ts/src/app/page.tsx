import AvatarViewer from "../components/avatarCanvas"
import styles from "./page.module.css"

export default function Page() {
  return (
    <div className={styles.pageWrapper}>
      <main className={styles.container}>
        <AvatarViewer />
      </main>
    </div>
  )
}





