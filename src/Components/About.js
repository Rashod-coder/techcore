import './Cards.css'; // Import CSS file for media queries



function TextExample() {
  return (
   
          <div className="card mx-auto" style={{ backgroundColor: '#D7E3F4' }}>
            <div className="card-body">
              <h3 className="card-title">About</h3>
              <p style={{fontSize: '24px'}}className="card-text">Founded by <a href='https://rishitgupta.xyz'>Rishit Gupta</a> a high school student at Amador Valley High School. We believe that every student should have the opportunity to learn and grow with the help of modern technology.
              Thanks to the support of the community we will be able to make this vision come true. </p>     
      </div>
    </div>
  );
}

export default TextExample;