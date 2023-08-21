import { useState, useEffect } from 'react'
import styles from '@/styles/components/Header.module.scss'
import Link from 'next/link'

const Header = () => {
  const [isScroll, setIsScroll] = useState(false)
  const handleScroll = () => {
    const header = document.querySelector('header')
    const scrollPosition = window.scrollY
    if (scrollPosition > 1) {
      setIsScroll(true)
      header.classList.add(styles.style_scroll)
    } else {
      setIsScroll(false)
      header.classList.remove(styles.style_scroll)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll, { passive: true })
    }
  }, [])
  return (
    <header className={`${styles.header} ${isScroll && styles.style_active}`}>
      <div className={styles.wrapper}>
        <div className={styles.container_logo}>
          <Link href="/">
            <svg
              width="182"
              height="82"
              viewBox="0 0 382 82"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="382" height="82" rx="37" fill="white" />
              <path
                d="M17.9018 56V34.1818H31.0694V36.5256H20.5439V43.8977H30.3876V46.2415H20.5439V53.6562H31.2399V56H17.9018ZM37.3315 34.1818H40.4849L47.8997 52.2926H48.1554L55.5701 34.1818H58.7235V56H56.252V39.4233H56.0389L49.2207 56H46.8343L40.0162 39.4233H39.8031V56H37.3315V34.1818ZM65.521 56V34.1818H72.8931C74.6048 34.1818 76.0039 34.4908 77.0906 35.1087C78.1843 35.7195 78.994 36.5469 79.5195 37.5909C80.0451 38.6349 80.3079 39.7997 80.3079 41.0852C80.3079 42.3707 80.0451 43.5391 79.5195 44.5902C79.0011 45.6413 78.1985 46.4794 77.1119 47.1044C76.0252 47.7223 74.6332 48.0312 72.9357 48.0312H67.6516V45.6875H72.8505C74.0224 45.6875 74.9634 45.4851 75.6737 45.0803C76.3839 44.6754 76.8988 44.1286 77.2184 43.4396C77.5451 42.7436 77.7085 41.9588 77.7085 41.0852C77.7085 40.2116 77.5451 39.4304 77.2184 38.7415C76.8988 38.0526 76.3803 37.5128 75.663 37.1222C74.9457 36.7244 73.994 36.5256 72.8079 36.5256H68.163V56H65.521ZM86.0639 56V34.1818H93.4361C95.1406 34.1818 96.5398 34.473 97.6335 35.0554C98.7273 35.6307 99.5369 36.4226 100.062 37.4311C100.588 38.4396 100.851 39.5866 100.851 40.8722C100.851 42.1577 100.588 43.2976 100.062 44.2919C99.5369 45.2862 98.7308 46.0675 97.6442 46.6357C96.5575 47.1967 95.169 47.4773 93.4787 47.4773H87.5128V45.0909H93.3935C94.5582 45.0909 95.4957 44.9205 96.206 44.5795C96.9233 44.2386 97.4418 43.7557 97.7614 43.1307C98.0881 42.4986 98.2514 41.7457 98.2514 40.8722C98.2514 39.9986 98.0881 39.2351 97.7614 38.5817C97.4347 37.9283 96.9126 37.424 96.1953 37.0689C95.478 36.7067 94.5298 36.5256 93.3509 36.5256H88.706V56H86.0639ZM96.3338 46.1989L101.703 56H98.6349L93.3509 46.1989H96.3338ZM106.753 56V34.1818H119.921V36.5256H109.395V43.8977H119.239V46.2415H109.395V53.6562H120.091V56H106.753ZM128.825 34.1818V56H126.183V34.1818H128.825ZM152.924 34.1818V56H150.367L138.478 38.8693H138.265V56H135.623V34.1818H138.179L150.111 51.3551H150.324V34.1818H152.924ZM158.517 36.5256V34.1818H174.881V36.5256H168.02V56H165.378V36.5256H158.517ZM180.458 56V34.1818H193.626V36.5256H183.1V43.8977H192.944V46.2415H183.1V53.6562H193.797V56H180.458ZM228.959 42.3636H222.951C222.908 41.8665 222.794 41.4155 222.61 41.0107C222.432 40.6058 222.184 40.2578 221.864 39.9666C221.551 39.6683 221.172 39.4411 220.724 39.2848C220.277 39.1214 219.769 39.0398 219.201 39.0398C218.206 39.0398 217.365 39.2812 216.676 39.7642C215.994 40.2472 215.475 40.9396 215.12 41.8416C214.772 42.7436 214.598 43.8267 214.598 45.0909C214.598 46.4261 214.776 47.5447 215.131 48.4467C215.493 49.3416 216.015 50.0163 216.697 50.4709C217.379 50.9183 218.199 51.142 219.158 51.142C219.705 51.142 220.195 51.0746 220.628 50.9396C221.061 50.7976 221.438 50.5952 221.757 50.3324C222.077 50.0696 222.336 49.7536 222.535 49.3842C222.741 49.0078 222.88 48.5852 222.951 48.1165L228.959 48.1591C228.888 49.0824 228.629 50.0234 228.181 50.9822C227.734 51.9339 227.098 52.8146 226.275 53.6243C225.458 54.4268 224.446 55.0732 223.238 55.5632C222.031 56.0533 220.628 56.2983 219.03 56.2983C217.027 56.2983 215.23 55.8686 213.64 55.0092C212.056 54.1499 210.802 52.8857 209.879 51.2166C208.963 49.5476 208.505 47.5057 208.505 45.0909C208.505 42.6619 208.973 40.6165 209.911 38.9545C210.848 37.2855 212.113 36.0249 213.703 35.1726C215.294 34.3132 217.07 33.8835 219.03 33.8835C220.408 33.8835 221.676 34.0717 222.833 34.4482C223.991 34.8246 225.007 35.375 225.88 36.0994C226.754 36.8168 227.457 37.701 227.99 38.7521C228.522 39.8033 228.846 41.0071 228.959 42.3636ZM238.14 56H231.748L238.95 34.1818H247.047L254.248 56H247.856L243.083 40.1903H242.913L238.14 56ZM236.947 47.392H248.964V51.8239H236.947V47.392ZM257.85 56V34.1818H267.267C268.887 34.1818 270.303 34.4766 271.518 35.0661C272.732 35.6555 273.677 36.5043 274.352 37.6122C275.026 38.7202 275.364 40.0483 275.364 41.5966C275.364 43.1591 275.016 44.4766 274.32 45.549C273.631 46.6214 272.661 47.4311 271.411 47.978C270.169 48.5249 268.716 48.7983 267.054 48.7983H261.429V44.196H265.861C266.557 44.196 267.15 44.1108 267.64 43.9403C268.137 43.7628 268.517 43.4822 268.78 43.0987C269.05 42.7152 269.185 42.2145 269.185 41.5966C269.185 40.9716 269.05 40.4638 268.78 40.0732C268.517 39.6754 268.137 39.3842 267.64 39.1996C267.15 39.0078 266.557 38.9119 265.861 38.9119H263.773V56H257.85ZM270.634 45.9858L276.088 56H269.654L264.327 45.9858H270.634ZM279.389 56V34.1818H288.849C290.511 34.1818 291.906 34.4055 293.036 34.853C294.172 35.3004 295.028 35.9325 295.603 36.7493C296.186 37.5661 296.477 38.5284 296.477 39.6364C296.477 40.4389 296.299 41.1705 295.944 41.831C295.596 42.4915 295.106 43.0455 294.474 43.4929C293.842 43.9332 293.103 44.2386 292.258 44.4091V44.6222C293.195 44.6577 294.048 44.8956 294.815 45.3359C295.582 45.7692 296.193 46.3693 296.647 47.1364C297.102 47.8963 297.329 48.7912 297.329 49.821C297.329 51.0142 297.017 52.076 296.392 53.0064C295.774 53.9368 294.893 54.6683 293.749 55.201C292.606 55.7337 291.242 56 289.659 56H279.389ZM285.312 51.2699H288.082C289.076 51.2699 289.822 51.0852 290.319 50.7159C290.816 50.3395 291.065 49.7855 291.065 49.054C291.065 48.5426 290.948 48.1094 290.713 47.7543C290.479 47.3991 290.145 47.1293 289.712 46.9446C289.286 46.7599 288.771 46.6676 288.167 46.6676H285.312V51.2699ZM285.312 43.0028H287.741C288.259 43.0028 288.718 42.9212 289.115 42.7578C289.513 42.5945 289.822 42.3601 290.042 42.0547C290.269 41.7422 290.383 41.3622 290.383 40.9148C290.383 40.2401 290.142 39.7251 289.659 39.37C289.176 39.0078 288.565 38.8267 287.826 38.8267H285.312V43.0028ZM322.064 45.0909C322.064 47.5199 321.592 49.5689 320.647 51.2379C319.703 52.8999 318.428 54.1605 316.823 55.0199C315.218 55.8722 313.428 56.2983 311.453 56.2983C309.465 56.2983 307.668 55.8686 306.063 55.0092C304.465 54.1428 303.193 52.8786 302.249 51.2166C301.311 49.5476 300.843 47.5057 300.843 45.0909C300.843 42.6619 301.311 40.6165 302.249 38.9545C303.193 37.2855 304.465 36.0249 306.063 35.1726C307.668 34.3132 309.465 33.8835 311.453 33.8835C313.428 33.8835 315.218 34.3132 316.823 35.1726C318.428 36.0249 319.703 37.2855 320.647 38.9545C321.592 40.6165 322.064 42.6619 322.064 45.0909ZM315.97 45.0909C315.97 43.7841 315.796 42.6832 315.448 41.7884C315.107 40.8864 314.6 40.2045 313.925 39.7429C313.257 39.2741 312.433 39.0398 311.453 39.0398C310.473 39.0398 309.646 39.2741 308.971 39.7429C308.303 40.2045 307.796 40.8864 307.448 41.7884C307.107 42.6832 306.936 43.7841 306.936 45.0909C306.936 46.3977 307.107 47.5021 307.448 48.4041C307.796 49.299 308.303 49.9808 308.971 50.4496C309.646 50.9112 310.473 51.142 311.453 51.142C312.433 51.142 313.257 50.9112 313.925 50.4496C314.6 49.9808 315.107 49.299 315.448 48.4041C315.796 47.5021 315.97 46.3977 315.97 45.0909ZM345.183 34.1818V56H340.239L332.356 44.5369H332.228V56H326.305V34.1818H331.333L339.089 45.6023H339.259V34.1818H345.183ZM349.484 56V34.1818H365.209V38.9545H355.408V42.7045H364.399V47.4773H355.408V51.2273H365.166V56H349.484Z"
                fill="black"
              />
            </svg>
          </Link>
        </div>
        <div className={styles.container_text}>
          <span>Calculez votre empreinte carbone en quelques clics !</span>
        </div>
      </div>
    </header>
  )
}
export default Header
