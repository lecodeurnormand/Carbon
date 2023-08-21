import { useState } from 'react'
import styles from '@/styles/components/Form.module.scss'

const Form = () => {
  const [kilometers, setKilometers] = useState('')
  const [meatConsumed, setMeatConsumed] = useState('')
  const [flightHours, setFlightHours] = useState('')
  const [totalCarbonFootprint, setTotalCarbonFootprint] = useState(0)
  const [foodCarbonFootprint, setFoodCarbonFootprint] = useState(0)
  const [transportCarbonFootprint, setTransportCarbonFootprint] = useState(0)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleKilometersChange = (e) => {
    setKilometers(e.target.value)
  }
  const handleMeatConsumedChange = (e) => {
    setMeatConsumed(e.target.value)
  }
  const handleFlightHoursChange = (e) => {
    setFlightHours(e.target.value)
  }
  const calculateCarbonFootprint = () => {
    // Facteurs d'émission fictifs
    const emissionPerKilometer = 120
    const emissionPerGramOfMeat = 25
    const emissionPerFlightHour = 200

    const transportCarbonFromKilometers = kilometers * emissionPerKilometer
    const foodCarbonFromMeat = meatConsumed * emissionPerGramOfMeat
    const transportCarbonFromFlights = flightHours * emissionPerFlightHour

    // Total empreinte carbone transport
    const totalTransportCarbonFootprint =
      transportCarbonFromKilometers + transportCarbonFromFlights
    setTransportCarbonFootprint(totalTransportCarbonFootprint)
    setFoodCarbonFootprint(foodCarbonFromMeat)

    const totalCarbon = totalTransportCarbonFootprint + foodCarbonFromMeat
    setTotalCarbonFootprint(totalCarbon)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    calculateCarbonFootprint()
    setFlightHours('')
    setKilometers('')
    setMeatConsumed('')
    setIsSubmitted(true)
  }

  return (
    <section className={styles.section_form}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label>
          Km parcourus par semaine en voiture:
          <input
            type="text"
            value={kilometers}
            onChange={handleKilometersChange}
          />
        </label>
        <br />
        <label>
          Quantité de viande / semaine (en grammes):
          <input
            type="text"
            value={meatConsumed}
            onChange={handleMeatConsumedChange}
          />
        </label>
        <br />
        <label>
          Nombre d'heures de vol par an:
          <input
            type="text"
            value={flightHours}
            onChange={handleFlightHoursChange}
          />
        </label>
        <br />
        <button type="submit">Calculer</button>
      </form>
      <div className={styles.container_result}>
        <p className={styles.result}>
          Total empreinte carbone :
          {totalCarbonFootprint > 0 && (
            <span> {totalCarbonFootprint} g de CO2</span>
          )}
        </p>
        {isSubmitted && (
          <div className={styles.category_results}>
            {foodCarbonFootprint > 0 && (
              <p className={styles.category_result}>
                Alimentation :
                {foodCarbonFootprint > 0 && (
                  <span> {foodCarbonFootprint} g de CO2</span>
                )}
              </p>
            )}
            {foodCarbonFootprint > 0 && (
              <p className={styles.category_result}>
                Transport :
                {transportCarbonFootprint > 0 && (
                  <span> {transportCarbonFootprint} g de CO2</span>
                )}
              </p>
            )}
          </div>
        )}
      </div>
    </section>
  )
}

export default Form
