import './Cards.css'; // Import CSS file for media queries



function TextExample() {
  return (
   
          <div className="card mx-auto" style={{ backgroundColor: '#4D6D97' }}>
            <div className="card-body">
              <h3 className="card-title" style={{fontFamily: 'Roboto Flex'}}>About</h3>
              <p style={{fontSize: '24px', fontFamily: 'oxygen'}}className="card-text">Techcore is founded by highschool students from Bay Area California. We believe that every student should have the opportunity to learn and grow with the help of modern technology.
              Thanks to the support of the community we will be able to make this vision come true. </p>     
      </div>
    </div>
  );
}

export default TextExample;