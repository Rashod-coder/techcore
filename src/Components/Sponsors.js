import './Cards.css'; // Import CSS file for media queries



function TextExample() {
  return (
   
          <div className="card mx-auto" style={{ backgroundColor: '#4D6D97' }}>
            <div className="card-body">
              <h3 className="card-title">Sponsors</h3>
              <p style={{fontSize: '24px', color:'white'}}className="card-text">Techcore is currently looking for sponsors to help support our cause, if you would like to sponsor us please email us at <a href="mailto:project.techcore@gmail.com" style={{ textDecoration: 'underline', color: 'white' }}>project.techcore@gmail.com</a> to get started. </p>      
      </div>
    </div>
  );
}

export default TextExample;