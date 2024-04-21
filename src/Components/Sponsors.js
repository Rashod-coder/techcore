import './Cards.css'; // Import CSS file for media queries



function TextExample() {
  return (
   
          <div className="card mx-auto" style={{ backgroundColor: '#D7E3F4' }}>
            <div className="card-body">
              <h3 className="card-title">Sponsors</h3>
              <p style={{fontSize: '24px'}}className="card-text">Techcore is currently looking for sponsors to help support our cause, if you would like to sponsor us please email us at <a href="mailto:example@example.com">project.techcore@gmail.com</a> to get started. </p>      
      </div>
    </div>
  );
}

export default TextExample;