import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const MediDetails = () => {
  const { id } = useParams();

  const [medicines, setMedicines] = useState([]);

  useEffect(() => {
    fetch("/fakeData.json")
      .then((res) => res.json())
      .then((data) => setMedicines(data));
  }, []);

  const selectedMedicine = medicines.filter((medicine) => medicine.id == id);
  console.log(selectedMedicine);

  return (
    <div className="d-flex justify-content-center align-items-center">
      <div>
        <img height="400px" src={selectedMedicine[0]?.url} alt="" />
        <h3>{selectedMedicine[0]?.name}</h3>
        <p>Price: {selectedMedicine[0]?.price} tk/pice</p>
        <p>{selectedMedicine[0]?.description}</p>
      </div>
    </div>
  );
};

export default MediDetails;
