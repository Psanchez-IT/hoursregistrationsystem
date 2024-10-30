// UrenregistratieForm.js
import React, { useState } from 'react';

const UrenregistratieForm = ({ addRegistratie }) => {
    const [datum, setDatum] = useState('');
    const [starttijd, setStarttijd] = useState('');
    const [eindtijd, setEindtijd] = useState('');
    const [prijsPerUur, setPrijsPerUur] = useState('');
    const [uren, setUren] = useState('');
    const [reiskosten, setReiskosten] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const registratie = {
            datum: new Date(datum).toLocaleDateString('nl-NL', { day: '2-digit', month: 'long', year: 'numeric' }),
            starttijd,
            eindtijd,
            prijsPerUur: parseFloat(prijsPerUur),
            uren: parseFloat(uren),
            reiskosten: parseFloat(reiskosten)
        };

        addRegistratie(registratie);

        setDatum('');
        setStarttijd('');
        setEindtijd('');
        setPrijsPerUur('');
        setUren('');
        setReiskosten('');
    };

    return (
        <form className="urenregistratie-form" onSubmit={handleSubmit}>
            <label>
                Datum:
                <input type="date" value={datum} onChange={(e) => setDatum(e.target.value)} required />
            </label>
            <label>
                Starttijd:
                <input type="time" value={starttijd} onChange={(e) => setStarttijd(e.target.value)} required />
            </label>
            <label>
                Eindtijd:
                <input type="time" value={eindtijd} onChange={(e) => setEindtijd(e.target.value)} required />
            </label>
            <label>
                Prijs per uur (€):
                <input type="number" step="0.01" value={prijsPerUur} onChange={(e) => setPrijsPerUur(e.target.value)} required />
            </label>
            <label>
                Uren:
                <input type="number" step="0.1" value={uren} onChange={(e) => setUren(e.target.value)} required />
            </label>
            <label>
                Reiskosten (€):
                <input type="number" step="0.01" value={reiskosten} onChange={(e) => setReiskosten(e.target.value)} required />
            </label>
            <button type="submit">Toevoegen</button>
        </form>
    );
};

export default UrenregistratieForm;
