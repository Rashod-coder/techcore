import './Cards.css'; // Import CSS file for media queries

function TextExample() {
  return (
   
          <div className="card mx-auto" style={{ backgroundColor: '#4D6D97' }}>
            <div className="card-body">
              <h3 className="card-title" style={{fontFamily: 'Roboto Slab'}}>How do we operate?</h3>
              <p style={{fontSize: '24px', color:'white', fontFamily: 'Oxygen'}}className="card-text">All funds raised will be used towards purchasing new laptops and donating these to schools in need. All laptops donated to us will be inspected & then donated to schools. </p>      
      </div>
    </div>
  );
}

export default TextExample;