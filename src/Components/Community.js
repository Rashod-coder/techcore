import './Cards.css'; // Import CSS file for media queries



function TextExample() {
  return (
   
          <div className="card mx-auto" style={{ backgroundColor: '#4D6D97' }}>
            <div className="card-body">
              <h3 className="card-title">How can you contribute towards our cause?</h3>
              <p style={{fontSize: '24px', color:'white', fontFamily: 'oxygen'}}className="card-text">Techcore is currently accepting donations (donations are tax deductible when you <a href='https://hcb.hackclub.com/donations/start/techcore' style={{color: 'white'}}>donate</a> through Hack Club ). We are also collecting used/new computers, to donate used devicese please reach out through Instagram or by Email.</p>      
      </div>
    </div>
  );
}

export default TextExample;