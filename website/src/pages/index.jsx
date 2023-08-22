import Head from 'next/head'
import Layout from '@/components/Layout'
import Form from '@/components/Form'
import styles from '@/styles/pages/Home.module.scss'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Empreinte Carbone</title>
        <meta name="description" content="Calculez votre empreinte carbone" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.wrapper}>
          <div className={styles.container_title}>
            <h1>
              Renseignez vos données afin d'obtenir votre empreinte carbone !
            </h1>
          </div>
          <Form />

          <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 504.125 504.125"
            className={styles.obj1}
          >
            <path
              fill="#3A7F0D;"
              d="M339.772,0c0,0,44.536,108.954-146.337,182.138C89.719,221.893,10.059,323.789,105.173,481.193
	c7.877-70.357,41.653-225.485,186.888-260.884c0,0-135.176,50.546-147.117,279.347c69.459,9.752,232.361,16.305,280.726-125.062
	C489.536,187.817,339.772,0,339.772,0z"
            />
            <path
              fill="#49A010;"
              d="M145.007,498.704c147.456-58.849,254.748-196.71,269.556-361.283C384.418,56.107,339.772,0,339.772,0
	s44.536,108.954-146.337,182.138C89.719,221.893,10.059,323.789,105.173,481.193c7.877-70.357,41.653-225.485,186.888-260.884
	C292.053,220.31,157.279,270.73,145.007,498.704z"
            />
            <circle fill="#3A7F0D;" cx="90.459" cy="171.985" r="13.785" />
            <g>
              <circle fill="#49A010;" cx="133.782" cy="158.2" r="9.846" />
              <circle fill="#49A010;" cx="124.921" cy="64.662" r="24.615" />
              <circle fill="#49A010;" cx="200.736" cy="120.785" r="7.877" />
              <circle fill="#49A010;" cx="266.713" cy="76.477" r="22.646" />
            </g>
          </svg>
        </div>
      </main>
    </Layout>
  )
}
