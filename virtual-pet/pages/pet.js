import { useState, useEffect } from 'react';
import styles from '@/styles/Home.module.css';

export default function Pet() {
  const [pet, setPet] = useState(null);
  const [mood, setMood] = useState('happy');

  useEffect(() => {
    const petData = JSON.parse(localStorage.getItem('adoptedPet')); // retrieve pet data from adopted page
    if (petData) setPet(petData); //update pet mod
  }, []);

  // function to update pets mood
  const updateMood = (newMood) => {
    setMood(newMood);
  };

  // loadind message
  if (!pet) {
    return (
      <div className={styles.page}>
        <main className={styles.main}>
          <p>Loading your pet...</p>
        </main>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h2 className={styles.title}>{pet.name} the {pet.type}</h2>
        <img src={pet.image} alt={pet.name} width="200" />
        <p>Mood: {mood}</p>

        <div className={styles.ctas}>
          <button onClick={() => updateMood('happy')} className={styles.adoptButton}>Feed 🍓</button>
          <button onClick={() => updateMood('excited')} className={styles.adoptButton}>Play 🎾</button>
          <button onClick={() => updateMood('sleepy')} className={styles.adoptButton}>Rest 💤</button>
        </div>

        {mood === 'happy' && <p>🐾 {pet.name} is feeling loved!</p>}
        {mood === 'excited' && <p>🎉 {pet.name} is full of energy!</p>}
        {mood === 'sleepy' && <p>😴 {pet.name} is getting some rest.</p>}
      </main>
    </div>
  );
}
