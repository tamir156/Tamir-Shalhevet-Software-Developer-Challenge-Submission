import "./App.css";
import React, { useEffect, useState } from "react"
import ToggleButton from "./toggleButton"
import secToDateString from "./utilities"

const App = () => {
  const [artifacts, setArtifacts] = useState([]) // create new empty state

  const fetchArtifactData = () => {
    fetch("https://sherwoodprojectdata.blob.core.windows.net/tech-challenge/projects.json")
      .then(response => {
        return response.json()
      })
      .then(data => {
        data = data.sort((a,b) => {
          if(a.start_date > b.start_date){ // sort by start date descending. do this before converting to string format
            return -1;
          }
          return 1;
        });
        data = data.map(a => {
          a.name = a.name.charAt(0).toUpperCase() + a.name.slice(1); // change first letter of project name to capital
          a.start_date = secToDateString(a.start_date); // change start date to required format
          return a;
        })
        setArtifacts(data)
      })
  }

  useEffect(() => {
    fetchArtifactData()
  }, [])

  return (
  <>
    <div className="artifacts-container">
      <div className="app-header">
        Treeconomy - Tamir Shalhevet
        <span className="app-header-name">Project List</span>
      </div>
      {artifacts.length > 0 && (
          <ul className="artifact-list">
            {artifacts.map(artifact => {
              return (
                <div className="artifact">
                  <img src={artifact.image} alt="images" className="image"></img>
                  <div className="texts">
                    <div className="left">
                      <div className="image-name">
                        <span key={artifact.id}>{artifact.name}</span>
                      </div>
                      <div>
                        <ToggleButton baseString="purchase" altString="purchased"></ToggleButton>
                      </div>
                    </div>
                    <div className="right">
                      <div>
                        <span key={artifact.id}>{artifact.available_credits + " credits"}</span>
                      </div>
                      <div>
                        <span key={artifact.id}>{artifact.start_date}</span>
                      </div>
                    </div>
                  </div>                    
                </div>
            )})}
          </ul>
        )}
    </div>
  </>
  );
}

export default App;
