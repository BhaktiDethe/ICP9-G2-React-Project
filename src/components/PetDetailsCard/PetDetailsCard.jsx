import React from 'react';
import { Link } from 'react-router-dom';

// Import images
import rexImg from '../../assets/PetDetailsImages/rex.webp';
import labradorImg from '../../assets/PetDetailsImages/labrador.jpg';
import germanShepherdImg from '../../assets/PetDetailsImages/german-shepherd.jpg';
import bulldogImg from '../../assets/PetDetailsImages/bull-dog.jpg';
import borderCollieImg from '../../assets/PetDetailsImages/border-collie.jpg';
import huskyImg from '../../assets/PetDetailsImages/husky.jpg';
import hollandLopImg from '../../assets/PetDetailsImages/holland-lop.jpg';
import angoraImg from '../../assets/PetDetailsImages/angora.webp';
import netherlandDwarfImg from '../../assets/PetDetailsImages/netherland-dwarf.webp';
import persianCatImg from '../../assets/PetDetailsImages/persian-cat.jpg';
import maineCoonImg from '../../assets/PetDetailsImages/maine-coon.webp';
import siameseImg from '../../assets/PetDetailsImages/siamese.webp';

// Mapping pet names to images
const petImages = {
    Rex: rexImg,
    Titan: labradorImg,
    Bruno: germanShepherdImg,
    Diesel: bulldogImg,
    Rocky: borderCollieImg,
    Shadow: huskyImg,
    Thumper: hollandLopImg,
    Snowball: angoraImg,
    Cinnamon: netherlandDwarfImg,
    Luna: persianCatImg,
    Simba: maineCoonImg,
    Whiskers: siameseImg
};

function PetDetailsCard({ id, name, age, breed, price }) {
    return (
        <div className="w-[400px] m-5 bg-white rounded-xl border-1 border-gray-300 shadow-lg overflow-hidden flex flex-col">
            <img
                src={petImages[name] || '/assets/default-pet.jpg'}  // Fallback to default image if not found
                alt={name}
                className="w-full h-60 object-cover"
            />
            <div className="p-4 flex flex-col flex-grow">
                <h2 className="text-2xl mb-2 font-bold text-black">{name}</h2>
                <p className="text-gray-700 text-md">Breed: {breed}</p>
                <p className="text-gray-700 text-md">Age: {age} Years</p>
                <p className="text-green-800 font-bold text-md mt-2 bg-green-200 w-fit p-1 rounded-lg">Price : <span className='font-semibold'>₹{price}</span> </p>
                <div className="mt-5">
                    <Link to={`/petdetailedview/${id}`}>
                        <button className="w-full cursor-pointer py-2 rounded-lg font-semibold transition-colors duration-300 bg-[#8B5E3C] text-white hover:bg-[#6F4B2E]">
                            View Details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default PetDetailsCard;
