import './Cards.css'; // Import CSS file for media queries



function TextExample() {
  return (
   
          <div className="card mx-auto" style={{ backgroundColor: '#4D6D97' }}>
            <div className="card-body">
            <h3 className="card-title" style={{fontFamily: 'Roboto Flex', color: 'black'}}>Classes we offer <div style={{fontStyle: 'italic'}}><h5>Note that these classes are subject to change depending on signups and teacher availability.</h5></div></h3>
              <p style={{fontSize: '24px', fontFamily: 'oxygen', color: 'white'}}className="card-text"> Python <br/> Various topics in Business<br/> 
               </p>     
      </div>
    </div>
  );
}

export default TextExample;