import Link from 'next/link'
import styles from '../../styles/Timeline.module.css'


export default function Timeline({userName}){
    return (
    <>
        <h1 className={styles.title}>This is the timeline of {userName}</h1>
        <Link href='/'>Go home</Link>
    </>
    )
}

Timeline.getInitialProps = () => {
    return fetch('http://localhost:3000/api/hello')
        .then(res => res.json());
}