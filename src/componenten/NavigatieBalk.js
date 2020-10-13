import React from 'react';

/**
 * 
 * @param {tekstkleur} props
 * @param {achtergrondkleur} props 
 * @description hiermee roep je een navigatiebalk op. 
 * Gebruik 'achtergrondkleur' om de achtergrond te veranderen. Voorbeeld achtergrondkleur='wit'
 *  
 */

 //hallo
export default function NavigatieBalk (props) {
    return <div style={{width: ' 100%', height: '50px', backgroundColor: props.achtergrondkleur, color: props.tekstkleur}}>Navigatiebalk</div>
}

NavigatieBalk.propTypes = {
    /** Veranderd de tekstkleur */
    tekstkleur: PropTypes.string,
    /** Veranderd de achtergrondkleur */
    achtergrondkleur: PropTypes.string
  }