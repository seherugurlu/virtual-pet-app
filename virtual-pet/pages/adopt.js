import { useRouter } from 'next/router';
import styles from '@/styles/Home.module.css';
import PetCard from '../components/PetCard';



const pets = [
  { name: 'Neko', type: 'Cat', image: '/neko.jpg' },
  { name: 'Usagi', type: 'Bunny', image: '/usagi.webp' },
  { name: 'Tanuki', type: 'Raccoon', image: '/tanuki.avif' },
];

export default function Adopt() {
  const router = useRouter();

  const adoptPet = (pet) => {
    localStorage.setItem('adoptedPet', JSON.stringify(pet));
    router.push('/pet');
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h2 className={styles.title}>Choose a Pet</h2>
        <div className={styles['pet-list']}>
          {pets.map((pet) => (
            <div key={pet.name} className={styles['pet-card']}>
              <img src={pet.image} alt={pet.name} width="150" />
              <p>{pet.name} the {pet.type}</p>
              <button onClick={() => adoptPet(pet)} className={styles.adoptButton}>Adopt</button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
