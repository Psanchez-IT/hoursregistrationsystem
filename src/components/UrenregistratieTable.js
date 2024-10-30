// UrenregistratieTable.js
import React from 'react';

const UrenregistratieTable = ({ registraties }) => {
    return (
        <table className="urenregistratie-table">
            <thead>
                <tr>
                    <th>Datum</th>
                    <th>Starttijd</th>
                    <th>Eindtijd</th>
                    <th>Prijs per uur (€)</th>
                    <th>Uren</th>
                    <th>Reiskosten (€)</th>
                    <th>Totaal (€)</th>
                </tr>
            </thead>
            <tbody>
                {registraties.map((registratie, index) => (
                    <tr key={index}>
                        <td>{registratie.datum}</td>
                        <td>{registratie.starttijd}</td>
                        <td>{registratie.eindtijd}</td>
                        <td>€{registratie.prijsPerUur.toFixed(2)}</td>
                        <td>{registratie.uren.toFixed(1)}</td>
                        <td>€{registratie.reiskosten.toFixed(2)}</td>
                        <td>€{((registratie.uren * registratie.prijsPerUur) + registratie.reiskosten).toFixed(2)}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default UrenregistratieTable;
