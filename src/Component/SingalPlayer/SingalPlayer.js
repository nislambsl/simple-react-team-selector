  import React from 'react';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faCoffee, faHandHolding, faHandPointRight } from '@fortawesome/free-solid-svg-icons';
  import './SingalPlayer.css';
  
  const SingalPlayer = (props) => {
      console.log(props.player.name);
      return (
          <div className="players">
              <div>
                  <img src= {props.player.img} alt=""/>
              </div>
              <br/>
              <div>
                  <h3>Name : {props.player.name}</h3>
                    <small>{props.player.identity}</small>
                    <br/>
                    <br/>
                  <h4>Salary ${props.player.salary}</h4>
                  <h4>Grade - {props.player.grade}</h4>
                  <button className="btn btn-success cursor-pointer" onClick={props.handleAddPlayer}> <FontAwesomeIcon icon={faHandPointRight} /> Book Player</button>
                  
                  
              </div>
            
          </div>
      );
  };
  
  export default SingalPlayer;