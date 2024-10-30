import React, { useState } from 'react';
import UrenregistratieForm from './HourRegistrationForm';
import UrenregistratieTable from './HourRegistrationTable';
import './HourRegistration.css';

const HourRegistration = () => {
    const [registraties, setRegistraties] = useState([]);

    const addRegistratie = (registratie) => {
        setRegistraties([...registraties, registratie]);
    };

    const berekenTotaal = () => {
        return registraties.reduce((total, registratie) => {
            const uren = registratie.uren;
            const prijs = registratie.prijsPerUur;
            const reiskosten = registratie.reiskosten;

            return total + (uren * prijs) + reiskosten;
        }, 0);
    };

    return (
        <div className="hourRegistration">
            <h1>Urenregistratie Systeem</h1>
            <UrenregistratieForm addRegistratie={addRegistratie} />
            <UrenregistratieTable registraties={registraties} />
            <div className="total">
                <strong>Totaal:</strong> €{berekenTotaal().toFixed(2)}
            </div>
        </div>
    );
};

export default HourRegistration;
