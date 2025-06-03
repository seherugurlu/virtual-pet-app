export default function PetCard({ pet, onAdopt }) {
  return (
    <div className="pet-card">
      <img src={pet.image} alt={pet.name} width="150" />
      <p>{pet.name} the {pet.type}</p>
      <button onClick={() => onAdopt(pet)} className="adoptButton">Adopt</button>
    </div>
  );
}
